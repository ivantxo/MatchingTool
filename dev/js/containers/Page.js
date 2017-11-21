import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import UnMatchedDataList from '../components/UnMatchedDataList';
require('../../scss/style.scss');
import {connect} from 'react-redux';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ladbrokesData, sportsCastData} = this.props;
    return (
      <div>
        <div id="main-wrap">

          <div id="sidebar">Side Bar</div>

          <div id="content-wrap">

            <div><SearchBar /></div>
            <div id="leftPane">
              <h4>Ladbrokes</h4>
              <UnMatchedDataList
                dataList={this.props.ladbrokesData}
                type="ladbrokes"
              />
            </div>

            <div id="rightPane">
              <h4>Sports Cast</h4>
              <UnMatchedDataList
                dataList={this.props.sportsCastData}
                type="sportscast"
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ladbrokesData: state.ladbrokesData,
    sportsCastData: state.sportsCastData,
  };
}

export default connect(mapStateToProps)(Page);
