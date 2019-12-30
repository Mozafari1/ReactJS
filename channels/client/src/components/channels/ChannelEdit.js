import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel, editChannel } from '../../actions';
import ChannelForm from './ChannelForm';

class ChannelEdit extends React.Component {
  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editChannel(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.channel) {
      return null;
    }
    return (
      <div>
        {' '}
        <h3>Edit a Channel</h3>
        <ChannelForm
          initialValues={_.pick(this.props.channel, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { channel: state.channels[ownProps.match.params.id] };
};
export default connect(mapStateToProps, {
  fetchChannel: fetchChannel,
  editChannel: editChannel
})(ChannelEdit);
