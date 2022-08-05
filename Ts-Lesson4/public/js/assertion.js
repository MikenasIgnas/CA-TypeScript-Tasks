"use strict";
console.group('Assertions - užduotys');
{
    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.group('1. ASSERTION Užduoties Atsakymas"');
    {
        const addTextButton = document.getElementById('clickMeButton');
        const buttonText = document.getElementById('buttonText');
        addTextButton.addEventListener('click', (e) => {
            e.preventDefault();
            buttonText.textContent = 'HELLO!';
            buttonText.style.color = randomColor();
        });
    }
    console.groupEnd();
    console.group('2. 3. ASSERTION Užduoties Atsakymas');
    {
        const addSquareButton = document.getElementById('button');
        const squareContainer = document.getElementById('sq-container');
        const squareCount = document.getElementById('count-container');
        let number = 0;
        squareCount.textContent = `Square Counter: ${number}`;
        const plusOne = () => {
            number += 1;
            squareCount.textContent = `Square Counter: ${number}`;
        };
        addSquareButton.addEventListener('click', (e) => {
            e.preventDefault();
            plusOne();
            const square = document.createElement('div');
            square.style.display = 'inline-block';
            square.style.height = '40px';
            square.style.width = '40px';
            square.style.backgroundColor = randomColor();
            squareContainer.append(square);
        });
    }
}
console.groupEnd();
//# sourceMappingURL=assertion.js.map