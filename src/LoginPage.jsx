import { useState } from 'react';
import './Login.css'
function LoginPage(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

    return(
<>
<div className="container">
        <div className="login-popup">
          <div className="login-inner">
            <form action="" method="post">
              <h2 style={{ textShadow: "5px 5px 3px rgb(51, 44, 44)" }}>LOGIN</h2>
              <h4>To create your profile</h4>
              <div className="user">
                <div className="email-wrap">
                  <input id="btn" type="email" placeholder="Email id/phone no" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <br />
                </div>
                <div className="passwd-wrap">
                  <input id="btn" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <br />
                </div>
              </div>
              <div className="passwd">Forgot Password</div>
              <br />
              <input id="sub" type="submit" onClick={handleSubmit} />
              <br />
              <div className="split-line">
                <hr style={{ margin: 30 }} />
              </div>
              <div className="social-login-wrapper">
                <span className="social-media">Login With</span>
              </div>
              <span className="signup">Don't have an account? Sign Up</span>
            </form>
          </div>
        </div>
      </div>
    </>
    );
}
export default LoginPage;