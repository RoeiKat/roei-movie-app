const baseUrl = `https://api.themoviedb.org/3/discover/movie?`;
const key = "api_key=40ab4b29399a2e3f961acf68acc457e8";
const params = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

export const fetchData = async (page = 1) => {
    const response = await fetch(`${baseUrl}${key}${params}&page=${page}`);
    if(!response.ok) {
        throw new Error("Oops something went wrong...");
    }
    const responseData = await response.json();
    return responseData;
}