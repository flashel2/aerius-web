import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import Link from "next/link";

export default function ArchitectureEN() {
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
          title="AERIUS Architecture"
          subtitle="Deterministic Cognitive System Overview"
        >
          <p className="text-lg text-[#9fb3c8]">
            This page provides a structural overview of the Aerius architecture.
            It explains how intelligence is organized, coordinated, and governed
            — without exposing implementation-level details.
          </p>

          <p className="pt-4">
            Aerius is not a single model.
            It is a controlled architecture composed of explicit cognitive systems.
          </p>
        </Section>

        <Divider />

        {/* ================= HIGH LEVEL ================= */}
        <Section title="High-Level Structure">
          <Card icon="🏗️" title="Architecture, Not a Model">
            <p>
              Aerius separates intelligence into distinct subsystems
              instead of collapsing everything into one probabilistic core.
            </p>

            <p className="pt-3 text-[#9fb3c8]">
              Each subsystem has a clear responsibility,
              explicit boundaries, and controlled interaction.
            </p>
          </Card>
        </Section>

        <Divider />

        {/* ================= CORE LAYERS ================= */}
        <Section title="Core Architectural Layers">
          <div className="grid grid-cols-1 gap-4">

            <Card icon="🎯" title="Intent Resolution Layer">
              Interprets user or system signals into explicit intents
              and sub-intents before any reasoning occurs.
            </Card>

            <Card icon="🧠" title="Reasoning Layer">
              Executes bounded, traceable reasoning processes.
              Reasoning is a governed system — not an emergent side effect.
            </Card>

            <Card icon="🗂️" title="Tiered Memory Layer">
              Memory is structured by time, authority, and identity.
              It provides continuity instead of short-term recall.
            </Card>

            <Card icon="⚖️" title="Emotion & Ethics Layer">
              Governs decisions through constraints, priorities,
              and ethical boundaries — not sentiment simulation.
            </Card>

            <Card icon="🎛️" title="Action Control Layer">
              Translates decisions into actions
              with explicit limits and execution rules.
            </Card>

          </div>
        </Section>

        <Divider />

        {/* ================= ORCHESTRATION ================= */}
        <Section title="Central Orchestration">
          <Card icon="🧩" title="Orchestrator">
            <p>
              All cognitive layers are coordinated
              by a central orchestrator.
            </p>

            <p className="pt-3 text-[#9fb3c8]">
              The orchestrator does not “think.”
              It enforces order, sequencing, and constraint.
            </p>

            <p className="pt-3">
              No subsystem can bypass orchestration.
              No decision occurs without a defined path.
            </p>
          </Card>
        </Section>

        <Divider />

        {/* ================= FLOW ================= */}
        <Section title="Cognitive Flow (Simplified)">
          <div className="space-y-4 text-[#9fb3c8]">
            <p>1. Signals and context are ingested</p>
            <p>2. Intent and sub-intent are resolved</p>
            <p>3. Required cognitive systems are selected</p>
            <p>4. Memory is accessed by scope and authority</p>
            <p>5. Decisions are formed with traceability</p>
            <p>6. Actions are executed under control</p>
          </div>

          <p className="pt-4 text-cyan-400">
            Every step is explicit.  
            Nothing is implicit or probabilistic by default.
          </p>
        </Section>

        <Divider />

        {/* ================= NON-GOALS ================= */}
        <Section title="What This Architecture Does Not Do">
          <ul className="list-disc pl-4 space-y-2 text-[#9fb3c8]">
            <li>It does not optimize for impressive demos</li>
            <li>It does not hide decisions inside black boxes</li>
            <li>It does not rely on scale to mask uncertainty</li>
            <li>It does not treat intelligence as a single process</li>
          </ul>
        </Section>

        <Divider />

        {/* ================= POSITIONING ================= */}
        <Section title="Why This Structure Matters">
          <p>
            Systems that carry responsibility
            cannot rely on opaque intelligence.
          </p>

          <p className="pt-4 text-[#9fb3c8]">
            Structure enables accountability.
            Accountability enables trust.
          </p>

          <p className="pt-4 text-cyan-400">
            Aerius is built for systems
            that are not allowed to guess.
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

          <p>
            Contact : <span className="text-cyan-400">founder@aerius.to</span>
          </p>
          <p className="text-xs text-[#6b7c90]">
            Aerius is a Carbonyx AI architecture · All rights reserved
          </p>
        </footer>

      </div>
    </main>
  );
}
