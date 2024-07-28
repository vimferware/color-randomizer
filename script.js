const button = document.querySelector('#btn');

button.addEventListener('click', () => {

    document.body.style.backgroundColor = randomizer();

    function randomizer() {
        const result = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return result;
    }
});