import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return (_.sum(data)/data.length).toFixed(2);
}

function max(data) {
  return (_.max(data).toFixed(2));
}

function min(data) {
  return (_.min(data).toFixed(2));
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
        <SparklinesReferenceLine type='max' />
      </Sparklines>
      <div>
        <div>Max: {max(props.data)} {props.units}</div>
        <div>Avg: {average(props.data)} {props.units}</div>
        <div>Min: {min(props.data)} {props.units}</div>
      </div>
    </div>
  );
}
