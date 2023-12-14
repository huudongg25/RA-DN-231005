import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
type Props = {};

const ModalComponent = (props: Props) => {
  return (
    <div>
      <div
        className="modal show"
        style={{
          display: "flex",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <Modal.Dialog style={{ width: 500 }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default ModalComponent;
