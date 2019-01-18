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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `1rem 1rem 0`,
      }}
    >
      <img
        alt="codefully.io"
        src={Logo}
        style={{ marginLeft: 120, maxWidth: 300 }}
      />
      <img
        alt="banner"
        src={Banner}
        style={{ marginTop: -170, zIndex: -1, position: 'relative', maxWidth: '100%' }}
      />
    </div>
    <div style={{ backgroundColor: '#000', color: '#FFF', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p
          style={{
            fontSize: '2.3em',
            lineHeight: '1.3em',
            fontWeight: 'bold',
          }}
        >
          We transform stories into applications that engage people and engaged
          people are inspired, fulfilled and create better results. Our work
          spans industries and continents, seeking to bring our clients' ideas,
          systems and stories to life.
        </p>
        <p
          style={{
            fontSize: '1.5em',
            lineHeight: '1.3em',
            paddingTop: '1.4em',
          }}
        >
          We are a creative team that specialises in software design and
          production. The team is made up of artists and engineers with an eye
          for a story and an ear for business concepts. We are experts in
          analysing a business story, and engaging stakeholders in complex
          future states. <br /> <br /> Managing and overseeing client projects
          from specialists who understand the intersection between business and
          creativity, we help clients solve their most complex problems. Our
          work connects people across time and distance and engages people in
          creating their future.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
