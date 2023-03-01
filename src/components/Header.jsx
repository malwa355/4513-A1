import {useState} from "react";
import {Link} from "react-router-dom";
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
      backgroundColor: '#0f172a',
      width: '1000px',
      height:'500px'
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
        <div className="flex justify-between bg-black fixed w-screen h-20">
            <Link to="/" className="h-24"><img className=" h-24" src = {logo}/></Link>
            <div className="font-header font-bold text-3xl mt-5">FILMSTACK</div>
            <div></div><div></div><div></div>
            <button className="w-20 h-10 mt-5 mr-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold" onClick={openModal}>About</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="About Modal"
            >
                <div className="flex flex-col justify-center">
                    <h1>About Our App</h1>
                    <h3>Authors: Mark Alwast & Sean Jamieson</h3>
                    <h3>https://v1.tailwindcss.com/components/forms: Input CSS</h3>
                    <h3>https://flowbite.com/docs/forms/range/: Range CSS</h3>
                    <h3>https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp: Scrollbar CSS</h3>
                </div>
            </Modal>
        </div>
    )

}

export default Header;