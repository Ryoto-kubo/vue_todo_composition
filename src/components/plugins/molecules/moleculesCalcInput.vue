<template>
  <atoms-input :input-value="inputValue" />
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    inputValue: {
      type: String,
      required: true
    }
  }
})
</script>
