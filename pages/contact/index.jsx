
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


//para esta pagina lo hemos echo de otra manera lo hemos introducido
//en un carpeta llamada contact y dentro el archivo lo llamamos index.js
//para que sea reconocido y no tener que hacer localhost:3000/contact/contact en el url
//nos valdria de esta manera con con localhost:3000/contact
export default function ContactPage() {

  return (
    // usamos el Higher Order Component(HCO) creado por mi en 
    //components/layouts/MainLayout.jsx
    <MainLayout>

      <h1>Contact page</h1>

      {/* usamos los estilos globales del archivo styles/globals.css 
        y importados en _app.js que es la pagina principal y todo lo contenido
        se pasa a las otras paginas*/}
      <h1 className="title">
        {/* se puede hacer el link de las dos maneras pero con Link en lugar de a la pagina queda precargada una vez se visita(prefetch) */}
        {/* ir a <a href="/about">About</a> */}
          Ir a <Link href="/">Home</Link>
      </h1>

      {/* podemos ponerlo tambien como className={'description'} o className="description" */}
      <p className={'description'}>
        Get started by editing{' '}
        <code className="code">contact/about.jsx</code>
      </p>
    </MainLayout>
  )
}
