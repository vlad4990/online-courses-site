<template>
  <div class="main_page">
    <h1>Добро пожаловать на Online Courses</h1>
    <NuxtLink to="/courses" type="button" class="button__site">Перейти к просмотру курсов</NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style>
.main_page{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}

.button__site{
  margin: 30px;
}
</style>
