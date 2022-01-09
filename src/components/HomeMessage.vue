<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <a href="/filmgenerator" class="btn btn-danger btn-lg" role="button">FILM VORSCHLAGEN</a>
  </div>
</template>

<script>
export default {
  name: 'Film Generator',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #eee9e9;
  font-size: 5em;
  background-color: #212529;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 100px;
}
a {
  color: #eee9e9;
  background-color: #212529;
  height: 60px;
  width: 400px;
  border: 5px #eee9e9 solid;
}
</style>
