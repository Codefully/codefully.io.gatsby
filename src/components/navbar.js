import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

class Navbar extends React.Component {
  state = {}

  render() {
    return (
      <AppBar
        position="static"
        color="secondary"
        style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Link
            to="/"
            className="logo"
            style={{ fontSize: '2.5rem', flexGrow: 1 }}
          >
            codefully.io
          </Link>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
            component={Link}
            to="/services"
          >
            Services
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
            component={Link}
            to="/case-studies"
          >
            Case studies
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 10 }}
            component={Link}
            to="/contact"
          >
            Start a project with us
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
