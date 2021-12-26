<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#film-create-offcanvas" aria-controls="#film-create-offcanvas">
    <i class="bi bi-filme-plus-fill">Filme hinzufügen +</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="film-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neue Filme</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-3">
        <label for="titel" class="form-label">Titel</label>
        <input type="text" class="form-control" id="titel" v-model="titel" required>
        <div class="invalid-feedback">
          Please provide the title.
        </div>
      </div>
      <div class="mb-3">
        <label for="genre" class="form-label">Genre</label>
        <input type="text" class="form-control" id="genre" v-model="genre" required>
        <div class="invalid-feedback">
          Please provide the genre
        </div>
      </div>
      <div class="mb-3">
        <label for="erscheinungsjahr" class="form-label">Erscheinungsjahr</label>
        <input type="text" class="form-control" id="erscheinungsjahr" v-model="erscheinungsjahr" required>
        <div class="invalid-feedback">
          Please provide the release
        </div>
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image Url</label>
        <input type="text" class="form-control" id="imageUrl" v-model="imageUrl" required>
        <div class="invalid-feedback">
          Please provide the imageUrl
        </div>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="createFilm">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCreateForm',
  data () {
    return {
      titel: '',
      genre: '',
      erscheinungsjahr: '',
      imageUrl: ''
    }
  },
  methods: {
    createFilm () {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        titel: this.titel,
        genre: this.genre,
        erscheinungsjahr: this.erscheinungsjahr,
        imageUrl: this.imageUrl
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('https://filmgenerator.herokuapp.com/api/v1/filme', requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}

</style>
