import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-2xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-5xl m-4">PERTUNJUKAN</h1></div>
      <div className="w-2/3 text-center text-xl"><p>wadah bagi para skena yang suka menghabiskan akhir pekannya untuk visit berbagai pameran. tempat untuk belajar tidak hanya cara mempresentasikan suatu karya dengan baik, tapi juga perancangan acaranya juga! kalau kalian merasa memiliki jiwa artistik yang cukup, kami tantang untuk bergabung dengan kami.</p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
        <div className="animate-pulse text-blue-500"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfuKhqa6qZgsJRdjVBYvfbebA4QkBJYUUQ12o68n05tavDPpg/viewform">tapi kalo masih bandel bisa klik di sini</a></div>
      </div>
    </div>
  );
}