import './MainProductList.scss'
import { useState, useEffect } from 'react';

import flexGrip from './images/FlexGrip_HM_80_01.jpg';
import terracut from './images/Terracut_01.jpeg';

const MainProductList = () => {
    
    const [productList, setProductList] = useState([
        {name: 'max', alter: '24', img: terracut, isClicked: false},
        {name: 'frederic1', alter: '100', img: flexGrip, isClicked: false},
        {name: 'frederic2', alter: '100', img: flexGrip, isClicked: false},
        {name: 'frederic3', alter: '100', img: flexGrip, isClicked: false},
        {name: 'frederic4', alter: '100', img: flexGrip, isClicked: false},
        {name: 'frederic5', alter: '100', img: flexGrip, isClicked: false},
        {name: 'frederic6', alter: '100', img: flexGrip, isClicked: false},
    ]);

    return (
        <div className="productList">
            {productList.map((element, index) => {
                return (
                    <div onClick={() => {{

                        productList.map((currentElement, index) => {
                            if (currentElement.name == element.name) { // search for correct element

                                let productListArray = [...productList];

                                let changedElement = {
                                    ...productList[index],
                                    isClicked: !productList[index].isClicked
                                }

                                productListArray[index] = changedElement;

                                setProductList(productListArray);
                            }
                        })

                    }}} style={{backgroundColor: element.isClicked ? 'green' : 'red'}} className="productListItem" id={`item${index}`}>
                        <p>{`${element.isClicked}`}</p>
                        <p className="contentDisplay">{element.name}</p>
                        <img src={element.img}/>
                        <p className="contentDisplay">{element.alter}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default MainProductList;