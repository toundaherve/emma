import { useState, useEffect } from "react";

export default function useComponentWidth(ref) {
  const [componentWidth, setComponentWidth] = useState(0);

  useEffect(() => {
    const width = ref.current.offsetWidth;
    console.log(width);
    setComponentWidth(width);

    ref.current.addEventListener("onresize", () => {
      console.log("size changed");
    });
  }, []);

  return componentWidth;
}
