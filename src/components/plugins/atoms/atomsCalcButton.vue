<template>
  <div class="button_container">
    <div
      class="button_container__row"
      v-for="numberArray in numberUnitArray"
      :key="numberArray.id"
    >
      <div
        class="button_container__row__item"
        v-for="cmd in numberArray"
        :key="cmd.id"
      >
        <button @click="handleAddInput(cmd)">{{ cmd }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    numberUnitArray: {
      type: Array,
      required: true
    },
    handleAddInput: {
      type: Function,
      requird: true
    }
  }
})
</script>

<style lang="scss" scoped>
.button_container {
  &__row {
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &__item {
      width: calc((100% - 40px) / 4);
      button {
        width: 100%;
        height: 60px;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>
