import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModelShow } from "../../system/systemSlice";

export const CustomModal = ({ title, children }) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.system);

  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(setModelShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
