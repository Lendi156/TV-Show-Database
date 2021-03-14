class SumberData {
    static searchShow(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=f77b8c9ad372d9f660d3cd07c1276c6a&language=en-US&page=1&query=${keyword}&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(Array.isArray(responseJson.results) && responseJson.results.length) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
 }

export default SumberData;