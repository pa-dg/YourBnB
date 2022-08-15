import React from "react";
import { Link } from 'react-router-dom';

// const Greeting = ({ currentUser, logout }) => {

//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       <Link to='/signup'>SignUp</Link>
//     </nav>
//   );

//   const personalGreeting = () => {
//     <hgroup className="header-group">
//       <h2 className="header-name">Welcome, {currentUser.first_name}!</h2>
//       <button className="header-button" onClick={logout}></button>
//     </hgroup>
//   };
  
//   return currentUser ? personalGreeting() : sessionLinks();
// }

class Greeting extends React.Component {
    render() {
        const {currentUser, logout } = this.props;

        if (currentUser) {
            return <div className="user-auth">
                <p>Hello, {`${currentUser.first_name}`}</p>
                <button onClick={() => {
                    history.push(`/trips`)
                }}>Trips</button>
                <button onClick={logout}>Log out</button>
                
            </div>
        } else {
            return <nav className="user-auth">
                <Link to="/login">Login</Link>
                &nbsp;<br />&nbsp;
                <Link to='/signup'>SignUp</Link>
            </nav>
        }
    }
};


export default Greeting;