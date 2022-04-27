import './MainProductList.scss'
import { useState, useEffect } from 'react';

// fixme Nextes feature ist das anklicken von objekten und diese dann unten anzeigen nur 2 davon

import flexGrip from './images/FlexGrip_HM_80_01.jpg';
import terracut from './images/Terracut_01.jpeg';

const MainProductList = () => {
    
    const [productList, setProductList] = useState<{name: string, price: number, description: string, img: string, isClicked: boolean}[]>([
        {name: 'max', price: 0, description: '', img: terracut, isClicked: false},
    ]);

    const changeIsClicked = (element: {name: string, price: number, description: string, img: string, isClicked: boolean}, index: any) => {

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
                    <div onClick={() => {changeIsClicked(element, index)}} style={{backgroundColor: element.isClicked ? 'green' : 'red'}} className="productListItem" id={`item${index}`}>
                        <p>{`${element.isClicked}`}</p>
                        <p className="contentDisplay">{element.name}</p>
                        <img src={element.img}/>
                    </div>
                )
            })}
        </div>
    );
}

export default MainProductList;