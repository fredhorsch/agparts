import MainCompare from "./MainCompare";
import MainProductList from "./MainProductList";
import {useState} from "react";
import ProductType from './ProductType';
import './Main.scss'

const Main = () => {

    const [productList, setProductList] = useState<ProductType[]>([
        {name: 'FelxGrip Schar', price: 53, description: '80 mm wide, with carbide plates. For Cruiser.', img: './images/FlexGrip_HM_80_01.jpg', isClicked: false},
        {name: 'TerraCut', price: 38, description: '400 mm wide, with carbide plates without paint. For Terrano.', img: './images/Terracut_01.jpeg', isClicked: false},
        {name: 'TerraCut', price: 45, description: '400 mm wide, with carbide plates with paint. For Terrano.', img: './images/TerraCut_SW_02.jpg', isClicked: false},
    ]);

    return (
        <div className='MainBox'>
            <MainCompare productList={productList}/>
            <MainProductList  productList={productList} setProductList={setProductList}/>
        </div>
    );
}

export default Main;