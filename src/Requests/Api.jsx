const API_KEY = `c77f748b921c87e18a4a8be3b6f2e99b`;

export function ApiPoporali() {
    let get = fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
     return get.then(par => {
        return par.json()
    })
}

export function searchMovies(name) {
    const get = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1`)
    return get.then(par => {
        return par.json()
    })
}

export function movieDetails(id) {
    const get = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    return get.then(par => {
        return par.json()
    })
}

export function movieCredits(id) {
    const get = fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return get.then(par => {
        return par.json()
    })
}
export function movieReviews(id) {
    const get = fetch(`
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return get.then(par => {
        return par.json()
    })
}