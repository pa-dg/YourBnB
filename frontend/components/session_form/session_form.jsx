import React, { useState, useEffect, useRef } from 'react';

const SessionForm = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const userInfoRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    userInfoRef.current = userInfo;
  }, [userInfo]);
  
  useEffect(() => {
    return () => {
      clearReceiveErrors();
    };
  }, []);
  
  const { errors, formType, processForm, clearReceiveErrors, closeModal, otherForm, } = props;
  
  const update = field => { 
  return e => setUserInfo({
    ...userInfo, [field]: e.currentTarget.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = Object.assign({}, userInfo);
    processForm(user)
      // .then((response) => {
      //   if (response !== undefined) return closeModal();
      // });
  };

  const renderErrors = () => {
    return (
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`} className="session-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  };
  
  const demoLogin = (e) => {
    e.preventDefault();
    let email = "demouser@yourbnb.com"
    let password = "123456";
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const emailcb = () => {
      const emailTimeout = setTimeout(() => {
        if (email.length > 0) {
          setUserInfo({
            ...userInfo,
            email: userInfoRef.current.email + email[0],
            password: userInfoRef.current.password,
          });
          clearTimeout(emailTimeout);
          email = email.slice(1);
          emailcb();
        } else {
          passwordcb();
        }
      }, 75);
    };

    const passwordcb = () => {
      const passwordTimeout = setTimeout(() => {
        if (password.length > 0) {
          setUserInfo({
            ...userInfo,
            email: userInfoRef.current.email,
            password: userInfoRef.current.password + password[0],
          });
          clearTimeout(passwordTimeout);
          password = password.slice(1);
          passwordcb();
        } else {
          setTimeout(() => {
            processForm(userInfoRef.current).then(() => closeModal());
          }, 500);
        }
      }, 75);
    };
    emailcb();
  };

  return (
    <div className='session-modal-container'>
      <div className="session-form-header">
        <div className="exit-modal" onClick={() => closeModal()}>&times;</div>
        <p>Welcome to yourbnb</p>
      </div>

      <form className="session-form" onSubmit={handleSubmit}>
        <p>{formType}</p>
        <div className="session-errors">{renderErrors()}</div>
          {
            formType === 'Sign Up' && (
              <>
                <label htmlFor="first-name">
                  <input type="text"
                    placeholder="First Name"
                    value={userInfo.firstName}
                    onChange={update('firstName')}
                  />
                </label>
                <label htmlFor="last-name">
                  <input type="text" 
                    placeholder="Last Name"
                    value={userInfo.lastName}
                    onChange={update('lastName')}
                  />
                </label>  
              </>
            )
          }
          <label htmlFor="email">
            <input type="email"
              placeholder="Email"
              value={userInfo.email} 
              onChange={update('email')}
            />
          </label>  
          <label htmlFor="password">
            <input type="password" 
              placeholder="Password"
              value={userInfo.password}
              onChange={update('password')}
            />
          </label>
            <button value={formType} className="session-button">{formType}</button>
            {formType === 'Log In' && (
              <button value="Demo Login" className="demo-login-button" onClick={demoLogin}>Demo Login</button>
            )}
      </form>
      <footer className="session-form-footer">
        {otherForm}
      </footer>
    </div>
  );
}

export default SessionForm;