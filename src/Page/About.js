import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/ValuesOne";
import BlockPrincipal from "../components/block/Block_4";
import BlockSecondary from "../components/block/Block_1";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[9]}`}
        />
        <BlockPrincipal
            title={'a little about us'}
            text={rpdata?.dbAbout?.[0]?.text}
            image1={rpdata?.gallery?.[25]}
            image2={rpdata?.gallery?.[16]}
            image3={rpdata?.gallery?.[40]}
            listAbout
          />
        <ValuesOne image={rpdata?.gallery?.[52]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.gallery?.[32]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;
