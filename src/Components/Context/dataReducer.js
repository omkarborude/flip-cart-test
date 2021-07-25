export const initialData = {
  products: [],
  filters: {
    sortbyPrice: "",
    filterBySize: [],
    filterByBrands: [],
    filterByIdealFor: [],
  },
};

export const dataReducer = (state, { type, payload, value }) => {
  switch (type) {
    case "SET_PRODUCTS": {
      return { ...state, products: payload };
    }

    case "SORT": {
      return {
        ...state,
        filters: {
          ...state.filters,
          sortbyPrice: payload,
        },
      };
    }

    case "FILTER_BY_BRAND": {
      return state.filters.filterByBrands.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByBrands: state.filters.filterByBrands.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByBrands: state.filters.filterByBrands.concat(payload),
            },
          };
    }

    case "FILTER_BY_SIZE": {
      return state.filters.filterBySize.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterBySize: state.filters.filterBySize.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterBySize: state.filters.filterBySize.concat(payload),
            },
          };
    }

    case "FILTER_BY_IDEALFOR": {
      return state.filters.filterByIdealFor.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterByIdealFor: state.filters.filterByIdealFor.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterByIdealFor: state.filters.filterByIdealFor.concat(payload),
            },
          };
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        filters: {
          sortbyPrice: "",
          filterBySize: [],
          filterByBrands: [],
          filterByIdealFor: [],
        },
      };
    }
  }
};
