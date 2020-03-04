/* eslint-env jest */
import Vuex from "vuex";
import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import GenericView from "../GenericView";

const localVue = createLocalVue();

localVue.use(Vuex);

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

    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("dispatches fetchViewInfo when created", () => {
    mount(GenericView, {
      stubs: ["GenericView"],
      localVue,
      store,
      props: {
        kind: "Dashboard"
      }
    });
    expect(actions.fetchViewInfo).toHaveBeenCalled();
  });

  it("should render the chart component", async () => {
    const wrapper = mount(GenericView, {
      store,
      localVue,
      propsData: {
        kind: "Dashboard"
      }
    });

    await Vue.nextTick();

    const h2 = wrapper.find("h2");
    expect(h2.text() === "Test Chart").toBe(true);
  });
});
