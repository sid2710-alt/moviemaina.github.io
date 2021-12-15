const button=document.getElementById('sbutton');
const movieSearchBox1 = document.getElementById('searchbox');
//const movieSearchBox = document.getElementById('searchbox');
const searchList = document.getElementById('search-list');

function min(a,b)
{
if(a<=b)
return a;
return b;
}
// console.log(movieSearchBox1.value);
async function getMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=6bd97333`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    //console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}
function findMovies(){
    let searchTerm = (movieSearchBox1.value).trim();
    //console.log(searchTerm);
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        getMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}
function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let idx = 0; idx < min(movies.length,5); idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
        <a href="movie_details.html?id=${movies[idx].imdbID}">
            <h3>${movies[idx].Title}</h3>
            </a>
            <p>${movies[idx].Year}</p>
            </div>
        
      
        `;
        searchList.appendChild(movieListItem);
    }
    initialize();
    }
    



