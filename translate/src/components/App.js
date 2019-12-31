import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class App extends React.Component {
  state = { language: 'English' };
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag uk'
            onClick={() => this.onLanguageChange('English')}
          />
          <i
            className='flag no'
            onClick={() => this.onLanguageChange('Norwegian')}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='blue'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
