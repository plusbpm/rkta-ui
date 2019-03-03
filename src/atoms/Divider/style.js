import css from '../../util/css';
import { divider } from '../../Theme/color';

export default css({
  defaultStyle: {
    border: '0',
    height: '0',
    borderTop: `1px solid ${divider}`,
  },
  dotted: { borderStyle: 'dotted' },
  baseline: {
    margin: 0,
    padding: 0,
  },
  inset: { marginLeft: '72px' },
  invisible: { visibility: 'hidden' },
});
