/**
 * ============================================================================
 * Project: GameDistribution.com HTML5 SDK - LITE / BASURA EDITION v7.0
 * Description: SDK reconstruido + Francotirador + El Libertador + Atajos de Emergencia
 * Version: 7.0.0 - THE CHEAT-CODE EDITION
 * ============================================================================
 */

(function () {
    const LOG_PREFIX = "%c[GD-HACK]%c";
    const LOG_STYLE_PREFIX = "color: #00ffff; font-weight: bold; background: #111; padding: 2px 4px; border-radius: 3px; border: 1px solid #00ffff;";
    const LOG_STYLE_TEXT = "color: #444; font-weight: bold;";

    // Intentamos extraer el nombre del juego de forma dinámica
    const obtenerNombreJuego = () => {
        if (window.GD_OPTIONS && window.GD_OPTIONS.title) {
            return window.GD_OPTIONS.title;
        }
        if (document.title) {
            // Limpia títulos típicos como "Jugar Kings and Queens en Gry.pl"
            return document.title.split(' - ')[0].split(' | ')[0].trim();
        }
        return "este juego desconocido";
    };

    console.log(LOG_PREFIX + " Iniciando Sistema Anti-Basura v7.0...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
    
    // El log solicitado por el usuario
    const nombreDelJuego = obtenerNombreJuego();
    console.log(LOG_PREFIX + ` Intentando hackear [${nombreDelJuego}] 🚀`, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);

    /**
     * ====================================================================
     * EXTRA: ATAJOS DE TECLADO DE EMERGENCIA (Alt + S / Alt + R)
     * ====================================================================
     * Si algún juego tiene una lógica bugeada, puedes forzar el estado.
     */
    console.log(LOG_PREFIX + " 🔧 Atajos de teclado activados:", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
    console.log(LOG_PREFIX + "    [Alt + S] -> Forzar reanudación (Saltarse anuncio fantasma)", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
    console.log(LOG_PREFIX + "    [Alt + R] -> Forzar recompensa de anuncio (Gratis y al instante)", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);

    window.addEventListener('keydown', (e) => {
        // Alt + S (Skip/Resume)
        if (e.altKey && (e.key === 's' || e.key === 'S')) {
            console.log(LOG_PREFIX + " [ATAJO] Forzando reanudación inmediata del juego...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            triggerGameEvent("AD_SUCCESS", "Forced Success");
            triggerGameEvent("CONTENT_RESUME_REQUESTED", "Forced Resume");
            triggerGameEvent("SDK_GAME_START", "Forced Resume");
        }
        // Alt + R (Reward)
        if (e.altKey && (e.key === 'r' || e.key === 'R')) {
            console.log(LOG_PREFIX + " [ATAJO] Forzando entrega de recompensa sin ver anuncio...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            triggerGameEvent("SDK_REWARDED_WATCH_COMPLETE", "Forced Reward");
            triggerGameEvent("AD_SUCCESS", "Forced Success");
            triggerGameEvent("CONTENT_RESUME_REQUESTED", "Forced Resume");
            triggerGameEvent("SDK_GAME_START", "Forced Resume");
        }
    }, true);


    /**
     * ====================================================================
     * 0. EL LIBERTADOR (Desbloqueo de F12, Ctrl+R, Click Derecho)
     * ====================================================================
     */
    const llavesDeLaLibertad = ['contextmenu', 'keydown', 'keyup'];
    
    llavesDeLaLibertad.forEach(tipoEvento => {
        window.addEventListener(tipoEvento, (e) => {
            if (tipoEvento === 'contextmenu') {
                e.stopImmediatePropagation();
                return;
            }

            const isF12 = e.key === 'F12' || e.keyCode === 123;
            const isF5 = e.key === 'F5' || e.keyCode === 116;
            const isCtrlR = e.ctrlKey && (e.key === 'r' || e.key === 'R' || e.keyCode === 82);
            const isCtrlShiftI = e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode === 73);
            const isCtrlShiftJ = e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J' || e.keyCode === 74);
            const isCtrlU = e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85);

            if (isF12 || isF5 || isCtrlR || isCtrlShiftI || isCtrlShiftJ || isCtrlU) {
                e.stopImmediatePropagation();
            }
        }, true);
    });

    Object.defineProperty(document, 'oncontextmenu', {
        set: function() { console.log(LOG_PREFIX + " El juego intentó bloquear el click derecho. Denegado.", LOG_STYLE_PREFIX, LOG_STYLE_TEXT); },
        get: function() { return null; }
    });


    /**
     * ====================================================================
     * 1. EL FRANCOTIRADOR PACIENTE (Auto-Clicker)
     * ====================================================================
     */
    const esObjetivoVulnerable = (elemento) => {
        if (!elemento) return false;
        const estilos = window.getComputedStyle(elemento);
        return estilos.display !== 'none' && 
               estilos.visibility !== 'hidden' && 
               estilos.opacity !== '0' && 
               elemento.offsetWidth > 0 && 
               elemento.offsetHeight > 0;
    };

    const francotiradorDeBotones = setInterval(() => {
        const boton = document.getElementById('h5branding-button');
        
        if (boton && esObjetivoVulnerable(boton)) {
            console.log(LOG_PREFIX + " ¡Objetivo visible y vulnerable! Ejecutando demolición...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            
            boton.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
            boton.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
            boton.click();

            const branding = document.getElementById('h5branding');
            if (branding) {
                branding.style.opacity = '0';
                branding.style.pointerEvents = 'none';
                setTimeout(() => { branding.remove(); }, 1500);
            }
            clearInterval(francotiradorDeBotones);
        }
    }, 100);


    /**
     * ====================================================================
     * 2. EVENT MANAGER (Simulador de Eventos del SDK)
     * ====================================================================
     */
    const triggerGameEvent = (eventName, message) => {
        if (window.GD_OPTIONS && typeof window.GD_OPTIONS.onEvent === 'function') {
            try {
                window.GD_OPTIONS.onEvent({
                    name: eventName,
                    message: message,
                    status: "success",
                    isStoreEvent: false,
                    skipForward: false
                });
                console.log(LOG_PREFIX + " Evento inyectado al juego: " + eventName, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            } catch (e) {
                console.warn(LOG_PREFIX + " El juego falló al procesar el evento: " + e.message, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            }
        }
    };


    /**
     * ====================================================================
     * 3. GD SDK STUB (El falso SDK)
     * ====================================================================
     */
    const gdApiStub = {
        q: [],

        showAd: function (adType, params) {
            console.log(LOG_PREFIX + ` Petición de anuncio: ${adType || 'interstitial'}. Evadiendo radar...`, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);

            return new Promise((resolve) => {
                triggerGameEvent("CONTENT_PAUSE_REQUESTED", "Pausando contenido.");
                triggerGameEvent("SDK_GAME_PAUSE", "Pausando lógica interna.");

                setTimeout(() => {
                    triggerGameEvent("LOADED", "Ad loaded invisible");
                    triggerGameEvent("IMPRESSION", "Ad impression invisible");
                    triggerGameEvent("STARTED", "Ad started invisible");
                    
                    setTimeout(() => {
                        triggerGameEvent("COMPLETE", "Ad completed invisible");
                        if (adType === 'rewarded') {
                            triggerGameEvent("SDK_REWARDED_WATCH_COMPLETE", "¡Recompensa fantasma entregada!");
                        }
                        triggerGameEvent("AD_SUCCESS", "Engaño completado.");
                        triggerGameEvent("CONTENT_RESUME_REQUESTED", "Reanudando...");
                        triggerGameEvent("SDK_GAME_START", "A jugar.");
                        
                        resolve(true);
                    }, 500); 
                }, 100);
            });
        },

        preloadAd: function (adType) {
            return Promise.resolve("gdsdk://preloaded");
        },

        cancelAd: function () {
            triggerGameEvent("CONTENT_RESUME_REQUESTED", "Resumiendo...");
            triggerGameEvent("SDK_GAME_START", "Resumiendo...");
        },

        showBanner: function () {},
        showDisplayAd: function () {},
        play: function () {},
        customLog: function () {},
        openConsole: function () {},

        getSession: function () {
            return Promise.resolve({
                ads: { display: { enabled: false }, rewarded: { enabled: false } },
                location: {
                    parentDomain: window.location.hostname || "localhost",
                    topDomain: window.location.hostname || "localhost",
                    parentURL: window.location.href,
                    depth: 0,
                    loadedByGameZone: false
                }
            });
        },

        sendEvent: function (event) { },
        isPaymentsAvailable: function () { return Promise.resolve(false); },
        leaderboard: { show: function () {}, addScore: function (score) {} }
    };

    if (window.gdApi && Array.isArray(window.gdApi.q)) {
        gdApiStub.q = window.gdApi.q;
    }

    window.gdsdk = gdApiStub;
    window.gdApi = gdApiStub;


    /**
     * ====================================================================
     * 4. POLLER DE EVENTOS (Monitor Anti-Cuelgues)
     * ====================================================================
     */
    let lastKnownOnEvent = null;
    let lastKnownOnInit = null;
    let readyFiredForCurrent = false;
    let initFiredForCurrent = false;

    setInterval(() => {
        if (window.GD_OPTIONS && typeof window.GD_OPTIONS.onEvent === 'function') {
            if (window.GD_OPTIONS.onEvent !== lastKnownOnEvent) {
                lastKnownOnEvent = window.GD_OPTIONS.onEvent;
                readyFiredForCurrent = false; 
            }

            if (!readyFiredForCurrent) {
                console.log(LOG_PREFIX + ` [${obtenerNombreJuego()}] listo. Enviando señal de inicio (SDK_READY)...`, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
                triggerGameEvent("SDK_READY", "Everything is ready.");
                readyFiredForCurrent = true;
            }
        }

        if (window.GD_OPTIONS && typeof window.GD_OPTIONS.onInit === 'function') {
            if (window.GD_OPTIONS.onInit !== lastKnownOnInit) {
                lastKnownOnInit = window.GD_OPTIONS.onInit;
                initFiredForCurrent = false;
            }

            if (!initFiredForCurrent) {
                try {
                    window.GD_OPTIONS.onInit("Everything is ready.");
                    initFiredForCurrent = true;
                } catch (e) {}
            }
        }

        if (Array.isArray(window.gdsdk.q) && window.gdsdk.q.length > 0) {
            while (window.gdsdk.q.length > 0) {
                let cmd = window.gdsdk.q.shift();
                if (typeof cmd === 'function') {
                    try { cmd(); } catch (e) {}
                } else if (Array.isArray(cmd) && typeof window.gdsdk[cmd[0]] === 'function') {
                    try { window.gdsdk[cmd[0]].apply(window.gdsdk, cmd.slice(1)); } catch (e) {}
                }
            }
        }
    }, 250);

})();