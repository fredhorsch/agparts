import './MainProductList.scss'

import flexGrip from './images/FlexGrip_HM_80_01.jpg';
import terracut from './images/Terracut_01.jpeg';

const MainProductList = () => {

    const productList = [
        {name: 'max', alter: '24'},
        {name: 'frederic', alter: '100'}
    ];

    return (
        <div className="productList">
            {productList.map((element, index) => {
                return (
                    <div className="productListItem" id={`item${index}`}>
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