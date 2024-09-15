import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-2xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-5xl m-4">VIDEOGRAFI</h1></div>
      <div className="w-2/3 text-center text-xl"><p>perkumpulan orang-orang yang pas kecil cita-citanya pengen jadi youtuber. mulai dari scriptwriting, video production, sampai post-production semua dibahas di sini. Ingin membuat film berstandar tinggi bareng temen-temen? atau cuma mau bikin jj di capcut? semua kami terima bos asal kalian #enjoybervideo </p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
      </div>
      <div className="animate-pulse text-blue-500"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfuKhqa6qZgsJRdjVBYvfbebA4QkBJYUUQ12o68n05tavDPpg/viewform">tapi kalo masih bandel bisa klik di sini</a></div>
    </div>
  );
}