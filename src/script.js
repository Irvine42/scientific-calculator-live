document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML document is ready.')
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentvalue = "";



    function evaluateResult() {
        const convertedvalue = currentvalue
            .replace("x", "*")
            .replace("÷", "/")
            .replace('%', '*0.01')
            .replace('π', 'Math.PI')
            .replace('sin', 'Math.sin')
            .replace('ln', 'Math.log')
            .replace('cos', 'Math.cos')
            .replace('log', 'Math.log10')
            .replace('e', 'Math.E')
            .replace('tan', 'Math.tan')
            .replace('√', 'Math.sqrt');

        //THESE ONLY WORK ONCE, NEED SOME KIND OF LOOP FOR MORE THAN ONE X SYMBOL
        const result = eval(convertedvalue);
        currentvalue = result.toString();
    }


    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            try {
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
            }
            catch (error) {
                console.error(error);
                currentvalue = 'ERROR';
                display.value = currentvalue;
            }


        })
    }
});