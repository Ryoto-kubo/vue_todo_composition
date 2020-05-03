<template>
  <div class="list_container">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list_container {
  text-align: left;
  p {
    padding-left: 5px;
    margin: 0;
    border-bottom: 2px solid #6fbae5;
    color: #6fbae5;
    font-weight: bold;
  }
}
</style>
