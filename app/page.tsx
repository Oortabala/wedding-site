import { Countdown } from "@/components/Countdown";
import { EventDay } from "@/components/EventDay";
import { FinalBlock } from "@/components/FinalBlock";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { MobileMenu } from "@/components/MobileMenu";
import { RSVP } from "@/components/RSVP";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <main>
      <MobileMenu />
      <Hero />
      <Invitation />
      <EventDay />
      <Countdown />
      <Venue />
      <Gallery />
      <RSVP />
      <FinalBlock />
    </main>
  );
}