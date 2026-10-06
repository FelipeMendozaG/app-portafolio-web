import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowLeft, faShieldAlt, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { useLangProject } from '../../app/store-zustand';
import MyFooter from '../../components/MyFooter';

const termsContent = {
    es: {
        eyebrow: 'Legal / Documentación',
        title: 'Términos y Condiciones',
        lastUpdated: 'Última actualización: Octubre 2026',
        backHome: 'Volver al inicio',
        intro: 'Bienvenido al sitio web y portafolio profesional de Felipe Mendoza. Al acceder y navegar en este sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no continúe utilizando el sitio.',
        sections: [
            {
                number: '01',
                title: 'Identificación del Titular',
                content: 'El presente sitio web es propiedad y está administrado por Felipe Mendoza Gutiérrez, desarrollador de software profesional. Este espacio ha sido creado para fines de exhibición técnica, presentación de proyectos y contacto profesional.'
            },
            {
                number: '02',
                title: 'Objeto y Alcance del Sitio',
                content: 'Este sitio web funciona como un portafolio digital destinado a presentar habilidades técnicas, proyectos de desarrollo de software, artículos, demostraciones y canales de contacto directo. Todos los servicios y proyectos descritos reflejan experiencia profesional y soluciones construidas para clientes o iniciativas personales.'
            },
            {
                number: '03',
                title: 'Propiedad Intelectual',
                content: 'Todo el contenido publicado en este sitio web, incluidos textos, gráficos, logotipos, iconos, fragmentos de código, arquitectura de interfaz y diseño visual, son propiedad exclusiva de Felipe Mendoza o se utilizan con las debidas licencias o atribuciones de código abierto. Queda prohibida la reproducción no autorizada de diseños o código sin consentimiento previo por escrito.'
            },
            {
                number: '04',
                title: 'Uso Aceptable del Sitio',
                content: 'El usuario se compromete a hacer un uso lícito y ético de la plataforma. Queda estrictamente prohibido intentar vulnerar la seguridad del sitio web, realizar ataques de denegación de servicio, emplear herramientas de scraping abusivo o utilizar los formularios y enlaces para enviar mensajes no deseados (SPAM) o material lesivo.'
            },
            {
                number: '05',
                title: 'Enlaces a Terceros y Demostraciones Externas',
                content: 'Este portafolio incluye enlaces directos a sitios web de terceros, tales como repositorios de GitHub, perfiles de LinkedIn, plataformas de despliegue en la nube y demostraciones interactivas. Felipe Mendoza no ejerce control sobre las políticas de privacidad, disponibilidad o contenido de dichos sitios externos.'
            },
            {
                number: '06',
                title: 'Limitación de Responsabilidad',
                content: 'El material, demostraciones y códigos presentes en este sitio web se proporcionan "tal cual", sin garantías de ningún tipo, expresas o implícitas. No se asume responsabilidad por interrupciones temporales del servicio, errores técnicos imprevistos o posibles discrepancias en demos alojadas en servicios de hosting gratuitos o de terceros.'
            },
            {
                number: '07',
                title: 'Protección de Datos y Privacidad',
                content: 'La información proporcionada por los usuarios mediante enlaces de correo electrónico o canales de contacto se utilizará de manera confidencial y exclusivamente para fines de comunicación profesional, colaboración técnica o evaluación de propuestas laborales.'
            },
            {
                number: '08',
                title: 'Contacto y Consultas',
                content: 'Para cualquier consulta, propuesta o aclaración respecto a estos términos y condiciones, puede ponerse en contacto directamente a través del correo electrónico:'
            }
        ]
    },
    en: {
        eyebrow: 'Legal / Documentation',
        title: 'Terms and Conditions',
        lastUpdated: 'Last updated: October 2026',
        backHome: 'Back to home',
        intro: 'Welcome to the professional portfolio website of Felipe Mendoza. By accessing and browsing this website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with any part of these terms, please discontinue using this site.',
        sections: [
            {
                number: '01',
                title: 'Owner Identification',
                content: 'This website is owned and operated by Felipe Mendoza Gutiérrez, professional software developer. This space has been created for technical portfolio exhibition, project presentations, and professional contact.'
            },
            {
                number: '02',
                title: 'Purpose and Scope',
                content: 'This website serves as a digital portfolio designed to showcase technical skills, software development projects, case studies, interactive demonstrations, and direct communication channels. Projects reflect professional experience and software built for clients or personal initiatives.'
            },
            {
                number: '03',
                title: 'Intellectual Property',
                content: 'All materials published on this website, including texts, interface graphics, source code snippets, architecture, and layout design, are the exclusive property of Felipe Mendoza or are used under open-source licenses and appropriate attribution. Unauthorized reproduction of designs or code without prior written consent is strictly prohibited.'
            },
            {
                number: '04',
                title: 'Acceptable Use',
                content: 'You agree to use this site lawfully and ethically. You may not attempt to breach security measures, perform denial-of-service attacks, conduct abusive scraping, or utilize contact forms to send unsolicited spam or malicious payloads.'
            },
            {
                number: '05',
                title: 'Third-Party Links & External Demos',
                content: 'This portfolio includes direct links to external websites such as GitHub repositories, LinkedIn profiles, cloud hosting providers, and live project demos. Felipe Mendoza has no control over the privacy policies, uptime, or content of third-party platforms.'
            },
            {
                number: '06',
                title: 'Limitation of Liability',
                content: 'Materials, demos, and code samples are provided on an "as-is" and "as-available" basis without warranties of any kind. No liability is assumed for temporary downtime, technical glitches, or discrepancies in third-party hosted demos.'
            },
            {
                number: '07',
                title: 'Data Privacy & Inquiries',
                content: 'Any information provided through email links or contact channels will be handled confidentially and used solely for professional communication, project inquiries, or recruitment purposes.'
            },
            {
                number: '08',
                title: 'Contact Information',
                content: 'For any questions, proposals, or inquiries regarding these terms and conditions, feel free to reach out directly via email:'
            }
        ]
    }
};

