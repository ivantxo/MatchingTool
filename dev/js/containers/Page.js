import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import UnMatchedDataList from '../components/UnMatchedDataList';
require('../../scss/style.scss');

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="main-wrap">

          <div id="sidebar">Side Bar</div>

          <div id="content-wrap">

            <div><SearchBar /></div>
            <div id="leftPane">
              <h4>Ladbrokes</h4>
              <div>
                <UnMatchedDataList dataList={this.props.ladbrokesData} />
              </div>
            </div>

            <div id="rightPane">
              <h4>Sports Cast</h4>
              <div>
                <UnMatchedDataList dataList={this.props.sportsCastData} />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
