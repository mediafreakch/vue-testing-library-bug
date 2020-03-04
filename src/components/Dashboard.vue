<template>
  <div>
    <h1>{{ viewData.title }}</h1>
    <GenericView v-for="(item, index) in viewData.items" :key="index" :kind="item"/>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
  props: ["viewData"],
  components: {
    GenericView: () => import("./GenericView.vue").then(m => m.default)
  }
});
</script>
