const FilterName = (props) => {
  const filter_arg = props.filter_arg;
  const setFilter = props.setFilter;

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      filter shown with: <input value={filter_arg} onChange={handleFilter} />
    </div>
  );
};
export default FilterName;
