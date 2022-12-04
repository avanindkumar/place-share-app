import React from "react";

import Modal from "./Modal";
import Button from "../FormElements/Button";

const ErrorModal = (props) => {
  const clickHandler = () => {
    props.onClose();
  };
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={clickHandler}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;