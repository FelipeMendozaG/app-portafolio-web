import AppValidDocument from '../assets/validator_documento_electronicos.png'
import aplicationwindow from '../assets/aplicacion.png';
import aplicationdocument from '../assets/documentosvalidados.png'

import aplicationMovil2 from '../assets/aplicacion2.png'
import aplicationMovil3 from '../assets/aplicacion3.png'
import aplicationMovil4 from '../assets/aplicacion4.png'
import aplicationMovil5 from '../assets/aplicacion5.png'
import aplicationMovil6 from '../assets/aplicacion6.png'

import aplicationdniruc from '../assets/APLICACIONRUCDNI1.png'
import aplicationdniruc1 from '../assets/APLICACIONRUCDNI2.png'

import ExportarPle from '../assets/exportarple.png'
import { faJsSquare, faNodeJs, faCss3, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
export default {
    "es": [
        {
            "title": "Validador de documentos electronicos",
            "description": "Se desarrolle una aplicacion en electron.js para validar documentos electronicos. Realizo una conexion a un api de SUNAT",
            "descriptionModal": "Desarrollé una aplicación utilizando Electron.js para validar documentos electrónicos, además de generar libros electrónicos compatibles con SUNAT. Esta aplicación se conecta de manera efectiva a la API de SUNAT para garantizar la autenticidad y validez de los documentos emitidos. Mi contribución abarca desde la concepción y el diseño de la aplicación hasta su implementación y pruebas, asegurando su funcionamiento óptimo y su capacidad para cumplir con los estándares exigidos por SUNAT.",
            "skills": [
                /* "html","react.js","electron.js","node js", "express" */
            ],
            "github": "https://github.com/FelipeMendozaG/validate-document",
            "video_url": "",
            "image": aplicationwindow,
            "galery": [
                aplicationwindow, AppValidDocument, aplicationdocument, ExportarPle
            ],
            "icons": [
                faJsSquare, faNodeJs, faCss3, faReact
            ]
        },
        {
            "title": "App para ver partidos de futbol",
            "description": "Desarrolle una aplicacion movil para ver partidos de futbol. Consumo un api realizado en nest js.",
            "descriptionModal": "He desarrollado una aplicación móvil personalizada para seguir los partidos de la UEFA Champions League. Esta aplicación, construida con React Native, se conecta a una API en Nest.js respaldada por MongoDB. Implementé un proceso de scraping para obtener la información de los partidos de fútbol. La aplicación proporciona una experiencia fluida y receptiva, ofreciendo información actualizada sobre partidos, equipos y resultados en tiempo real.",
            "skills": [
                /* "js","react native" */
            ],
            "github": "https://github.com/FelipeMendozaG/app-football-library",
            "video_url": "",
            "image": aplicationMovil3,
            "galery": [
                aplicationMovil2, aplicationMovil3, aplicationMovil4, aplicationMovil5, aplicationMovil6
            ],
            "icons": [
                faNodeJs, faReact, faJs
            ]
        },
        {
            "title": "API obtener RUC & DNI",
            "description": "Api para servir informacion de ruc o dni",
            "descriptionModal": "He desarrollado una aplicación utilizando Node.js y Express que ofrece servicios de validación de documentos de identidad, como DNI y RUC, para individuos y empresas registradas en el Perú. Esta aplicación proporciona una interfaz robusta y segura para verificar la autenticidad y validez de los documentos, permitiendo a los usuarios acceder rápidamente a información precisa y actualizada sobre personas y entidades comerciales. Con un enfoque en la eficiencia y la precisión de los datos, esta solución es ideal para integrarse en sistemas de gestión de clientes, plataformas de verificación de identidad y otros servicios relacionados con la identificación y validación de usuarios.",
            "skills": [
                /* "express","node.js" */
            ],
            "github": "",
            "video_url": "",
            "image": aplicationdniruc,
            "galery": [
                aplicationdniruc1, aplicationdniruc
            ],
            "icons": [
                faNodeJs, faJs
            ]
        }
    ],
    "en": [
        {
            "title": "Electronic documents validator",
            "description": "Developed an application in Electron.js to validate electronic documents. Established a connection to a SUNAT API.",
            "descriptionModal": "I developed an application using Electron.js to validate electronic documents, as well as to generate electronic books compatible with SUNAT. This application effectively connects to the SUNAT API to ensure the authenticity and validity of the issued documents. My contribution spans from the conception and design of the application to its implementation and testing, ensuring its optimal performance and its ability to comply with SUNAT's standards.",
            "skills": [
            ],
            "github": "https://github.com/FelipeMendozaG/validate-document",
            "video_url": "",
            "image": aplicationwindow,
            "galery": [
                aplicationwindow, AppValidDocument, aplicationdocument, ExportarPle
            ],
            "icons": [
                faJsSquare, faNodeJs, faCss3, faReact
            ]
        },
        {
            "title": "Football match viewer app",
            "description": "Developed a mobile application to watch football matches. Consumes an API created in Nest.js.",
            "descriptionModal": "I have developed a personalized mobile application to follow UEFA Champions League matches. This application, built with React Native, connects to an API in Nest.js backed by MongoDB. I implemented a scraping process to obtain football match information. The application provides a smooth and responsive experience, offering updated information on matches, teams, and results in real time.",
            "skills": [
            ],
            "github": "https://github.com/FelipeMendozaG/app-football-library",
            "video_url": "",
            "image": aplicationMovil3,
            "galery": [
                aplicationMovil2, aplicationMovil3, aplicationMovil4, aplicationMovil5, aplicationMovil6
            ],
            "icons": [
                faNodeJs, faReact, faJs
            ]
        },
        {
            "title": "API to obtain RUC & DNI",
            "description": "API to serve RUC or DNI information",
            "descriptionModal": "I have developed an application using Node.js and Express that offers validation services for identity documents such as DNI and RUC for individuals and companies registered in Peru. This application provides a robust and secure interface to verify the authenticity and validity of documents, allowing users to quickly access accurate and up-to-date information about individuals and commercial entities. With a focus on efficiency and data accuracy, this solution is ideal for integration into customer management systems, identity verification platforms, and other services related to user identification and validation.",
            "skills": [
            ],
            "github": "",
            "video_url": "",
            "image": aplicationdniruc,
            "galery": [
                aplicationdniruc1, aplicationdniruc
            ],
            "icons": [
                faNodeJs, faJs
            ]
        }
    ]
}