import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="mx-auto bg-orange-100">
      <h1 className="p-8 text-7xl font-bold text-lime-900/75 mb-4 flex justify-center">
        GifExpertApp
      </h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      <div className="">
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </div>
    </div>
  );
};
