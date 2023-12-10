<script>
import axios from "axios"
import TVcard from "./components/SeriesDisplayer.vue"
import filmCard from "./components/FilmDisplayer.vue"
import searchBar from "./components/SimpleSearch.vue"
import { store } from "./store.js"


export default {

  components: {
    filmCard,
    TVcard,
    searchBar
  },

  data() {
    return {
      store
    }
  },

  mounted() {
    console.log("https://api.themoviedb.org/3/search/movie?api_key=f37b3c0c8eae36fd294a8da28899a911&query=ritorno+al+futuro")

  },
  methods: {

    searchByText() {
      let MoviePath = ""
      let TvPath = ""

      if (store.searchText.length != 0) {
        MoviePath = `${this.store.MovieApiUrl}${this.store.myApiKey}&query=${this.store.searchText.replaceAll(" ", "+")}`
        TvPath = `${this.store.TVApiUrl}${this.store.myApiKey}&query=${this.store.searchText.replaceAll(" ", "+")}`



      }

      axios.get(MoviePath).then(result => {
        this.store.searchResultsMovie = result.data.results;
        console.log(this.store.searchResultsMovie)
      })
      axios.get(TvPath).then(result => {
        this.store.searchResultsTV = result.data.results;
        console.log(this.store.searchResultsTV)
      })

    }


  }
}

</script>

<template>
  <div class="container">
    <searchBar @search="searchByText" />



    <h2>film</h2>
    <div class="card-row">



      <filmCard class="cards" v-for="card in store.searchResultsMovie" :obj="card" />

    </div>
    <h2>serie</h2>


    <div class="card-row">

      <TVcard class="cards" v-for="serie in store.searchResultsTV" :obj="serie" />
    </div>

  </div>
  <div>
    <p>

    </p>
  </div>
</template>

<style scoped>
.card-row {
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;

}

.cards {

  width: 300px;
  height: 400px;
  margin: 0 3rem;
  background-color: aqua;

}
</style>