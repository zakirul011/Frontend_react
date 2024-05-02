const Modal = () => {
  return (
    <div
      className="modal fade mt-5"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1>Requesting The Quote</h1>
            <p className="mb-0">step 1: Requesting author... Completed</p>
            <p className="mb-0">step 2: Requesting quote</p>
          </div>
          <div className="modal-footer flex-start">
            <button
              type="button mt-5"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
