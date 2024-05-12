"use client";

import { useEffect, useState } from "react";
import {
  angleBetweenVectors,
  dotProduct,
  kosinusA,
  kosinusB,
  kosinusC,
} from "../libs/function";

const HasilHitung = ({ vektor1, vektor2 }) => {
  const [hasil, setHasil] = useState(null);

  useEffect(() => {
    vektor1 && handleDisplay();
    console.log(hasil);
  }, [vektor1]);

  const handleDisplay = () => {
    vektor1?.length === 3
      ? setHasil({
          sudutVektor: angleBetweenVectors(vektor1, vektor2),
          perkalianVektor: dotProduct(vektor1, vektor2),
          cosinusArah: {
            vektor1: {
              cosa: kosinusA(vektor1),
              cosb: kosinusB(vektor1),
              cosc: kosinusC(vektor1),
            },
            vektor2: {
              cosa: kosinusA(vektor2),
              cosb: kosinusB(vektor2),
              cosc: kosinusC(vektor2),
            },
          },
        })
      : setHasil({
          sudutVektor: angleBetweenVectors(vektor1, vektor2),
          perkalianVektor: dotProduct(vektor1, vektor2),
          cosinusArah: {
            vektor1: {
              cosa: kosinusA(vektor1),
              cosb: kosinusB(vektor1),
            },
            vektor2: {
              cosa: kosinusA(vektor2),
              cosb: kosinusB(vektor2),
            },
          },
        });
  };

  const handleCheck = () => {
    console.log(hasil);
  };

  return (
    <div className="w-full h-full border bg-black rounded-lg border-gray-300">
      <div className="grid grid-cols-3 h-full">
        <div className=" border p-3  ">
          <h1>Perkalian vektor</h1>
        </div>
        <div className=" border p-3 ">
          <h1 className="text-center">=</h1>
        </div>
        <div className=" border p-3 ">
          <h1 >{hasil && hasil.perkalianVektor}</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className=" border p-3 ">
          <h1>Sudut antara 2 vektor</h1>
        </div>
        <div className=" border p-3 ">
          <h1 className="text-center">=</h1>
        </div>
        <div className=" border p-3 ">{hasil && <h1 >{hasil?.sudutVektor}°</h1>}</div>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="h-full border-b-0 border p-3 ">
          <h1>Kosinus arah vektor</h1>
        </div>
        <div className="h-full border-b-0 border p-3 ">
          <h1 className="text-center">=</h1>
        </div>
        <div className="h-full  border border-b-0 p-3 ">
          <ul>
            <li>Vektor 1 :</li>
            <li>
              <ul>
                <li >
                  cos a = {hasil && hasil?.cosinusArah.vektor1.cosa}
                </li>
                <li >
                  cos b = {hasil && hasil.cosinusArah?.vektor1.cosb}
                </li>
                {hasil &&
                  (hasil.cosinusArah?.vektor1.cosc ? (
                    <li >cos c = {hasil.cosinusArah?.vektor1.cosc}</li>
                  ) : null)}
              </ul>
            </li>
            <li >Vektor 2 :</li>
            <li>
              <ul>
                <li>cos a = {hasil && hasil.cosinusArah?.vektor2.cosa}</li>
                <li>cos b = {hasil && hasil.cosinusArah?.vektor2.cosb}</li>
                {hasil &&
                  (hasil.cosinusArah?.vektor2.cosc ? (
                    <li>cos c = {hasil.cosinusArah?.vektor2.cosc}</li>
                  ) : null)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HasilHitung;
