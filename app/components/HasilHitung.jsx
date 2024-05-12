"use client";

const HasilHitung = (hasil) => {
  const { perkalianVektor, cosinusArah, sudutVektor } = hasil
  const handleCheck = () => {
    console.log(hasil)
    console.log(perkalianVektor, cosinusArah, sudutVektor);
  }

  return (
    <div className="w-full bg-black m-8">
      <button className="btn btn-primary" onClick={handleCheck}>Pencet</button>
      <div className="grid grid-cols-3">
        <div>
          <h1>Perkalian vektor</h1>
        </div>
        <div>
          <h1>=</h1>
        </div>
        <div>
          <h1>{perkalianVektor}</h1>
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
          <h1>{sudutVektor}°</h1>
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
                <li>cos a = {cosinusArah?.vektor1.cosa}</li>
                <li>cos b = {cosinusArah?.vektor1.cosb}</li>
                {cosinusArah?.vektor1.cosc ? <li>cos c = {cosinusArah?.vektor1.cosc}</li> : null}
                
              </ul>
            </li>
            <li>Vektor 2 :</li>
            <li>
              <ul>
                <li>cos a = {cosinusArah?.vektor2.cosa}</li>
                <li>cos b = {cosinusArah?.vektor2.cosb}</li>
                {cosinusArah?.vektor2.cosc ? <li>cos c = {cosinusArah?.vektor2.cosc}</li> : null}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HasilHitung;
