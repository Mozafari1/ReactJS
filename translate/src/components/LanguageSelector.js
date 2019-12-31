import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className='flag uk'
          onClick={() => this.context.onLanguageChange('English')} // Changed this.props to this.context  This is because of props is no longer passed in from our APP.js, but located in context
        />
        <i
          className='flag no'
          onClick={() => this.context.onLanguageChange('Norwegian')}
        />
      </div>
    );
  }
}
export default LanguageSelector;
