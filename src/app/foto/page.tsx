import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div>
        <Image
          src="./foto.svg"
          width={600}
          height={600}
          alt="Picture of the author"
          className=" object-cover"
        >
        </Image></div>
        <div className="w-2/3 text-center text-xl text-black"><p>Buat kamu yang feeds Instagram-nya estetik dan suka jalan-jalan sambil hunting foto. Di sini, kamu nggak cuma belajar soal teknis, tapi juga soal menangkap momen yang tepat, karena satu jepretan bisa mengungkap kebenaran yang lebih kuat dari ribuan kata. Pengen akses buat ngedokumentasiin semua acara ITB tanpa seleksi? Aman, bos. Nggak punya kamera? Santai, LFM punya banyak kamera yang siap kamu pinjam!</p></div>
      <div>
        <a href="/"><button className="border-2 border-black px-4 py-2 text-xl m-4 animate-bounce text-black">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4 text-black">#JanganMauMasukLFM</p>
      </div>
      <div className="animate-pulse text-blue-500"><a href="https://docs.google.com/forms/d/e/1FAIpQLScno7_XMVyPf6mv7T7-r7o9ZiQQ0IEOETHR-NhdxnbQdM506w/viewform"> Tapi kalo masih bandel dan mau melihat dunia di luar tembok #jmmlfm, klik ini</a></div>
    </div>
  );
}