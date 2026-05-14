import { DateBlock } from "@/components/DateBlock";
import { FinalBlock } from "@/components/FinalBlock";
import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { RSVP } from "@/components/RSVP";
import { Timeline } from "@/components/Timeline";
import { Venue } from "@/components/Venue";

export default function Home() {
  return (
    <main>
      <Hero />
      <Invitation />
      <DateBlock />
      <Venue />
      <Timeline />
      <RSVP />
      <FinalBlock />
    </main>
  );
}