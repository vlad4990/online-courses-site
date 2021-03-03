<template>
  <div class="container">
    <div class="sort__buttons">
      <a @click.prevent="sortByPrice" class="button__site">Сортировать по цене</a>
      <a @click.prevent="sortByDate" class="button__site">Сортировать по дате</a>
      <a @click.prevent="sortByDefault" class="button__site">Сортировать по умолчанию</a>
    </div>


    <div>
      <div class="course-items__inner">
        <v-course-item
          v-for="course in catalog_courses"
          :key="course.id"
          :course_data="course"
        />
      </div>
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

}

.course-items__inner{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 ;
  width: auto;
  margin-bottom: 20px;
}

.sort__buttons{
  padding: 10px;
  margin-top: 10px;
  text-align: right;
}
</style>
