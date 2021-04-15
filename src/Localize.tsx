import React, { ReactElement } from 'react';
import moment from 'moment';

const Localize : React.FC = (): ReactElement => {
  const formatTime = (): string => {
    moment.locale('de-de');

    console.log(moment.locale())
    return `${moment().format("llll")}`
  }

  return (
    <h1>
      {formatTime()}
    </h1>
  )
}

export default Localize