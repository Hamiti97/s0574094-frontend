<template>
  <body>
  <h1>Alle Filme</h1>
  <div class="container-fluid">
    <film-card-list :filme="this.filme"></film-card-list>
  </div>
  <film-create-form @created="addFilm"></film-create-form>
  </body>
</template>

<script>
import FilmCardList from '@/components/FilmCardList'
import FilmCreateForm from '@/components/FilmCreateForm'

export default {
  name: 'Filme',
  components: {
    FilmCardList,
    FilmCreateForm
  },
  data () {
    return {
      filme: []
    }
  },
  methods: {
    addFilm (filmLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + filmLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(film => this.filme.push(film))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/filme'
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOption)
      .then(response => response.json())
      .then(result => result.forEach(film => {
        this.filme.push(film)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
h1 {
  background-color: #212529;
  color: #eee9e9;
}
body {background-color: #181a1a
}

</style>
