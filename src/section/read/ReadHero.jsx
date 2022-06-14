import React, { useState, useEffect } from "react";

const ReadHero = () => {
  let [timesNow, setTimesNow] = useState("");

  let year = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    year: "numeric",
  })
    .format(Date.now())
    .slice(0, 4);
  const dayName = [
    "minggu",
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
  ];
  let day = new Date().getDay();
  let getTime = () => {
    let date = new Date().toLocaleTimeString();
    let times = date.replace(":", " .").replace(":", " .");
    setTimesNow(times);
  };
  setInterval(() => {
    getTime();
  }, 1000);
  useEffect(() => {
    getTime();
    // getSurahList();
  }, []);

  return (
    <div className="flex justify-center pt-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row w-full md:items-center justify-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 bg-ungu shadow-lg shadow-ungu/30 bg-opacity-80 lg:rounded-lg h-auto px-3 py-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center  space-x-2 lg:space-x-2">
          <p className="text-white font-poppins text-sm">Hari</p>
          <h1 className="font-poppins text-4xl font-normal text-white">
            {dayName[day]}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-2 md:space-x-0 lg:space-x-2">
          <p className="text-white font-poppins text-sm">Tahun</p>
          <div className="flex flex-row items-center space-x-2">
            <h1 className="font-poppins text-4xl font-normal text-white">
              {year}
            </h1>
            <p className="text-white font-poppins font-normal text-md">
              Hijriah
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-x-2 md:space-x-0 lg:space-x-2 lg:items-center w-full md:w-1/4 lg:w-[20%]">
          <p className="text-white font-poppins text-sm">Jam</p>
          <h1 className="font-poppins text-4xl font-normal text-white">
            {timesNow}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ReadHero;
