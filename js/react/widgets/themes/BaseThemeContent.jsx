import React from 'react';
import ReactDOM from 'react-dom';

class BaseThemeContent extends React.Component{

  constructor () {
    super();
    this.props = {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique risus ante, nec mattis elit tincidunt nec. Nam lectus ex, dignissim ac cursus non, vestibulum sit amet turpis. Aenean ornare sem sit amet leo hendrerit, at scelerisque lorem suscipit. Donec eleifend porttitor sapien, non egestas lacus eleifend id. Duis facilisis, mi ac maximus lobortis, felis nulla vehicula lorem, nec facilisis nunc turpis in mauris. Sed at ante sit amet ligula sollicitudin dapibus. Fusce vel felis pulvinar, fringilla est eu, hendrerit mauris. Cras maximus felis et urna hendrerit blandit. Integer in turpis sollicitudin, sagittis lorem at, ultrices turpis. Maecenas nec ante pharetra, ornare eros id, vulputate enim. Pellentesque euismod eget elit gravida euismod. Suspendisse ultrices, mauris sit amet cursus consectetur, leo tellus luctus nibh, a hendrerit sapien massa nec ante. Curabitur volutpat dolor ut volutpat varius.",
      theme : "default"
    };
  }

  render(){

    return (
      <p class="theme-content-{this.props.theme}">
        {this.props.text}
      </p>
    );

  }


}
