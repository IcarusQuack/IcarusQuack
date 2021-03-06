import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.webp'
import pic03 from '../images/pic03.webp'
import woah from '../images/woah.webp'
import { Link } from 'gatsby'

class Main extends React.Component {
  render() {
    let close = (
      <button
        aria-label="close"
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></button>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            This is a website that I've been working on!! I've had help learning
            Gatsby from my friend Ky (I'll post a link here when it's live!). I
            have two frogs and you can check em out at the link below, or feel
            free to keep looking around!
            <p>
              <Link to="/frogs">Frogs</Link>.
            </p>
          </p>
          {close}
        </article>

        <article
          id="Social"
          className={`${this.props.article === 'Social' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Social</h2>
          <span className="image main">
            <img src={woah} alt="" />
          </span>
          <p>
            Hey! I don't use social media too much, but here are a few ways that
            you can follow me! Please let me know before you send me any friend
            requests because I'll often just ignore any unknown or unsolicitated
            invites. I don't use spotify anymore becuase I switched to Tidal! I'm most active on twitter, so feel free to give me a
            follow there! I love you, please have a great day{' '}
            <span role="img" aria-label="purple heart">
              💜
            </span>
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/IcarusQuack"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="/#"
                id="discordButton"
                onClick={event => {
                  event.preventDefault()
                  navigator.clipboard.writeText('IcarusQuack#0001')
                  alert('Discord username has been copied to clipboard!')
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="discord"
                  class="svg-inline--fa fa-discord fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/icarusquack/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://steamcommunity.com/id/icarusquack"
                className="icon fa-steam-square"
              >
                <span className="label">Steam</span>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/12184413999"
                className="icon fa-spotify"
              >
                <span className="label">Spotify</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Hello! My name is Icarus! I'm 27 years old~ You can use any
            pronouns. I work full time and live in North Carolina,
            unfortunately. I enjoy exploring, going out to eat, hanging out with
            friends, and playing games! Right now I mostly play Final Fantasy
            XIV and DotA2.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="hidden" name="form-name" value="Contact Form" />
              </li>
            </ul>
          </form>
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
