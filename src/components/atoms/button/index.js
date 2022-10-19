import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

function Button(props) {
  const { btnValue, className, onClick, disable, ...rem } = props;
  return (
    <button
      className={twMerge(
        className,
        disable && 'bg-gray-700 hover:bg-gray-700 hover:text-white border-none cursor-not-allowed'
      )}
      onClick={onClick}
      aria-label="this is button"
      disabled={disable}
      {...rem}
    >
      {btnValue}
    </button>
  );
}
Button.defaultProps = {
  className:
    'border border-primary italic text-2xs text-primary w-full py-2.5 hover:bg-primary hover:text-white  leading-none transition-all',
};
export default memo(Button);
