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
    const {localData, remoteData} = this.props;
    return (
      <div>
        <div id="main-wrap">

          <div id="sidebar">Side Bar</div>

          <div id="content-wrap">

            <div><SearchBar /></div>
            <div id="leftPane">
              <h4>Local Data</h4>
              <UnMatchedDataList
                dataList={this.props.localData}
                type="local"
              />
            </div>

            <div id="rightPane">
              <h4>Remote Data</h4>
              <UnMatchedDataList
                dataList={this.props.remoteData}
                type="remote"
              />
            </div>

            <hr /><br />
            <div>Matched Data</div>

          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    localData: state.localData,
    remoteData: state.remoteData,
  };
}

export default connect(mapStateToProps)(Page);
