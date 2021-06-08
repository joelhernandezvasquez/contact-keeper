import React from 'react';
import ReactDom from 'react-dom';
import "./sass/main.scss";


const Modal = ({title,content,actions,onDissmiss}) => {
  
    return ReactDom.createPortal(
        <div className="modal" onClick = {onDissmiss}>
          <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
             <div className="modal-header">{title}</div> 
             <div className="content">{content}</div>
             <div className="actions">{actions}</div>
          </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal;
