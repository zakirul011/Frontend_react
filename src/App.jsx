import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ButtonBar from "./component/ButtonBar";
import AboutContent from "./component/AboutContent";
import LoginForm from "./component/LoginForm";
import Profile from "./component/Profile";
import Modal from "./component/Modal";
import appContext from "./context/appContext";
import { useState } from "react";
function App() {
  const [logged, setlogged] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <appContext.Provider
        value={{
          logged,
          setlogged,
          showForm,
          setShowForm,
          showProfile,
          setShowProfile,
        }}
      >
        <div className="container py-5">
          <ButtonBar />

          {showForm && <LoginForm />}
          {!showForm && !showProfile && <AboutContent />}

          {showProfile && logged && !showForm && <Profile />}

          <Modal />
        </div>
      </appContext.Provider>
    </>
  );
}

export default App;
