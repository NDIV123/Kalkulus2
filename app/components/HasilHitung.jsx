const HasilHitung = ({ hasil }) => {
  const { perkalianVektor, cosinusArah, sudutVektor } = hasil;

  

  return (
    <div className="w-full bg-black m-8">
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
                <li>cos a = {cosinusArah.vektor1.cosa}</li>
                <li>cos b = {cosinusArah.vektor1.cosb}</li>
                <li>cos c = {cosinusArah.vektor1.cosc}</li>
              </ul>
            </li>
            <li>Vektor 2 :</li>
            <li>
              <ul>
                <li>cos a = {cosinusArah.vektor2.cosa}</li>
                <li>cos b = {cosinusArah.vektor2.cosb}</li>
                <li>cos c = {cosinusArah.vektor2.cosc}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HasilHitung;
