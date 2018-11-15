import React, { Component } from 'react';
import { InfoBox } from '../';
import './InfoBoxList.css';

class InfoBoxList extends Component {
  static defaultProps = {
    infoList: [
      {
          zipcode : 0,
          city: '',
          temp: 0
      },
    ]
  }
  render () {
    const { infoList } = this.props;
    const mapInfoBoxList = infoList.map(
      (info, index) => (
        <InfoBox
          key={index}
          zipcode={info.zipcode}
          city={info.city}
          temp={info.temp}
        />
      )
    );
    return (
      <div className="InfoBoxList">
        {mapInfoBoxList}
      </div>
    );
  }
}

export default InfoBoxList;
