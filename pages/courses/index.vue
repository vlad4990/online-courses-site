<template>
<div>
  <h1>hello</h1>
  <v-course-item
    v-for="course in COURSES"
    :key="course.id"
    :course_data="course"
  />
</div>
</template>

<script>
import VCourseItem from "~/components/v-course-item"
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "index",
  components:{
    VCourseItem
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

<style scoped>

</style>
