import React from "react";
import "./Register.css";

export const Register = () => {
   return (
    <>
        <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign up</h2>
          <form >
            <div className="field space">
              <span className="fas fa-user"></span>
              <input
                type="text"
                required
                placeholder="Name"
              />
            </div>
            <div className="field space">
              <span className="fas fa-envelope"></span>
              <input
                type="text"
                required
                placeholder="Email"
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
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                required
                placeholder="confirm password"
                // onChange={(e) => {
                //   setcpassword(e.target.value);
                // }}
              />
            </div>
            <div className="space">
              <button type="submit">Register</button>
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