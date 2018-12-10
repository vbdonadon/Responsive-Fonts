/*
    Developed by Vinicius Bium Donadon
*/

let getElements = document.querySelectorAll("[largerFont]");
getElements = Array.from(getElements)

function renderFont(element, font){
    element.style.fontSize = font + "px"
}

getElements.forEach(function (element, index, array) {
    let largerFont = element.getAttribute("largerFont");
    let smallerFont = element.getAttribute("smallerFont");
    
    let toNumberLargerFont = Number(largerFont);
    let toNumberSmallerFont = Number(smallerFont);

    // Valores meramente ilustrativos para teste
    let smallerWidth = 320;
    let largerWidth = 1200;

    // Calculos de range 
    let fontRate = largerFont - smallerFont;
    let widthRate = largerWidth - smallerWidth;
    let pixelDentroDaRange = (fontRate/widthRate).toFixed(20)

    var font;

    if (window.innerWidth < smallerWidth) {
        font = smallerFont
        renderFont(element, font)
    } else if (window.innerWidth > largerWidth) {
        font = largerFont;
        renderFont(element, font)

    } else if (window.innerWidth >= smallerWidth) {
        font = (pixelDentroDaRange * (window.innerWidth - smallerWidth)) + toNumberSmallerFont;
        renderFont(element, font)
    }
});

window.addEventListener("resize", function (e){
    getElements.forEach(function (element, index, array) {
        largerFont = element.getAttribute("largerFont");
        smallerFont = element.getAttribute("smallerFont");

        // Transformando valores em numero.
        toNumberLargerFont = Number(largerFont);
        toNumberSmallerFont = Number(smallerFont);

        // Valores meramente ilustrativos para teste
        smallerWidth = 320;
        largerWidth = 1200;

        // Calculos de range 
        fontRate = largerFont - smallerFont;
        widthRate = largerWidth - smallerWidth;
        pixelDentroDaRange = (fontRate/widthRate).toFixed(20)

        var font;

        if (window.innerWidth < smallerWidth) {
            font = smallerFont
            renderFont(element, font)
        } else if (window.innerWidth > largerWidth) {
            font = largerFont;
            renderFont(element, font)

        } else if (window.innerWidth >= smallerWidth) {
            font = (pixelDentroDaRange * (window.innerWidth - smallerWidth)) + toNumberSmallerFont;
            renderFont(element, font)
        }
    });
})