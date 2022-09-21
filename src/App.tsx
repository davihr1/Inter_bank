import './main.css';
import Card from './assets/Card.svg';
import Pix from './assets/Pix.svg';
import Barcode from './assets/Barcode.svg';
import Money from './assets/Money.svg';
import Arrowup from './assets/Arrowup.svg';
import Arrowdown from './assets/Arrowdown.svg';
import Trandingup from './assets/Trendingup.svg';

function App() {

  return (
    <div className="bg-[#f7f5f5] w-full">
      <div className='flex flex-row items-center justify-between mx-[2rem] w-[20rem]'>
        <p className='text-orange-600 font-black text-[3rem]'>Inter</p>

        <div className='border border-solid border-black rounded-full w-[10rem] justify-between flex'>
          <button className='mx-3'>Brasil</button>
          <button className='mx-3'>USA</button>
        </div>
      </div>

      <div className='mx-[2rem] '>
        <h1 className='text-[40px] font-semibold'>R$: 10.000</h1>
        <button className='text-orange-700 font-semibold'>Ver Extrato</button>
      </div>

      <div className='flex flex-col my-10 justify-center items-center bg-[#e9e9e9]'>
        <div className='grid grid-cols-3 gap-10'>
          <button className='border border-solid border-black rounded w-40 h-28 bg-white'>
            <div className='items-center justify-center flex'>
              <img src={Card} className='w-10' />
            </div>

            Cartao
          </button>

          <button className='border border-solid border-black rounded w-40 h-28'>
            <div className='items-center justify-center flex'>
              <img src={Pix} className='w-10' />
            </div>
            Pix
          </button>

          <button className='border border-solid border-black rounded w-40 h-28'>
            <div className='items-center justify-center flex'>
              <img src={Trandingup} className='w-10' />
            </div>
            Investimentos
          </button>

          <button className='border border-solid border-black rounded w-40 h-28'>
          <div className='items-center justify-center flex'>
              <img src={Barcode} className='w-10' />
            </div>
            Pagamentos
          </button>

          <button className='border border-solid border-black rounded w-40 h-28'>
          <div className='items-center justify-center flex'>
              <img src={Money} className='w-10' />
            </div>
            Transferir
          </button>

          <button className='border border-solid border-black rounded w-40 h-28'>
          <div className='items-center justify-center flex'>
              <img src={Trandingup} className='w-10' />
            </div>
            Cartao
          </button>
        </div>

        <div className='w-full h-6 items-center justify-center flex my-7'>
          <button>
          <img src={Arrowdown} className='w-20' />
          </button>
        </div>
      </div>

      <div className='flex flex-col  w-full'>
        <div className='items-center justify-between flex w-ful mx-[5rem] mb-5'>
        <h1 className='text-[1.6rem] text-black font-medium'>Ofertas Pra você</h1>
        <button className='text-[1.6rem] text-orange-600'>X</button>
        </div>

        <div className='flex items-center justify-center'>
          <img src='https://marketplace.bancointer.com.br/banners/b8fe8e67-ee02-4426-bf4d-652a1ad30cc4' />
        </div>
      </div>
    </div >
  )
}

export default App
