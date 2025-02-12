import { Label, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { FaShopify } from "react-icons/fa";

type SearchInputProps = {
  search: string; // Value of the search term
  onChange: (search: string) => void; // Callback to update the search term
};

export function SearchInput({ search, onChange }: SearchInputProps) {
  return (
    <div className="relative flex w-full md:max-w-[300px]">
      <div className="max-w-md ">
        <div className="mb-2 block">
          <Label
            className="hidden md:flex"
            htmlFor="search"
            value="Search Products"
          />
        </div>

        <div className="relative flex items-center w-full bg-white border border-gray-300 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-[#8c2643] focus-within:ring-opacity-50">
          <TextInput
            id="search"
            className="border-red-500"
            type="search"
            value={search}
            size={32}
            icon={FaShopify}
            rightIcon={IoIosSearch}
            placeholder="Find your product"
            onChange={(e) => onChange(e.target.value)} // Update search state on change
          />
        </div>
      </div>
    </div>
  );
}
