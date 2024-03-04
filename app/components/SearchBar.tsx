import React, { ChangeEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearcBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearcBarProps> = ({ value, onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <article className="flex gap-4 items-center bg-[#2c3444] pl-2 pr-1 py-2 rounded-3xl">
      <div>
        <IoSearchOutline className="text-white" size={22} />
      </div>
      <input
        className="border-0 outline-0 bg-inherit text-[14px]"
        type="text"
        placeholder="Search anything here"
        value={value}
        onChange={handleInputChange}
      />
    </article>
  );
};

export default SearchBar;
