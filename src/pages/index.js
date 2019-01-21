import React from 'react'
import Logo from '../images/codefully2i.png'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="banner1">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <img alt="codefully.io" src={Logo} style={{ maxWidth: 300 }} />
        <p
          style={{
            fontSize: '2.3em',
            lineHeight: '1.3em',
            fontWeight: 'bold',
          }}
        >
          We are a lean team of senior software engineers. We add value to
          whatever we get involved. We transform stories into applications that
          engage people and engaged people are inspired, fulfilled and create
          better results. Our work spans industries and continents, seeking to
          bring our clients' ideas, systems and stories to life.
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
