<template>
  <p class="input">{{ inputValue || '0' }}</p>
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
  margin: 0;
  font-size: 32px;
}
</style>
