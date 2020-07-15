<script>
import Project from "./Project";
import Portfolio from "./Portfolio";
import { mapGetters } from "vuex";

export default {
  name: "GenericView",
  props: ["kind", "id"],
  computed: {
    ...mapGetters(["byProject"])
  },
  render: function(h) {
    if (this.kind) {
      switch (this.kind) {
        case "project": {
          const viewData = this.byProject(this.id);
          return h(Project, { props: viewData });
        }
        case "portfolio":
          return h(Portfolio);
        default:
          return h("strong", "Unsupported type!");
      }
    }
    return h("span", "Loading");
  }
};
</script>
