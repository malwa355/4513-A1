import {useState} from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from '../images/StackFilms.png';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement(document.getElementById("root"));

const Header = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const logoAddress="../images/logo.jpg";

    function openModal() {
        setModalIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div className="Header flex bg-violet-700 fixed w-screen h-10">
            <div className="h-24"><img className="flex-auto h-24" src = {logo}/></div>
            <button className="flex-end mr-10 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold" onClick={openModal}>About</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="About Modal"
            >
                <h1>About Our App</h1>
                <h3>Authors: Mark Alwast & Sean Jamieson</h3>
            </Modal>
        </div>
    )

}

export default Header;