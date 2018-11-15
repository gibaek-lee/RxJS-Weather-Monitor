import React, { Component } from 'react';
import { SubmitBox, InfoBoxList, WholeWrapper } from '../../components';
import * as serverRequest from '../../serverRequestManager';

class StateMethodManager extends Component {
  state = {
    infoList: [
      {
          zipcode: 0,
          city: 'city',
          temp: 0
      },
    ]
  }
  handleInfoUpdate = async (zipcode) => {
    //zipcode가 입력되고 버튼이 눌려지면 서버에서 정보를 얻어오고 state를 업데이트한다.
    const resTemperature = await serverRequest.getTemperature(zipcode);
    if(resTemperature) {
      const { temp } = resTemperature.data.main;
      const city = resTemperature.data.name;
      console.log(`(${zipcode})${city} current temperature is ${temp} Fahrenheit`);
      this.infoListUpdate(zipcode, city, temp);
    }
  }
  infoListUpdate = (zipcode, city, temp) => {
    const { infoList } = this.state;
    const foundIndex = infoList.findIndex(
      (element) => (zipcode === element.zipcode)
    );
    if(foundIndex < 0) {//만일 집코드가 없으면
      this.setState({//state 배열 뒤에 새로운 object로 추가하기
        infoList: [
          ...infoList,
          {
            zipcode,
            city,
            temp
          }
        ]
      });
    }
    if(foundIndex >= 0) {//만일 집코드가 있으면
      this.setState({//update
        infoList: [
          ...infoList.slice(0,foundIndex),
          {
            zipcode,
            city,
            temp
          },
          ...infoList.slice(foundIndex+1,infoList.length)
        ]
      });
    }
  }
  render () {
    const { infoList } = this.state;
    return (
      <WholeWrapper>
        <SubmitBox
          handleInfoUpdate={this.handleInfoUpdate}
        />
        <InfoBoxList
          infoList={infoList}
        />
      </WholeWrapper>
    );
  }
}

export default StateMethodManager;
