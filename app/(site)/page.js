
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StatsSection from "@/components/sections/StatsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "SOGIP Group — Vision · Innovation · Réalisation",
  description:
    "Holding guinéenne multisectorielle. Construction, immobilier, énergies renouvelables et formation professionnelle en Guinée.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <AboutPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
