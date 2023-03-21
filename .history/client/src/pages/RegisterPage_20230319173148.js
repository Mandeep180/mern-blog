import {useState} from "react";

export default function RegisterPage(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <form className="register">
            <h1>Register</h1>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={ev => setUserName(ev.target.value)}/>
            <input type="password" 
            placeholder="password" 
            value={password}
            onChange={ev => setPassword(ev.target.value)}/>
            
            <button>Register</button>
        </form>
    );
}