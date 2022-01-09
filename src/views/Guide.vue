<template>
  <body>
  <h1>Ihr nächster Film</h1>
  <div class="col" v-for="film in filme" :key="film.id">
    <div class="btn-group">
      <a class="btn  btn-default btn-lg btn-general btn-white smooth-scroll"
         :href="film.ytLink" target="_blank">
        Zum Trailer
      </a>
      <a href="/Guide" class="btn btn-danger btn-lg" role="button">NEUER VORSCHLAG</a>
    </div>
    <br><br>
    <film-card :film="film"></film-card>
      <br><br>
    </div>
  </body>
</template>

<script>
import FilmCard from '@/components/FilmCard'

export default {
  name: 'Filme',
  components: {
    FilmCard
  },
  props: {
    film: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      filme: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const random = Math.floor(Math.random() * (15 - 11 + 1)) + 11
    fetch('https://filmgenerator.herokuapp.com/api/v1/filme/' + random, requestOptions)
      .then(response => response.json())
      .then(result => this.filme.push(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
body {background-color: #181a1a
       }
h1 {color: #ffffff;
  background-color: #212529;
}
a {
  color: #eee9e9;
  font-size: 25px;
  display: inline;
  background-color: #212529;
  border: 3px #eee9e9 solid;
}
a2{
  color: #eee9e9;
  font-size: 20px;
  display: inline;
  background-color: #212529;
  border: 3px #eee9e9 solid;
}
film-card{
  size: 20px;
}
</style>
