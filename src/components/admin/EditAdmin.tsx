import { Modal, Button } from "react-bootstrap";

interface Admin{
    adminId:string;
    adminName:string;
    email:string;
    phone:string;
}

interface AdminEditProps{
    show:boolean;
    selectedRow:Admin|null
    handleClose:()=>void;
    handleEdit:boolean;
}
function EditAdmin({show,selectedRow,handleClose,handleEdit}:AdminEditProps){
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}
export default EditAdmin