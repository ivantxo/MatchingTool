import React, {Component} from 'react';

class UnMatchedDataList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.dataList.length ?
          this.props.dataList.map((row) => {
            return (
              <span key={row.eventId}>
                <input type="radio" name={this.props.type} value={row.eventId} /> {row.match}<br />
              </span>
            );
          })
          : <p>No records found</p>
        }
      </div>
    );
  }
}

export default UnMatchedDataList;
