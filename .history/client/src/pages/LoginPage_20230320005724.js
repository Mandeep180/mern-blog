import {useState} from "react";

export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            //save cookie in react app, any cookie will be considered as credentials and will be included in browser and next request
            credentials:'include',
        });

        if(response.ok){
            setRedirect(true);

        }
        if(redirect){
            return <Navigate to={''}/>
         }else{
             alert('wrong credentials');
         }
    }
    
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
        </form>
    );
}