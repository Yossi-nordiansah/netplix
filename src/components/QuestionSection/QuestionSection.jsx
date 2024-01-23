import React, {useState} from 'react';

const QuestionSection = () => {

    const [clicked, setClicked] = useState(false);
    const [questionId, setQuestionId] = useState(0)

    const questionsList = [
        {
            id: 1,
            question: 'Apa itu Netflix?',
            answer: "Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet. \n \n Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun - semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!"
        },
        {
            id: 2,
            question: 'Berapa biaya berlangganan Netflix?',
            answer: `Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp 54.000 hingga Rp 186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.`
        },
        {
            id: 3,
            question: "Di mana saya bisa menonton?",
            answer: `Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

            Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.`
        },
    ]

    const handleQuestionOnClick = (id) => {
        setClicked(!clicked);
        setQuestionId(id);
    }

    return (
        <div className='py-16 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <h1 className='text-[54px] font-netflix text-center'>Tanya Jawab Umum</h1>

            {/* pertanyaan */}

            <div className='w-[76%] mx-auto mt-4'>
                {
                    questionsList?.map((item) => 
                        (
                            <div key={item.id} className='mb-2'>
                                <div onClick={()=>handleQuestionOnClick(item.id)} className='flex justify-between items-center w-full px-8 py-7 bg-[#333333]'>
                                    <p className='text-[27px]'>{item.question}</p>
                                    <img src="public/plus.svg" alt="" className={`${clicked? 'rotate-45 duration-100' : ''}`} />
                                </div>
                                <div className={` px-8 ${clicked && questionId === item.id ? 'h-fit' : 'h-0'} overflow-hidden duration-300 text-[27px] mt-[1px] leading-9 whitespace-pre-line bg-[#333333]`}>
                                    <p className='my-7 transition-all duration-300'>
                                    {item.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>

            {/* <img src="public/plus.svg" alt="" /> */}
        </div>
    )
}

export default QuestionSection