const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=6b3c0753191812d1b8bd024ffb0ce0f3";

const GET = async(type, specific, ext="") => {
  const res = await fetch(BASE_URL+type+'/'+specific+API_KEY+ext);
  return await res.json();
}

export { GET };