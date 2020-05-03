<template>
  <templateAccordion :handle-rotate-arrow="handleRotateArrow" />
</template>

<script lang="ts">
import templateAccordion from '../templates/templateAccordion.vue'
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

function useShowAccordion() {
  const handleRotateArrow = (suffixId: string) => {
    const jsRotateArrow = document.getElementById(
      'js-rotate_arrow_0' + suffixId
    )
    if (jsRotateArrow !== null) {
      if (jsRotateArrow.classList.contains('rotate_active')) {
        jsRotateArrow.classList.remove('rotate_active')
        jsRotateArrow.classList.add('rotate_disabled')
      } else {
        jsRotateArrow.classList.add('rotate_active')
        jsRotateArrow.classList.remove('rotate_disabled')
      }
    }
  }
  return {
    handleRotateArrow
  }
}

export default defineComponent({
  components: {
    templateAccordion
  },
  setup() {
    const { handleRotateArrow } = useShowAccordion()
    return {
      handleRotateArrow
    }
  }
})
</script>

<style></style>
