<template>
  <div class="input_contaciner">
    <atoms-calc-history-icon :handle-show-history="handleShowHistory" />
    <atoms-calc-display :input-value="inputValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    inputValue: {
      type: String,
      required: true
    },
    handleShowHistory: {
      type: Function,
      requird: true
    }
  }
})
</script>

<style lang="scss" scoped>
.input_contaciner {
  height: auto;
  padding: 10px 10px 0 10px;
  text-align: right;
  font-weight: bold;
  border: 2px solid #a5a1a1;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
