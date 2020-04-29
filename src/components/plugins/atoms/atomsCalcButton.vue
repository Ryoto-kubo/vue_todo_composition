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
        <button
          @click="handleAddInput(cmd.value)"
          :class="[
            { number_btn: cmd.type === 'number' },
            { operator_btn: cmd.type === 'operator' },
            { calculation_btn: cmd.type === 'calculation' }
          ]"
        >
          {{ cmd.value }}
        </button>
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
      width: calc((100% - 45px) / 4);
      button {
        width: 100%;
        height: 36px;
        font-size: 18px;
        border-radius: 5px;
        outline: none;
      }
    }
  }
}
.number_btn {
  background: #f1f3f4;
  border: 1px solid #f1f3f4;
  color: #202124;
}
.operator_btn {
  background: #dfe1e5;
  border: 1px solid #dfe1e5;
  font-weight: bold;
  color: #202124;
}
.calculation_btn {
  background: #4285f4;
  border: 1px solid #4285f4;
  color: #ffffff;
  font-weight: bold;
}
</style>
