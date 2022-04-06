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
                        <p>{element.name}</p>
                        <p>{element.alter}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default MainProductList;