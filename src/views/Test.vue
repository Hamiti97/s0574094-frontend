<template>
<div id="app">
  <h2>Random image in Vue.js:</h2>
  <p v-if="selectedImage"><img style="width:20%" :src="selectedImage" alt=""></p>
  <a href="/test" class="btn btn-info" role="button">Neuer Vorschlag</a>
</div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      images: [
        'https://m.media-amazon.com/images/M/MV5BNjFlOTI2OGQtMzg0YS00ZGE4LTkwMjEtZDUzYThlOTU5YjQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        'https://media1.jpc.de/image/w600/front/0/5050582412567.jpg'
      ],
      selectedImage: null
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random() * items.length)]
    }
  },
  created () {
    this.selectedImage = this.randomItem(this.images)
  }
}
</script>

<style scoped>

</style>
