// import React, {Component} from  'react';

// class ClassCounter extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }
//     incrementCount=()=>{
//         this.setState({
//             count:this.state.count + 1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.incrementCount}>count{this.state.count}</button>

//             </div>
//         )
//     }
// }

// export default ClassCounter;
 
import React, { useState } from 'react';
 
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
 
export default Login;