import React, { useState, useEffect } from 'react';

const SessionForm = props => {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    // window.alert('my dependency array changed');
    // console.log('userInfo', userInfo);
    return () => {
      props.clearReceiveErrors();
    };
  }, []);

  const update = field => { 
  return e => setUserInfo({
    ...userInfo, [field]: e.currentTarget.value 
    });
  };

  const closeModal = (e) => {
    e.preventDefault();
    props.closeModal();
  };  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, userInfo);
    props.processForm(user);
  };

  const renderErrors = () => {
    return (
      <ul>
        {props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  };
  
  const demoLogin = (e) => {
    e.preventDefault();
    props.login({
      email: 'demouser@yourbnb.com',
      password: '123456',
    }).then(props.closeModal)
  };

  // let modalFormButtonText = props.formType === 'signUp' ? 'Sign Up' : 'Log In';
  const { formType, otherForm } = props;

  return (
    <>
      <div className="session-form-header">
        <div className="exit-modal" onClick={closeModal}>&times;</div>
        <h1>{formType}</h1>
        <div></div>
      </div>

      <form onSubmit={handleSubmit} className="login-signup-form">
        <h3>Welcome to YourBnB</h3>
        <div className="session-errors">{renderErrors()}</div>
          {
            props.formType === 'Sign Up' && (
              <>
                <label htmlFor="modal-fname">
                  <input type="text"
                    placeholder="First Name"
                    value={userInfo.firstName}
                    onChange={update('firstName')}
                  />
                </label>
                <label htmlFor="modal-lname">
                  <input type="text" 
                    placeholder="Last Name"
                    value={userInfo.lastName}
                    onChange={update('lastName')}
                  />
                </label>  
              </>
            )
          }
          <label htmlFor="modal-email">
            <input type="email"
              placeholder="Email"
              value={userInfo.email} 
              onChange={update('email')}
            />
          </label>  
          <label htmlFor="modal-password">
            <input type="password" 
              placeholder="Password"
              value={userInfo.password}
              onChange={update('password')}
            />
          </label>
            <button value={formType} className="session-button">{formType}</button>
            <button value="Demo Login" className="demo-login-button" onClick={demoLogin}>Demo Login</button>
      </form>
      <footer className="session-form-footer">
        {otherForm}
      </footer>
    </>
  );

}

export default SessionForm;