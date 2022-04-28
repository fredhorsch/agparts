import MainCompare from "./MainCompare";
import MainProductList from "./MainProductList";
import {useState} from "react";
import ProductType from './ProductType';
import './Main.scss'

const Main = () => {

    const [productList, setProductList] = useState<ProductType[]>([
        {name: 'max', price: 100, description: 'desc 1', img: './images/Terracut_01.jpeg', isClicked: false},
        {name: 'fred', price: 200, description: 'desc 2', img: './images/FlexGrip_HM_80_01.jpg', isClicked: false},
        {name: 'test', price: 300, description: 'desc 3', img: './images/Terracut_01.jpeg', isClicked: false},
    ]);

    return (
        <div className='MainBox'>
            <MainCompare productList={productList}/>
            <MainProductList  productList={productList} setProductList={setProductList}/>
        </div>
    );
}

export default Main;