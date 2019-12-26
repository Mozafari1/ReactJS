import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ShowImages from './ShowImages';
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    // this is a callback
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ShowImages images={this.state.images} />
      </div>
    );
  }
}

export default App;
