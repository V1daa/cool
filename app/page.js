"use client";
import NavBar from "@/components/NavBar";
import SectionF from "@/components/SectionF";
import SectionY from "@/components/SectionY";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="container1">
        <SectionF />
        <SectionY />
      </div>
    </main>
  );
}
