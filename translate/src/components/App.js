import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext'; // importing only one time
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
  // state = { language: 'English' };
  //   onLanguageChange = (language) => {
  //     this.setState({ language });
  //   };

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />

          {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
          {/* <div>
          Select a language:
          <i
            className='flag uk'
            onClick={() => this.onLanguageChange('English')}
          />
          <i
            className='flag no'
            onClick={() => this.onLanguageChange('Norwegian')}
          />
        </div> */}
          {/* <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='blue'>
            <UserCreate />
          </ColorContext.Provider>
                </LanguageContext.Provider> */}
          <ColorContext.Provider value='blue'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
