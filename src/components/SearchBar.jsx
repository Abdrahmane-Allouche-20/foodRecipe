import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FoodContext } from '../context/context';

function SearchBar() {
  const { search, setSearch, fetchData } = useContext(FoodContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) fetchData();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex caret-green-400 sm:text-base text-xs p-2 items-center gap-3 rounded-lg border border-green-400 w-1/2 truncate'
    >
      <button type="submit">
        <FaSearch className='text-green-500' />
      </button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='text-white placeholder:text-gray-200 outline-none'
        placeholder='Search'
      />
    </form>
  );
}

export default SearchBar;
