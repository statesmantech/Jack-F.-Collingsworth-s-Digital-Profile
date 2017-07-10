import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import ContactContainer from './ContactContainer'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div style={{ marginTop: '15'}}>
        <ContactContainer 
        PhoneNumber={<a href='tel:760-964-4543'><Icon name='phone' size='large' color='#3592DF' outline /></a>} 
        Email={<a href='mailto:jack@jackfcollingsworth.com'><Icon name='mail' size='large' color='#3592DF' outline /></a>} 
        Website={<a href='https://jackfcollingsworth.com'><Icon name='linkify' size='large' color='#3592DF' outline /></a>} />
      </div>
    )
  }
}



export default Contact