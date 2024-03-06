import Logo from "../../../public/vite.svg";

export const Header = () => {
    return(
        <header>
            <button className="btn-modern btn-short">Menu</button>
            <h2 className="thin-header">Hello, $Name</h2>
            <img src={Logo} alt="logo" />
        </header>
    );
}
