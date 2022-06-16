export const listsSurahReducer = (state = { lists: [], msg: "" }, action) => {
  switch (action.type) {
    case "LOADING_DATA": {
      return {
        loading: true,
      };
    }
    case "SHOW":
      return {
        success: true,
        lists: action.payload,
        loading: false,
      };
    case "ERROR":
      return {
        success: false,
        msg: action.text,
      };
    default:
      return (state = false);
  }
};

export const getDetailSurah = (state = { detail: {}, msg: "" }, action) => {
  switch (action.type) {
    case "LOADING_READ_DETAIL":
      return {
        loading: true,
      };
    case "SHOW_DETAIL":
      return {
        loading: false,
        detail: action.payload,
        success: true,
      };
    case "FAILED":
      return {
        msg: action.msg,
      };
    default:
      return (state = false);
  }
};
