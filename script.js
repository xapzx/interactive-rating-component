const selected = document.querySelector('.selected');
const numbers = document.querySelectorAll('.rating');
const submit_button = document.querySelector('.submit');

function submit() {
    const active = document.querySelector('.active').innerText;
    selected.innerText = active;
    document.querySelector('.thank-state').style.display = "flex";
    document.querySelector('.rating-state').style.display = "none";
}

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        number.classList.add('active');
    })
})

submit_button.addEventListener('click', submit);