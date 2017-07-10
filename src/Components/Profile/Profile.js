import React, { Component } from 'react'
import ProfileContainer from './ProfileContainer'

const MugShotSrc = require('./JackFCollingsworth.jpg')
const SignatureSrc = require('./JackCollingsworthSig.svg')

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileContainer MugShot={MugShotSrc} Signature={SignatureSrc} FullName='Jack F. Collingsworth' Title='CEO, Statesman Technologies, Inc,' />
      </div>
    );
  }
}

export default Profile;