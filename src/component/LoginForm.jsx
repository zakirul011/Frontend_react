import { useContext } from "react";
import appContext from "../context/appContext";

const LoginForm = () => {
  const { setlogged, setShowProfile, setShowForm } = useContext(appContext);
  return (
    <div className="login mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-medium">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Email"
          />
          <div className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-medium"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setlogged(true);
            setShowProfile(true);
            setShowForm(false);
          }}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
