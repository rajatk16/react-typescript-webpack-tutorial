import React, { ReactElement } from 'react';
import classes from './Heading.module.css';

const Heading: React.FC = (): ReactElement => <h1 className={classes.heading}>My React and TypeScript App!</h1>

export default Heading;