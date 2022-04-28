import './MainProductList.scss'
import ProductType from "./ProductType";

// fixme Nextes feature ist das anklicken von objekten und diese dann unten anzeigen nur 2 davon

const MainProductList = ({productList, setProductList}: {productList: ProductType[], setProductList: (productListArray: ProductType[]) => void}) => {

    const changeIsClicked = (index: any) => {

                let productListArray = [...productList];

                let changedElement = {
                    ...productList[index],
                    isClicked: !productList[index].isClicked
                }

                productListArray[index] = changedElement;

                setProductList(productListArray);
    }

    return (
        <div className="productList">
            {productList.map((element, index) => {
                return (
                    <div onClick={() => {changeIsClicked(index)}} style={{backgroundColor: element.isClicked ? 'aliceblue' : 'white'}} className="productListItem" id={`item${index}`}>
                        <img src={require(`${element.img}`)} alt='Product Item'/>
                        <p className="contentDisplay">{element.name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default MainProductList;