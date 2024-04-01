import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import contactinfo from '../data/contactinfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangProject } from '../app/store-zustand';
import pdfcv from '../assets/cv/CV-FELIPE-MENDOZA-2024.pdf'
import React from 'react';

const ContactInfo = () => {
    const [
        lang
    ] = useLangProject(state => [
        state.lang
    ]);
    const { title, description } = contactinfo[lang];
    const handleEmailClick = () => {
        window.location.href = 'mailto:felipe188.mendoza@gmail.com';
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/felipe-mendoza-gutierrez-10a86b1bb/', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/FelipeMendozaG', '_blank');
    };

    const handleDownloadCV = () => {
        // Agrega la URL de descarga de tu CV
        window.open(pdfcv, '_blank');
    };

    return (
        <div id='contactame' className="bg-gray-100 py-8 my-7">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-lg font-bold mb-4">{title}</p>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="cursor-pointer bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" onClick={handleEmailClick} />
                        </div>
                        <div className="cursor-pointer bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" onClick={handleLinkedInClick} />
                        </div>
                        <div className="cursor-pointer bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
                            <FontAwesomeIcon icon={faGithub} size="2x" onClick={handleGithubClick} />
                        </div>
                        <div className="cursor-pointer bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300">
                            <FontAwesomeIcon icon={faFilePdf} size="2x" onClick={handleDownloadCV} />
                        </div>
                    </div>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
