<template>
<h1>Filme</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="film in filme" :key="film.id">
        <div class="card h-100">
          <img :src="getFilmbild(film)" class ="card-img-top" :alt="film.titel">
          <div class="card-body">
            <h5 class="card-title">{{ film.titel }}</h5>
            <p class="card-text">
              Genre: {{ film.genre }}
          </p>
            <p class="card-text">
              Erscheinungsjahr: {{ film.erscheinungsjahr }}
            </p>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filme',
  data () {
    return {
      filme: []
    }
  },
  methods: {
    getFilmbild (film) {
      if (film.titel === 'Godzilla') {
        return require('../assets/godzilla1999.jpg')
      } else if (film.titel === 'King Kong') {
        return require('../assets/kingkong2005.jpg')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://filmgenerator.herokuapp.com/api/v1/filme', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(film => {
        this.filme.push(film)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
