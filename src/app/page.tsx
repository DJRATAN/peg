import { RegistrationBanner } from "./components/CtaBanner";
import HeroEngineering from "./components/HeroEngineering";
import GridContent from "./components/GridContent";
import { ResourceDirectory } from "./components/ResourceDirectory";
import { ContentSection } from "./components/ContentSection";
import { BusinessPodcastSection } from "./components/BusinessPodcastSection";
import InternationalCreditManager from "./components/InternationalCreditManager";
import PegHero from "./components/PegHero";
import LoginGateway from "./components/(auth)/page";
import AgencySlider from "./components/AgencySlider";
import PegLocations from "./components/PegLocations";
import FutureCulvertComponent from "./components/FutureCulvertComponent";
import DeliverableUpgrade from "./components/DeliverableUpgrade"; 
import DotMatrixSlider from "./components/DotMatrixSlider";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-slate-50">
      <HeroEngineering />
      <LoginGateway />
      <DeliverableUpgrade />
      <GridContent />
      <RegistrationBanner txtSrc={'Register now to save projects, bookmark favorites, and get the most out of PEG'} btSrc="Join PEG" />
      <ResourceDirectory />
      <RegistrationBanner txtSrc={'News and Updated Content'} btSrc="" />
      {/* <BusinessPodcastSection/> */}
      <AgencySlider />
      <ContentSection />
      <PegHero /> 
      <DotMatrixSlider/>
      <FutureCulvertComponent />
      <PegLocations />
    </main>
  );
}

