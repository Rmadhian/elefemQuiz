import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div>
        <Image
          src="/PTJKN.svg"
          width={600}
          height={600}
          alt="Picture of the author"
          className=" object-cover"
        >
        </Image></div>
        <div className="w-2/3 text-center text-xl text-black"><p>Tempatnya para skena yang suka menghabiskan akhir pekannya buat dateng ke berbagai pameran. Di sini kamu bakal belajar cara presentasiin karya, ngerancang acara, dan mikirin gimana caranya bikin pengalaman dengan skala yang kadang bisa sampai "kolosal". Kalau kamu ngerasa punya jiwa artistik dan suka ngonsep acara, kami tunggu buat gabung! #PTJKereN</p></div>
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



/* import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-2xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-5xl m-4">PERTUNJUKAN</h1></div>
      <div className="w-2/3 text-center text-xl"><p>Wadah bagi para skena yang suka menghabiskan akhir pekannya untuk berkunjung ke berbagai pameran. Tempat untuk belajar tidak hanya cara mempresentasikan suatu karya dengan baik, tapi juga perancangan acaranya juga! Kalau kalian merasa memiliki jiwa artistik yang cukup, kami tantang untuk bergabung dengan kami</p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
        <div className="animate-pulse text-blue-500"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfuKhqa6qZgsJRdjVBYvfbebA4QkBJYUUQ12o68n05tavDPpg/viewform">tapi kalo masih bandel bisa klik di sini</a></div>
      </div>
    </div>
  );
} */