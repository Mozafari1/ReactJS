import React from 'react';
import { connect } from 'react-redux';
import { fetchChannel } from '../../actions';

class ChannelShow extends React.Component {
  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.id);
  }
  render() {
    if (!this.props.channel) {
      return <div> Loading</div>;
    }
    const { title, description } = this.props.channel;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
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
