import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand site-brand" href="http://www.kimberlythegeek.tv">
                    <span>kimberlythegeek</span>
                </a>
            </nav>
        )
    }
}

export default Header;