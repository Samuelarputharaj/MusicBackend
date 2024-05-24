import { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import './Login.css'
import './Welcomepage.css'
import './SignUpPage.css'
function LognInPage({ setPageTab, setUserId }) {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  function handleSubmit() {
    if (username !== '' && password !== '') {
    }
  }
    return(
<>
<div className="container">
        <div className="login-popup">
          <div className="login-inner">
            <form action="" method="post">
              <h2 style={{ textShadow: "5px 5px 3px rgb(51, 44, 44)" }}>LOGIN</h2>
              <h5>To create your profile</h5>
              <div className="user">
                <div className="email-wrap">
                  <input id="btn" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                  <br />
                </div>
                <div className="passwd-wrap">
                  <input id="btn" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <br />
                </div>
              </div>
              <div className="passwd">Forgot Password</div>
              <br />
              <input id="sub" type="submit" onClick={handleSubmit}/>
              <br />
              <div className="split-line">
                <hr style={{ margin: 30 }} />
              </div>
              <div className="social-login-wrapper">
                <span className="social-media">Login With</span>
              </div>
              <span className="signup">Don't have an account? <button onClick={() => setPageTab('sign-up')}> Sign Up</button></span>
            </form>
          </div>
        </div>
      </div>
    </>
    );
}

function SignUpPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit() {
        if (password === confirmPassword) {
            // allow only if password and confirmPassword is same.
            // then perform back-end operation and get userId.
            // 🔖 API CONNECTION CODE
            // ---------------------------------------------------------------------
            // 🏷️ START 
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3434/user/sign-up", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        setUserId(result.data._id);
                        setPageTab("todo");
                    } else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));
            // ---------------------------------------------------------------------
            // 🏷️ END 
        }
    }
    return (
      <>
      <div className="container">
  <div className="login-popup">
    <div className="login-inner">
      <form action="" method="post">
        <h2 style={{ textShadow: "5px 5px 3px rgb(51, 44, 44)" }}>SIGNUP</h2>
        <h4>To create your profile</h4>
        <div className="user">
          <div className="email-wrap">
            <input id="btn" type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
          </div>
          <div className="passwd-wrap">
            <input id="btn" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
          </div>
        </div>
        <div className="passwd-wrap">
          <input id="btn" type="password" placeholder="Confirm Password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <br />
        </div>
        <button className="submit" >submit</button>
        <br />
        <div className="split-line">
          <hr style={{ margin: 30 }} />
        </div>
        <div className="social-login-wrapper">
          <span className="social-media">SignUp With</span>
        </div>
        <span className="signup">Already have an account? <button onClick={() => setPageTab('sign-in')}> Log in </button></span>
      </form>
    </div>
  </div>
</div>
</>
    );
}

function WelcomePage({ setPageTab }) {
    return (
      <>
      <div className="container">
      <div className="header">
        <div className="icon">
          <i className="fa-brands fa-spotify fa-5x" />
        </div>
      </div>
      <div className="section">
        Millions of songs. <br />
        Free on Meow.
      </div>
      <div className="details">
          <button className="sign-up"  onClick={() => setPageTab("sign-in")}>Sign up for free</button>
        <div className="ph-no">
          <div className="ph-i">
            <img src="phone.svg" alt="no img" height="50px" width="50px" />
          </div>
          Continue with phone number
        </div>
        <div className="google">
          <div className="go-i">
            <img
              src="./Google__G__logo.svg.png"
              alt="no img"
              height="  30px"
              width="30px"
            />
          </div>
          Continue with Google
        </div>
        <div className="fb">
          <div className="fb-i">
            <img
              src="free-facebook-logo-icon-2428-thumb.png"
              alt="no img"
              height="  30px"
              width="30px"
            />
          </div>
          Continue with Facebook
        </div>
        <div className="login" onClick={() => setPageTab("sign-in")}>Log in</div>
      </div>
    </div>
  </>
    );
}

function MainComp() {
    const [pageTab, setPageTab] = useState("");
    const [userId, setUserId] = useState("");

    switch (pageTab) {
        case "sign-in":
            return <LognInPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "sign-up":
            return <SignUpPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "Home":
            return <HomePage setPageTab={setPageTab} userId={userId} />;
        default:
            return <WelcomePage setPageTab={setPageTab} />;
    }
}

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <MainComp />
            </div>
        </div>
    );
}

export default App;