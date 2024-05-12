"use client";
import { useRef, useState } from "react";
import HasilHitung from "../components/hasilHitung";

const HitungPage = () => {
  const [idList, setIdList] = useState(0);
  const [hasil, setHasil] = useState(null);

  const vektor1I = useRef();
  const vektor1J = useRef();
  const vektor1K = useRef();

  const vektor2I = useRef();
  const vektor2J = useRef();
  const vektor2K = useRef();

  const handleAddVector = (e) => {
    e.preventDefault();
    if (
      vektor1I.current.value === "" ||
      vektor1J.current.value === "" ||
      vektor2I.current.value === "" ||
      vektor2J.current.value === ""
    )
      return alert("Input tidak boleh kosong");
    setIdList(idList + 1);
    const data = {
      id: idList,
      vector1: [],
      vector2: [],
    };
    vektor1K.current.value === ""
      ? data.vector1.push(vektor1I.current.value, vektor1J.current.value)
      : data.vector1.push(
          vektor1I.current.value,
          vektor1J.current.value,
          vektor1K.current.value
        );
    vektor2K.current.value === ""
      ? data.vector2.push(vektor2I.current.value, vektor2J.current.value)
      : data.vector2.push(
          vektor2I.current.value,
          vektor2J.current.value,
          vektor2K.current.value
        );
    if (data.vector1.length !== data.vector2.length) {
      alert("Jumlah vektor harus sama");
      return null;
    }

    setHasil(data);
    console.log(hasil);
  };

  return (
    <div className="flex flex-col justify-center items-center px-10 gap-10 my-10 md:w-full">
      <h1 className="text-3xl font-bold text-center">Vector Calculator</h1>

      <div className=" flex flex-col md:w-full md:flex-row gap-8 items-stretch justify-center">
        <div className="flex flex-col gap-8 md:w-[500px] shadow-2xl p-4 bg-gray-900 rounded-lg">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="items-center justify-center">
              <button className="btn btn-outline rounded-full"> help</button>
            </div>
            <div className="flex items-center justify-center h-full">
              <h1 className="text-sm">Vektor 1</h1>
            </div>
            <div className="flex items-center justify-center h-full">
              <h2 className="text-sm">Vektor 2</h2>
            </div>
            {/* untuk Variabel I */}
            <div className="text-center">I</div>
            <div>
              <input type="number" ref={vektor1I} className="w-10" />
            </div>
            <div>
              <input type="number" ref={vektor2I} className="w-10" />
            </div>
            {/* Untuk variabel J */}
            <div className="text-center">J</div>
            <div>
              <input type="number" ref={vektor1J} className="w-10" />
            </div>
            <div>
              <input type="number" ref={vektor2J} className="w-10" />
            </div>
            {/* Untuk variabel K */}
            <div className="text-center">K</div>
            <div>
              <input type="number" ref={vektor1K} className="w-10" />
            </div>
            <div>
              <input type="number" ref={vektor2K} className="w-10" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={handleAddVector}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Hitung
            </button>
          </div>
        </div>
        <HasilHitung vektor1={hasil?.vector1} vektor2={hasil?.vector2} />
      </div>
    </div>
  );
};

export default HitungPage;
