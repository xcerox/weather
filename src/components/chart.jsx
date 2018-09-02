import React, { Fragment } from 'react';
import Trend from 'react-trend';
import {round, sum } from 'lodash';

function average( { data }) {
   return round(sum(data)/ data.length);
}

export default (props) => {
  return (
    <Fragment >
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        data={props.data}
        width={180}
        height={60}
        gradient={props.gradient} 
        radius={9.9}
        strokeWidth={2}
      />
      <div>
          Average: { average(props) }
      </div>
    </Fragment>
  )
}