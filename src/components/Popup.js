import React from 'react';

// Followed the following tutorial for this component:
// https://dev.to/skptricks/create-simple-popup-example-in-react-application-5g7f

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popupInner' onClick={this.props.closePopup}>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default Popup;
