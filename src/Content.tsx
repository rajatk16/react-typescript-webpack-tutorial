import React, { ReactElement } from 'react'

import classes from './Content.module.css';

const Content: React.FC = (): ReactElement => <div className={classes.content}>With CSS!</div>

export default Content;