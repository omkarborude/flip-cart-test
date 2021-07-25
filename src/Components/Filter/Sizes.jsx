import { useData } from "../Context/DataProvider";

export const Sizes = () => {
  const sizes = ["S", "M", "L", "XL"];

  const { state, dispatch } = useData();
  return (
    <div>
      <h6 style={{ textAlign: "left", marginTop: "1rem" }}>Sizes :</h6>

      {sizes.map((item) => {
        return (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={state.filters.filterBySize.includes(item)}
              onChange={() => {
                dispatch({ type: "FILTER_BY_SIZE", payload: item });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
