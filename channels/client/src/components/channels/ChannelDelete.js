import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchChannel, deleteChannel } from '../../actions';
import { Link } from 'react-router-dom';
class ChannelDelete extends React.Component {
  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.id);
  }
  renderAction() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteChannel(id)}
          className='ui button negative'>
          {' '}
          Delete
        </button>
        <Link to='/' className='ui button '>
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.channel) {
      return 'Are you sure you want to delete this channel?';
    }
    return `Are you sure you want to delete this channel with title: ${this.props.channel.title} `;
  }
  render() {
    return (
      <Modal
        title='Delete Channel'
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}
const mapStateToProps = (state, onwProps) => {
  return { channel: state.channels[onwProps.match.params.id] };
};
export default connect(mapStateToProps, {
  fetchChannel: fetchChannel,
  deleteChannel: deleteChannel
})(ChannelDelete);
