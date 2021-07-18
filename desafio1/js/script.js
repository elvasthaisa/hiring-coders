const form = document.getElementById('form')

const dataStorage = () => {
    let email = document.getElementById('email').value;
    let data = { email };

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    dataStorage();
})

