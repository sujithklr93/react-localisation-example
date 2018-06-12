//localization component ...
import React, { Component } from 'react';
//imported library
import LocalizedStrings from 'react-localization';
//imported lang JSON
//we can check lang JSON
import  en  from '../static/lang/en.js';
import it  from '../static/lang/it.js';
//here we created instance od library
const  strings = new LocalizedStrings({en,it});

class LocalizationComponent extends Component {
  constructor(props) {
    super(props);
    //set default language
    //it's only sample App
    //based on you needs you can use state or redux-store
    strings.setLanguage('it');
  }
  render() {
    return (
      <div>
            {strings.how}

      </div>
    );
  }

}

export default LocalizationComponent;
