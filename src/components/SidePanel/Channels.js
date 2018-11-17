import React, { Component } from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';

class Channels extends Component {
  state = {
    channels: [],
    modal: false
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    const { channels, modal } = this.state;
    return (
      <React.Fragment>
        <Menu.Menu style={{ paddingBottom: '2em' }}>
          <Menu.Item>
            <span>
              <Icon name='exchange' /> CHANNELS
            </span>{" "}
            ({ channels.length }) <Icon name='add' />
          </Menu.Item>
          {/* Channels */}
        </Menu.Menu>
        {/* Add Channel Modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header></Modal.Header>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Channels;