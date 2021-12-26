<template>
  <h1>Ihr nächster Film</h1>
      <div class="col" v-for="film in filme" :key="film.id">
          <img :src="film.imageUrl" class ="card-img-top" :alt="film.titel">
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
  <a href="/filmgenerator" class="btn btn-info" role="button">Neuer Vorschlag</a>
</template>

<script>
export default {
  name: 'Filme',
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
    const random = Math.floor(Math.random() * (12 - 11 + 1)) + 11
    fetch('https://filmgenerator.herokuapp.com/api/v1/filme/' + random, requestOptions)
      .then(response => response.json())
      .then(result => this.filme.push(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
h1 { color: #000000;   }
.card-img-top{
  height: 600px;
  width: auto;
  border: 5px #ff0000 solid;
  padding: 0;
}
</style>
