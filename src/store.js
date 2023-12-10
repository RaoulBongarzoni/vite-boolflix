import { reactive } from 'vue'

export const store = reactive({

    myApiKey: "api_key=f37b3c0c8eae36fd294a8da28899a911",
    MovieApiUrl: "https://api.themoviedb.org/3/search/movie?",
    TVApiUrl: "https://api.themoviedb.org/3/search/tv?",

    searchText: "",
    searchResultsMovie: [],
    searchResultsTV: [],

    flagList: []
});







// f37b3c0c8eae36fd294a8da28899a911