import React from 'react';

import Paper from '../Paper';
import withStyle from '../../Theme/withStyle';

const Bage = props => <Paper rounded overline nowrap {...props} />;
Bage.displayName = 'Bage';

export default withStyle(Bage);