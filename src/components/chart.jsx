import React, { Fragment } from 'react';
import Trend from 'react-trend';
import {round, sum } from 'lodash';

function average( { data }) {
   return round(sum(data)/ data.length);
}

export default (props) => {
  return (
    <div >
      <Trend className="row"
        smooth
        autoDraw
        autoDrawDuration={3000}
        data={props.data}
        width={100}
        height={40}
        gradient={props.gradient} 
        radius={9.9}
        strokeWidth={2}
      /> 
      <div className="row">
      Average: { average(props) + ` ${props.unity}`}
      </div>
    </div>
  )
}