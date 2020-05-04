<template>
  <div class="accordion_contents">
    <div @click="handleRotateArrow(id)">
      <moleculesAccordion :id="id" />
    </div>
    <div :id="'js-toggle_menu_0' + id" class="accordion_contents_body">
      <moleculesAccordionContents title="名前" />
      <moleculesAccordionContents title="住所" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from '@vue/composition-api'

type ReactiveObject = {
  clientHeight: number
}
type Props = {
  id: string
}

function useShowAccordion(id: string) {
  const state: ReactiveObject = reactive({
    clientHeight: 0
  })

  onMounted(() => {
    const jsToggleMenu: HTMLElement | null = document.getElementById(
      'js-toggle_menu_0' + id
    )
    if (jsToggleMenu !== null) {
      state.clientHeight = jsToggleMenu.clientHeight
      jsToggleMenu.style.height = 'auto'
      jsToggleMenu.style.height = '0px'
    }
  })

  const handleShowAccordion = (): void => {
    const jsToggleMenu = document.getElementById('js-toggle_menu_0' + id)
    if (jsToggleMenu !== null) {
      const lastH = jsToggleMenu.style.height
      jsToggleMenu.style.height =
        lastH == '' || lastH == '0px' ? state.clientHeight + 'px' : '0px'
    }
  }
  const handleRotateArrow = (id: string) => {
    const jsRotateArrow = document.getElementById('js-rotate_arrow_0' + id)
    if (jsRotateArrow !== null) {
      if (jsRotateArrow.classList.contains('rotate_active')) {
        jsRotateArrow.classList.remove('rotate_active')
        jsRotateArrow.classList.add('rotate_disabled')
        handleShowAccordion()
      } else {
        jsRotateArrow.classList.add('rotate_active')
        jsRotateArrow.classList.remove('rotate_disabled')
        handleShowAccordion()
      }
    }
  }

  return {
    handleRotateArrow
  }
}

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props: Props) {
    const { id } = props
    const { handleRotateArrow } = useShowAccordion(id)
    return {
      handleRotateArrow
    }
  }
})
</script>

<style lang="scss" scoped>
.accordion_contents {
  width: 100%;
  max-width: 350px;
  margin: auto;
  &_body {
    overflow: hidden;
    transition: 0.5s all;
    padding: 0 5px;
  }
}
</style>
