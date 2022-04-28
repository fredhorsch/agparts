import './Header.scss'

const Header = () => {
    return (
        <div className="topHeader">
            <div className="leftHeaderItem">
                <img className='LogoImage' src={require(`./images/Agparts_logo.png`)} alt='AgParts'/>
            </div>
            <div className="rightHeaderItem">
                <a href="https://ag-parts.de/en">Home</a>
                <a href="https://ag-parts.de/en/collections/all">Shop</a>
                <a href="https://ag-parts.de/en/pages/contact">Contact</a>
            </div>
        </div>
    )
}
export default Header
