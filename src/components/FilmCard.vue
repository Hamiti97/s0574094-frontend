<template>
  <div class="card100">
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
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    film: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-body{
  background: #212529;
}
.card-img-top{
  height: 600px;
  width: auto;
  border: 5px #eee9e9 solid;
  padding: 0;
}
.card-title{
  color: #eee9e9;
}
.card-text{
  color: #eee9e9;
}

</style>
