<template>
  <input class="input" :type="type" :name="name" :placeholder="placeHolder" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeHolder: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 150px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
}
</style>
