import React from "react";
import WorkMain from "../features/workFeatures/workMain";
import Impact from "../features/homeFeatures/Impact";
import Resources from "../features/homeFeatures/Resources";
import Testimonal from "../features/homeFeatures/Testimonal";
import JoinUs from "../features/homeFeatures/JoinUs";
import WhatWeDoMain from "../features/workFeatures/WhatWeDoMain";


const Work = () => {
  return (
    <main>
      <WorkMain />
      <WhatWeDoMain />
      <div className="bg-graylight">
        <Impact />
      </div>
      <Resources />
      <Testimonal />
      <JoinUs />
    </main>
  );
};

export default Work;
