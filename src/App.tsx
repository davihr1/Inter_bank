import { motion } from 'framer-motion';
import './main.css';

import Card from './assets/Card.svg';
import Pix from './assets/Pix.svg';
import Barcode from './assets/Barcode.svg';
import Money from './assets/Money.svg';
import Arrowup from './assets/Arrowup.svg';
import Arrowdown from './assets/Arrowdown.svg';
import Trandingup from './assets/Trendingup.svg';


function App() {
  const buttons = {
    hidden: { opacity: 1, scale: 0.1},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1
      }
    }
  }

    const Money = {
      hidden: {y: 20, opacity: 0},
      visible: {
        y: 0,
        opacity: 1
      }
    }

    const City = {
      hidden: {width: 0, scale: 0.1},
      visible: {
        width: 150,
        scale: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 1
        }
      }
    }


  return (
    <div className="bg-[#f7f5f5] w-full">
      <div className='flex flex-row items-center justify-between mx-[2rem] w-[20rem]'>
        <p className='text-orange-600 font-black text-[3rem]'>Inter</p>

        <motion.div
        variants={City}
        initial="hidden"
        animate="visible"
        className='border border-solid border-black rounded-full w-[10rem] justify-between flex'>
          <button className='mx-3'>Brasil</button>
          <button className='mx-3'>USA</button>
        </motion.div>
      </div>

      <motion.div 
      variants={Money}
      initial="hidden"
      animate="visible"

      className='mx-[2rem] '>
        <h1 className='text-[40px] font-semibold'>R$: 10.000</h1>
        <button className='text-orange-700 font-semibold'>Ver Extrato</button>
      </motion.div>

      <div className='flex flex-col my-10 justify-center items-center bg-[#e9e9e9]'>
        <motion.div
          variants={buttons}
          initial="hidden"
          animate="visible"
          className='grid grid-cols-3 gap-10 mt-[-5px] pb-20'>
          <button className='border border-solid border-black rounded w-40 h-28 bg-white'>
            <div className='items-center justify-center flex'>
              <img src={Card} className='w-10' />
            </div>

            Cartao
          </button>

          <button className='border border-solid border-black rounded w-40 h-28 bg-white'>
            <div className='items-center justify-center flex'>
              <img src={Pix} className='w-10' />
            </div>
            Pix
          </button>

          <button className='border border-solid border-black rounded w-40 h-28 bg-white'>
            <div className='items-center justify-center flex'>
              <img src={Trandingup} className='w-10' />
            </div>
            Investimentos
          </button>


        </motion.div>
      </div>

      <div className='flex flex-col  w-full'>
        <div className='items-center justify-between flex w-ful mx-[5rem] mb-5'>
          <h1 className='text-[1.4rem] text-black font-medium'>Ofertas Pra você</h1>
        </div>

        <div className='flex items-center justify-center'>
          <img src='https://marketplace.bancointer.com.br/banners/a7748730-4c86-45b0-bc91-795cd4320b2b' 
          className='w-[20cm]'
          />
        </div>
      </div>
    </div >
  )
}

export default App
