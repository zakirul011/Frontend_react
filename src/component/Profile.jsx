const Profile = () => {
  return (
    <div className="profile mt-5">
      <div className="row align-items-center">
        <div className="col-2">
          <img
            width="100px"
            height="100px"
            src="https://i.natgeofe.com/k/50fe4ce2-3d74-4da8-984d-887b7fb75005/GreatHornedOwl1_square.jpg"
            className=" rounded-circle "
          />
        </div>
        <div className="col-8 ">
          <h2>Welcome Allex</h2>
          <button
            className="btn btn-primary fw-medium me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Update
          </button>
        </div>
      </div>
      <p className="fw-medium mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        iusto!
      </p>
    </div>
  );
};

export default Profile;
