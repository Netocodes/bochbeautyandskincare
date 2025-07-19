import { Label, TextInput } from "flowbite-react";
import { FaShopify } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";

type SearchInputProps = {
  setSearch: (search: string) => void; // Callback to update the search term
};

export function SearchInput({setSearch }: SearchInputProps) {
// pls find a way to connect me to be able to search and get solutions well developer.
const [inputValue, setInputValue] = useState('');
const debouncedSearch = useDebounce(inputValue);

useEffect(() => {
  if (debouncedSearch.length >= 2) {
    setSearch(debouncedSearch); // Call the setSearch function with the debounced value
  } else{
    setSearch('')
  }
}, [debouncedSearch, setSearch]); // Update search term when debounced value changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(inputValue.trim()); // Trim whitespace before searching
  };
  
  return (
    <div className="relative flex w-full md:max-w-[300px]">
      <form onSubmit={handleSubmit}  className="max-w-md w-full">
        <div className="mb-2 block">
          <Label
            className="hidden md:flex"
            htmlFor="search"
            value="Search Products"
          />
        </div>

        <div className="relative flex items-center w-full bg-white  rounded-md shadow-sm focus-within:ring-1 focus-within:ring-[#8c2643] focus-within:ring-opacity-50">
          <TextInput
            id="search"
            type="search"
            value={inputValue}
            size={32}
            // className="flex-1"
            icon={FaShopify}
            placeholder="Type in Skin issues/product"
             onChange={(e) => setInputValue(e.target.value)}  // Update search state on change
          />
          <button 
          className="p-2 text-white bg-[#8c2643]"
          type='submit'
           > search</button>
        </div>
      </form>
    </div>
  );
}
