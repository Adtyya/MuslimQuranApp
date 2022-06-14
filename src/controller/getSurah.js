import axios from "axios";

export const getSurahList = async () => {
  const url = await axios.get("https://equran.id/api/surat");
  const res = await url.data;
  return console.log(res);
};
