const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const contetn = formData.get('content');

    const meow = {
        name,
        content
    }
});