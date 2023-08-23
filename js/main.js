const btn = document.querySelector('.btn');
const text = document.querySelector('.text')

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(responce => responce.json())
        .then((data) => randomFact(data))
}

function randomFact(random) {
    text.textContent = random.fact;
}

btn.addEventListener('click', fetchCatFact)

fetchCatFact();