/**
 * Sends data as JSON to custom element
 * 
 * @function
 * @param {string} key
 * @param {object} obj 
 * @param {string} customElementId 
 * @returns {null}
 */
export const sendJSON = (key, obj, customElementId) => {
    /**@type {$w.CustomElement} */
    const customElement = $w(customElementId);
    const jsonData = JSON.stringify(obj);
    customElement.setAttribute(key, jsonData);
    return null;
}

/**
 * Setups styles (CSS) and fonts for you.
 * 
 * @function
 * @param {Array<string>} fonts 
 * @param {Array<string>} styles 
 * @param {HTMLElement} customElement 
 * 
 * @returns {{customElement: HTMLElement, rootDiv: HTMLDivElement}}
 */
export function setupForReact(fonts, styles, customElement) {
    customElement.rootDiv.id = 'root';
    customElement.attachShadow({ mode: "open" });
    let fontsHtmlReady = '';
    if (fonts) {
        for (const f of fonts) {
            if (f.includes('<link')) {
                fontsHtmlReady = fontsHtmlReady + f + '\n';
            } else {
                fontsHtmlReady = fontsHtmlReady + `<link href="${f}" rel="stylesheet">` + '\n';
            }
        }
    }
    let stylesHtmlReady = '';
    if (styles) {
        for (const s of styles) {
            stylesHtmlReady = stylesHtmlReady + s + '\n';
        }
    }
    customElement.shadowRoot.innerHTML = `${fonts ? fontsHtmlReady : ''}\n${styles ? stylesHtmlReady : ''}`;
    customElement.shadowRoot.appendChild(customElement.rootDiv);
    return customElement;
}