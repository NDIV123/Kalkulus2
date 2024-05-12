"use client";

import { useState } from "react";
import {
  angleBetweenVectors,
  dotProduct,
  kosinusA,
  kosinusB,
  kosinusC,
} from "../libs/function";

const HasilHitung = (prop) => {
  const { vektor1, vektor2 } = prop;
  const [hasil, setHasil] = useState(null);

  
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
      
      vektor1 ? handleDisplay : null;

      const handleCheck = () => {
        console.log(prop);
      };
      
      return (
        <div className="w-full h-full p-4 ">
      <button className="btn btn-primary" onClick={handleCheck}>
        Pencet
      </button>
      <div className="grid grid-cols-3">
        <div>
          <h1>Perkalian vektor</h1>
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{hasil && hasil.perkalianVektor}</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h1>Sudut antara 2 vektor</h1>
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          {hasil ? <h1>{hasil?.sudutVektor}°</h1> : null}
          
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h1>Kosinus arah vektor</h1>
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <ul>
            <li>Vektor 1 :</li>
            <li>
              <ul>
                <li>cos a = { hasil ? hasil.cosinusArah.vektor1.cosa : null}</li>
                <li>cos b = { hasil ? hasil.cosinusArah?.vektor1.cosb : null}</li>
                {hasil ? (hasil.cosinusArah?.vektor1.cosc ? (
                  <li>cos c = {hasil.cosinusArah?.vektor1.cosc}</li>
                ) : null) : null}
              </ul>
            </li>
            <li>Vektor 2 :</li>
            <li>
              <ul>
                <li>cos a = {hasil ? hasil.cosinusArah?.vektor2.cosa : null}</li>
                <li>cos b = {hasil && hasil.cosinusArah?.vektor2.cosb}</li>
                {hasil && (hasil.cosinusArah?.vektor2.cosc ? (
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
