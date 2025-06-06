import React from "react";
import { ResourcesDetails } from "../../utils/DropDown";
import Button from "../../components/Button";
import { Link } from "react-router";

const Resources = () => {
  return (
    <main className="py-4 px-1 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="text-center py-10">
          <p className="text-gray">GROW SMARTER</p>
          <h1 className="md:text-[40px] text-[30px] font-bold">
            Our Resources
          </h1>
        </div>
        <div className="carousel carousel-center flex gap-5 rounded-lg overflow-auto">
          {ResourcesDetails?.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border-1 border-gray-200 w-[100%]"
              >
                <div className="w-80">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-tr-lg rounded-tl-lg mb-4"
                  />
                  <div className="px-2 pb-4">
                    <h1 className="text-left text-[16px] font-bold mb-2">
                      {item.title}
                    </h1>
                    <p className="text-left mb-4 text-[16px] text-gray">
                      {item.content}
                    </p>
                    <Link to="/auth/signup">
                      {" "}
                      <Button className="text-green-500 border-1 text-[16px] border-green-500 text-left px-[30px] py-[12px]">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Resources;
