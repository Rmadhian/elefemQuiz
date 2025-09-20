import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div>
        <Image
          src="/videografi.svg"
          width={600}
          height={600}
          alt="Picture of the author"
          className=" object-cover"
        >
        </Image></div>
        <div className="w-2/3 text-center text-xl text-black"><p>Perkumpulan orang-orang yang pas kecil cita-citanya pengen jadi YouTuber. Di sini, kamu bakal belajar jadi sutradara yang bisa merangkai ingatan masa lalu dan masa depan jadi satu cerita utuh. Mulai dari nulis skrip, produksi, sampai post-production semua dibahas tuntas. Mau bikin film standar Hollywood atau cuma iseng bikin JJ di CapCut? Semua kami terima bos! yang penting #enjoybervideo.</p></div>
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


/*import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-2xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-5xl m-4">VIDEOGRAFI</h1></div>
      <div className="w-2/3 text-center text-xl"><p>Perkumpulan orang-orang yang pas kecil cita-citanya pengen jadi youtuber. Mulai dari scriptwriting, video production, sampai post-production semua dibahas di sini. Ingin membuat film berstandar hollywood bareng temen-temen? atau cuma mau bikin jj di capcut? semua kami terima bos asal kalian #enjoybervideo</p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
      </div>
      <div className="animate-pulse text-blue-500"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfuKhqa6qZgsJRdjVBYvfbebA4QkBJYUUQ12o68n05tavDPpg/viewform">tapi kalo masih bandel bisa klik di sini</a></div>
    </div>
  );
} */