/**
 * https://oliverjessner.at/blog/2026-01-01-javascript-ersten-buchstaben-in-groszschreiben/
 * @param {string} string to capitalize th first Character of 
 * @returns the string with a cpitalized first character
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getNumberWithLeadingZeros(number, minLength){
    return "0".repeat(minLength - number.toString().length) + number.toString();
}