import { RegistrationBanner } from "./components/CtaBanner";
import HeroEngineering from "./components/HeroEngineering";
import GridContent from "./components/GridContent";
import { ResourceDirectory } from "./components/ResourceDirectory";
import { ContentSection } from "./components/ContentSection";
import { BusinessPodcastSection } from "./components/BusinessPodcastSection";
import InternationalCreditManager from "./components/InternationalCreditManager";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-slate-50">
      <HeroEngineering />
      <GridContent />
      <RegistrationBanner txtSrc={'Register now to save projects, bookmark favorites, and get the most out of PEG'} btSrc="Join PEG" />
      <ResourceDirectory />
      <RegistrationBanner txtSrc={'News and Updated Content'} btSrc="" />
      <ContentSection />
      {/* <BusinessPodcastSection/> */}
      
    </main>
  );
}

