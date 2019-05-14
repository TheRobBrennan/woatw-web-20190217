import React from 'react'
import PropTypes from 'prop-types'

// Images
import bandPhoto from '../../images/woatw/20190430-jared-ream-woatw-photo.jpg'
import posterForUpcomingShow from '../../images/woatw/20190517-wyatt-olney-and-the-wreckage-club-sur-seattle-wa.jpg'

// Components
import Subscribe from '../Subscribe'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='welcome-to-seattle'
          className={`${
            this.props.article === 'welcome-to-seattle' ? 'active' : ''
            } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Welcome to Seattle</h2>
          <div class='video-container'>
            <iframe
              title='[VIDEO] Welcome to Seattle'
              width='100%'
              height='480'
              src='https://www.youtube.com/embed/G4qpFCWK6k8'
              frameborder='0'
              allowfullscreen
            />
          </div>
          <p>
            Let's light this fire
            <br />
            And watch this whole world turn to ash
            <br />
            Burn your empires
            <br />
            And bury remains of the past
            <br />
            The end is near
            <br />
            As the pieces fall to place
            <br />
            We're standing here
            <br />
            On the edge of a new age
            <br />
          </p>
          <p>
            Now is our time
            <br />
            Time to ignite
            <br />
            And light the sky
            <br />
            Welcome to Seattle
            <br />
          </p>
          <p>
            Black rain will fall
            <br />
            Over the city that we've known
            <br />
            Tear down these walls
            <br />
            And you will never stand alone
            <br />
            The end is here
            <br />
            As the pieces fall to place
            <br />
            Fear not my dear
            <br />
            We were meant to fall from grace
            <br />
          </p>
          <p>
            Now is our time
            <br />
            TIme to ignite
            <br />
            This fire will rise
            <br />
            Welcome to Seattle
            <br />
          </p>
          <p>
            <strong>Welcome to Seattle motherfucker!!!!!!!</strong>
          </p>
          <p>
            Now is our time
            <br />
            TIme to ignite
            <br />
            This fire will rise
            <br />
            Welcome to Seattle
            <br />
          </p>
          <p>
            Copyright &copy; 2017 Fuzzy Rump Records. All rights reserved.
            <br />
            Originally released October 14th, 2017.
          </p>
          {close}
        </article>

        <article
          id='upcoming-shows'
          className={`${
            this.props.article === 'upcoming-shows' ? 'active' : ''
            } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Upcoming shows</h2>
          <span className='image main'>
            <a href="https://www.facebook.com/events/1546690215463376/" target="__blank">
              <img
                src={posterForUpcomingShow}
                alt="2019.05.17 Rock Out ALS - Club Sur - Seattle WA"
              />
            </a>
          </span>
          {close}
        </article>

        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Contact</h2>
          <span className='image main'>
            <figure>
              <img
                src={bandPhoto}
                alt='2019.04.30 Seattle Rehearsal - Seattle WA'
              />
              <figcaption>
                Photography by <a href='https://jaredreamphoto.com' target='__blank'>Jared Ream Photography</a>
              </figcaption>
            </figure>
          </span>
          <h3 className='minor'>Wyatt Olney &amp; The Wreckage</h3>
          <strong>Wyatt Olney</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Lead
          vocals &amp; guitar
          <br />
          <strong>Kyle Gibboney</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Guitar &amp; vocals
          <br />
          <strong>Malcolm Williams</strong>&nbsp; | Bass &amp; vocals
          <br />
          <strong>Rob Brennan</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Drums &amp; samples
          <p />
          <Subscribe />
          <p />
          <ul className='icons'>
            <li>
              <a
                href='https://www.facebook.com/wyattolneyandthewreckage/'
                target='_blank'
                rel='noopener noreferrer'
                className='icon fa-facebook'
              >
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/wyattolneyandthewreckage/'
                target='_blank'
                rel='noopener noreferrer'
                className='icon fa-instagram'
              >
                <span className='label'>Instagram</span>
              </a>
            </li>
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
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
