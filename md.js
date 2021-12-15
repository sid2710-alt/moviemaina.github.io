var movieDetails;
var btn;
let favList=["nasidsi"];



    let url = window.location.search;
    
    let id = url.split('=')[1];
    loadMovieDetails(id);
    
    async function loadMovieDetails(movieid) {
    const result = await fetch(`http://www.omdbapi.com/?i=${movieid}&apikey=fc1fef96`);
     movieDetails = await result.json();
    // console.log(movieDetails);
    displayMovieDetails();
    
    
    }
    function Addtofav()
    {
        localStorage.setItem('session',JSON.stringify(movieDetails))
    //   if(favList.indexOf(id)==-1)
    //     favList.push(id);
    //     favList.push(JSON.parse(localStorage.getItem('session')));
    //     localStorage.setItem('session', JSON.stringify(favList));
        // var favList=document.getElementById('favorite-list');
        // let movieListItem = document.createElement('div');
        // movieListItem.dataset.id = movieDetails.imdbID; // setting movie id in  data-id
        // movieListItem.classList.add('favorite-list-item');
        // if(movieDetails.Poster != "N/A")
        //     moviePoster = movieDetails.Poster;
        // else 
        //     moviePoster = "image_not_found.png";

        // movieListItem.innerHTML = `
        // <div class = "search-item-thumbnail">
        //     <img src = "${moviePoster}">
        // </div>
        // <div class = "search-item-info">
        //     <h3>${movieDetails.Title}</h3>
        //     <p>${movieDetails.Year}</p>
        // </div>
        // `;
        // favList.appendChild(movieListItem);

    }

    function displayMovieDetails() {
    var next_pager=document.getElementById('movie_p')
    var movie_title=document.getElementById('movie_title');
    var movie_img = document.getElementById('card_image');
    var movie_plot=document.getElementById('detail');
    var artist=document.getElementById('Artists');
    var ratings=document.getElementById('Ratings');
    var year=document.getElementById('release_year');
  
    movie_title.innerHTML=`<h1 class="heading__primary" >${movieDetails.Title} <i class="fas fa-fire"></i></h1><div class="movie__tag movie__tag--1">#${movieDetails.Genre}</div>
    <button class="movie_tag movie_tag--2" id="fav" onclick="Addtofav()" >Add to Favorites</button> `;
    next_pager.innerHTML=`<button><a href="favorite.html">Favorites</a></button>`

    // movie_tag_1.innerText=movieDetails.Genre;
    // movie_tag_2.innerText=movieDetails.Genre[1];
    
    movie_img.src = movieDetails.Poster;
    movie_plot.innerText=movieDetails.Plot;
    artist.innerText=movieDetails.Actors;
    ratings.innerText=movieDetails.Rated;
    year.innerText=movieDetails.Year
    }
   
    