'use client';
import { useEffect, useState } from 'react';
import { Search as SearchI, X } from 'lucide-react';
export function Search() {
  const [search, setSearch] = useState('' as string);

  // TODO: Implement handleSearch
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const deleteInput = () => {
    setSearch('');
  };

  const [isEmpty, setIsEmpty] = useState(false as boolean);

  useEffect(() => {
    if (search === '') {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [search]);

  return (
    <div className="flex w-full items-center gap-4 text-bunker-300">
      <SearchI className="size-4" />
      <input
        type="text"
        placeholder="Search"
        className="w-full max-w-96 bg-transparent placeholder:text-xs focus:outline-none"
        value={search}
        onChange={changeInput}
      />
      {isEmpty && (
        <button onClick={deleteInput} className="focus:outline-none">
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
