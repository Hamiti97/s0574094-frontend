<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="film in filme" :key="film.id">
        <film-card :film="film"></film-card>
      </div>
    </div>
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
