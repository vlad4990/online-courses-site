<template>
<div>
  <div class="course-item card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="course-item__name">{{course_data.name}}</h5>
      <div class="course-item__inner">
        <div class="card-text course-item__description">{{course_data.description}}</div>
        <div class="course-item__description pb-2">...</div>
        <h5 class="card-title">Дата начала курса: <br/>{{new Date(course_data.date).getUTCDate()+1}}.{{new Date(course_data.date).getUTCMonth()+1}}.{{new Date(course_data.date).getUTCFullYear()}}</h5>
        <h5 class="card-title">Стоимость курса:<br/>{{course_data.price}} р.</h5>
        <img v-if="course_data.id < 7" :src="require('../assets/images/' + course_data.id + '.jpg') " class="card-img-top course-item__img" alt="require('../assets/images/1.jpg') ">
        <img v-else :src="require('../assets/images/7.jpg') " class="card-img-top course-item__img" alt="require('../assets/images/1.jpg') ">
        <div class="course-item__btn__inner">
          <a @click.prevent="openCourse(course_data.id)" class="course-item__btn ">Подробнее...</a>
          <a @click="del" class="course-item__btn">Удалить курс</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
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
    },
    openCourse(courseID){
      this.$router.push('/courses/' + courseID)
    }
  },
  computed: {
  ...mapGetters(['COURSES'])
  }
}
</script>

<style scoped>
.card{
  border-radius: 0;
  border: 0;
}
.course-item{
  margin: 10px;
  min-width: 320px;
  background-color: #1f1f1f;
  height: 100%;
  min-height: 630px;
  color: #ececec;

}
.card-text{
  max-height: 76px;
  overflow-y: hidden;
  min-width: 320px;
}

.card-title{
  padding-left: 20px;
}

.course-item__name{
  padding-top: 30px;
  font-weight: 700;
}
.course-item__img{
  overflow: hidden;
  padding: 0px 20px 20px;
}

.card-body{
  position: relative;
}

.course-item__inner{
  position: absolute;
  bottom: 0;
  margin-left: -20px;
}

.course-item__description{
  padding: 0 20px;
}

.course-item__btn__inner{

  display: flex;
  flex-direction: column;
  width: 100%;
}

.course-item__btn{
  background-color: #bebebe;
  height: 40px;
  text-align: center;
  padding-top: 7px;
  color: #1f1f1f;
  transition: background-color .2s linear;
}

.course-item__btn:last-child{
  background-color: #b0b0b0;
}
.course-item__btn:hover{
  background-color: #cdcdcd;
  text-decoration: none;
}

</style>
