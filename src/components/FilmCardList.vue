<template>
  <h1></h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="film in filme" :key="film.id">
        <div class="card h-100">
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
.card-body{
  background: #c95555;
}
.card-img-top{
  height: 600px;
  width: auto;
  border: 5px #ff0000 solid;
  padding: 0;
}
.card-title{
  color: black;
}
.card-text{
  color: black;
}
</style>
