import React from 'react'
import PropTypes from 'prop-types'

// Images
import bandPhoto from '../../images/woatw/20190105-backstage-el-corazon-seattle-wa.jpg'
import posterForUpcomingShow from '../../images/woatw/20190223-wyatt-olney-and-the-wreckage-tony-vs-everett-wa.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="upcoming-shows" className={`${this.props.article === 'upcoming-shows' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <span className="image main"><img src={posterForUpcomingShow} alt="2019.02.23 Tony V's - Everett WA" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <span className="image main"><img src={bandPhoto} alt="2019.01.05 Backstage at El Corazon - Seattle WA" /></span>
          <ul className="icons">
            <li><a href="https://www.facebook.com/wyattolneyandthewreckage/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/wyattolneyandthewreckage/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main