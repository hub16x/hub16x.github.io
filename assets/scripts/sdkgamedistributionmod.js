/**
 * ============================================================================
 * Project: GameDistribution.com HTML5 SDK - LITE / BASURA EDITION v7.1
 * Description: SDK deobfuscado + Secuestro de createElement + Atajos de Emergencia
 * Version: 7.1.0 - THE GHOST HIJACKER (Anti-403 Unity Edition)
 * ============================================================================
 */

(function () {
    const LOG_PREFIX = "%c[GD-HACK]%c";
    const LOG_STYLE_PREFIX = "color: #00ffff; font-weight: bold; background: #111; padding: 2px 4px; border-radius: 3px; border: 1px solid #00ffff;";
    const LOG_STYLE_TEXT = "color: #444; font-weight: bold;";

    // Intentamos detectar dinámicamente nuestra propia ruta local para redirigir allí
    let miRutaPropia = '/sdkgamedistributionmod.js';
    if (document.currentScript && document.currentScript.src) {
        try {
            miRutaPropia = new URL(document.currentScript.src).pathname;
        } catch (e) {}
    }

    // Intentamos extraer el nombre del juego de forma dinámica
    const obtenerNombreJuego = () => {
        if (window.GD_OPTIONS && window.GD_OPTIONS.title) {
            return window.GD_OPTIONS.title;
        }
        if (document.title) {
            return document.title.split(' - ')[0].split(' | ')[0].trim();
        }
        return "este juego de Unity";
    };

    /**
     * ====================================================================
     * HACK DIRECTO: SECUESTRO DE CREATELLEMENT (Bye Bye Service Worker!)
     * ====================================================================
     * Cuando Unity intente hacer document.createElement('script') para
     * inyectar el SDK original, interceptaremos la asignación de '.src'
     * y le obligaremos a inyectar este archivo modificado en su lugar.
     */
    (function() {
        const originalCreateElement = document.createElement;
        document.createElement = function(tagName, options) {
            const el = originalCreateElement.call(document, tagName, options);
            
            if (tagName && tagName.toLowerCase() === 'script') {
                Object.defineProperty(el, 'src', {
                    get: function() {
                        return this.getAttribute('src') || '';
                    },
                    set: function(value) {
                        // Si la URL apunta a GameDistribution y al script de inicio...
                        if (typeof value === 'string' && value.includes('gamedistribution.com') && value.includes('main.min.js')) {
                            console.log(LOG_PREFIX + " Secuestrando inyección dinámica de Unity. Redirigiendo a Basura Edition...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
                            // Le encajamos la ruta a nuestra versión local
                            this.setAttribute('src', miRutaPropia);
                            return;
                        }
                        this.setAttribute('src', value);
                    },
                    configurable: true
                });
            }
            return el;
        };
    })();

    console.log(LOG_PREFIX + " Iniciando Sistema Anti-Basura v7.1...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
    const nombreDelJuego = obtenerNombreJuego();
    console.log(LOG_PREFIX + ` Intentando hackear [${nombreDelJuego}] 🚀`, LOG_STYLE_PREFIX, LOG_STYLE_TEXT);

    /**
     * ====================================================================
     * EXTRA: ATAJOS DE TECLADO DE EMERGENCIA (Alt + S / Alt + R)
     * ====================================================================
     */
    window.addEventListener('keydown', (e) => {
        if (e.altKey && (e.key === 's' || e.key === 'S')) {
            console.log(LOG_PREFIX + " [ATAJO] Forzando reanudación inmediata del juego...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            triggerGameEvent("AD_SUCCESS", "Forced Success");
            triggerGameEvent("CONTENT_RESUME_REQUESTED", "Forced Resume");
            triggerGameEvent("SDK_GAME_START", "Forced Resume");
        }
        if (e.altKey && (e.key === 'r' || e.key === 'R')) {
            console.log(LOG_PREFIX + " [ATAJO] Forzando entrega de recompensa...", LOG_STYLE_PREFIX, LOG_STYLE_TEXT);
            triggerGameEvent("SDK_REWARDED_WATCH_COMPLETE", "Forced Reward");
            triggerGameEvent("AD_SUCCESS", "Forced Success");
            triggerGameEvent("CONTENT_RESUME_REQUESTED", "Forced Resume");
            triggerGameEvent("SDK_GAME_START", "Forced Resume");
        }
    }, true);


    /**
     * ====================================================================
     * EL LIBERTADOR (Desbloqueo de F12, Ctrl+R, Click Derecho)
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
     * EL FRANCOTIRADOR PACIENTE (Auto-Clicker)
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
     * EVENT MANAGER (Simulador de Eventos del SDK)
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
     * GD SDK STUB (El falso SDK)
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
     * POLLER DE EVENTOS (Monitor Anti-Cuelgues)
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
