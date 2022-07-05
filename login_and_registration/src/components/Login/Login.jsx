import React from "react";
import "./Login.css";

export const Login = () => {
   return (
    <>
        <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign in</h2>
          <form >
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

            <div className="space">
              <button type="submit">Login</button>
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
