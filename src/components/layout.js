import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import CssBaseline from '@material-ui/core/CssBaseline'

// import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <CssBaseline />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            padding: `1rem`,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
