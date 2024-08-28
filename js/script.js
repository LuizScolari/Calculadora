function insert(number) {
    var resultElement = document.getElementById('resultado');
    var currentText = resultElement.innerHTML;

    if (/[a-zA-Z]/.test(currentText)){
        var newText = number;
    } else {
        var newText = currentText + number;
    }

    if (isStringWidthLessThanBox(newText, resultElement)) {
        resultElement.innerHTML = newText;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function delet() {
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    var resultElement = document.getElementById('resultado');
    var result = document.getElementById('resultado').innerHTML;
    if (result) {
        try {
            var total = eval(result);
            if (isStringWidthLessThanBox(total.toString(), resultElement)) {
                resultElement.innerHTML = total;
            } else {
                resultElement.innerHTML = "Excesso";
            }
        } catch (e) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nada :(";
    }
}

function isStringWidthLessThanBox(string, box) {
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap'; 
    tempSpan.style.fontSize = window.getComputedStyle(box).fontSize;
    tempSpan.style.fontFamily = window.getComputedStyle(box).fontFamily;
    tempSpan.textContent = string;

    document.body.appendChild(tempSpan);
    const stringWidth = tempSpan.offsetWidth;

    document.body.removeChild(tempSpan);

    const boxWidth = box.offsetWidth;

    return stringWidth <= boxWidth;
}
