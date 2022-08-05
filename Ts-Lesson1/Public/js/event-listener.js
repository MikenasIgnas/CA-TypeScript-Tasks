"use strict";
const inputField = document.querySelector('#input');
const result = document.querySelector('#result');
const handleFieldChange = (event) => {
    const element = event.target;
    result.innerHTML = element.value;
};
inputField.addEventListener('keyup', handleFieldChange);
//# sourceMappingURL=event-listener.js.map