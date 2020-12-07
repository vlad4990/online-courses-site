<template>
  <div>
    <h1>Описание Курса</h1>
    <div class="d-flex justify-content-xl-start p-3">
      <NuxtLink to="/courses/" type="button" class="btn btn-primary">Вернуться назад</NuxtLink>
      <a @click="chg" class="btn btn-primary btn-danger">Редактировать курс</a>
    </div>
    <section>
      <v-item-description
        :course_description = "COURSES[COURSES.findIndex(i => i.id === ($route.params.id))]"
      />
    </section>
    <a  class="btn btn-primary d-flex flex-fill btn-danger mt-5">Зона редактирования</a>
    <v-item-change
        :chandescr = "ison=!ison"
        :course_change = "COURSES[COURSES.findIndex(i => i.id === ($route.params.id))]"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VItemDescription from "~/components/v-item-description";
import VItemChange from "~/components/v-item-change";

export default {
  name: "_id",
  components: {VItemChange, VItemDescription},
  computed: {
    ...mapGetters(["COURSES"])
  },
  methods:{
    chg(){
      this.$emit('chandescr')
    }
}
}
</script>

<style scoped>

</style>
