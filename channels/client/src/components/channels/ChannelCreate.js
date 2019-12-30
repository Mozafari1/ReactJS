import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions';
import ChannelForm from './ChannelForm';
class ChannelCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createChannel(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Channel</h3>
        <ChannelForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createChannel })(ChannelCreate);
