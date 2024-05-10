const MateriPage = () => {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"></link>
            <div className="section">
                <i class="fa-solid fa-angle-left"></i>
                    <ul className="ul-listMateri">
                        <li className="cardMateri">
                            <h1 className="judul">VEKTOR PERKALIAN</h1>
                            <span className="paragrafmateri">
                            <p>Perkalian vektor adalah operasi matematika yang menghasilkan vektor baru dari dua atau lebih vektor. Ada dua jenis perkalian vektor yang umum: perkalian dot (skalar) dan perkalian cross (vektor).</p>
                            <p>Rumus: A⋅B=∣A∣∣B∣cos(θ)</p>
                            </span>
                        </li>
                        <li className="cardMateri">
                            <h1 className="judul">SUDUT ANTARA DUA VEKTOR</h1>
                            <span className="paragrafmateri">
                            <p>Sudut antara dua vektor adalah sudut yang terbentuk antara kedua vektor tersebut ketika ditempatkan pada titik asal yang sama. Sudut ini dapat dihitung menggunakan rumus trigonometri.</p>
                            <p>Rumus: cos(θ)= A⋅B / ​∣A∣∣B∣</p>
                            </span>
                        </li>
                        <li className="cardMateri">
                            <h1 className="judul">COSINUS ARAH</h1>
                            <span className="paragrafmateri">
                            <p>Cosinus arah adalah nilai kosinus dari sudut antara dua vektor. Ini menggambarkan seberapa sejajar atau seberlawanan kedua vektor tersebut.</p>
                            <p>Rumus: Vektor OP = √(〖a1〗^2+ 〖a2〗^2+ 〖a3〗^2 ) </p>
                            </span>
                        </li>
                    </ul>
                    <i class="fa-solid fa-angle-right"></i>
            </div>  
        </>
    )
}

const data = {

}

export default MateriPage