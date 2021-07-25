import { useData } from "../Context/DataProvider";

export const IdealFor = () => {
  const ideal = ["Men", "Women"];

  const { state, dispatch } = useData();
  return (
    <div>
      <h6 style={{ textAlign: "left", marginTop: "1rem" }}>Ideal For :</h6>

      {ideal.map((item) => {
        return (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={state.filters.filterByIdealFor.includes(item)}
              onChange={() => {
                dispatch({ type: "FILTER_BY_IDEALFOR", payload: item });
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
