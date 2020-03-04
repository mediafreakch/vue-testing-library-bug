/* eslint-env jest */
import "@testing-library/jest-dom/extend-expect";
import Vue from "vue";
import { render } from "@testing-library/vue";
import GenericView from "../GenericView.vue";

describe("GenericView.vue", () => {
  let getters;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      viewInfo: () =>
        jest
          .fn()
          // first call for the Dashboard
          .mockReturnValueOnce({
            items: ["Chart"],
            title: "Test Dashboard"
          })
          // second for the Chart
          .mockReturnValueOnce({
            title: "Test Chart"
          })
    };

    actions = {
      fetchViewInfo: jest.fn().mockResolvedValue(null)
    };

    store = {
      actions,
      getters
    };
  });

  it("dispatches fetchViewInfo when created", () => {
    render(GenericView, {
      stubs: ["GenericView"],
      store,
      propsData: {
        kind: "Dashboard"
      }
    });
    expect(actions.fetchViewInfo).toHaveBeenCalled();
  });

  it("should render the chart component", async () => {
    const { getByText, debug } = render(GenericView, {
      store,
      propsData: {
        kind: "Dashboard"
      }
    });

    await Vue.nextTick();

    debug();
    getByText("Test Chart");
  });
});
