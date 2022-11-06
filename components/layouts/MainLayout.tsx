import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';


//creamos un layout que contendra todo lo que es comun en las paginas
//recibimos en las props el children que sera el contenido diferente en 
//cada una de las paginas usamos un Higher Order Componet(HOC)
//ponemos que es de tipo FC function component
export const MainLayout: FC<any> = ({ children }) => {
    return (
        // usamos los estilos del modulo creado MainLayout.module.css
        <div className={styles.container}>
            <Head>
                <title>Contact - Clemente</title>
                <meta name="description" content="Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar creado por mi en components/Navbar.jsx */}
            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
