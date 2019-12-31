import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Feild extends React.Component {
  static contextType = LanguageContext;
  render() {
    //   Now our context is no longer string but its an object and its why we need to call .language after context
    const textField = this.context.language === 'English' ? 'Name' : 'Navn';
    return (
      <div className='ui field'>
        <label htmlFor=''>{textField}</label>
        <input type='text' />
      </div>
    );
  }
}
export default Feild;
