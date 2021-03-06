import React from 'react'
import PropTypes from 'prop-types'

// Images
import bandPhoto from '../../images/woatw/20190430-jared-ream-woatw-photo.jpg'
import posterForUpcomingShow from '../../images/woatw/20191121-KISW-99.9-FM-Live-Day-Snoqualmie-Casino.jpg'

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
          id='videos'
          className={`${
            this.props.article === 'videos' ? 'active' : ''
            } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Silver Bullet</h2>
          <div class='video-container'>
            <iframe
              title='[VIDEO] Silver Bullet'
              width='100%'
              height='480'
              src='https://www.youtube.com/embed/_nNYBsqWMV0'
              frameborder='0'
              allowfullscreen
            />
          </div>
          <p>
            Copyright &copy; 2019 Fuzzy Rump Records. All rights reserved.
            <br />
            Originally released October 4th, 2019.
          </p>

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
          {/* <h2 className='major'>Upcoming shows</h2>
          Hang tight. We're busy working on writing a bunch of new material for our third album.
          <p/> */}
          <h2 className='major'>KISW 99.9 FM Live Day 2019</h2>
          We will be performing an 80s cover at 7:05am PST. Tune in to KISW 99.9 FM, or catch the live audio stream at <a href="https://kisw.radio.com" target="__blank">https://kisw.radio.com</a>
          <p />
          There will be a live video stream, but due to licensing restrictions <strong>video will not be available</strong> when the bands are performing their cover songs.
          <span className='image main'>
            <a href="https://kisw.radio.com/liveday" target="__blank">
              <img
                src={posterForUpcomingShow}
                alt="2019.11.29 - KISW 99.9 FM Live Day - Snoqualmie Casino - Snoqualmie WA"
              />
            </a>
          </span>
          <hr />
          <Subscribe />
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
