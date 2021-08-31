//get top rated movie list api
function get_top_ratedMovie_api() {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cfb3cf255ce240392713b406e60e0243')
    .then(res => res.json())
    .then(data => console.log(data))
}
get_top_ratedMovie_api();