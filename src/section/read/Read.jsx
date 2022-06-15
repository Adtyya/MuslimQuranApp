import React, { useEffect } from "react";
import ReadHero from "./ReadHero";
import iconImage from "../../assets/quran.png";
import { useSelector, useDispatch } from "react-redux";
import { listsSurah } from "../../actions/listsSurah";

const Read = () => {
  const dispatch = useDispatch();

  const getList = useSelector((state) => state.listsSurah);
  const { lists } = getList;

  useEffect(() => {
    dispatch(listsSurah());
  }, [dispatch]);

  return (
    <div>
      <ReadHero />
      <div className="w-full bg-RegularGray max-w-7xl mx-auto mt-8 lg:rounded-md px-3 py-4">
        <h1 className="text-black text-opacity-60 font-poppins text-4xl font-semibold">
          List Surat
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-7 gap-5">
          {lists &&
            lists.map((el) => (
              <div
                className="cards flex flex-row items-center justify-end w-full rounded-md px-2 py-4 shadow-md text-black text-opacity-80"
                key={el.nomor}
              >
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-arabic font-semibold">
                    {el.nama}
                  </h3>
                  <h3 className="text-lg font-poppins font-semibold">
                    {el.nama_latin} - {el.jumlah_ayat} ayat
                  </h3>
                </div>
                <img src={iconImage} alt="icon" className="w-[15%]" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
