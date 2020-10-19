import React, { useState } from 'react';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} outline color="secondary"><i class="fa fa-sign-in" aria-hidden="true" />Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Employee Login</ModalHeader>
        <ModalBody>
            <p> Please login with your @eastwestmfg.com email address and password.</p>
            <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                <InputGroupText>@eastwestmfg.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
         <br />
            <InputGroup>
                <Input placeholder="password" />
                <InputGroupAddon addonType="append" />
            </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LoginModal;