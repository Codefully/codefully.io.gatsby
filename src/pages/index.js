import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Typography from '@material-ui/core/Typography'
import ReactRotatingText from 'react-rotating-text'

class HomePage extends React.Component {
  state = {}

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div className="banner1">
          <Navbar />
          <div className="container">
            <div className="banner-text">
              <Typography
                variant="h1"
                className="hero"
                color="secondary"
                gutterBottom
              >
                <strong>Let’s bring your digital product ideas to life!</strong>
              </Typography>
              <Typography variant="h3" color="inherit" gutterBottom>
                Codefully is a team of software engineers with expertise
                in&nbsp;
                <ReactRotatingText
                  items={[
                    'analysing business stories',
                    'creating proof of concepts',
                    'building MVPs',
                    'rapid prototyping',
                  ]}
                />
              </Typography>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: '50px 24px' }}>
          <Typography variant="h4">WHAT WE DO</Typography>
          <Typography variant="h5" gutterBottom>
            <strong>Services tailored to your needs</strong>
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="inherit"
            className="body1"
            style={{ fontSize: '1.2rem' }}
          >
            We transform stories into applications that engage people and
            engaged people are inspired, fulfilled and create better results.
            Our work spans industries and continents, seeking to bring our
            clients' ideas, systems and stories to life.
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            className="body1"
            style={{ fontSize: '1.2rem' }}
          >
            We are a creative team that specialises in software design and
            production. The team is made up of artists and engineers with an eye
            for a story and an ear for business concepts. We are experts in
            analysing a business story, and engaging stakeholders in complex
            future states. Managing and overseeing client projects from
            specialists who understand the intersection between business and
            creativity, we help clients solve their most complex problems. Our
            work connects people across time and distance and engages people in
            creating their future.
          </Typography>
        </div>
      </Layout>
    )
  }
}

export default HomePage
