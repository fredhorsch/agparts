import ProductType from './ProductType';
import './MainCompare.scss'

const MainCompare = ({productList}: {productList: ProductType[]}) => {

    let productListFiltered = productList.filter(element => element.isClicked);

    return (
        <div className="productListCompare">
            <div className="productListCompareInnerWrapper">
            {productListFiltered.map(element => {
                return (
                    <div className="productListItemCompare">
                        <img src={require(`${element.img}`)} alt='Product Item'/>
                        <h1>{element.name}</h1>
                        <p>{element.description}</p>
                        <p>{element.price}€</p>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default MainCompare;