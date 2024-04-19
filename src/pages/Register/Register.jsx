import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const PhotoUrl = form.get('PhotoUrl')
    const email = form.get('email')
    const password = form.get('password')
    // console.log(form.get("email"));
    console.log(name,PhotoUrl,email,password)
    createUser(email,password)
    .then((result)=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error)
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form
        onSubmit={handleRegister}
        className="w-full md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            name="PhotoUrl"
            className="input input-bordered"
            required
          />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account{" "}
        <Link className="underline text-blue-600" to="/login">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
