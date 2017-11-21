import React, {Component} from 'react';
import {connect} from 'react-redux';


class UnMatchedDataList extends Component {
  renderList() {
    return this.props.ladbrokesData.map((row) => {
      return (
        <span key={row.eventId}>
          <input type="radio" name="fixture" value={row.eventId} /> {row.match}<br />
        </span>
      );
    });
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ladbrokesData: state.ladbrokesData,
    sportsCastData: state.sportsCastData,
  };
}

export default connect(mapStateToProps)(UnMatchedDataList);
