import './Footer.css'
import React from "react";

const Footer = ({list}) => {
    return (
        <footer className={'Footer'}>
            <div>
                {list.map((el, id) => <div key={id}>
                    <ul>
                        <li>
                            <a>{el}</a>
                        </li>
                    </ul>
                </div>)}
            </div>
        </footer>
    )
}


export default Footer;