<template>
<div>
  <div class="courses_catalog">
    <h1>Список всех курсов</h1>
    <NuxtLink to="/courses/add" type="button" class="btn btn-primary btn-lg btn-danger">Добавить Курс</NuxtLink>
  </div>
  <div class="courses_catalog__items">
    <v-display-catalog
      :catalog_courses="COURSES"
    />
  </div>
</div>
</template>

<script>
import VCourseItem from "~/components/v-course-item"
import {mapGetters, mapActions} from 'vuex'
import VDisplayCatalog from "~/components/v-display-catalog";
export default {
  name: "index",
  components:{
    VDisplayCatalog
  },
  methods:{

  },
  computed:{
    ...mapGetters([
      "COURSES"
    ])
  }

}
</script>

<style>
.courses_catalog{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
},
.courses_catalog__items{

}
</style>
