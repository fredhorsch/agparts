import ProductType from './ProductType';
import './MainCompare.scss'

const MainCompare = ({productList}: {productList: ProductType[]}) => {

    let productListFiltered = productList.filter(element => element.isClicked);

    return (
        <div className="productListCompare">
            {productListFiltered.map(element => {
                return (
                    <div className="productListItemCompare">
                        <h1>Name: {element.name}</h1>
                        <img src={require(`${element.img}`)} alt='Product Item'/>
                        <p>Beschreibung: {element.description}</p>
                        <p>Preis: {element.price}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default MainCompare;