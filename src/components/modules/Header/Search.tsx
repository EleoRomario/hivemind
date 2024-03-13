'use client';
import { Cancel, Search as SearchIcon } from '@/icons';
import { useEffect, useState } from 'react';
export default function Search() {
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
    <div className="text-bunker-300 flex w-full items-center gap-4">
      <SearchIcon className="size-4" />
      <input
        type="text"
        placeholder="Search"
        className="w-full max-w-96 bg-transparent placeholder:text-xs focus:outline-none"
        value={search}
        onChange={changeInput}
      />
      {isEmpty && (
        <button onClick={deleteInput} className="focus:outline-none">
          <Cancel className="size-4" />
        </button>
      )}
    </div>
  );
}
