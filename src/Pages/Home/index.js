import React, { useEffect } from "react";
import SliderSection from "./SliderSection";
import BannerSection from "./BannerSection";
import ArrivalSection from "./ArrivalSection";
import BestSellingSection from "./BestSellingSection";
import DailyDealSection from "./DailyDealSection";
import NewAndTestimonialSection from "./NewAndTestimonialSection";
import { useProductSlice, useUiSlice } from "../../Redux/hooks";

const Home = () => {
  const [product, {getProduct}, dispatch] = useProductSlice()
  const [uiDat, {getUi}] = useUiSlice()


  useEffect(() => {
    dispatch(getProduct());
    dispatch(getUi());
  }, []);

  return (
    <div>
      <SliderSection />
      <div className="mt-12">
        <BannerSection />
        <ArrivalSection products={product.products} />
        <BestSellingSection products={product.products} />
        <DailyDealSection />
        <NewAndTestimonialSection />
      </div>
    </div>
  );
};

export default Home;
