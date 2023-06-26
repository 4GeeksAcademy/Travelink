import React, { useState } from 'react';
import "../../styles/alertModal.css";

function AlertModal({ message }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={`alert-modal ${isOpen ? 'open' : ''}`}>
            <div className="alert-modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <p className="message">{message}</p>
            </div>
        </div>
    );
}

export default AlertModal;