const TerminosYCondiciones = () => {
    const [lang] = useLangProject(state => [state.lang]);
    const current = termsContent[lang] || termsContent.es;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="pt-24 min-h-screen flex flex-col justify-between">
            <main className="section-shell">
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 font-mono text-xs text-cyan hover:text-white transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>{current.backHome}</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faFileContract} className="text-cyan text-lg" />
                        <p className="eyebrow">{current.eyebrow}</p>
                    </div>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {current.title}
                    </h1>
                    <div className="mt-3 flex items-center gap-2 font-mono text-xs text-slate-400">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-cyan" />
                        <span>{current.lastUpdated}</span>
                    </div>
                    <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                        {current.intro}
                    </p>
                </motion.div>

                <div className="grid gap-6 md:gap-8">
                    {current.sections.map((section, index) => (
                        <motion.article
                            key={section.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="glass rounded-xl p-6 sm:p-8 relative overflow-hidden"
                        >
                            <div className="flex items-baseline gap-4 mb-3">
                                <span className="font-mono text-cyan text-sm sm:text-base font-semibold">
                                    {section.number}.
                                </span>
                                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base pl-7">
                                {section.content}
                            </p>
                            {section.number === '08' && (
                                <div className="mt-4 pl-7">
                                    <a
                                        href="mailto:felipe188.mendoza@gmail.com"
                                        className="inline-flex items-center gap-2 font-mono text-sm text-cyan hover:underline"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span>felipe188.mendoza@gmail.com</span>
                                    </a>
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-cyan transition-all hover:bg-cyan hover:text-ink"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span>{current.backHome}</span>
                    </Link>
                </div>
            </main>

            <MyFooter />
        </div>
    );
};

export default TerminosYCondiciones;
