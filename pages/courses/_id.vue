<template>
  <div>
    <div class="container">
      <h1>Описание Курса</h1>
      <div class="d-flex justify-content-xl-start">
        <NuxtLink to="/courses/" type="button" class="button__site">Вернуться назад</NuxtLink>
      </div>
      <section>
        <v-item-description
          :course_description = "COURSES[COURSES.findIndex(i => i.id === ($route.params.id))]"
        />
      </section>
      <a  class="d-flex flex-fill bg-dark mt-5">Зона редактирования</a>
      <v-item-change
        class="change__desc__inner"
        :chandescr = "ison=!ison"
        :course_change = "COURSES[COURSES.findIndex(i => i.id === ($route.params.id))]"
      />
    </div>
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
.change__desc__inner{
  background-color: #bebebe;
  padding: 10px;
}

.button__site{
  margin: 5px;
}
</style>
