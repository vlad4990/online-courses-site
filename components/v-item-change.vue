<template>
  <div>
    <form @submit.prevent="submit">
      <div class="d-flex flex-column">
        <h4>Название курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="name" v-model="name">
      </div>
      <div class="d-flex flex-column">
        <h4>Описание курса:</h4>
        <textarea class="mr-3 ml-3 height_text" type="text" placeholder="description" v-model="description"/>
      </div>
      <div class="d-flex flex-column">
        <h4>Стоимость курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="price" v-model="price">
      </div>
      <div class="d-flex flex-column">
        <h4>Дата начала проведения курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="date" v-model="date">
      </div>
      <button class="btn-danger m-3" type="submit"> Подтвердить редактирование</button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
name: "v-item-change",
  data() {
    return {
      name: this.course_change.name,
      description: this.course_change.description,
      price: this.course_change.price,
      date: this.course_change.date,
      ison: false
    }
  },
  methods: {
  ...mapMutations(['CHANGE_COURSE']),
    submit(){
      this.CHANGE_COURSE({
        date: this.date,
        description: this.description,
        id: this.course_change.id,
        name: this.name,
        price: Number(this.price)
      })
    }
  },
  props: {
    course_change: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.height_text{
  height: 250px;
}
</style>
