import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import UnMatchedDataList from '../components/UnMatchedDataList';

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Ladbrokes</h2>
      <SearchBar />
      <br />
      <div>
        <UnMatchedDataList />
      </div>
    </div>);
  }
}
