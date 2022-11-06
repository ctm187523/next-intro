import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //implementamos del archivo pages/about.jsx los layouts anidados
  //decimos que si existe lo use en caso contario use la pagina
  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  //modificamos el codigo comentado arriba para usar los layouts anidados
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp