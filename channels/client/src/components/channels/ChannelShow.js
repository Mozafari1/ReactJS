import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel } from '../../actions';
import flv from 'flv.js';
class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchChannel(id);
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  buildPlayer() {
    if (this.player || !this.props.channel) {
      return;
    }
    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  }
  render() {
    if (!this.props.channel) {
      return <div> Loading...</div>;
    }
    const { title, description } = this.props.channel;
    return (
      <div className='ui segment'>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>
          {title} <hr /> <h5>{description}</h5>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { channel: state.channels[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchChannel: fetchChannel })(
  ChannelShow
);

// const { NodeMediaServer } = require('node-media-server');

// we need this

// const NodeMediaServer = require('node-media-server');
