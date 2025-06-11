const Filters = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between my-4">
      <input
        type="text"
        placeholder="Search perfume..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/4"
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
