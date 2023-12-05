<script>
import axios from "axios"
import filmCard from "./components/FilmDisplayer.vue"
import searchBar from "./components/SimpleSearch.vue"
import { store } from "./store.js"


export default {

  components: {
    filmCard,
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
      let path = "https://api.themoviedb.org/3/search/movie?api_key=f37b3c0c8eae36fd294a8da28899a911&query=ritorno+al+futuro"

      if (store.searchText.length != 0) {
        path = `${this.store.apiUrl}${this.store.myApiKey}&query=${this.store.searchText.replaceAll(" ", "+")}`
        console.log(path)

      }

      axios.get(path).then(result => {
        this.store.searchResults = result.data.results;
        console.log(this.store.searchResults)
      })

    }


  }
}

</script>

<template>
  <div>
    <searchBar @search="searchByText" />

    <filmCard v-for="card in store.searchResults" :obj="card" />
  </div>
  <div>
    <p>

    </p>
  </div>
</template>

<style scoped></style>