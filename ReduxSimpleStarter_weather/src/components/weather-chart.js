import _ from 'lodash';
import React from 'react';

import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default props => {
    return (
        <div>
            <Sparklines
                svgHeight={props.height || 100}
                height={props.height || 100}
                svgWidth={props.width || 150}
                width={props.width || 150}
                data={props.data}
            >
                <SparklinesLine color={props.color || "grey"} />
                <SparklinesBars color="grey" style={{ stroke: "white", fillOpacity: ".10" }} />
                <SparklinesReferenceLine type="avg" />
                <div><strong>Average: </strong>{average(props.data)} <i>{props.units}</i></div>
            </Sparklines>
        </div>
    );
};