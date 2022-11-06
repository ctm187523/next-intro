import Link from "next/link";

import { useRouter } from "next/router";


//creamos estilos lo dejamos fuera para que no sea cada vez creado al ser renderizado ya que no va a cambiar
const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

//recibimos los props
export const ActiveLink = ({ text, href }) => {

    //usamos un custom Hook de Next, usamos la propiedad asPath para saber en que ruta nos encontramos
    const { asPath } = useRouter();

    return (
        // usamos un etiqueta a dentro del Link renemos que poner legacyBehavior para que funcione
        <Link legacyBehavior href={href}>
            {/* ponemos un ternario usando es asPath del useRouter para que solo use el stylo creado arriba
            al enlace que se encuentra activo */}
            <a style={ asPath === href ? style : null }> {text} </a>
        </Link >
    );
};
