import Link from "next/link";

import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";


//creamos estilos lo dejamos fuera para que no sea cada vez creado al ser renderizado ya que no va a cambiar
//ponemos que es de tipo CSSProperties para que solo acepte propiedades de CSS
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

//interface para el tipado 
interface Props{
    text:string;
    href: string;
}

//recibimos los props, tipamos que es un FC Function Component y de tipo Props la interfaz creada arriba, extiende de Props
export const ActiveLink: FC<Props> = ({ text, href }) => {

    //usamos un custom Hook de Next, usamos la propiedad asPath para saber en que ruta nos encontramos
    const { asPath } = useRouter();

    return (
        // usamos un etiqueta a dentro del Link renemos que poner legacyBehavior para que funcione
        <Link legacyBehavior href={href}>
            {/* ponemos un ternario usando es asPath del useRouter para que solo use el stylo creado arriba
            al enlace que se encuentra activo, usamos undefined para el tipado de datos ponerse encima de style para ver sus propiedades*/}
            <a style={ asPath === href ? style : undefined }> {text} </a>
        </Link >
    );
};
