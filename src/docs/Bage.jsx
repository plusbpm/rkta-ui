import React from 'react';

import { Divider, Bage, Paper } from '../../lib';

const Bages = () => (
  <Paper>
    <Bage muted>
      A
    </Bage>
    <Bage body2 disabled>
      A Bage
    </Bage>
    <Divider />
    <Bage h6>
      A Bage
    </Bage>
    <Bage h1 secondary color="paper" uppercase hardRight fitRight>
      A Bage
    </Bage>
    <Bage h1 uppercase hardLeft fitLeft>
      A Bage
    </Bage>
    <Bage subtitle1 primary1>
      A Bage
    </Bage>
    <Bage subtitle1 primary2>
      A Bage
    </Bage>
    <Divider />
    <Bage overline uppercase color6 noselect>
      A Bage
    </Bage>

    <Paper color8 hardTop={true}>
      paper 8
    </Paper>
  </Paper>
);

export default Bages;
