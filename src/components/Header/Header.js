import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-music"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Wyatt Olney &amp; The Wreckage</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/#" onClick={(e) => {e.stopPropagation(); props.onOpenArticle('welcome-to-seattle')}}>Video</a></li>
                <li><a href="/#" onClick={(e) => {e.stopPropagation(); props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
