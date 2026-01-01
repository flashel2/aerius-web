import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import Link from "next/link";

export default function WhitepaperEN() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-[#e6eaf0]">
      {/* ================= TOP BAR ================= */}
      <div className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0f14]/80 px-3 py-1 backdrop-blur">
        <Link
          href="/en"
          className="text-xs text-[#6b7c90] hover:text-cyan-400 transition"
        >
          ← Back
        </Link>
      </div>

      <div className="mx-auto max-w-[760px] px-5 py-24 space-y-28">

        {/* ================= HEADER ================= */}
        <Section
          title="AERIUS White Paper"
          subtitle="Public Abstract (Abstract Only)"
        >
          <p className="text-lg text-[#9fb3c8]">
            This page provides a public abstract of the Aerius White Paper.
            It explains the architectural intent and design boundaries while
            intentionally excluding implementation-level details.
          </p>

          <p className="pt-4">
            The full White Paper is prepared for limited review and is not
            published publicly.
          </p>
        </Section>

        <Divider />

        {/* ================= PROBLEM ================= */}
        <Section title="The Problem This Paper Addresses">
          <p>
            Most modern AI systems are built to maximize “answer quality,”
            not “accountability.”
          </p>

          <p className="pt-4 text-[#9fb3c8]">
            Bigger models do not automatically produce systems that understand
            causality, maintain identity, or explain their decisions.
          </p>

          <Card icon="⚠️" title="A structural gap">
            <ul className="list-disc pl-4 space-y-1">
              <li>No persistent identity</li>
              <li>No memory as a stable structure</li>
              <li>Decisions that cannot be traced</li>
              <li>Everything collapsed into a single black box</li>
            </ul>
          </Card>
        </Section>

        <Divider />

        {/* ================= APPROACH ================= */}
        <Section title="The Aerius Approach">
          <p>
            Aerius is not an attempt to build a “smarter model.”
          </p>

          <p className="pt-3">
            Aerius is a{" "}
            <strong className="text-cyan-400">
              deterministic cognitive control architecture
            </strong>{" "}
            that separates core functions of intelligence into explicit,
            governed subsystems.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-6">
            <Card icon="🎯" title="Intent-Centric Design">
              Decisions begin with intent resolution — not output guessing.
            </Card>

            <Card icon="🧠" title="Reasoning as a System">
              Reasoning is controlled and traceable, not an opaque outcome.
            </Card>

            <Card icon="🗂️" title="Memory as Identity">
              Memory is treated as a structural identity layer, not a cache.
            </Card>

            <Card icon="⚖️" title="Governed Emotion & Ethics">
              Emotion and ethics operate as bounded governance, not prompts.
            </Card>
          </div>
        </Section>

        <Divider />

        {/* ================= PRINCIPLES ================= */}
        <Section title="Non-Negotiable Design Principles">
          <div className="grid grid-cols-1 gap-4">
            <Card icon="🧭" title="Determinism">
              Every decision must have an inspectable, verifiable path.
            </Card>

            <Card icon="🧬" title="Continuity">
              A system must maintain continuity, not reset per question.
            </Card>

            <Card icon="🧩" title="Separation of Intelligence">
              Intelligence is not one process — it is coordination between
              distinct systems.
            </Card>

            <Card icon="🔗" title="Control over Output">
              Outputs are outcomes. Control is the system.
            </Card>
          </div>
        </Section>

        <Divider />

        {/* ================= SCOPE ================= */}
        <Section title="Scope and Boundaries">
          <p className="text-[#9fb3c8]">
            This public abstract explains “what” and “why,”
            while deliberately avoiding “how” at the implementation level.
          </p>

          <ul className="list-disc pl-4 space-y-2 pt-4">
            <li>No internal implementation disclosure</li>
            <li>No algorithms or parameters</li>
            <li>Not usable as a replication guide</li>
          </ul>

          <p className="pt-4 text-[#ff8f8f]">
            Deep technical details are available only under controlled access.
          </p>
        </Section>

        <Divider />

        {/* ================= POSITIONING ================= */}
        <Section title="What Aerius Is Not">
          <p>
            Aerius is not built for:
          </p>

          <ul className="list-disc pl-4 space-y-1 pt-3 text-[#9fb3c8]">
            <li>Impressive demos without accountability</li>
            <li>Prompt experiments</li>
            <li>The illusion of intelligence</li>
          </ul>

          <p className="pt-4">
            Aerius is built for systems that cannot afford decisions without
            explanation.
          </p>
        </Section>

        <Divider />

        {/* ================= ACCESS ================= */}
        <Section title="Request Full Access">
          <p className="text-[#9fb3c8]">
            To request access to the full White Paper (limited review)
            contact :
          </p>

          <p className="pt-3 text-cyan-400">
            founder@aerius.to
          </p>

          <p className="pt-4 text-sm text-[#9fb3c8]">
            Requests are evaluated case-by-case for qualified investors and partners.
          </p>
        </Section>

        <Divider />






    {/* ================= FOOTER ================= */}
        <footer className="pt-16 space-y-6 border-t border-white/10">
         <p className="text-sm uppercase tracking-wide text-[#eab308]/80">
            Carbonyx AI · Cognitive Infrastructure
          </p>
          <p className="text-[#9fb3c8]">
            Architecture · Cognitive Control · Deterministic Systems
          </p>
            <p className="text-[#9fb3c8]">
            Structure without responsibility is dangerous.  
            Intelligence without structure is an illusion.
          </p>

          <p>
            Contact : <span className="text-cyan-400">founder@aerius.to</span>
          </p>
            <p className="text-sm text-[#9fb3c8]">
            White Paper (Abstract) · Architecture · Intellectual Property
            </p>
          <p className="text-xs text-[#6b7c90]">
            Aerius is a Carbonyx AI architecture · All rights reserved
          </p>
        </footer>

      </div>
    </main>
  );
}

