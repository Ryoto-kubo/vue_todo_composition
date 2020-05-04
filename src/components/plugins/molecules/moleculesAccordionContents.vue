<template>
  <div class="input_container">
    <atomsInputTitle class="input_container_title" :title="title" />
    <div class="input_container_items">
      <atomsInputText name="first_name" type="text" place-holder="山田" />
      <atomsInputText name="last_name" type="text" place-holder="太郎" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.input_container {
  width: 100%;
  box-shadow: 0 3px 6px #707070;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  transition: 0.5s ease-out;
  margin-bottom: 15px;
  &_title {
    margin-bottom: 10px;
  }
  &_items {
    display: flex;
    justify-content: space-around;
  }
}
</style>
