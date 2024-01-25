import React, { useState, useRef } from 'react';

const QuestionSection = () => {

    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        inputRef.current.style.fontSize = '13px';
        inputRef.current.style.top = '9px';
    }
    const handleInputOnBlur = () => {
        inputRef.current.style.fontSize = '18px';
        inputRef.current.style.top = '17px';
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
        <div className='py-16 border-b-[9px] relative text-white bg-black'>
            <h1 className='text-[54px] font-netflix text-center '>Tanya Jawab Umum</h1>

            {/* pertanyaan */}
            <div className='absolute bg-black pb-[64px] border-b-zinc-800'>
                <div className='w-[76%] mx-auto mt-4'>
                    {
                        questionsList.map((item) =>
                        (
                            <div key={item.id} className={`mb-2 duration-300 `}>
                                <div onClick={() => handleQuestionOnClick(item.id)} className=' flex justify-between items-center w-full px-8 py-7 bg-[#333333]'>
                                    <p className='text-[27px]'>{item.question}</p>
                                    <img src="public/plus.svg" alt="" className={`${item.action ? 'rotate-45 duration-100' : 'rotate-90 duration-100'}`} />
                                </div>
                                <div className={`px-8 z-10 duration-300 overflow-hidden mt-[2px] bg-[#333333]`}>
                                    <p className={` ${item.action? 'h-fit my-7' : 'h-0'} duration-300 leading-9 whitespace-pre-line text-[27px]`}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        )
                        )
                    }
                    <p className='text-center text-white text-[22px] font-netflixrg mt-14'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                    <div className='flex justify-between relative mx-auto mt-5 w-[62%] gap-2'>
                        <p ref={inputRef} onClick={handlePlaceHolderOnFocused} className='absolute font-netflixrg font-semibold text-[18px] duration-300 text-gray-400 top-[17px] left-4'>Alamat email</p>
                        <input onFocus={handleInputOnFocus} ref={focusRef} onBlur={handleInputOnBlur} className='bg-black/50 pt-6 pb-2 text-lg text-white border px-4 border-gray-400 outline-offset-[3px] rounded-md w-[75%]' type="email" />
                        <a href="" className='text-white flex h-16 bg-[#e60000] w-[25%] place-items-center gap-2 text-[25px] justify-center rounded-lg font-bold'>Mulai <img src="arrow.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionSection