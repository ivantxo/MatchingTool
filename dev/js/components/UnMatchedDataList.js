import React, {Component} from 'react';
import {connect} from 'react-redux';


class UnMatchedDataList extends Component {
  renderList() {
    return this.props.ladbrokesData.map((row) => {
      return (
        <span><input type="radio" key={row.eventId} /> {row.match}<br /></span>
      );
    });
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}

// const UnMatchedDataList = (props) =>
//   <div>
//     {this.props.ladbrokesData.map((row) => {
//       <input type="radio" />
//     })}
//   </div>;

function mapStateToProps(state) {
  return {
    ladbrokesData: state.ladbrokesData
  };
}


export default connect(mapStateToProps)(UnMatchedDataList);
