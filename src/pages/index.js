import React from 'react'
// import { Link } from 'gatsby'
import Logo from '../images/codefully2.png'
import Banner from '../images/2030.jpg'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img alt="codefully.io" src={Logo} style={{ marginLeft: 80 }} />
    <img
      alt="banner"
      src={Banner}
      style={{ marginTop: -170, zIndex: -1, position: 'relative' }}
    />
  </Layout>
)

export default IndexPage
