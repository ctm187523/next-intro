
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css'; //importamos el archivo de estilos 

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        // usamos los estilos importados ponemos una propiedad computada [] al usar el nombre menu-container
        //si usaramos un nombre como menu sin el guion no haria falta
        <nav className={styles['menu-container']}>
            {
                //creamos un Link personalizado en components/ActiveLink le pasamos como props
                //el text y el href lo hacemos de forma semi dinamica usando el array de arriba menuItems
                //lo ponemos entre parentesis ya que devolvemos un componente
                menuItems.map(menuItem => (
                    <ActiveLink key={ menuItem.href  }text={menuItem.text} href={menuItem.href} />
                ))
            }
        </nav>
    );
};

 