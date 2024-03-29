import React, { useState, useRef } from 'react';
import language from '/language.svg';
import plus from '/public/plus.svg';

const QuestionSection = () => {

    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '12px';
            inputRef.current.style.top = '3px';
        }
        else if(window.screen.availWidth >640){
            inputRef.current.style.fontSize = '13px';
            inputRef.current.style.top = '9px';
        }
    }
    const handleInputOnBlur = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '16px';
            inputRef.current.style.top = '13px';
        }
        else if(window.screen.availWidth >640){
            inputRef.current.style.fontSize = '18px';
            inputRef.current.style.top = '17px';
        }
    }

    const handlePlaceHolderOnFocused = () => {
        focusRef.current.focus();
    }

    const [questionsList, setQuestionsList] = useState([
        {
            id: 1,
            question: 'Apa itu Netflix?',
            answer: "Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet. \n \n Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun - semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!",
            action: false,
        },
        {
            id: 2,
            question: 'Berapa biaya berlangganan Netflix?',
            answer: `Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp 54.000 hingga Rp 186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.`,
            action: false,
        },
        {
            id: 3,
            question: "Di mana saya bisa menonton?",
            answer: `Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

            Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.`,
            action: false,
        },
        {
            id: 4,
            question: "Bagaimana cara membatalkannya?",
            answer: `Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.`,
            action: false,
        },
        {
            id: 5,
            question: "Apa yang bisa ditonton di netflix?",
            answer: `Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.`,
            action: false,
        },
        {
            id: 6,
            question: "Apakah Netflix sesuai bagi anak-anak?",
            answer: `Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.

            Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak..`,
            action: false,
        },
    ]);

    const [open, setOpen] = useState(false);

    const handleQuestionOnClick = (id) => {
        if (questionsList.find((items) => items.id === id)) {
            setQuestionsList(questionsList.map((item) => (item.id === id ? { ...item, action: !item.action } : { ...item, action: false })));
        }
    }

    return (
        <div className='lg:py-16 py-12 border-b-[9px] relative text-white bg-black'>
            <h1 className='lg:text-[54px] text-[33px] font-netflix text-center '>Tanya Jawab Umum</h1>

            {/* pertanyaan */}
            <div className='absolute bg-black pb-[64px]'>
                <div className='lg:w-[76%] sm:w-[93%] w-[88%] mx-auto lg:mt-4 sm:mt-8 mt-6'>
                    {
                        questionsList.map((item) =>
                        (
                            <div key={item.id} className={`mb-2 duration-300 `}>
                                <div onClick={() => handleQuestionOnClick(item.id)} className=' flex justify-between items-center w-full lg:px-8 px-6 lg:py-7 py-6 bg-[#333333]'>
                                    <p className='sm:text-[27px] text-[18px]'>{item.question}</p>
                                    <img src={plus} alt="" className={`${item.action ? 'rotate-45 duration-100' : 'rotate-90 duration-100'} sm:w-10 w-7`} />
                                </div>
                                <div className={`sm:px-8 px-6 z-10 duration-300 overflow-hidden mt-[2px] bg-[#333333]`}>
                                    <p className={` ${item.action ? 'h-fit my-7' : 'h-0'} duration-300 sm:text-[27px] text-[18px] sm:leading-9 leading-5 whitespace-pre-line `}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        )
                        )
                    }
                    <p className='text-center sm:w-full w-[85%] sm:ml-0 mx-auto text-white sm:text-[22px] text-[18px] font-netflixrg sm:mt-14 mt-12'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                    <div className='flex sm:flex-row flex-col sm:justify-between items-center justify-center relative mx-auto mt-5 lg:w-[62%] w-[80%] gap-2'>
                        <p ref={inputRef} onClick={handlePlaceHolderOnFocused} className='font-netflixrg absolute font-semibold text-[16px] duration-300 text-gray-400 sm:top-[17px] top-[13px] left-4'>Alamat email</p>
                        <input onFocus={handleInputOnFocus} ref={focusRef} onBlur={handleInputOnBlur} className='bg-black/50 sm:pt-6 pt-5 sm:pb-2 pb-1 sm:text-lg text-[16px] text-white border px-4 border-gray-400 outline-offset-[3px] sm:rounded-md rounded-[4px] w-[100%]' type="email" />
                        <a href="" className='text-white flex sm:py-3 py-2 bg-[#e60000] sm:px-7 px-4 place-items-center gap-2 sm:text-[25px] text-[20px] justify-center sm:rounded-lg rounded-[4px] sm:font-bold font-semibold'>Mulai <img src="arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div className='sm:pt-16 pt-10 border-t-[9px] border-t-zinc-800 mt-16'>
                    <div className='lg:w-[76%] w-[90%] mx-auto'>
                        <p className='text-zinc-400 sm:text-[21px] text-[18px] font-netflixrg'>Ada pertanyaan? Hubungi  <u>0856-5523-0897</u></p>
                        <div className='mt-5 flex lg:flex-row flex-col lg:gap-[95px] sm:gap-5 gap-4 sm:text-base text-sm'>
                            <div className='underline font-netflixrg flex lg:gap-[95px] sm:gap-60 gap-12 text-zinc-400'>
                                <ul>
                                    <li className='mb-3 cursor-pointer'>Tanya Jawab</li>
                                    <li className='mb-3 cursor-pointer'>Hubungan Investor</li>
                                    <li className='mb-3 cursor-pointer'>Cara Menonton</li>
                                    <li className='mb-3 cursor-pointer'>Informasi Perusahaan</li>
                                    <li className='cursor-pointer'>Hanya di Netflix</li>
                                </ul>
                                <ul>
                                    <li className='mb-3 cursor-pointer'>Pusat Bantuan</li>
                                    <li className='mb-3 cursor-pointer'>Lowongan Kerja</li>
                                    <li className='mb-3 cursor-pointer'>Ketentuan Penggunaan</li>
                                    <li className='cursor-pointer'>Hubungi Kami</li>
                                </ul>
                            </div>
                            <div className='underline font-netflixrg flex lg:gap-[90px] sm:gap-64 gap-16 text-zinc-400'>
                                <ul>
                                    <li className='mb-3 cursor-pointer'>Akun</li>
                                    <li className='mb-3 cursor-pointer'>Tukar Kartu Hadiah</li>
                                    <li className='mb-3 cursor-pointer'>Privasi</li>
                                    <li className='cursor-pointer'>Uji Kecepatan</li>
                                </ul>
                                <ul>
                                    <li className='mb-3 cursor-pointer'>Pusat Media</li>
                                    <li className='mb-3 cursor-pointer'>Beli Kartu Hadiah</li>
                                    <li className='mb-3 cursor-pointer'>Preferensi Cookie</li>
                                    <li className='cursor-pointer'>Informasi Legal</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`flex rounded-md mt-7 relative text-white w-[225px] py-[2px] px-[2px]`}>
                            <img src={language} alt="" className='w-[17px] absolute left-4 top-1/2 -translate-y-1/2' />
                            <select name="" id="" className='bg-slate-400/5 focus:outline-2 appearance-none focus:outline-white focus:outline-offset-[3px] outline-none pl-10 pr-10 w-66 border border-slate-500 py-[3px] rounded-md text-lg'>
                                <option value="" selected className='text-black block'>Bahasa Indonesia</option>
                                <option value="" className='text-black block'>English</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 top-[3px] right-2 flex items-center px-2 text-gray-700">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="white"></path></svg>
                            </div>
                        </div>
                        <p className='text-zinc-400 font-netflixrg mt-7'>Netflix Indoneisa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection