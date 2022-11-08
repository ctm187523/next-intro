import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    // usamos el Higher Order Component(HCO) creado por mi en 
    //components/layouts/MainLayout.jsx
    <MainLayout>
       
       <h1>Home Page</h1> 

        {/* usamos los estilos globales del archivo styles/globals.css 
        y importados en _app.js que es la pagina principal y todo lo contenido
        se pasa a las otras paginas*/}
       <h1 className="title">
          {/* se puede hacer el link de las dos maneras pero con Link en lugar de a la pagina queda precargada una vez se visita(prefetch) */}
          {/* ir a <a href="/about">About</a> */}
          Ir a <Link href="/about"> About</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.jsx</code>
        </p> 
    </MainLayout>
  )
}
