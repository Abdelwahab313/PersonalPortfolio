import React from "react";

const box = "dgm-box";
const accentBox = "dgm-box dgm-box-accent";
const text = "dgm-text";
const sub = "dgm-sub";
const note = "dgm-note";

function FargateDiagram() {
  return (
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="dgm-fargate-title">
      <title id="dgm-fargate-title">
        Queue depth drives the autoscaler. Workers drain, then stop.
      </title>
      <defs>
        <marker
          id="dgm-fa"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className="dgm-arrowhead" />
        </marker>
      </defs>
      <rect className={box} x="20" y="115" width="130" height="72" />
      <text className={text} x="85" y="143" textAnchor="middle">
        translation jobs
      </text>
      <text className={sub} x="85" y="163" textAnchor="middle">
        queue
      </text>

      <line
        className="dgm-line"
        x1="150"
        y1="151"
        x2="242"
        y2="151"
        markerEnd="url(#dgm-fa)"
      />
      <text className={sub} x="196" y="141" textAnchor="middle">
        pop
      </text>

      <text className={sub} x="320" y="30" textAnchor="middle">
        ECS Fargate · 90% Spot
      </text>
      <rect className={box} x="250" y="44" width="140" height="46" />
      <text className={text} x="320" y="72" textAnchor="middle">
        worker
      </text>
      <rect className={box} x="250" y="128" width="140" height="46" />
      <text className={text} x="320" y="156" textAnchor="middle">
        worker
      </text>
      <rect className={box} x="250" y="212" width="140" height="46" />
      <text className={text} x="320" y="240" textAnchor="middle">
        worker
      </text>

      <line
        className="dgm-line"
        x1="390"
        y1="151"
        x2="482"
        y2="151"
        markerEnd="url(#dgm-fa)"
      />
      <text className={sub} x="436" y="141" textAnchor="middle">
        translations
      </text>

      <rect className={accentBox} x="500" y="115" width="200" height="72" />
      <text className={text} x="600" y="143" textAnchor="middle">
        queue-depth autoscaler
      </text>
      <text className={sub} x="600" y="163" textAnchor="middle">
        Lambda
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M500,117 H300 V92"
        markerEnd="url(#dgm-fa)"
      />
      <text className={sub} x="380" y="108" textAnchor="middle">
        measure depth
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M600,115 V76 H470"
        markerEnd="url(#dgm-fa)"
      />
      <text className={sub} x="534" y="66" textAnchor="middle">
        drain, then stop
      </text>

      <text className={note} x="20" y="288">
        jobs run 30 s to 2 h · a killed job re-runs from the start
      </text>
    </svg>
  );
}

function EngineDiagram() {
  return (
    <svg viewBox="0 0 720 320" role="img" aria-labelledby="dgm-engine-title">
      <title id="dgm-engine-title">
        One request path through the engine, ordered providers with fallback,
        credits metered on the side.
      </title>
      <defs>
        <marker
          id="dgm-ea"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className="dgm-arrowhead" />
        </marker>
      </defs>
      <rect className={box} x="20" y="70" width="110" height="64" />
      <text className={text} x="75" y="98" textAnchor="middle">
        request
      </text>
      <text className={sub} x="75" y="118" textAnchor="middle">
        Rails
      </text>

      <line
        className="dgm-line"
        x1="130"
        y1="102"
        x2="172"
        y2="102"
        markerEnd="url(#dgm-ea)"
      />

      <rect className={accentBox} x="176" y="52" width="184" height="100" />
      <text className={text} x="268" y="86" textAnchor="middle">
        engine layer
      </text>
      <text className={sub} x="268" y="108" textAnchor="middle">
        JSON repair
      </text>
      <text className={sub} x="268" y="126" textAnchor="middle">
        Langfuse trace
      </text>

      <line
        className="dgm-line"
        x1="360"
        y1="102"
        x2="412"
        y2="102"
        markerEnd="url(#dgm-ea)"
      />

      <text className={sub} x="420" y="42">
        1
      </text>
      <rect className={box} x="436" y="24" width="170" height="52" />
      <text className={text} x="521" y="46" textAnchor="middle">
        Bedrock · Claude
      </text>
      <text className={sub} x="521" y="64" textAnchor="middle">
        ordered first
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M521,76 V104"
        markerEnd="url(#dgm-ea)"
      />
      <text className={sub} x="616" y="95" textAnchor="middle">
        fail
      </text>

      <text className={sub} x="420" y="116">
        2
      </text>
      <rect className={box} x="436" y="102" width="170" height="52" />
      <text className={text} x="521" y="124" textAnchor="middle">
        OpenAI
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M521,154 V182"
        markerEnd="url(#dgm-ea)"
      />
      <text className={sub} x="616" y="173" textAnchor="middle">
        fail
      </text>

      <text className={sub} x="420" y="194">
        3
      </text>
      <rect className={box} x="436" y="180" width="170" height="52" />
      <text className={text} x="521" y="202" textAnchor="middle">
        Gemini
      </text>
      <text className={sub} x="521" y="220" textAnchor="middle">
        ordered last
      </text>

      <line
        className="dgm-line"
        x1="268"
        y1="152"
        x2="268"
        y2="224"
        markerEnd="url(#dgm-ea)"
      />
      <rect className={box} x="176" y="228" width="184" height="60" />
      <text className={text} x="268" y="252" textAnchor="middle">
        credits meter
      </text>
      <text className={sub} x="268" y="272" textAnchor="middle">
        billing correctness
      </text>

      <text className={note} x="436" y="288">
        rate limit → reschedule, not failure
      </text>
    </svg>
  );
}

