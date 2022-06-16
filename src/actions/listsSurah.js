import axios from "axios";

export const listsSurah = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DATA",
    });
    const url = await axios.get("https://equran.id/api/surat");
    const res = await url.data;
    dispatch({
      type: "SHOW",
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      text: "An error occured",
    });
  }
};

export const getDetailSurah = (id) => async (dispatch, state) => {
  try {
    dispatch({
      type: "LOADING_READ_DETAIL",
    });
    const url = await axios.get(`https://equran.id/api/surat/${id}`);
    const res = await url.data;
    dispatch({
      type: "SHOW_DETAIL",
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: "FAILED",
      msg: "An error occured! Failed to load data.",
    });
  }
};
