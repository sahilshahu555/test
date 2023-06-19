import React, {useState, useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login=()=> {

const [loginObject, setLoginObject] = useState({});
const navigate = useNavigate();
const {loginUser} = useContext(AuthContext);

const handleChange = (e) => {
  setLoginObject((pre) => ({...pre, [e.target.name]: e.target.value}));
}

const handleSubmit = async (e) => {
e.preventDefault();
try{
await loginUser(loginObject);
navigate("/dashboard");
}catch(err){
console.log(err);
}
};
  
  return (
    <div>
      <form data-cy="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link-div">
      <Link to={"/"}>Go Back</Link>
      </div>
    </div>
  );
}

