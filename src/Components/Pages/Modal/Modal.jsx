import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    {/* Modal */}
                    <div className="bg-white p-8 rounded shadow-md">
                        {children}
                        {/* Buttons */}
                        <div className="mt-4 flex justify-end">
                            <button
                                className="px-4 py-2 mr-2 bg-green-500 text-white rounded hover:bg-green-600"
                                onClick={onConfirm}
                            >
                                Confirm
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal