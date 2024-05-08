

import HomePage from "../(tampilan)/Home"
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-mathematics-books-green-simplicity-image_782466.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Kalkulator Vektor</h1>
      <p className="mb-5">Program ini berfungsi untuk menghitung perkalian, sudut antara dua vektor, dan cosinus arah.</p>
      <button className="btn btn-primary">Ayo Mulai!</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Home