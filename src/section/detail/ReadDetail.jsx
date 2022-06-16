import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailSurah } from "../../actions/listsSurah";

const ReadDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getDetail = useSelector((state) => state.detailSurah);
  const { detail, loading } = getDetail;
  console.log(detail);
  useEffect(() => {
    if (!id) return;
    dispatch(getDetailSurah(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <h1 className="flex justify-center items-center h-screen w-full font-poppins text-4xl text-black text-opacity-80">
          Loading data
        </h1>
      ) : (
        <div className="pt-20 w-full max-w-7xl mx-auto h-auto">
          <div className="relative z-10 flex flex-col lg:flex-row w-full lg:items-center justify-start space-x-0 space-y-4 md:space-y-0 bg-ungu shadow-lg shadow-ungu/30 lg:rounded-2xl h-auto px-3 py-5">
            <div className="flex flex-col lg:items-center lg:justify-center  w-full lg:w-1/4 h-full">
              <h1 className="font-poppins text-4xl font-normal text-white">
                {detail?.nama_latin}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-start w-full h-full lg:w-3/4 py-3">
              <p className="text-white font-poppins text-lg">
                {detail?.arti} - {detail?.jumlah_ayat} ayat
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: detail?.deskripsi }}
                className="text-white pt-2 text-md font-poppins"
              />
            </div>
          </div>
          <div className="h-full bg-RegularGray rounded-b-lg shadow-lg bg-opacity-80 mt-[-20px] pt-16">
            <div className="grid grid-cols-1 w-full px-2 py-2 gap-2">
              <h1 className="text-black text-center text-opacity-80 font-arabic text-3xl font-semibold pb-5">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </h1>
              {detail?.ayat.map((el, index) => (
                <div
                  className="flex flex-col-reverse lg:flex-row items-center justify-end w-full my-2 border-b-2 border-white py-2"
                  key={index}
                >
                  <div className="flex flex-row w-full lg:w-2/4 justify-start space-x-2 px-2">
                    <p className="font-arabic text-lg text-black text-md text-opacity-90">
                      {el.nomor}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: el.idn }}
                      className="text-md font-poppins text-black text-opacity-90"
                    />
                  </div>
                  <div className="flex flex-row w-full lg:w-2/4 justify-end pb-8 lg:pb-0">
                    <h3 className="text-2xl font-arabic text-black text-right">
                      {el.ar}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadDetail;
