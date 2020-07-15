<template>
  <div>
    <GenericView
      v-for="(project, index) in projects"
      :key="index"
      kind="project"
      :id="project"
    />
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  components: {
    GenericView: () => import("./GenericView.vue").then(m => m.default)
  },
  data() {
    return {
      projects: ["project1", "project2"]
    };
  }
};
</script>
