<template>
  <div class="icon_container" @click="handleShowHistory">
    <font-awesome-icon icon="history" size="1x" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    handleShowHistory: {
      type: Function,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.icon_container {
  text-align: left;
  svg {
    color: #80868b;
    width: 22px;
    height: 22px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
