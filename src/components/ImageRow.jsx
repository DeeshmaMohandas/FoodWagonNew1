import { useState } from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const ImageRow = () => {
  const [foodImages] = useState([food1, food2, food3, food4]);

  return (
    <section className="py-8 px-4 bg-white">
      <div className="flex gap-4 overflow-x-auto">
        {foodImages.map((src, i) => (
          <img key={i} src={src} alt={`food-${i}`} className="h-40 rounded-xl shadow" />
        ))}
      </div>
    </section>
  );
};

export default ImageRow;
