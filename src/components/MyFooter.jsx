import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function MyFooter() {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm">
                        {/* <FontAwesomeIcon icon={faPhone} className="mr-2" /> */}
                        Desarrollado por Felipe Mendoza
                    </p>
                    <p className="text-sm">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Correo: felipe188.mendoza@gmail.com
                    </p>
                    {/* Puedes agregar más líneas para otros datos */}
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
