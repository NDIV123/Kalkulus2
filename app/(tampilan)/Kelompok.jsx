"use client"



// import { a } from 'react-router-hash-link';

const KelompokPage = () => {
  const data = [{
    nama: "Riqza Harly Saputra",
    NPM: "237006055",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006055.jpg"
  }, {
    nama: "Diva Marshelano Ardentinnova S",
    NPM: "237006041",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006041.jpg"
  }, {
    nama: "Widia Senja Rahayu",
    NPM: "237006024",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006024.jpg"
  }, {
    nama: "Mohammad Daffa Pradiva Untara",
    NPM: "237006061",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006061.jpg"
  }, {
    nama: "Bakti Dwi Pamungkas",
    NPM: "237006049",
    foto: "https://simak.unsil.ac.id/us-unsil/foto/2023/237006059.jpg"
  }]

  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-7 p-10">
        {data.map((item, index) => (
          <div key={item.NPM} className="card w-64 h-[60vh] bg-base-100 shadow-xl">
          <figure><img className="object-center" src={item.foto} alt={item.nama} /></figure>
          <div className="card-body h-40 flex flex-col items-center justify-around">
            <h2 className="card-title text-base text-center">{item.nama}</h2>
            <p className="text-center">{item.NPM}</p>
          </div>
        </div>
        ))}

      </div>
    </>
  )
}

export default KelompokPage