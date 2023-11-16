import { imagenRestaurantData } from "./Data/DataRestaurant";
import { imagenShowData } from "./Data/DataShow";
import { nombres } from "./Data/DataNombre";

const initialStore = () => {
  const store = {
    shows: imagenShowData,
    restaurants: imagenRestaurantData,
    nombre: nombres,
  };
  return store;
};

const types = {
  setProperty: "setProperty",
};


const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      return {
        ...state,
        shows: state.shows.push(...action.payload),
        restaurants: state.restaurants.push(...action.payload),
        nombre: state.nombre.push(...action.payload),
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;