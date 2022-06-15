import axios from "axios";

export const listsSurah = () => async (dispatch) => {
  try {
    const url = await axios.get("https://equran.id/api/surat");
    const res = await url.data;
    dispatch({
      type: "SHOW",
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      text: "Error occured",
    });
  }
};