function AuroraDiagram() {
  return (
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="dgm-aurora-title">
      <title id="dgm-aurora-title">
        One broadcast, many clients, one query plan doing the damage.
      </title>
      <defs>
        <marker
          id="dgm-aa"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className="dgm-arrowhead" />
        </marker>
      </defs>
      <rect className={accentBox} x="30" y="40" width="190" height="64" />
      <text className={text} x="125" y="66" textAnchor="middle">
        status broadcast
      </text>
      <text className={sub} x="125" y="86" textAnchor="middle">
        1,013 calls
      </text>

      <path
        className="dgm-line"
        d="M220,64 H540 V46"
        markerEnd="url(#dgm-aa)"
      />
      <rect className={box} x="544" y="24" width="150" height="48" />
      <text className={text} x="619" y="44" textAnchor="middle">
        client
      </text>
      <text className={sub} x="619" y="62" textAnchor="middle">
        fan-out
      </text>

      <path
        className="dgm-line"
        d="M220,84 H540 V122"
        markerEnd="url(#dgm-aa)"
      />
      <rect className={box} x="544" y="100" width="150" height="48" />
      <text className={text} x="619" y="128" textAnchor="middle">
        client
      </text>

      <path
        className="dgm-line"
        d="M220,104 H540 V198"
        markerEnd="url(#dgm-aa)"
      />
      <rect className={box} x="544" y="176" width="150" height="48" />
      <text className={text} x="619" y="204" textAnchor="middle">
        client
      </text>

      <path className="dgm-line" d="M125,104 V186" markerEnd="url(#dgm-aa)" />
      <rect className={box} x="30" y="190" width="190" height="64" />
      <text className={text} x="125" y="216" textAnchor="middle">
        Aurora
      </text>
      <text className={sub} x="125" y="236" textAnchor="middle">
        100% CPU
      </text>
      <text className={sub} x="150" y="160">
        query plan: 7.33M rows / call
      </text>

      <text className={note} x="30" y="288">
        dropped the join · throttled the caller: 1,013 → ~100
      </text>
    </svg>
  );
}

function TriageDiagram() {
  return (
    <svg viewBox="0 0 720 300" role="img" aria-labelledby="dgm-triage-title">
      <title id="dgm-triage-title">
        Agents investigate inside guardrails. The verdict gate is code. Writes
        stay human.
      </title>
      <defs>
        <marker
          id="dgm-ta"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className="dgm-arrowhead" />
        </marker>
      </defs>
      <rect className={box} x="20" y="40" width="150" height="60" />
      <text className={text} x="95" y="66" textAnchor="middle">
        production
      </text>
      <text className={sub} x="95" y="86" textAnchor="middle">
        exceptions
      </text>

      <line
        className="dgm-line"
        x1="170"
        y1="70"
        x2="222"
        y2="70"
        markerEnd="url(#dgm-ta)"
      />

      <rect className="dgm-guardrail" x="226" y="20" width="270" height="180" />
      <text className={sub} x="240" y="38">
        guardrails
      </text>
      <text className={sub} x="240" y="56">
        read-only · rollback wrapper · audit log
      </text>
      <rect className={accentBox} x="246" y="72" width="230" height="50" />
      <text className={text} x="361" y="94" textAnchor="middle">
        investigator agent
      </text>
      <text className={sub} x="361" y="112" textAnchor="middle">
        reads, never writes
      </text>
      <rect className={accentBox} x="246" y="138" width="230" height="50" />
      <text className={text} x="361" y="160" textAnchor="middle">
        critic agent
      </text>
      <text className={sub} x="361" y="178" textAnchor="middle">
        checks the story
      </text>

      <line
        className="dgm-line"
        x1="476"
        y1="97"
        x2="528"
        y2="97"
        markerEnd="url(#dgm-ta)"
      />
      <line
        className="dgm-line"
        x1="476"
        y1="163"
        x2="528"
        y2="163"
        markerEnd="url(#dgm-ta)"
      />

      <rect className={box} x="532" y="104" width="170" height="64" />
      <text className={text} x="617" y="130" textAnchor="middle">
        verdict gate
      </text>
      <text className={sub} x="617" y="150" textAnchor="middle">
        pass / fail in code
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M617,168 V210"
        markerEnd="url(#dgm-ta)"
      />
      <rect className={box} x="532" y="214" width="170" height="52" />
      <text className={text} x="617" y="236" textAnchor="middle">
        audit log
      </text>
      <text className={sub} x="617" y="254" textAnchor="middle">
        every verdict
      </text>

      <path
        className="dgm-line dgm-dash"
        d="M280,200 V252 H176"
        markerEnd="url(#dgm-ta)"
      />
      <rect className={box} x="20" y="226" width="152" height="52" />
      <text className={text} x="96" y="248" textAnchor="middle">
        write gate
      </text>
      <text className={sub} x="96" y="266" textAnchor="middle">
        humans only
      </text>
    </svg>
  );
}

const diagrams = {
  fargate: FargateDiagram,
  engine: EngineDiagram,
  aurora: AuroraDiagram,
  triage: TriageDiagram
};

export default function Diagram({name}) {
  const Component = diagrams[name];
  if (!Component) {
    return null;
  }
  return <Component />;
}
