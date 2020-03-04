<script>
import Vue from "vue";
import Dashboard from "./Dashboard.vue";
import Chart from "./Chart.vue";

export default Vue.extend({
  name: "GenericView",
  props: ["kind"],
  created: async function() {
    await this.fetchViewInfo(this.kind);
  },
  methods: {
    fetchViewInfo: function(kind) {
      this.$store.dispatch("fetchViewInfo", kind);
    }
  },
  computed: {
    viewInfo: function() {
      return this.$store.getters.viewInfo(this.kind);
    }
  },
  render: function(h) {
    if (this.viewInfo && this.kind) {
      switch (this.kind) {
        case "Chart":
          return h(Chart, {
            props: { ...this.$props, viewData: this.viewInfo }
          });
        case "Dashboard":
          return h(Dashboard, {
            props: { ...this.$props, viewData: this.viewInfo }
          });
        default:
          return h("strong", "Unsupported type!");
      }
    }
    return h("span", "Loading");
  }
});
</script>
