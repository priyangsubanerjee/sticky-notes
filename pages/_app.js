import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='h-screen bg-neutral-100 overflow-auto'>
    <Component {...pageProps} />
  </div>
}

export default MyApp
