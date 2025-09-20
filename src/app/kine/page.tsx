import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div>
        <Image
          src="/kineklub.svg"
          width={600}
          height={600}
          alt="Picture of the author"
          className=" object-cover"
        >
        </Image></div>
        <div className="w-2/3 text-center text-xl text-black"><p>Sarangnya para sinefil yang entry Letterboxd-nya udah ratusan. Ini tempat buat kamu yang nggak puas cuma nonton, tapi selalu penasaran sama "kebenaran" yang tersembunyi di ruang bawah tanah setiap cerita. Suka ngomongin film? Atau cuma pengen punya temen buat nonton bareng rutin? Kineklub udah jelas tempatnya.</p></div>
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
      <div><h1 className="font-bold text-5xl m-4">KINEKLUB</h1></div>
      <div className="w-2/3 text-center text-xl"><p>Sarangnya para sinefil yang letterboxd entrynya udah sampai ratusan. tempat untuk kamu yang engga cuma pengen nonton film doang tapi pengen bisa belajar memaknai dan mengapresiasi film secara lebih. suka ngomongin film-film yang jarang ditonton? atau pengen punya temen nonton bareng? Kineklub jelas tempatnya</p></div>
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