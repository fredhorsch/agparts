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
                    <div onClick={() => {changeIsClicked(index)}} style={{backgroundColor: element.isClicked ? 'green' : 'red'}} className="productListItem" id={`item${index}`}>
                        <p>{`${element.isClicked}`}</p>
                        <p className="contentDisplay">{element.name}</p>
                        <img src={require(`${element.img}`)}/>
                    </div>
                )
            })}
        </div>
    );
}

export default MainProductList;