const initState = {};

const previewReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "preview":
      return payload;
    default:
      return state;
  }
};

export default previewReducer;