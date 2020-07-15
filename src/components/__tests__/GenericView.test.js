/* eslint-env jest */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/vue";
import GenericView from "../GenericView.vue";

describe("GenericView.vue", () => {
  it("should render the project1 component inside the portfolio", async () => {
    const { findByText, debug } = render(GenericView, {
      propsData: {
        kind: "portfolio"
      }
    });

    await findByText("Project1 Title");
    await findByText("Project1 Content");
    debug();
  });
});
