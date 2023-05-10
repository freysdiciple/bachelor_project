import "../styles/Header.css";
const Header = (params) => {
    return <div className="header">
        <div 
            className="header-button" 
            onClick={() => params.handler(0)}
            style={{borderBottom: params.page === 0 ? "2px solid #425B76" : "none"}}
        >Structure</div>
        <div 
            className="header-button" 
            onClick={() => params.handler(1)}
            style={{borderBottom: params.page === 1 ? "2px solid #425B76" : "none"}}
        >Restructuring</div>
    </div>
}

export default Header;