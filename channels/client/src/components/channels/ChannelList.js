import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions';
import { Link } from 'react-router-dom';
class ChannelList extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }
  renderAdmin(channel) {
    if (channel.userId === this.props.currentUserId)
      return (
        <div className='right floated content'>
          <Link
            to={`/channels/edit/${channel.id}`}
            className='ui button primary'>
            Edit
          </Link>
          <Link
            to={`/channels/delete/${channel.id}`}
            className='ui button negative'>
            Delete
          </Link>
        </div>
      );
  }
  renderList() {
    return this.props.channels.map((channel) => {
      return (
        <div className='item' key={channel.id}>
          {this.renderAdmin(channel)}
          <i className='large middel aligned icon camera retro' />
          <div className='content'>
            <Link to={`/channels/${channel.id}`} className='header'>
              {channel.title}
            </Link>

            <div className='description'>{channel.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/channels/new' className='ui button primary'>
            Create Channel
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h3>Channels</h3>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    channels: Object.values(state.channels),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { fetchChannels })(ChannelList);
