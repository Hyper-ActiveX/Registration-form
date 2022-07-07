import React,{ useState }  from "react";
import "./Register.css";
import axios from "axios"

export const Register = () => {

  const[user,setUser] = useState({
    name: "",
    email:"",
    password:"",
    rePassword:""
  })

  const handelchange = e =>{
    
      const {name , value} = e.target
      setUser({
        ...user,
        [name]:value
      })
  }

  const registered = () =>{
    const {name, email, password, rePassword} = user

    if(name && email && password && (password === rePassword)){
      
      axios.post("http://localhost:5001/register",user)
      .then(res => console.log(res))
    }else{
      alert("stupid there is err")
    }
    
  }

   return (
    <>
    {console.log("User",user)}
        <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign up</h2>
          <form >
            <div className="field space">
              <span className="fas fa-user"></span>
              <input
                type="text"
                name="name" value={user.name}
                required
                placeholder="Name" onChange={handelchange}

              />
            </div>
            <div className="field space">
              <span className="fas fa-envelope"></span>
              <input
                type="text"
                name="email" value={user.email}
                required
                placeholder="Email" onChange={handelchange}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
              />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                name="password" value={user.password}
                required
                placeholder="password" onChange={handelchange}

                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                name="rePassword" value={user.rePassword}
                required
                placeholder="confirm password" onChange={handelchange}

                // onChange={(e) => {
                //   setcpassword(e.target.value);
                // }}
              />
            </div>
            <div className="space">
              <button type="submit" onClick={registered}>Register</button>
            </div>
            {/* <!-- who don't have accout they sign up --> */}
            <div className="signup space">
              Do you have account?
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
