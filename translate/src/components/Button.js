import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {
  //static contextType = LanguageContext;
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === 'English' ? 'Submit' : 'Send inn')}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    // const textButton = this.context === 'English' ? 'Submit' : 'Send inn';
    //return <button className='ui button primary'>{textButton}</button>;
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
