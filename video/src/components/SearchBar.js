import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();

    // todo make sure we call
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar ui grid segment'>
        <div className='eleven wide column'>
          <form action='' className='ui form' onSubmit={this.onFormSubmit}>
            <div className='field'>
              <input
                type='text'
                placeholder='Search for video'
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
