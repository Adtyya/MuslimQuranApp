import React, { useEffect } from "react";
import ReadHero from "./ReadHero";
import iconImage from "../../assets/quran.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Read = () => {
  const getList = useSelector((state) => state.listsSurah);
  const { lists, loading, success, msg } = getList;
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <ReadHero />
      <div className="w-full bg-RegularGray max-w-7xl mx-auto mt-8 lg:rounded-md px-3 py-4">
        <h1 className="text-black text-opacity-60 font-poppins text-4xl font-semibold">
          List Surat
        </h1>
        {success ? (
          ""
        ) : (
          <h1 className="text-center text-3xl font-poppins font-semibold text-black text-opacity-60">
            {msg}
          </h1>
        )}
        {loading && (
          <h1 className="text-center text-3xl font-poppins font-semibold text-black text-opacity-60">
            Loading data.....
          </h1>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-7 gap-5">
          {lists &&
            lists.map((el) => (
              <Link to={`/read/s=${el.nama}/no=${el.nomor}`} key={el.nomor}>
                <div data-aos="fade-up">
                  <div className="cards flex flex-row items-center justify-end w-full rounded-md px-2 py-4 shadow-md text-black text-opacity-80">
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
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
