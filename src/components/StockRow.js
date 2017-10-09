import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 0,
      changed: 'trasparent',
      stockDiff:''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps.data;

    const diff = value[0] - value[1];

    if (diff) {
      this.setState({
        changed: diff < 0 ? 'red' : 'green',
        direction: diff < 0 ? -1 : 1,
        stockDiff: diff.toFixed(2)
      });
    }
  }

  render() {
    const { data } = this.props;
    var changeClass = '', iconClass = '';
    if (this.state.direction !==0 ) {
     iconClass = this.state.direction < 0 ? 'glyphicon glyphicon-triangle-bottom' : 'glyphicon glyphicon-triangle-top';
     changeClass = this.state.direction < 0 ? 'change-negative':'change-positive';
    }
    return (
      <tr>
        <td>{data.name.toUpperCase()}</td>
        <td className={`changed-${this.state.changed}`}>
          <div className="cell">
            <div className="value">
              {data.value[0].toFixed(2)}
            </div>
          </div>
        </td>
        <td className={changeClass}>{this.state.stockDiff} <span className={iconClass} aria-hidden="true"></span></td>
        <td>
          <Sparklines data={data.value}>
            <SparklinesLine color={this.state.changed} />
          </Sparklines>
        </td>
      </tr>
    );
  }
}

export default StockRow;
