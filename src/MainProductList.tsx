import './MainProductList.scss'
import { useState, useEffect } from 'react';

// fixme Nextes feature ist das anklicken von objekten und diese dann unten anzeigen nur 2 davon

const MainProductList = () => {

    type Product = {
        name: string,
        price: number,
        description: string,
        img: string,
        isClicked: boolean
    }

    const [productList, setProductList] = useState<Product[]>([
        {name: 'max', price: 100, description: 'desc 1', img: './images/Terracut_01.jpeg', isClicked: false},
        {name: 'fred', price: 200, description: 'desc 2', img: './images/FlexGrip_HM_80_01.jpg', isClicked: false},
        {name: 'test', price: 300, description: 'desc 3', img: './images/Terracut_01.jpeg', isClicked: false},
    ]);

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