<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="todo">
      <div class="todo__block">
        <div class="todo__block__item">
          <input type="text" placeholder="" />
        </div>
      </div>
      <div class="todo__block">
        <div class="todo__block__item">
          <button type="button" @click="newTodoText">タスクを追加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import {
  defineComponent,
  ref,
  computed,
  watch,
  Ref
} from '@vue/composition-api';

function useUpdateTodo() {
  const newTodoText = ref('');
}
export default defineComponent({});
</script>

<style lang="scss" scoped>
.todo {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  &__block {
    &:nth-child(odd) {
      margin-bottom: 16px;
    }
    &__item {
      input {
        font-size: 18px;
        outline: none;
        width: 300px;
        height: 50px;
        padding: 8px;
        border-radius: 5px;
        box-sizing: border-box;
      }
      button {
        outline: none;
        border: none;
        font-size: 16px;
        font-weight: bold;
        height: auto;
        padding: 5px 16px;
        border-radius: 5px;
        background: #40b883;
        color: #fff;
      }
    }
  }
}
</style>
