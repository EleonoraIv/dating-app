import whiteLogo from "../images/white-logo-tindog.png";
import blackLogo from "../images/black-logo-tindog.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };

    return (
        <nav>
            <div className="logo-container">
                <img
                    className="logo"
                    src={minimal ? blackLogo : whiteLogo}
                    alt="logo"
                />
            </div>
            {!authToken && !minimal && (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>
            )}
        </nav>
    );
};
export default Nav;
