<template>
  <div>
    <h4>{{ title }}</h4>
    <span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    content: String
  }
};
</script>

<style scoped></style>
