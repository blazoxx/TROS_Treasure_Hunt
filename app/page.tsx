import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Houses } from "@/components/houses";
import { EventDetails } from "@/components/event-details";
import { Rules } from "@/components/rules";
import { Timeline } from "@/components/timeline";
import { Register } from "@/components/register";
import { Footer } from "@/components/footer";
import { AtmosphericEffects } from "@/components/atmospheric-effects";
import { LiveVisitors } from "@/components/live-visitors";
import { NightWatch } from "@/components/night-watch";
import { ErrorBoundary } from "@/components/error-boundary";
import { FAQ } from "@/components/faq";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden">
      <AtmosphericEffects />
      <Navbar />
      <Hero />
      <NightWatch />
      <Story />
      <Houses />
      <EventDetails />
      <Rules />
      <Timeline />
      <FAQ />
      <Register />
      <Footer />
      
      {/* Live Visitors - Mobile Bottom Left */}
      <ErrorBoundary>
        <div className="md:hidden fixed bottom-4 left-4 z-40">
          <LiveVisitors />
        </div>
      </ErrorBoundary>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
