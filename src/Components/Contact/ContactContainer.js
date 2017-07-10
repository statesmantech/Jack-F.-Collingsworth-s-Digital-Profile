import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider, List, Icon } from 'semantic-ui-react'

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <Grid columns={3} textAlign='center'>
          <Grid.Row centered divided>
            <Grid.Column>{this.props.Email}</Grid.Column>
            <Grid.Column>{this.props.Website}</Grid.Column>
            <Grid.Column>{this.props.PhoneNumber}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

ContactContainer.propTypes = {
PhoneNumber: PropTypes.link,
Email: PropTypes.link,
Website: PropTypes.link
}

export default ContactContainer
