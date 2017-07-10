import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'
import Contact from './Components/Contact/Contact'
import FormalEducation from './Components/FormalEducation/FormalEducation'
import Profile from './Components/Profile/Profile'

class Layout extends Component {
  render() {
    return (
      <div>
        <Grid columns='equal'>
          <Grid.Column>
            <Contact />
            <Divider />
            <Profile />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Layout;