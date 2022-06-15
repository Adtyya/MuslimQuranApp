const listsSurahReducer = (state = { listsSurah: [], msg: "" }, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        success: true,
        lists: action.payload,
      };
    case "ERROR":
      return {
        success: false,
        msg: action.text,
      };
    default:
      return state;
  }
};
export default listsSurahReducer;
