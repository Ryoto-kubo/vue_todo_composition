<template>
  <div class="input_container">
    <atomsInputTitle class="input_container_title" title="名前" />
    <div class="input_container_items">
      <atomsInputText name="first_name" type="text" place-holder="山田" />
      <atomsInputText name="last_name" type="text" place-holder="太郎" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.input_container {
  width: 100%;
  box-shadow: 0 3px 6px #707070;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &_title {
    margin-bottom: 10px;
  }
  &_items {
    display: flex;
    justify-content: space-around;
  }
}
</style>
