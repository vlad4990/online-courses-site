<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Online courses</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NuxtLink exact active-class="actice" class="nav-link" to="/">
            Главная
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink active-class="active" class="nav-link" to="/courses">
            Курсы
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink active-class="active" class="nav-link" to="/about">
            about
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
const courses = require('@@/static/mock/data.json')
import {mapActions} from 'vuex'
export default {
name: "v-navbar",
  methods: {
  ...mapActions([
    'GET_COURSES_FROM_JSON'
  ])
  },
  beforeMount() {
    this.GET_COURSES_FROM_JSON(courses.courses)
  }
}
</script>

<style scoped>

</style>
