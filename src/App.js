
import { useState } from 'react';
import Modal from "react-modal"
import './App.css';

Modal.setAppElement("#root")

function App() {

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return <div className='Container'>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen} // verifica de o state esta visivel ou n
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2>Hello - I am a modal!</h2>
      <hr/>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button onClick={closeModal}>Close</button>

    </Modal>
  </div>
}

export default App;
