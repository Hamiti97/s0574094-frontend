<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/filmgenerator" class="btn btn-primary" role="button">Film vorschlagen</a>
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
  color: #000000;
}
</style>
