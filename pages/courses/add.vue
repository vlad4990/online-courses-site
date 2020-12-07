<template>
  <div>
    <NuxtLink to="/courses/" type="button" class="btn btn-primary">Вернуться назад</NuxtLink>
    <h1>Заполните поля для ввода:</h1>
    <form @submit.prevent="submit">
      <div class="d-flex flex-column">
        <h4>Введите название курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="Название..." v-model="name">
      </div>
      <div class="d-flex flex-column">
        <h4>Введите описание курса:</h4>
        <textarea class="mr-3 ml-3" type="text" placeholder="Описание..." v-model="description"/>
      </div>
      <div class="d-flex flex-column">
        <h4>Введите стоимость курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="000.00" v-model="price">
      </div>
      <div class="d-flex flex-column">
        <h4>Введите дату начала проведения курса:</h4>
        <input class="mr-3 ml-3" type="text" placeholder="ГГГГ, ММ, ДД" v-model="date">
      </div>
      <button class="m-3" type="submit"> добавить курс</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "add",
  data () {
    return {
      name: '',
      description: '',
      price: '',
      date: ''
    }
  },
  methods: {
    ...mapMutations(['ADD_COURSE']),
    submit(){
      this.ADD_COURSE({
        date: this.date,
        description: this.description,
        id: this.NEED_ID,
        name: this.name,
        price: Number(this.price)
      })
    }
  },
  computed: {
    ...mapGetters(['NEED_ID'])
  }
}
</script>

<style scoped>

</style>
