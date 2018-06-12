import React, { Component } from 'react';
//imported our localization package
import LocalizedStrings from 'react-localization';
// json formated data for translation
// for english
import  en  from '../static/lang/en.js';
//for italien
import it  from '../static/lang/it.js';

// integrted our language data into translation plugin
let strings = new LocalizedStrings({en,it});

class LocalizationComponent extends Component {
  constructor(props) {
    super(props);
    strings.setLanguage('it');
  }
  // here we called our translation part ....
  // we can simply call like this
  // this package is available in react native also
  render() {
     // here we setted our language ... you can set any where you want ... but my pref ids please add this thing into component life cycle nethods
    return (
      <div>
          here our localization component
            {strings.how}
      </div>
    );
  }

}

export default LocalizationComponent;

// it is our localisation compionent
// we already installed required packages
