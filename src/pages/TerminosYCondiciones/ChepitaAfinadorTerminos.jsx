import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faMicrophone,
    faWaveSquare,
    faShieldHalved,
    faMusic,
    faCopyright,
    faTriangleExclamation,
    faEnvelope,
    faCheck,
    faLock,
    faSliders
} from '@fortawesome/free-solid-svg-icons';

/**
 * ChepitaAfinadorTerminos
 * Pantalla de Términos y Condiciones de Uso para "Chepita Afinador" (Chepita Apps © 2025).
 * Estética: "Dark Acústica" (Fondo carbón profundo, acentos en verde esmeralda neón #00E676, ámbar y rojo coral).
 * 
 * @param {Function} onAccept - Callback invocado al aceptar los términos.
 * @param {Function} onBack - Callback o función de navegación para volver/cerrar.
 * @param {boolean} isModal - Renderizado como modal flotante o como pantalla completa.
 */
const ChepitaAfinadorTerminos = ({ onAccept, onBack, isModal = false }) => {
    const [accepted, setAccepted] = useState(false);
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const [showConfirmToast, setShowConfirmToast] = useState(false);

    // Detección de scroll para asegurar lectura completa en dispositivos móviles/desktop
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 40) {
            setHasScrolledToBottom(true);
        }
    };

    const handleConfirm = () => {
        if (!accepted) return;
        setShowConfirmToast(true);
        setTimeout(() => {
            if (onAccept) onAccept();
        }, 800);
    };

    return (
        <div className={`relative w-full ${isModal ? 'max-w-4xl mx-auto rounded-3xl shadow-2xl border border-[#1E293B]' : 'min-h-screen'} bg-[#070A0F] text-slate-200 font-sans selection:bg-[#00E676]/30 selection:text-white flex flex-col justify-between overflow-hidden`}>
            
            {/* Gradientes y Acentos Ambientales Acústicos */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E676]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FFB300]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl pointer-events-none" />

            {/* ENCABEZADO SUPERIOR */}
            <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#070A0F]/90 border-b border-[#162032] px-4 sm:px-8 py-4">
                <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                    <button
                        onClick={onBack || (() => window.history.back())}
                        aria-label="Volver o cerrar pantalla"
                        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-[#1E293B] bg-[#0E1524] text-slate-300 hover:text-[#00E676] hover:border-[#00E676]/40 hover:bg-[#121B2F] transition-all duration-200 text-xs sm:text-sm font-mono group"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="transition-transform group-hover:-translate-x-1" />
                        <span className="hidden sm:inline">Regresar</span>
                    </button>

                    <div className="text-center sm:text-right">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[11px] font-mono text-[#00E676]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                            DSP 44.1 kHz • Local Audio
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTENIDO PRINCIPAL SCROLLABLE */}
            <main 
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 max-w-5xl mx-auto w-full space-y-8"
            >
                {/* Hero / Introducción Legal */}
                <motion.section 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative pb-6 border-b border-[#162032]"
                >
                    <div className="flex items-center gap-3 text-[#00E676] text-xs font-mono uppercase tracking-widest mb-2">
                        <FontAwesomeIcon icon={faMusic} className="text-sm" />
                        <span>Chepita Apps • Acuerdo de Usuario</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                        Términos y Condiciones
                    </h1>

                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                        Condiciones de uso y política de procesamiento de audio en tiempo real para{' '}
                        <span className="text-white font-semibold">Chepita Afinador (Afinador CHP)</span>.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faLock} className="text-[#00E676]" />
                            Última actualización: Octubre 2025
                        </span>
                        <span>•</span>
                        <span>Versión de Producción 1.0.0</span>
                        <span>•</span>
                        <span>Chepita Apps © 2025</span>
                    </div>
                </motion.section>

                {/* CALLOUT CRÍTICO: PRIVACIDAD Y DSP LOCAL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative overflow-hidden rounded-2xl border border-[#00E676]/30 bg-gradient-to-br from-[#00E676]/10 via-[#0A161E] to-[#0A101D] p-5 sm:p-6 shadow-[0_0_30px_rgba(0,230,118,0.08)]"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#00E676]/20 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0 text-xl shadow-[0_0_15px_rgba(0,230,118,0.3)]">
                            <FontAwesomeIcon icon={faMicrophone} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-base sm:text-lg font-bold text-white">
                                    Compromiso Absoluto de Cero Grabación
                                </h2>
                                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded bg-[#00E676] text-black">
                                    DSP On-Device
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                El acceso al micrófono solo se utiliza para leer el buffer de audio PCM a una tasa de muestreo de{' '}
                                <strong className="text-[#00E676]">44.1 kHz</strong> y calcular la frecuencia fundamental en tiempo real mediante algoritmos DSP.
                                <strong className="text-white block mt-1">
                                    El audio NUNCA es grabado, almacenado en disco ni transmitido a servidores remotos o terceros. Todo el procesamiento ocurre y muere en la memoria volátil de tu dispositivo.
                                </strong>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* SECCIONES LEGALES NUMERADAS */}
                <div className="space-y-6">

                    {/* 1. ACEPTACIÓN DE LOS TÉRMINOS */}
                    <article className="rounded-2xl border border-[#162032] bg-[#0C121E]/80 backdrop-blur-md p-5 sm:p-7 hover:border-[#1E2E48] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] font-mono text-xs flex items-center justify-center font-bold">
                                01
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                Aceptación de los Términos
                            </h3>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed pl-10">
                            Al descargar, instalar, acceder o utilizar la aplicación <strong className="text-white">Chepita Afinador</strong> (en adelante, &quot;la Aplicación&quot;), usted acepta expresamente quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con la totalidad de estas cláusulas, debe abstenerse de utilizar la Aplicación y desinstalarla de inmediato de su dispositivo.
                        </p>
                    </article>

                    {/* 2. USO DEL SERVICIO Y PROPÓSITO */}
                    <article className="rounded-2xl border border-[#162032] bg-[#0C121E]/80 backdrop-blur-md p-5 sm:p-7 hover:border-[#1E2E48] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] font-mono text-xs flex items-center justify-center font-bold">
                                02
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                Propósito del Servicio y Afinación de Ukelele
                            </h3>
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed pl-10 space-y-3">
                            <p>
                                Chepita Afinador es una herramienta de ingeniería musical diseñada para brindar soporte de afinación cromática y específica para ukeleles (soprano, concierto, tenor, barítono) en configuraciones estándar (como <strong className="text-slate-100 font-mono">G4 - C4 - E4 - A4</strong> y Low G) así como afinaciones alternativas.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div className="p-3 rounded-xl bg-[#080E18] border border-[#1A253A] flex items-start gap-2.5">
                                    <FontAwesomeIcon icon={faWaveSquare} className="text-[#00E676] mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-white">Detección de Tono DSP</p>
                                        <p className="text-[12px] text-slate-400">Algoritmo de autocorrelación y detección de armónicos optimizado para instrumentos de cuerda pulsada.</p>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-[#080E18] border border-[#1A253A] flex items-start gap-2.5">
                                    <FontAwesomeIcon icon={faSliders} className="text-[#FFB300] mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-white">Tolerancia & Precisión (Cents)</p>
                                        <p className="text-[12px] text-slate-400">Indicadores visuales en verde neón (en tono), ámbar (desviación leve) y rojo coral (desafinación crítica).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* 3. PERMISOS Y PRIVACIDAD DEL MICRÓFONO */}
                    <article className="rounded-2xl border border-[#00E676]/20 bg-[#0C121E]/90 backdrop-blur-md p-5 sm:p-7 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E676]/5 rounded-bl-full pointer-events-none" />
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#00E676]/20 border border-[#00E676]/50 text-[#00E676] font-mono text-xs flex items-center justify-center font-bold">
                                03
                            </span>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Permisos y Privacidad del Micrófono
                                </h3>
                                <FontAwesomeIcon icon={faShieldHalved} className="text-[#00E676] text-sm" />
                            </div>
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed pl-10 space-y-3">
                            <p>
                                Para su correcto funcionamiento técnico, la Aplicación solicita acceso explícito al hardware del micrófono bajo los identificadores estándar del sistema operativo:
                            </p>
                            <ul className="space-y-1.5 text-xs font-mono bg-[#080E18] p-3 rounded-xl border border-[#182338]">
                                <li className="flex items-center gap-2 text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-[#00E676]" />
                                    <span>Android: <code className="text-[#00E676]">android.permission.RECORD_AUDIO</code></span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-[#00E676]" />
                                    <span>iOS: <code className="text-[#00E676]">NSMicrophoneUsageDescription</code></span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-[#00E676]" />
                                    <span>Web Audio API: <code className="text-[#00E676]">navigator.mediaDevices.getUserMedia</code></span>
                                </li>
                            </ul>
                            <p>
                                <strong className="text-white">Garantía Técnica de Privacidad:</strong> El flujo de audio capturado se analiza exclusivamente en fragmentos de memoria volátil (buffer PCM) a una frecuencia de muestreo de 44.1 kHz con el único propósito de calcular la frecuencia Hertziana (Hz). En ningún momento se realiza grabación de conversaciones, transcripción de voz, almacenamiento en bases de datos locales o transmisión a infraestructura cloud externa.
                            </p>
                        </div>
                    </article>

                    {/* 4. PROPIEDAD INTELECTUAL */}
                    <article className="rounded-2xl border border-[#162032] bg-[#0C121E]/80 backdrop-blur-md p-5 sm:p-7 hover:border-[#1E2E48] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#FFB300]/10 border border-[#FFB300]/30 text-[#FFB300] font-mono text-xs flex items-center justify-center font-bold">
                                04
                            </span>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Propiedad Intelectual
                                </h3>
                                <FontAwesomeIcon icon={faCopyright} className="text-[#FFB300] text-sm" />
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed pl-10">
                            Todos los derechos sobre el software, código fuente, algoritmos matemáticos de sintonización, interfaz visual &quot;Dark Acústica&quot;, logotipos, marcas distintivas de <strong className="text-white">Chepita Apps</strong> y la denominación <strong className="text-white">Chepita Afinador (Afinador CHP)</strong> son titularidad exclusiva de <strong className="text-white">Chepita Apps © 2025</strong>. Queda prohibida la ingeniería inversa, descompilación, reproducción comercial no autorizada o creación de obras derivadas.
                        </p>
                    </article>

                    {/* 5. LIMITACIÓN DE RESPONSABILIDAD */}
                    <article className="rounded-2xl border border-[#162032] bg-[#0C121E]/80 backdrop-blur-md p-5 sm:p-7 hover:border-[#1E2E48] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#FF5252]/10 border border-[#FF5252]/30 text-[#FF5252] font-mono text-xs flex items-center justify-center font-bold">
                                05
                            </span>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Limitación de Responsabilidad
                                </h3>
                                <FontAwesomeIcon icon={faTriangleExclamation} className="text-[#FF5252] text-sm" />
                            </div>
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed pl-10 space-y-2">
                            <p>
                                La Aplicación se suministra &quot;tal cual&quot; (as-is) y &quot;según disponibilidad&quot;. Chepita Apps no garantiza que el funcionamiento sea ininterrumpido o libre de errores en condiciones acústicas extremas (ruido ambiental elevado, saturación acústica del micrófono o hardware defectuoso).
                            </p>
                            <p className="text-xs text-slate-400">
                                El usuario es responsable de la tensión adecuada de las cuerdas de su instrumento. Chepita Apps no será responsable por la rotura de cuerdas, desgaste de clavijeros o daños mecánicos derivados de sobretensado accidental.
                            </p>
                        </div>
                    </article>

                    {/* 6. CONTACTO Y SOPORTE */}
                    <article className="rounded-2xl border border-[#162032] bg-[#0C121E]/80 backdrop-blur-md p-5 sm:p-7 hover:border-[#1E2E48] transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-7 h-7 rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] font-mono text-xs flex items-center justify-center font-bold">
                                06
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                Contacto y Soporte Técnico
                            </h3>
                        </div>
                        <div className="text-sm text-slate-300 leading-relaxed pl-10 space-y-3">
                            <p>
                                Si tiene dudas respecto a la privacidad de datos, el procesamiento DSP o necesita soporte técnico sobre Chepita Afinador, puede comunicarse directamente con el equipo de desarrollo:
                            </p>
                            <div className="flex flex-wrap items-center gap-3 pt-1">
                                <a
                                    href="mailto:soporte@chepita-apps.dev"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-mono text-[#00E676] hover:bg-[#00E676] hover:text-black transition-all duration-200"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>soporte@chepita-apps.dev</span>
                                </a>
                                <span className="text-xs text-slate-400">o visite el portal Chepita Apps</span>
                            </div>
                        </div>
                    </article>

                </div>

                {/* Mensaje de lectura completa */}
                {!hasScrolledToBottom && (
                    <p className="text-center text-xs font-mono text-slate-500 italic pb-2">
                        Desplázate hacia abajo para revisar todas las cláusulas técnicas y legales
                    </p>
                )}
            </main>

            {/* PIE DE PÁGINA FLOTANTE / BARRA DE ACEPTACIÓN */}
            <footer className="sticky bottom-0 z-30 backdrop-blur-2xl bg-[#070A0F]/95 border-t border-[#182338] px-4 sm:px-8 py-4 sm:py-5 shadow-[0_-15px_40px_rgba(0,0,0,0.7)]">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    
                    {/* Switch / Checkbox interactivo */}
                    <label 
                        className="flex items-start sm:items-center gap-3 cursor-pointer select-none group"
                        htmlFor="terms-agreement-checkbox"
                    >
                        <div className="relative mt-0.5 sm:mt-0">
                            <input
                                id="terms-agreement-checkbox"
                                type="checkbox"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                                className="sr-only"
                            />
                            <div 
                                className={`w-5 h-5 rounded-md border transition-all duration-200 flex items-center justify-center ${
                                    accepted 
                                        ? 'bg-[#00E676] border-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.5)]' 
                                        : 'bg-[#0D1424] border-[#22324F] group-hover:border-[#00E676]/60'
                                }`}
                            >
                                {accepted && (
                                    <FontAwesomeIcon icon={faCheck} className="text-black text-xs font-black" />
                                )}
                            </div>
                        </div>

                        <div className="text-xs sm:text-sm text-slate-300">
                            <span className="font-medium text-white group-hover:text-[#00E676] transition-colors">
                                He leído y acepto los Términos y Condiciones
                            </span>
                            <span className="block text-[11px] text-slate-400">
                                Autorizo el procesamiento DSP local de audio en tiempo real (44.1 kHz) sin grabación.
                            </span>
                        </div>
                    </label>

                    {/* Botones de Acción */}
                    <div className="flex items-center gap-3 shrink-0">
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-[#1E293B] bg-[#0E1524] text-xs font-mono text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                            >
                                Rechazar
                            </button>
                        )}

                        <button
                            onClick={handleConfirm}
                            disabled={!accepted}
                            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-200 ${
                                accepted
                                    ? 'bg-[#00E676] text-black font-bold shadow-[0_0_24px_rgba(0,230,118,0.4)] hover:shadow-[0_0_32px_rgba(0,230,118,0.6)] hover:bg-[#00ff83] cursor-pointer active:scale-95'
                                    : 'bg-[#121B2B] text-slate-500 border border-[#1A263D] cursor-not-allowed opacity-60'
                            }`}
                        >
                            <span>Aceptar y Continuar</span>
                            <FontAwesomeIcon icon={faCheck} className="text-xs" />
                        </button>
                    </div>

                </div>
            </footer>

            {/* TOAST FEEDBACK DE CONFIRMACIÓN */}
            <AnimatePresence>
                {showConfirmToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-[#00E676] text-black font-semibold text-xs sm:text-sm shadow-[0_0_30px_rgba(0,230,118,0.6)] flex items-center gap-2.5 font-mono"
                    >
                        <FontAwesomeIcon icon={faCheck} className="text-base" />
                        <span>Términos aceptados correctamente. Iniciando DSP...</span>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ChepitaAfinadorTerminos;
