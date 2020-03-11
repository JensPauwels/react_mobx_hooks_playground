import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "./context";

const Slider = () => {
  const { store } = useContext(storeContext);
  console.log(store);

  const handleChangeSlider = e => {
    const value = parseInt(e.currentTarget.value, 10);
    store.setValue(value);
  };

  return useObserver(() => (
    <input type="range" onChange={handleChangeSlider} value={store.value} />
  ));
};

export default Slider;
