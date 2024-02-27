import React from 'react'
import "./leftSideBar.scss"

const LeftSideBar = () => {
    return (
        <div className="left">
            <main className="left__main">
                <ul className="left__social">
                    <li className="left__linkItems">
                        <a href='https://youtube.com/@sangeethjay?si=xGzFeMUMs_SiT5SX' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="icons/symbol-defs.svg#icon-youtube"></use>
                            </svg>
                        </a>
                    </li>

                    <li className="left__linkItems">
                        <a href='https://github.com/Sangeeth-jay' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-github"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.instagram.com/sangeeth_jay_99/' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.linkedin.com/in/sangeeth-jayawarna/' target="_blank" rel='noreferrer' className="left__links">
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-linkedin"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="left__line"></div>
            </main>
        </div>
    )
}

export default LeftSideBar