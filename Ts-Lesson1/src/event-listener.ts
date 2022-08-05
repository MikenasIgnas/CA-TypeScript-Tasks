const inputField = document.querySelector('#input') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLParagraphElement;


const handleFieldChange = (event) => {
  const element: HTMLInputElement = event.target as HTMLInputElement;
  result.innerHTML = element.value;
};

inputField.addEventListener('keyup', handleFieldChange);
