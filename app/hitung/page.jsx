"use client";

import { Coordinates, Mafs, Point, Vector } from "mafs";
import { useRef, useState } from "react";

const HitungPage = () => {
  const [vectorList, setVectorList] = useState([]);
  const [idList, setIdList] = useState(0);

  const inputX = useRef();
  const inputY = useRef();

  const handleAddVector = (e) => {
    e.preventDefault();
    if (inputX.current.value.trim() == "" || inputY.current.value.trim() == "")
      return null;
    setIdList(idList + 1);
    const data = {
      id: idList,
      point: [inputX.current.value, inputY.current.value],
      display: `${
        inputX.current.value.includes("-")
          ? `(${inputX.current.value})`
          : `${inputX.current.value}`
      } i + ${
        inputY.current.value.includes("-")
          ? `(${inputY.current.value})`
          : `${inputY.current.value}`
      } j`,
    };
    setVectorList([...vectorList, data]);
    inputX.current.value = "";
    inputY.current.value = "";
  };

  const handleDeleteVector = (id) => {
    setVectorList(vectorList.filter((vector) => vector.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-3 justify-center mb-2 items-center">
        <div className="flex gap-3 justify-center items-center">
          <input
            type="number"
            ref={inputX}
            className="rounded w-10 p-2 items-center justify-center flex"
            name="i"
            id="i"
          />
          <label htmlFor="i">i</label>
        </div>
        <h1>+</h1>
        <div className="flex gap-3 justify-center items-center">
          <input
            type="number"
            ref={inputY}
            className="rounded w-10 p-2 items-center justify-center flex"
            name="j"
            id="j"
          />
          <label htmlFor="j">j</label>
        </div>
      </div>
      <button
        onClick={handleAddVector}
        className="button mb-4 active:bg-blue-700 hover:bg-white w-38 px-4 py-2 rounded-lg hover:bg-opacity-20"
      >
        Tambah Vektor
      </button>
      <div className="flex gap-3 flex-wrap mb-5 items-center justify-center">
        {vectorList.map((vector) => {
          return (
            <div className=" flex" key={vector.id}>
              <div className="badge badge-info gap-2 p-4">
                <button onClick={() => handleDeleteVector(vector.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                {vector.display}
              </div>
            </div>
          );
        })}
      </div>
      <Mafs>
        <Coordinates.Cartesian />
        {vectorList.map((vector) => {
          return <Vector tip={vector.point} />;
        })}
      </Mafs>
    </div>
  );
};

export default HitungPage;
