export const Model = {
    data: [],
    // nested the comics by its format
    nestedByType () {
        // nest data by programType
        let nestedData = {}
        this.data["entries"].forEach(entry => {
            if (!nestedData[entry.programType]) nestedData[entry.programType] = []
            nestedData[entry.programType].push(entry)
        });
        return nestedData;
    },
    getProgramTypes() {
        // get all programTypes
        return Object.keys(this.nestedByType())
    }
}
export default Model