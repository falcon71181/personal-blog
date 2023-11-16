import React from 'react';
import { parse, format } from 'date-fns';

const Post_Date = (props) => {
    const date = parse(props.date, 'dd/MM/yyyy', new Date());
    const formattedDate = format(date, 'dd MMMM, yyyy');

    return (
        <time dateTime={props.date}>
            {formattedDate}
        </time>
    );
}

export default Post_Date;
