import ImpactSection from "@/components/ImpactSection";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import SuccessRoadmapSection from "@/components/SuccessRoadmapSection";

export default function SuccessCasesPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50">
      <NavBar />
      <main>
        <SuccessRoadmapSection />
        <ImpactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
