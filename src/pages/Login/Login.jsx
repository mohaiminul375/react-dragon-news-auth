// import { Form } from "react-router-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log( 'location from login',location)
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email,password)
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form
        onSubmit={handleLogin}
        className="w-full md:w-3/4 lg:w-1/2 mx-auto border"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Don't have an account{" "}
        <Link className="underline text-blue-600" to="/register">
          Please register
        </Link>
      </p>
    </div>
  );
};

export default Login;
