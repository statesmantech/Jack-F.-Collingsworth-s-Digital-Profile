import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Header } from 'semantic-ui-react'

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <Grid columns={3} textAlign='center'>
          <Image src={this.props.MugShot} size='medium' shape='circular'/>
          <Image src={this.props.Signature} />
          <Header as='h3'>{this.props.FullName}</Header>
          <Header as='h4'>{this.props.Title}</Header>
        </Grid>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  MugShot: PropTypes.link,
  Signature: PropTypes.link,
  FullName: PropTypes.string,
  Title: PropTypes.string  
};

export default ProfileContainer;