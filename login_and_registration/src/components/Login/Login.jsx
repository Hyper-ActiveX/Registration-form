import React,{useState} from "react";
import "./Login.css";
import axios from "axios"

export const Login = () => {

  const[user,setUser] = useState({
    
    email:"",
    password:""
    
  })

  const handelchange = e =>{
    
      const {name , value} = e.target
      setUser({
        ...user,
        [name]:value
      })
  }

  const login = ()=>{
    axios.post("http://localhost:5001/login",user)
    .then(res => console.log(res))
  }

   return (
    <>
        <div className="flex-container">
        {console.log("ax",user)}
        <div className="left">
          <h2 className="center">Sign in</h2>
          <form >
            <div className="field space">
              <span className="fas fa-envelope"></span>
              <input
                type="text"
                required
                placeholder="Email"
                name="email" value={user.email}
                onChange={handelchange}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
              />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                required
                placeholder="password"
                name="password" value={user.password}
                onChange={handelchange}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>

            <div className="space">
              <button type="submit" onClick={login}>Login</button>
            </div>
            <div className="signup space">
              haven't account? 
            </div>
          </form>
        </div>

        <div className="right">
          {/* <img src={Signimg} className="image" alt="" /> */}
        </div>
      </div>
    </>
   );
};
