//
<template>
  <!-- <div class="home">
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
  </div> -->
  <div class="home">
    <div class="input_container">
      <div class="input_container_first">
        <input type="text" v-model="state.firstText" />
        {{ state.firstText }}
      </div>
      <div class="input_container_first">
        <input type="text" v-model="state.secondText" />
        {{ state.secondText }}
      </div>
    </div>
    <p>
      {{ state.hoge }}
    </p>
    <div class="btn_container">
      <button type="button" @click="addText">
        文字を合成
      </button>
    </div>
    <div class="btn_container">
      <button type="button" @click="deleteText">
        文字を削除
      </button>
    </div>

    <div v-for="item in itemArray" :key="item.id">
      <p>{{ item }}</p>
    </div>
    <button type="button" @click="insertArray">配列に追加</button>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from '@vue/composition-api'
const useAddString = () => {
  const state = reactive({
    hoge: '',
    firstText: '',
    secondText: ''
  })
  const addText = (): void => {
    state.hoge = state.firstText + state.secondText
  }
  const deleteText = (): void => {
    state.hoge = '削除しました'
  }
  return {
    state,
    addText,
    deleteText
  }
}

const createArray = () => {
  const itemArray = ref(['jon', 'tarou', 'hanako', ''])
  // const itemArray = reactive(['jon', 'tarou', 'hanako', ''])
  const insertArray = (): void => {
    const text = 'text'
    itemArray.value.push(text)
  }

  return {
    itemArray,
    insertArray
  }
}

export default defineComponent({
  setup() {
    const { state, addText, deleteText } = useAddString()
    const { itemArray, insertArray } = createArray()
    return {
      state,
      addText,
      deleteText,

      itemArray,
      insertArray
    }
  }
})
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
