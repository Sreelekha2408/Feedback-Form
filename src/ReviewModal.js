import { Modal, ModalBody, ModalFooter } from "react-bootstrap"
import ModalHeader from "react-bootstrap/esm/ModalHeader"

export const ReviewModal = ({ show, data, close }) => {
    return (
        <Modal size="md" show={show}>
            <ModalHeader>
                <b>Review Details</b>
            </ModalHeader>
            <ModalBody>
                <table className='table table-bordered' id="infoTable">
                    <tr>
                        <td><b>Customer Name</b></td>
                        <td>{data?.customerName}</td>
                    </tr>
                    <tr>
                        <td><b>Email</b></td>
                        <td>{data?.email}</td>
                    </tr>
                    <tr>
                        <td><b>Phone Number</b></td>
                        <td>+{data?.mobileNo}</td>
                    </tr>
                    <tr>
                        <td><b>Service Quality</b></td>
                        <td>{data?.serviceQuality}</td>
                    </tr>
                    <tr>
                        <td><b>Beverage Quality</b></td>
                        <td>{data?.beverageQuality}</td>
                    </tr>
                    <tr>
                        <td><b>Cleanliness</b></td>
                        <td>{data?.clean}</td>
                    </tr>
                    <tr>
                        <td><b>Overall Experience</b></td>
                        <td>{data?.overallExperience}</td>
                    </tr>
                </table>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-primary" onClick={() => close()}>Close</button>
            </ModalFooter>
        </Modal>
    )
}