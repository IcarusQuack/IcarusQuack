import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import TwitchStream from '../components/TwitchStream'

const Frogs = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [wasPaused, setWasPaused] = useState(false)
  return (
    <Layout>
      <h1>These are my frogs, Chicken & Waffles</h1>
      <p>froge</p>
      <Link to="/">Go back to the homepage</Link>
      <TwitchStream
        setShowMessage={setShowMessage}
        setWasPaused={setWasPaused}
      />
      {showMessage && <h1>Where are you going? :(</h1>}
      {!showMessage && wasPaused && <h1>Thank you :)</h1>}
    </Layout>
  )
}

export default Frogs
