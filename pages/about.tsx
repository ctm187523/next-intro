
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {

  return (
    // usamos el Higher Order Component(HCO) creado por mi en 
    //components/layouts/MainLayout.jsx lo usamos en el codigo de abajo
    <>
      <h1>About Page</h1>
      {/* usamos los estilos globales del archivo styles/globals.css 
        y importados en _app.js que es la pagina principal y todo lo contenido
        se pasa a las otras paginas*/}
      <h1 className="title">
        {/* se puede hacer el link de las dos maneras pero con Link en lugar de a la pagina queda precargada una vez se visita(prefetch) */}
        {/* ir a <a href="/about">About</a> */}
          Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/about.jsx</code>
      </p>
    </>
  )
}

//anidamos los layouts usando el AboutPage usamos un Layout que sera anidado al MainLayout creado por nosotros en 
//components/layouts/DarkLayout.jsx para que funcione tenemos que ir al
//archivo principal pages/_app.js y implemetarlo 
AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        {/* implementamos la pagina que es el codigo de arriba */}
        {page}
      </DarkLayout>
    </MainLayout>
  )
}


