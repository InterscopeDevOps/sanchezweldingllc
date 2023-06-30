import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import Modal from "../components/Home/Modal";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Services/ServicesHome_3";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_4";
import BlockSecondary from "../components/block/Block_2";
import BlockAbout from "../components/block/Block_3";
import ValuesOne from "../components/values/Values_2";
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">

        <Modal />

        <HeroSection />


        <BlockPrincipal
          text={rpdata?.dbHome?.[0].text}
          image1={rpdata?.gallery?.[20]}
          image2={rpdata?.gallery?.[6]}
          image3={rpdata?.gallery?.[40]}
          sloganPrincipal={true}
         listServices={true}
        />

        <ValuesOne image={rpdata?.gallery?.[5]} />

        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
            />
            : null
        }

        <Directories />
        <CounterUp image={rpdata?.stock?.[7]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[0]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.gallery?.[32]}
        />

        <BlockAbout
          title={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.gallery?.[17]}
          listsAbout={true}
        />

        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }

        {/* Servicios del home */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-20">
              <ContentServices />
            </div>
            :
            <ServicesHome />

        }

        {/* Gallery cuando es OnePages */}

        {/* Paleta de Colores */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-10 pb-28">
              <h2 className="text-center pb-[50px]">{rpdata?.labels?.general?.titleGallery}</h2>
              <GalleryContent galleryImages={rpdata?.gallery?.length > 0 ? rpdata?.gallery : rpdata?.stock} />
            </div>
            :
            null

        }
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.gallery?.[41]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>

        <Map />

      </div>
    </BaseLayout>
  );
}

export default Home;
