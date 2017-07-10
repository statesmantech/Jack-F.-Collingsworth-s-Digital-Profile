import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'
import FormalEducationCourses from './FormalEducationCourses'

class ModalExampleDimmer extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>Courses</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Content>
            <Modal.Description>
              <Header>Courses</Header>
              <FormalEducationCourses />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleDimmer
