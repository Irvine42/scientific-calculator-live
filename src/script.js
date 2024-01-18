document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML document is ready.')
    const display = document.getElementById('calc-display')
    const buttons = document.getElementsByClassName('btn')
    console.log(display)
    console.log(buttons)

    let currentvalue = "";



    function evaluateResult() {
        const convertedvalue = currentvalue
            .replace("x", "*")
            .replace("÷", "/")
            .replace('%', '*0.01'); //THESE ONLY WORK ONCE, NEED SOME KIND OF LOOP FOR MORE THAN ONE X SYMBOL
        const result = eval(convertedvalue);
        currentvalue = result.toString();
    }


    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value == 'AC') {
                currentvalue = "";
            }
            else if (value == "=") {
                evaluateResult();
            }
            else {
                currentvalue += value;
            }
            display.value = currentvalue;
        })
    }
});