import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

//definimos el tipo de dato de la pagina importamos el NextPage de Next
//el getlayout viene de la linea 33 del archivo About.tsx que es el que tiene los layouts anidados
//es opcional ya que no todas las paginas lo usan
type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element) => JSX.Element; 
}

//definimos los props del componente MyApp importamos AppProps
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

//usamos el type definido arriba para tipar las props
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

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