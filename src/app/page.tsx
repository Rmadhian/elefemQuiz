"use client"
import Image from 'next/image'
import { useState } from "react";
import React from 'react'
import { useRouter } from "next/navigation";

// Tipe untuk kategori agar lebih aman
type Category = "foto" | "video" | "kine" | "pertunjukan";

// Ganti dengan set jawaban hantu yang baru
const pamungkasOptions: Record<Category, string> = {
  foto: "Membingkai",
  video: "Mengarahkan",
  kine: "Menafsirkan",
  pertunjukan: "Menata"
};

export default function Home() {
  // 0: Cover, 1-10: Questions, 11: Result, 99: TieBreaker
  const [currentQuestion, setCurrentQuestion] = useState<number>(0); 
  const [scores, setScores] = useState({
    foto: 0,
    video: 0,
    kine: 0,
    pertunjukan: 0,
  });
  // State baru untuk menyimpan kategori yang seri
  const [tiedCategories, setTiedCategories] = useState<Category[]>([]);
  
  const router = useRouter();

  const handleAnswer = (category: Category, points: number = 1) => {
    setScores(prevScores => ({
      ...prevScores,
      [category]: prevScores[category] + points,
    }));
    setCurrentQuestion(prev => prev + 1);
  };
  
  // Fungsi yang memeriksa hasil dan menentukan alur selanjutnya
  function checkResult() {
    const allScores = Object.values(scores);
    const maxScore = Math.max(...allScores);
    
    const winners = (Object.keys(scores) as Category[]).filter(
      key => scores[key] === maxScore
    );

    if (winners.length === 1) {
      router.push(`/${winners[0]}`);
    } else {
      // Jika seri, jangan langsung tampilkan hasil.
      // Simpan pemenangnya dan tampilkan pertanyaan tie-breaker.
      setTiedCategories(winners);
      setCurrentQuestion(99); // 99 adalah state khusus untuk tie-breaker
    }
  };

  return (
    <header>
      <nav className="flex flex-col justify-center items-center h-screen">

        {currentQuestion === 0 && (
        <>
          <div>
            <Image
              src="/logolfm.svg"
              width={200}
              height={200}
              alt="Logo LFM"
              className="rounded-full m-10"
            />
          </div>
          <div>
            <h1 className="text-4xl text-center font-bold text-black">BIDANG APA SIH YANG COCOK BUAT AKU?</h1>
          </div>
          <div>
            <button onClick={() => setCurrentQuestion(1)} className="border-2 border-black bg-transparent py-4 px-8 m-10 text-3xl animate-pulse text-black">Start</button>
          </div>
          <div>
            <p className="text-black ">#JanganMauMasukLFM</p>
          </div>
        </>
          )}


        {currentQuestion === 1 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Kalau lagi jalan di mall, apa yang paling sering kamu lakuin?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Ngamatin orang-orang</div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Ngerasain suasana mall</div>
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Liatin dispay toko</div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Nguping obrolan random</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }    

        {currentQuestion === 2 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Tiba-tiba ada Titan di luar rumahmu. Apa reaksi pertamamu?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">Cari tempat sembunyi</div>
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">Melongo, ga bisa gerak</div>
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">Refleks teriak</div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">Langsung nyari HP</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }     

        {currentQuestion === 3 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Isi galeri HP-mu kebanyakan apa?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Video random</div>
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Foto estetik</div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Foto bareng temen-temen</div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Screenshot info penting</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }

        {currentQuestion === 4 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              
              <div><p className="font-bold text-2xl">Kalau punya ODM Gear sehari, kamu bakal ngapain?</p></div>

              <div className="flex-1 flex items-center gap-4 mt-4">

                <div className="w-1/2 h-full flex items-center justify-center p-4">
                  <Image
                      src="/odmGear.png" 
                      width={400}
                      height={400}
                      alt="ODM Gear from Attack on Titan"
                      className="object-contain w-full h-full"  
                  />
                </div>

                <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-4">
                  <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                    Foto dari atas
                  </div>
                  <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                    Buat travel vlog
                  </div>
                  <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-lg break-words">
                    Pelajarin cara kerjanya
                  </div>
                  <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                    Bikin rute tour
                  </div>
                </div>

              </div>

            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }

        {currentQuestion === 5 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Apa yang bikin sebuah kafe jadi favoritmu?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Estetika Interiornya</div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Menu dengan nama-nama unik</div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Layout tempat yang nyaman</div>
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Cerita dibalik konsepnya</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }

        {currentQuestion === 6 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Kalau jadi Titan, kamu jadi Titan apa?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                <Image
                    src="/warhammer.webp"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="object-cover w-4/5 h-4/5"  
                    >
                </Image>
                </div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                <Image
                    src="/founding.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="object-cover w-4/5 h-4/5"  
                    >
                </Image>
                </div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                <Image
                    src="/colossal.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="object-cover object-top w-4/5 h-4/5"  
                    >
                </Image>
                </div>
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                <Image
                    src="/attack.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="object-cover w-4/5 h-4/5"  
                    >
                </Image>
                </div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        } 

        {currentQuestion === 7 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Kalau kerja kelompok, kamu biasanya ngapain?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">yang riset materi</div>
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">yang nyusun flow</div>
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">yang buat ppt cantik</div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">yang presentasi</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        } 

        {currentQuestion === 8 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Di tengah dunia yang kacau, nilai apa yang akan kamu perjuangkan?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('video')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                Kebenaran
                </div>
                <div onClick={() => handleAnswer('kine')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                Kebebasan
                </div>
                <div onClick={() => handleAnswer('foto')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                Kemanusiaan
                </div>
                <div onClick={() => handleAnswer('pertunjukan')} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">
                Ketertiban
                </div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }

        {currentQuestion === 9 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Menurutmu, apa yang paling penting dalam sebuah karya?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => handleAnswer('video', 2)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Ceritanya</div>
                <div onClick={() => handleAnswer('pertunjukan', 3)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-lg font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 break-words">Rasa / Suasananya</div>
                <div onClick={() => handleAnswer('kine', 4)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Maknanya</div>
                <div onClick={() => handleAnswer('foto', 1)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Tampilannya</div>
              </div>
            </div>
            <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
          </div>
        }              
        
        {currentQuestion === 10 && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            {currentQuestion === 10 && 
              <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
                <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
                  <div><p className="font-bold text-2xl">Walaupun udh diperingatin #JanganMauMasukLFM, kamu bakalan tetep daftar ga??</p></div>
                  <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                    {/* Mengubah state ke 11 untuk memunculkan tombol hasil */}
                    <div onClick={() => setCurrentQuestion(11)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                      YESSSIRRRRRR
                    </div>
                    <div onClick={() => setCurrentQuestion(11)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                      gue udah siap banget buat dapet pacar sinefil
                    </div>
                    <div onClick={() => setCurrentQuestion(11)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                      ga dulu deh TAPI BOONG
                    </div>
                    <div onClick={() => setCurrentQuestion(11)} className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2 text-xl">
                      もちろん
                    </div>
                  </div>
                </div>
                <div><p className="text-xl text-black">#JanganMauMasukLFM</p></div>
              </div>
            }
            <div onClick={() => setCurrentQuestion(11)} >...</div>
          </div>
        }

        {currentQuestion === 11 &&
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <button onClick={checkResult} className="bg-white text-black rounded-2xl font-bold px-4 py-2 animate-bounce m-4">
              LIHAT HASILNYA!
            </button>
          </div>
        }
        
        {/* TAMPILAN TIE-BREAKER KHUSUS */}
        {currentQuestion === 99 &&
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-auto text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl mb-4">Pilih Satu</p></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4">
                {/* Tombol akan dibuat dinamis berdasarkan kategori yang seri */}
                {tiedCategories.map((category) => (
                  <div 
                    key={category}
                    onClick={() => router.push(`/${category}`)} 
                    className="cursor-pointer bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-6 capitalize text-xl"
                  >
                    {pamungkasOptions[category]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </nav>
    </header>
  );
}