export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function pxToPercent(x, y) {
    const [screenWidth, screenHeight] = getScreenDimensions();
    const left = 100 * x / screenWidth;
    const top = 100 * y / screenHeight;
    return [left, top];
}

//  Input, Screen Percentage. Output, Screen Pixels
function convertToPixels(left, top) {

}

function getScreenDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return [width, height];
}