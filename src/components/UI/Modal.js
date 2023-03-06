import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";

const BackDrop = (props)=>{
    return <div className={Classes.backdrop} onClick = {props.onCloseCart}></div>
}

const ModalOverlays = (props)=>{
    return <div className={Classes.modal}>
        <div className={Classes.content}>{props.children}</div>
    </div>
}

const Modal = (props)=>{

    const elementRender = document.getElementById("overlays");

    return (<>
        {ReactDOM.createPortal(<BackDrop onCloseCart = {props.onCloseCart} />, elementRender)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,elementRender)}
    </>)
}

export default Modal;