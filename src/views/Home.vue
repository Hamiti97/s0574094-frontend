<template>
  <body>
  <div class="home">
    <HelloWorld msg="Film Finder"/>
  </div>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <div>
  <a href="/guide" class="btn btn-danger btn-lg" role="button">ZUM FILMFINDER GUIDE</a>
  </div>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HomeMessage.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
h1 {
  color: #eee9e9;
  font-size: 3em;
  display: inline;
  background-color: #212529;
  border: 3px #eee9e9 solid;
}
body { background-image: url("../assets/frontend-filme.png"); }
a {
  background-color: #212529;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border: 3px #eee9e9 solid;
}
</style>
