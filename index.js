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

export class ReactElement extends HTMLElement {
    mountDiv = document.createElement("div");

    /**
     * Setups styles (CSS) and fonts for you.
     * 
     * @param {Array<string>} styles 
     * @param {Array<string>} fonts 
     */
    constructor(styles, fonts) {
        super();
        this.attachShadow({ mode: "open" });
        this.mountDiv.id = 'root';

        let fontsHtmlReady = '';
        if (fonts) {
            for (const f of fonts) {
                fontsHtmlReady = fontsHtmlReady + f + '\n';
            }
        }

        let stylesHtmlReady = '';
        if (styles) {
            for (const s of styles) {
                stylesHtmlReady = stylesHtmlReady + s + '\n';
            }
        }

        this.shadowRoot.innerHTML = `${fonts ? fontsHtmlReady : ''}\n${styles ? stylesHtmlReady : ''}`;
        this.shadowRoot.appendChild(this.mountDiv);
    }
}