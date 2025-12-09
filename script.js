const shoufilasBtn = document.getElementById('show-films-btn');
const addFileBtn = document.getElementById('add-film-btn');
const findFilnBtn = document.getElementById('search-film-btn');
const markfilata = document.getElementById('mark-film-btn');
const contentBlock = document.getElementById('content');

const movies = [
    { title: 'Inception', isAvailable: true },
    { title: 'The Dark Knight', isAvailable: true },
    { title: 'Avatar', isAvailable: false },
    { title: 'Titanic', isAvailable: true },
    { title: 'Avengers: Endgame', isAvailable: false },
]

const showFilms = () => {
    clearContent();

    const  movieList = document.CreateElement ('ul')
    contentBlock.append(movieList);

    for (const movie of movies) {
    console.log(movie.title)
    const movieItem = document.createElement('li')
    movieItem.textContent = `$(movie.title) - ${movie.isAvailable ? 'Доступен' : 'Не Доступен'}`;
    moviesList.append(movieItem);
    }
}

showFilmsBtn.addEventListener('click',showFilms)