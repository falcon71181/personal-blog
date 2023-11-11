import Image from 'next/image'
import './globals.css';
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <div className='home pt-24 pl-[600px]'>
        <img src='./pp.png'></img><span className='text-white text-4xl'>Ara Ara ... What Should I Post Here .. ?</span>
      </div>
      <Footer></Footer>
    </div>
  )
}
