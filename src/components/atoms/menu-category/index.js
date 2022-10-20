import { memo } from 'react';
// import dynamic from 'next/dynamic';
import { BiChevronRight } from 'react-icons/bi';
//Dynamic Imports
// const Label = dynamic(() => import('../label'), { ssr: false });
function MenuCategory(props) {
  const { name, id, onClick, selected } = props;
  return (
    <div
      onClick={onClick.bind(this, id)}
      className={`flex active border-b border-opacity-90 items-center font-openSans text-black-50 fill-black-50 hover:text-white group-hover:text-white hover:bg-secondary md:p-3 p-2.5 cursor-pointer select-none transition-all justify-between ${id?.id === selected?.id ? 'bg-secondary text-white' : ''
        }`}
    >
      {/* <Label
        value={name}
        className="lg:text-xs md:text-2xs text-3xs m-0 tracking-wide font-semibold"
      /> */}
      <div>
        <BiChevronRight className="md:h-4 h-2.5 md:w-4 w-2.5" />
      </div>
    </div>
  );
}

export default memo(MenuCategory);
