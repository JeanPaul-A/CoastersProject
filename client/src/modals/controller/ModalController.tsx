import { useContext, useEffect, useState } from "react";
import UpdateCoaster from "../updateCoaster/UpdateCoaster";
import "./ModalController.css";
import { ModalContext } from "../../context/ModalContext";

const ModalController = () => {

    const { toggleUpdate, updateModal, toggleDelete, deleteModal } = useContext(ModalContext);

    return (
        <div id="ModalController" className={updateModal || deleteModal ? "activeModal" : "inactiveModal"}>
            {updateModal && <UpdateCoaster toggleIconClose={() => toggleUpdate(false)} />}
            {deleteModal}
        </div>
    );
};

export default ModalController;