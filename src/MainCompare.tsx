import ProductType from './ProductType';

const MainCompare = ({productList}: {productList: ProductType[]}) => {

    let productListFiltered = productList.filter(element => element.isClicked);

    return (
        <div>
            {productListFiltered.map(element => {
                return (
                    <div>
                        <h1>{element.name}</h1>
                        <img src={require(`${element.img}`)}/>
                        <p>{element.description}</p>
                        <p>{element.price}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default MainCompare;