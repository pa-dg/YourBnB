import React, { useState } from 'react';

const SessionForm = props => {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

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
          <li key={`error-${i}`} className="auth-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  };
  
  const demoLogin = (e) => {
    e.preventDefault();
    props.login({
      email: 'demouser@gmail.com',
      password: '123456',
    }).then(props.closeModal)
  };

  // let modalFormButtonText = props.formType === 'signUp' ? 'Sign Up' : 'Log In';

  return (
    <div className="session-form-modal">
      <div className="session-form-header">
        <div className="exit-modal" onClick={closeModal}>&times;</div>
        <h1>Welcome to YourBnB</h1>
        <h2>Log in or sign up</h2>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="login-signup-form">
          {renderErrors()}
          {
            props.formType === 'signup' && (
              <>
                <label htmlFor="modal-fname">First Name:
                  <input type="text" 
                    placeholder="First Name"
                    value={userInfo.first_name}
                    onChange={update('first_name')}
                  />
                </label>
                <br />
                <label htmlFor="modal-lname">Last Name:
                  <input type="text" 
                    placeholder="Last Name"
                    value={userInfo.last_name}
                    onChange={update('first_name')}
                  />
                </label>  
                <br />
              </>
            )
          }
          <label htmlFor="modal-email">Email:
            <input type="email"
              placeholder="Email"
              value={userInfo.email} 
              onChange={update('email')}
            />
          </label>  
          <br />
          <label htmlFor="modal-password">Password:
            <input type="password" 
              placeholder="Password"
              value={userInfo.password}
              onChange={update('password')}
            />
          </label>
          <br />
            <input type="submit" 
                value={props.formType}
            />
            <button className="demo-login-button" onClick={demoLogin}>Demo User</button>
        </div>
      </form>
      <br />
      <footer className="session-form-footer">
        {props.otherForm}
      </footer>
    </div>
  );

}

export default SessionForm;