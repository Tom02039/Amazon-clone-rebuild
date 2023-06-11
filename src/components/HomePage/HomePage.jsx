import React from "react";
import {
  Carousel,
  HomePageCard,
  CarouselCategory,
  CarouselProduct,
} from "../index";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have surprise for you"}
            image={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            image={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            image={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            image={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            image={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            image={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            image={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            image={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3">
            <img
              className="xl:hidden"
              alt="banner"
              src={"../images/banner_image_2.jpg"}
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            alt="banner"
            src={"../images/banner_image.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
