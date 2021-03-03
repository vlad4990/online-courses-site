<template>
<div>
  <div class="courses__inner">
    <div class="courses_catalog">
      <h1 class="description">Список всех курсов</h1>
      <NuxtLink to="/courses/add" type="button" class="button__site">Добавить Курс</NuxtLink>
    </div>
    <div class="courses_catalog__items">
      <v-display-catalog
        :catalog_courses="COURSES"
      />
    </div>
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
}

.courses__inner{
  background-color: #f7f7f7;
}

.description{
  color: #40464c;
  padding: 30px 0 20px;
  font-weight: 700;
}

.button__site{
  max-width: max-content;
}
</style>
