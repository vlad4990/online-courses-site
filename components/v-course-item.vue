<template>
<div>
  <div class="course-item card" style="width: 18rem;">
    <img :src="require('../assets/images/' + course_data.image) " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{course_data.name}}</h5>
      <p class="card-text">{{course_data.description}}</p>
      <h5 class="card-title">Дата начала курса: <br/>{{new Date(course_data.date).getUTCDate()+1}}.{{new Date(course_data.date).getUTCMonth()+1}}.{{new Date(course_data.date).getUTCFullYear()}}</h5>
      <h5 class="card-title">Стоимость курса:<br/>{{course_data.price}} рублей</h5>
      <a @click.prevent="openCourse(course_data.id)" class="btn btn-primary">Подробнее...</a>
      <a @click="del" class="btn btn-primary">Удалить элемент</a>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
name: "v-course-item",
  props: {
    course_data:{
      type: Object,
      default() {
        return{}
      }
    }
  },
  methods:{
  ...mapMutations(['DELETE_COURSE_FROM_STATE']),
    del(){
    this.DELETE_COURSE_FROM_STATE(this.course_data.id)
    }
  }
}
</script>

<style scoped>
.course-item{
  margin: 10px;
  width: 40%;
}
.card-text{
  max-height: 300px;
  overflow-y: hidden;
}
</style>
