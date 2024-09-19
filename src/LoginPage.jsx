import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuUserPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmitClicked = () => {
    navigate('/');
  }

  return (
    <div className="login-container">
      <div className="login-data">
        <div className="login-info">
          <h1>Sign Up</h1>
          <div className="signup-links">
            <button>
              <FcGoogle size={30}/>
              Sign Up with Google
            </button>
            <button>
              <FaGithub size={30}/>
              Sign Up with Github
            </button>
          </div>


          <div className="divider-login">
            <div className="divider"></div>
              <p>Or sign up with e-mail</p>
            <div className="divider"></div>
          </div>


          <form action="" onSubmit={onSubmitClicked}>
            <div className="inputs-container">
              <div className="inputs">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email"/>
              </div>
              <div className="inputs">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Password"/>
              </div>
            </div>
            <button type="submit">
              <LuUserPlus size={20}/>
              Sign Up
            </button>
          </form>
        </div>
        <div className="login-img">
          <img src="../login.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
