import './Header.scss'

const Header = () => {
    return (
        <div className="topHeader">
            <div className="leftHeaderItem">
                <img src={require(`./images/Agparts_logo.png`)} alt='AgParts'/>
            </div>
            <div className="rightHeaderItem">
                <a href="https://www.ag-parts.de">Ag-Parts</a>
                <a href="https://www.ag-parts.de">Ag-Parts</a>
            </div>
        </div>
    )
}
export default Header
