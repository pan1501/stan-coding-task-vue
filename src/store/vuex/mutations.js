import { Model } from "../Model.js";

export const mutations = {
  SET_DATA_READY: (state) => {
    state.rawData = Model.data;
    state.nestedData = Model.nestedByType()
    state.programType = Model.getProgramTypes();
    state.dataReady = true
  },
  SET_CURRENTSECTION: (state, currentSection) =>{
    // update current section
    state.currentSection = currentSection;
  }
}

export default mutations
