<template>
<div>
  <div class="border">
    <img v-if="$route.params.id < 7" :src="require('../assets/images/' + $route.params.id + '.jpg') " class="card-img-top img-course-view" alt="...">
    <img v-else :src="require('../assets/images/7.jpg') " class="card-img-top img-course-view" alt="...">
  </div>

  <div>
    <h4>{{course_description.name}}</h4>
    <p class="border m-2">{{course_description.description}}</p>
    <h3>Цена: {{course_description.price}} рублей</h3>
    <h3>Дата начала проведения:{{course_description.date}}</h3>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-item-description",
  props: {
    course_description: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    ...mapGetters(['COURSES']),
  }
}
</script>

<style scoped>
.img-course-view {
  max-width: 500px;
}
</style>
