import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, placeholder, onChange }) => {
  return (
    <article className="flex gap-2 items-center bg-white pl-2 pr-1 py-[7px] rounded-md border-[1.15px] border-[#aeb3cd]">
      <div>
        <IoSearchOutline className="text-text-dark" size={22} />
      </div>
      <input
        className="border-0 outline-0 bg-inherit text-[14px]"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </article>
  );
}

export default SearchBar;
