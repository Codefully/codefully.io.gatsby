import React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Typography from '@material-ui/core/Typography'
import SEO from '../components/seo'
import Wireframe1 from '../images/wireframe1.svg'
import { Grid } from '@material-ui/core'

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="banner1">
      <Navbar />
    </div>
    <div className="container-lg" style={{ padding: '50px 24px' }}>
      <Grid container spacing={24}>
        <Grid item lg={6}>
          <Typography variant="h2" className="hero" gutterBottom>
            <strong>
              We understand the intersection between business and creativity!
            </strong>
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="inherit"
            className="body1"
            style={{ fontSize: '1.4rem' }}
          >
            We transform stories into applications that engage people and
            engaged people are inspired, fulfilled and create better results.
            Our work spans industries and continents, seeking to bring our
            clients' ideas, systems and stories to life.
          </Typography>
          <br />
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
        </Grid>
        <Grid item lg={6} sm={12}>
          <img src={Wireframe1} alt="wireframe" className="img-fluid" />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default Services
