import { Model } from "../Model.js";
import * as data from "../../assets/sample.json";

export const actions = {
  LOAD_DATA: function ({ commit }) {
      Model.data = data.default;
      commit("SET_DATA_READY");
  }

}