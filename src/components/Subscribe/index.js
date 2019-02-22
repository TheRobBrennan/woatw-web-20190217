import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// This example borrowed from https://medium.com/@arjunkava91/improve-blogging-with-feedback-and-analytics-91e81ec5ea61
export default class Subscribe extends React.Component {
  constructor () {
    super()
    this.state = {
      email: ``
    }
  }
  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err
        })
      })
  }
  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!this.state.email) {
      this.setState({
        status: `error`,
        msg: 'Please enter valid email!'
      })
    } else {
      this.setState({
        status: `sending`,
        msg: null
      })
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname
      })
    }
  }

  render () {
    return (
      <span>
        {this.state.status === `success` ? (
          <div>Thank you! Youʼll receive your first email shortly.</div>
        ) : (
          <span>
            <span>
              Subscribe to our mailing list!
            </span>
            <form id='email-capture' method='post' noValidate>
              <span>
                <input
                  style={{ color: 'black' }}
                  placeholder='you@email.com'
                  onChange={this._handleEmailChange}
                  required
                />
                <button
                  className='icon-mail'
                  type='submit'
                  onClick={this._handleFormSubmit}
                />
                {this.state.status === `error` && (
                  <span dangerouslySetInnerHTML={{ __html: this.state.msg }} />
                )}
              </span>
            </form>
          </span>
        )}
      </span>
    )
  }
}
