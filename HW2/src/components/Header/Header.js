import React from "react";
import './Header.css'

const Header = ({list}) => {
    return (
        <header className={'Header'}>
        <div>
            {list.map((el, id) => <div key={id}>
                <ul>
                    <li>
                        <a>{el}</a>
                        </li>
                </ul>
            </div>)}
        </div>
        </header>
    )
}

export default Header;