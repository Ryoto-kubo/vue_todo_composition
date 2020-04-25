<template>
  <atoms-input :default-value="defaultValue" />
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    defaultValue: {
      type: String,
      required: true
    }
  }
})
</script>
