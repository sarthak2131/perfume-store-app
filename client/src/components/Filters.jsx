const Filters = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 px-4">
      <input
        type="text"
        placeholder="🔍 Search your fragrance..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] text-black dark:text-white p-3 rounded-2xl w-full md:w-[50%] focus:outline-none focus:ring-2 focus:ring-[#d1a954] placeholder-gray-400"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] text-black dark:text-white p-3 rounded-2xl w-full md:w-[30%] focus:outline-none focus:ring-2 focus:ring-[#d1a954]"
      >
        <option value="">All Categories</option>
        <option value="floral">Floral</option>
        <option value="woody">Woody</option>
        <option value="citrus">Citrus</option>
      </select>
    </div>
  );
};

export default Filters;
