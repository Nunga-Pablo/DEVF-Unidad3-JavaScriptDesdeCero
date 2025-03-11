const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => 
    {
        lenghtCounter.textContent = inputRange.value;
    }

const generatePassword = (passwordLength) =>
    {
        let result = '';
        let characters = '';

        // Obtener las opciones que estén seleccionadas

        const useUppercase = document.querySelector('#uppercase').checked; // Dentro de la cadena se agregan las mayusculas
        const useLowercase = document.querySelector('#lowercase').checked; // Dentro de la cadena se agregan las minusculas
        const useNumbers = document.querySelector('#numbers').checked; // Dentro de la cadena se agregan los numeros
        const useSymbols = document.querySelector('#symbols').checked; // Dentro de la cadena se agregan los simbolos

        //Crear un conjunto de caracteres a usar en la contraseña

        if(useUppercase) characters += 'ABCDEFHIJKLMNOPKRSTUVWXYZ';
        if(useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if(useNumbers) characters += '0123456789';
        if(useSymbols) characters += '!@#$%&*';

        if(characters === '')
        {
            passwordHeading.textContent = "Selecciona al menos una opción: ";
            return '';
        }

        //Generador de contraseña aleatoria
        for(let i = 0; i < passwordLength; i++)
        {
            result += characters.charAt(Math.floor(Math.random() * characters.length));

            /* Multiplicamos por el largo de la cadena de caracteres para obtener un numero aleatorio ya que en Math.random()
                nos da un numero entre 0 y 1*/
        }
        return result;
        console.log(result);
    };


// Funcion que imprima la contraseña

const PrintPassword = (event) => 
{
    event.preventDefault(); // Previene que el formulario se envie por defecto
    const password = generatePassword(inputRange.value);
    if(password)
    {
        passwordHeading.textContent = password; //Muestra la contraseña generada
    }
};

// Configuracion de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword)
