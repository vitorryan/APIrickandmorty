const characterId = document.getElementById('character-id')
const btnPes = document.getElementById('btn-pes')
const imagem =document.getElementById('img')

const fetchAPI = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => (res.json())
    .then((data) => {
        const nome = data.name;
        const especie = data.species;
        const  genero = data.gender
        console.log(nome)
        console.log(especie)
        console.log(genero)
        return data;
    }));

    return result;
}

btnPes.addEventListener('click', (event) => {
    event.preventDefault();
    const result = fetchAPI(characterId.value)
});

