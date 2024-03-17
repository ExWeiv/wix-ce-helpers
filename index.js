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