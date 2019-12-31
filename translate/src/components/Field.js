import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Feild extends React.Component {
  static contextType = LanguageContext;
  render() {
    const textField = this.context === 'English' ? 'Name' : 'Navn';
    return (
      <div className='ui field'>
        <label htmlFor=''>{textField}</label>
        <input type='text' />
      </div>
    );
  }
}
export default Feild;
