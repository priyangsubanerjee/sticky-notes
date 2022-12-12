import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex items-center h-16 bg-white px-20'>
        <img className='h-10' src="https://cdn-icons-png.flaticon.com/512/3625/3625167.png" alt="" />
        <h1 className='space-x-1 text-neutral-800 ml-3'>
          <span className='text-xl font-bold'>Sticky</span>
          <span className='text-xl'>Notes</span>
        </h1>
        <div>
          <input type="" name="" value="" placeholder='Search a sticky' />
        </div>
      </div>
    </div>
  )
}
