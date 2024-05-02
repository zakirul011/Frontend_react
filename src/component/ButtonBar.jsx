import { useContext } from "react";
import appContext from "../context/appContext";

const ButtonBar = () => {
  const { logged, setlogged, setShowForm, setShowProfile } =
    useContext(appContext);
  return (
    <div className="btn-toolbar">
      <button
        onClick={() => {
          setShowForm(false);
          setShowProfile(false);
        }}
        className="btn btn-outline-secondary fw-medium me-2"
      >
        About Us
      </button>
      {!logged ? (
        <button
          onClick={() => {
            setShowForm(true);
          }}
          className="btn btn-outline-secondary fw-medium me-2"
        >
          Sign in
        </button>
      ) : (
        <>
          <button
            onClick={() => setShowProfile(true)}
            className="btn btn-outline-secondary fw-medium me-2"
          >
            Profile
          </button>
          <button
            onClick={() => {
              setlogged(false);
              setShowProfile(false);
            }}
            className="btn btn-outline-secondary fw-medium me-2"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonBar;
