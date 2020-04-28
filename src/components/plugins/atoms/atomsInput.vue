<template>
  <input class="input" type="text" :value="inputValue || '0'" readonly />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    inputValue: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
  width: 400px;
  height: 50px;
  padding: 10px;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
