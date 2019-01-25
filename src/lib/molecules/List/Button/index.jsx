import React from 'react';

import Button from '../../Button';
import { ListItem } from '../Item';

const ListButton = props => (
  <ListItem
    autoHeight
    BaseElement={Button}
    blockLevel
    fitAll
    textLeft
    {...props}
  />
);

ListButton.displayName = 'ListButton';

export default ListButton;
