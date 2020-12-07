<template>
  <div>
    <a @click.prevent="sortByPrice" class="btn btn-primary">Сортировать по цене</a>
    <a @click.prevent="sortByDate" class="btn btn-primary">Сортировать по дате</a>
    <a @click.prevent="sortByDefault" class="btn btn-primary">Сортировать по умолчанию</a>



    <div class="course-items">
      <v-course-item
        v-for="course in catalog_courses"
        :key="course.id"
        :course_data="course"
      />
    </div>
  </div>
</template>

<script>
import VCourseItem from "~/components/v-course-item";
export default {
name: "v-display-catalog",
  components: {VCourseItem},
  props:{
    catalog_courses:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    async sortByPrice(){
      this.catalog_courses.sort((a,b) => a.price - b.price);
      console.log('сортировка по цене')
    },
    async sortByDate(){
      this.catalog_courses.sort((a,b) => a.date.localeCompare(b.date));
      console.log('сортировка по дате')
    },
    async sortByDefault(){
      this.catalog_courses.sort((a,b) => a.id - b.id);
      console.log('сортировка по умолчанию')
    }
  }
}
</script>

<style>
.course-items{
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}
</style>
