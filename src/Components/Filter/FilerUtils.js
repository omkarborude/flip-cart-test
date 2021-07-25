export const priceSort = (state, data) => {
  if (state.filters.sortbyPrice === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }
  if (state.filters.sortbyPrice === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }
  return data;
};

export const filterData = (state, data) => {
  let dataArray = [...data];
  //   by brand
  if (state.filters.filterByBrands.length !== 0) {
    dataArray = dataArray.filter((item) =>
      state.filters.filterByBrands.includes(item.brand)
    );
  }
  //    by size
  if (state.filters.filterBySize.length !== 0) {
    dataArray = dataArray.filter((item) =>
      state.filters.filterBySize.includes(item.size)
    );
  }
  //    by idealFor
  if (state.filters.filterByIdealFor.length !== 0) {
    dataArray = dataArray.filter((item) =>
      state.filters.filterByIdealFor.includes(item.IdealFor)
    );
  }
  return dataArray;
};
