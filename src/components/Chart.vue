<template>
  <h2>{{ viewData.title }}</h2>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Chart",
  props: ["viewData"]
});
</script>