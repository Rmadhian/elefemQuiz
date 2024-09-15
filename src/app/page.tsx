"use client"
import Image from 'next/image'
import { useState } from "react";
import React from 'react'
import { useRouter } from "next/navigation";

export default function Home() {
  const [cover, coverToggle] = useState(false)
  const [result, resultToggle] = useState(false)
  const [one, oneToggle] = useState(false)
  const [two, twoToggle] = useState(false)
  const [three, threeToggle] = useState(false)
  const [four, fourToggle] = useState(false)
  const [five, fiveToggle] = useState(false)
  const [six, sixToggle] = useState(false)
  const [seven, sevenToggle] = useState(false)
  const [eight, eightToggle] = useState(false)
  const [nine, nineToggle] = useState(false)
  const [ten, tenToggle] = useState(false)
  const [foto,setFoto] = useState(0)
  const [video,setVideo] = useState(0)
  const [kine,setKine] = useState(0)
  const [pertunjukan,setPertunjukan] = useState(0)
  const router = useRouter();
  function finalResult(foto:number,video:number,kine:number,pertunjukan:number) {
    if ((foto >= video) && (foto >= pertunjukan) && (foto >= kine)) {
      router.push("/foto")
    } else if ((video >= foto) && (video >= pertunjukan) && (video >= kine))  {
      router.push("/video")
    } else if ((kine >= foto) && (kine >= pertunjukan) && (kine >= video)) {
      router.push("/kine")
    } else {
      router.push("/pertunjukan")
    }
  };
  return (
    <header>
      <nav>
        <ul className="container flex gap-8 flex-col items-center h-screen justify-center">
          <div>
            <Image
              src="/logolfm.jpg"
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-full m-10"
              >
            </Image>
          </div>
          <div>
            <h1 className="text-4xl text-center font-bold">BIDANG APA SIH YANG COCOK BUAT AKU?</h1>
          </div>
          <div>
            <button onClick={() => {
              coverToggle(true)
              oneToggle(true)}} className="border-2 border-white bg-transparent py-4 px-8 rounded-full m-10 text-3xl animate-pulse">Start</button>
          </div>
          <div>
            <p>#JanganMauMasukLFM</p>
          </div>
          {one && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-3xl">Kalau kamu jadi benda, kira-kira mau jadi benda apa?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">CCTV</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan+ 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Mading</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">SD Card</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Lukisan</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {two && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-xl">Kalau kamu dateng ke sebuah pameran, kamu adalah tipe orang yang...</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Bengong 20 menit mantengin karya</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">"eh gila ini bagus banget anglenya, post di dump acc ahh"</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">kalau ga ngevlog bikin timelapse</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">"eh ini mirip kaya di film apa gitu"</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          }
          {three && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Pick your favorite outfit!</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                  <Image
                    src="/outfit1.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="object-cover w-4/5 h-4/5"  
                    >
                  </Image></div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2"><Image
                  src="/outfit2.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className="object-cover w-4/5 h-4/5"  
                  >
                </Image></div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2"><Image
                  src="/outfit3.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className="object-cover w-4/5 h-4/5"  
                  >
                </Image></div>
                <div onClick={() => {
                  setKine(kine + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2"><Image
                  src="/outfit4.jpg"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className="object-cover w-4/5 h-4/5"                >
                </Image></div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {four && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Pas lagi nonton film, kamu adalah tipe orang yang...</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">"wah ini anglenya kece sih"</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">"eh ini ngeditnya gimana keren banget 😭"</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">berpikir keras mencoba memahami makna dari film</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">"whoah karakter-karakternya menarik banget"</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {five && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Pick your most used social media!</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Instagram</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Twitter</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Tiktok</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Youtube</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {six && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Kalo di kepanitiaan kamu biasanya divisi apa?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Pubdok lah</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">bagian nonton ae gue mah</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Acara!!!</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">si konten kreator hitz</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {seven && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Libur telah tiba!!! enaknya ngapain yak??</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setKine(kine + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">marathon film</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">main game/ tidur/ makan</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">jalan-jalan ke tempat estetik</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">pergi ke pameran</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {eight && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Khodam kamu apa?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">laba-laba sunda</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">wong kar whai beli seblak</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">sepeda vintage karawang</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">tuyul kolektor aikatsu</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {nine && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Genre film favorit?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 2)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Action</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 3)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Slice of life</div>
                <div onClick={() => {
                  setKine(kine + 4)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Coming-of-age</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Mystery/ Thriller</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          } 
          {ten && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold">Terakhir nih, walaupun udh diperingatin #JanganMauMasukLFM, kamu bakalan tetep daftar ga??</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">YESSSIRRRRRR</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">gue udah siap banget buat dapet pacar sinefil</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">ga dulu deh TAPI BOONG</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">もちろん</div>
              </div>
            </div>
            <div>
              <p className="text-xl">#JanganMauMasukLFM</p>
            </div>
          </div>
          }
          {cover && 
          <div className="h-screen w-screen bg-black fixed">
          </div>
          }
          {result &&
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <button onClick={() => finalResult(foto,video,kine,pertunjukan)} className="bg-white text-black rounded-2xl font-bold px-4 py-2 animate-bounce m-4">KAMU ADALAH... (ini dipencet ya)</button>
          </div>
          }
        </ul>
      </nav>
    </header>
  );
}