import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <center>
      <h1>NOT FOUND</h1>
      <p>This page doesn't exist. Uhhhh, sorry I guess.</p>
      <Link to="/">Go back home?</Link>
    </center>
  </Layout>
)

export default NotFoundPage
