<template>
  <div>
    <navbar />

    <Nuxt />
  </div>
</template>

<script>
import navbar from '@/components/v-navbar'
export default {
  components:{
    navbar
  }
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
  background-color: #40464c;
  color: #ececec;
}

.container{
  max-width: 1390px;
  width: 100%;
  margin: 0 auto;
}

.button__site{
  background-color: #c0c0c0;
  width: 100%;
  padding: 15px;
  color: #2d2d2d;
  cursor: pointer;
  text-decoration: none;
  transition: background-color .2s linear;
}

.button__site:hover{
  background-color: #929292;
  color: #2d2d2d;
  text-decoration: none;
}
</style>
