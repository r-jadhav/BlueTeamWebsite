import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import { useState } from "react";
import i18next from "i18next";

function Gallery() {
  const [data, setData] = useState(Data);
  const categoryData = Data.map((value) => {
    return i18next.language == "ar" ? value.categoryAR : value.categoryEN;
  });
  const tabsData = [
    i18next.language == "ar" ? "الكل" : "all",
    ...new Set(categoryData),
  ];

  const filterCategory = (category) => {
    if (category == "all") {
      setData(Data);
      return;
    }
    const filteredData = Data.filter((value) => {
      return i18next.language == "ar" ? value.categoryAR === category : value.categoryEN === category;
    });

    // const filteredData = Data.filter((value) => {
    //   const itemCategory = i18next.language === "ar" ? value.categoryAR : value.categoryEN;
    //   return itemCategory === category || itemCategory === "all";
    // });

    setData(filteredData);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Tabs filterCategory={filterCategory} tabsData={tabsData} />
          <Items data={data} />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
