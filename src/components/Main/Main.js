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

        <article id="welcome-to-seattle" className={`${this.props.article === 'welcome-to-seattle' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Welcome to Seattle</h2>
          <iframe width="300px" height="320px" src="https://www.youtube.com/embed/G4qpFCWK6k8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>
            Let's light this fire<br/>
            And watch this whole world turn to ash<br/>
            Burn your empires<br/>
            And bury remains of the past<br/>
            The end is near<br/>
            As the pieces fall to place<br/>
            We're standing here<br/>
            On the edge of a new age<br/>
          </p>
          <p>
            Now is our time<br/>
            Time to ignite<br/>
            And light the sky<br/>
            Welcome to Seattle<br/>
          </p>
          <p>
            Black rain will fall<br/>
            Over the city that we've known<br/>
            Tear down these walls<br/>
            And you will never stand alone<br/>
            The end is here<br/>
            As the pieces fall to place<br/>
            Fear not my dear<br/>
            We were meant to fall from grace<br/>
          </p>
          <p>
            Now is our time<br/>
            TIme to ignite<br/>
            This fire will rise<br/>
            Welcome to Seattle<br/>
          </p>
          <p><strong>Welcome to Seattle motherfucker!!!!!!!</strong></p>
          <p>
            Now is our time<br/>
            TIme to ignite<br/>
            This fire will rise<br/>
            Welcome to Seattle<br/>
          </p>
          <p>
            Copyright &copy; 2017 Fuzzy Rump Records. All rights reserved.<br />
            Originally released October 14th, 2017.
          </p>
          {close}
        </article>

        <article id="upcoming-shows" className={`${this.props.article === 'upcoming-shows' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <span className="image main"><img src={posterForUpcomingShow} alt="2019.02.23 Tony V's - Everett WA" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <span className="image main"><img src={bandPhoto} alt="2019.01.05 Backstage at El Corazon - Seattle WA" /></span>
          <h3 className="minor">Wyatt Olney &amp; The Wreckage</h3>
          <strong>Wyatt Olney</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Lead vocals &amp; guitar
          <br />
          <strong>Kyle Gibboney</strong> | Vocals &amp; guitar
          <br />
          <strong>Willie Nelson</strong>&nbsp;&nbsp;&nbsp; | Vocals &amp; bass guitar
          <br />
          <strong>Rob Brennan</strong>&nbsp;&nbsp;&nbsp; | Drums
          <p></p>
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