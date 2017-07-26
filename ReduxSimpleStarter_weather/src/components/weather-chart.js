import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default props => {
    return (
        <div>
            <Sparklines
                height={props.height || 120}
                width={props.width || 180}
                data={props.data}
            >
                <SparklinesLine color={props.color || "blue"} />
            </Sparklines>
        </div>
    );
};