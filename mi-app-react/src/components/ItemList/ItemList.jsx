import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';
import './ItemList.css';

export const ItemList = ({products})  => {
    if(!products.length) {
        return <p>No hay productos disponibles</p>;
    }

    return (
    <div className="productos-grid">
        {products.map((product)=> ( 
            /* 👈 Cambiado de /item/ a /product/ para que coincida con tu App.jsx */
            <Link to={`/product/${product.id}`} key={product.id}>
                <Item {...product}/>
            </Link>
        ))}
    </div>
    );
};
