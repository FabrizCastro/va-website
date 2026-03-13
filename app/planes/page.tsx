import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import SiteFooter from "@/components/SiteFooter";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50">
      <NavBar />
      <main>
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
