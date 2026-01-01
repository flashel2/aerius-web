import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Divider } from "../components/Divider";
import Link from "next/link";

function PipelineStep({
  index,
  title,
  description,
  isLast,
}: {
  index: number;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-[14px] top-10 h-full w-px bg-cyan-400/20" />
      )}

      <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0b0f14] text-xs font-mono text-cyan-400">
        {index}
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#111824] p-4">
        <h4 className="text-white">{title}</h4>
        <p className="mt-1 text-sm text-[#9fb3c8]">{description}</p>
      </div>
    </div>
  );
}

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-[#e6eaf0]">
      {/* ================= TOP BAR ================= */}
      <div className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0f14]/80 px-3 py-1 backdrop-blur">
        <Link
          href="/"
          className="text-xs text-[#6b7c90] hover:text-cyan-400 transition"
        >
          TH
        </Link>
        <span className="text-xs text-[#6b7c90]">/</span>
        <span className="text-xs text-cyan-400">EN</span>
      </div>

      <div className="mx-auto max-w-[760px] px-5 py-24 space-y-28">

        {/* ================= HERO ================= */}
        <Section
          title="AERIUS"
          subtitle="A Cognitive Architecture, Not an AI Model"
        >
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Aerius is not the kind of AI you are used to.  
              It was not built to “answer better.”
            </p>

            <p>
              Aerius is a{" "}
              <span className="text-cyan-400">cognitive architecture</span>{" "}
              designed for systems that must  
              <strong> think with structure</strong>,  
              <strong> retain continuity</strong>,  
              and <strong> take responsibility for their decisions</strong>.
            </p>

            <p className="text-[#9fb3c8]">
              If you are looking for a smarter chatbot,  
              this page is not for you.
            </p>

            <p>
              But if you are looking for{" "}
              <span className="text-cyan-400">
                an intelligent system that can be accountable for its own decisions
              </span>,  
              Aerius is where that begins.
            </p>
          </div>

          {/* === CTA (EN ROUTING) === */}
          <div className="flex flex-col gap-3 pt-6">
            <Link
              href="/en/architecture"
              className="rounded-2xl border border-cyan-400/40 px-5 py-3 text-center hover:bg-cyan-400/5 transition"
            >
              View System Architecture
            </Link>

            <Link
              href="/en/whitepaper"
              className="rounded-2xl border border-white/10 px-5 py-3 text-center hover:bg-white/5 transition"
            >
              Read the White Paper
            </Link>
          </div>
        </Section>

        <Divider />

        {/* ================= TRUTH ================= */}
        <Section title="An Inconvenient Truth">
          <Card icon="⚠️" title="Most AI Systems Today Should Not Be Trusted">
            <ul className="list-disc pl-4 space-y-2">
              <li>Large language models do not think</li>
              <li>They statistically predict the next token</li>
              <li>They do not understand causality</li>
              <li>They have no persistent identity</li>
              <li>They do not accumulate real memory</li>
              <li>They cannot explain their own decisions</li>
            </ul>

            <p className="pt-3">
              These limitations may be acceptable for content generation.  
              But they are{" "}
              <strong className="text-[#ff8f8f]">unacceptable</strong>{" "}
              for systems with real decision authority.
            </p>

            <p className="pt-3 text-[#9fb3c8]">
              Scaling models does not create intelligence.  
              It only amplifies statistical uncertainty.
            </p>
          </Card>
        </Section>

        <Divider />

        {/* ================= WHAT IS AERIUS ================= */}
        <Section title="What Aerius Is (Without Metaphor)">
          <p className="text-[#9fb3c8]">
            Aerius is a system - not a model.
          </p>

          <p>
            Aerius is a{" "}
            <strong className="text-cyan-400">
              Deterministic Cognitive Control Architecture
            </strong>.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-6">
            <Card icon="🎯" title="Intent / Sub-Intent">
              Explicit separation and resolution of intent.  
              No goal confusion. No guessing.
            </Card>
            <Card icon="🧠" title="Reasoning System">
              Reasoning as a traceable system,  
              not an opaque outcome.
            </Card>
            <Card icon="🗂️" title="Tiered Memory">
              Memory structured by time, authority, and identity.
            </Card>
            <Card icon="⚖️" title="Emotion & Ethics">
              Emotion and ethics as governed systems,  
              not heuristics or prompt-driven behavior.
            </Card>
            <Card icon="🎛️" title="Action Control">
              Every action is bounded and justified.
            </Card>
          </div>

          <p className="pt-4 text-[#9fb3c8]">
            These systems do not compete.  
            They are coordinated by a central orchestrator.
          </p>
        </Section>

        <Divider />

        {/* ================= PIPELINE ================= */}
        <Section title="Cognitive Pipeline">
          <div className="space-y-6 pt-4">
            <PipelineStep
              index={1}
              title="Context Intake"
              description="Signals are received and contextualized across environment and memory."
            />
            <PipelineStep
              index={2}
              title="Intent Resolution"
              description="Primary and secondary intents are resolved with explicit boundaries."
            />
            <PipelineStep
              index={3}
              title="Selective Intelligence"
              description="Only the required cognitive systems are invoked."
            />
            <PipelineStep
              index={4}
              title="Tiered Memory Access"
              description="Memory is accessed according to level, time, and authority."
            />
            <PipelineStep
              index={5}
              title="Action with Trace"
              description="Actions are produced with a verifiable decision trail."
              isLast
            />
          </div>

          <p className="pt-6 text-[#9fb3c8]">
            Every outcome has an origin.  
            Every decision has a history.  
            Nothing occurs by chance.
          </p>
        </Section>

        <Divider />

        {/* ================= WHY ================= */}
        <Section title="Why Aerius Must Exist">
          <div className="grid grid-cols-1 gap-4">
            <Card icon="🧱" title="The industry chose the easier path">
              <ul className="list-disc pl-4 space-y-1">
                <li>Language fluency</li>
                <li>Scalability</li>
                <li>Impressive outputs</li>
              </ul>
            </Card>

            <Card icon="⚖️" title="Real systems require different properties">
              <ul className="list-disc pl-4 space-y-1">
                <li>Behavioral stability</li>
                <li>Explainable decisions</li>
                <li>Explicit boundaries</li>
                <li>Persistent identity and memory</li>
              </ul>
            </Card>

            <Card icon="⛔" title="These two paths cannot coexist">
              <p className="text-cyan-400">
                Aerius exists because some systems  
                are not allowed to choose the easier path.
              </p>
            </Card>
          </div>
        </Section>

        <Divider />

        {/* ================= FOOTER ================= */}
        <footer className="pt-20 space-y-6 border-t border-white/10">
          <p className="text-sm uppercase tracking-wide text-[#eab308]/80">
            Carbonyx AI · Cognitive Infrastructure
          </p>

          <p className="text-[#9fb3c8]">
            No ads · No reassurance · No illusions

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