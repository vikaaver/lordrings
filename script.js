const filmTitle = document.querySelector('#title')
const filmYear = document.querySelector('#year')
const filmDirector = document.querySelector('#director')
const filmDescription = document.querySelector('#description')
const filmPoster  = document.querySelector('#poster')

async function getData(){
    const res = await fetch ('https://vikaaver.github.io/fake-api/data.json')
    const data = await res.json()
    const {title, year, director, description, poster} = data
    console.log(title, year)
    filmTitle.textContent = `${title}, ${year} year`
    filmPoster.src = poster
    filmDescription.textContent= description
}
getData()