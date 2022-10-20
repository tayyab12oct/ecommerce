import { memo } from 'react';

function Label({ className, value, onClick }) {
  return (
    <span onClick={onClick} className={`${className} block select-text`}>
      {value}
    </span>
  );
}
Label.defaultProps = {
  onClick: () => ({}),
  className: 'block',
};
export default memo(Label);
