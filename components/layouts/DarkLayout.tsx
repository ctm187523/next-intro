import { FC } from 'react';

//creamos un HDO(Higher order component)
//decimos que es de tipo FC Funcional component
export const DarkLayout: FC<any> = ({ children } ) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h3>Dark Layout</h3>
            <div>
                {children}
            </div>
        </div>
    );
};
