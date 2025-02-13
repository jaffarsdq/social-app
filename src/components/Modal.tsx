import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-6 rounded shadow-lg w-96'>
                {children}
                <button
                    className='mt-4 bg-red-500 text-white px-3 py-1 rounded'
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
