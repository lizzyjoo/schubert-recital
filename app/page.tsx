"use client";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── Pixel Icons ─────────────────────────────────────────────────────────────

function IconNote({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect x="5" y="1" width="2" height="9" fill="currentColor" />
      <rect x="7" y="1" width="4" height="2" fill="currentColor" />
      <rect x="10" y="3" width="2" height="2" fill="currentColor" />
      <rect x="2" y="8" width="4" height="4" fill="currentColor" />
      <rect x="1" y="9" width="6" height="2" fill="currentColor" />
    </svg>
  );
}

function IconQuote({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect x="2" y="3" width="4" height="5" fill="currentColor" />
      <rect x="2" y="8" width="2" height="3" fill="currentColor" />
      <rect x="9" y="3" width="4" height="5" fill="currentColor" />
      <rect x="9" y="8" width="2" height="3" fill="currentColor" />
    </svg>
  );
}

function IconScroll({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect
        x="3"
        y="1"
        width="10"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="5" y="4" width="6" height="1" fill="currentColor" />
      <rect x="5" y="6" width="6" height="1" fill="currentColor" />
      <rect x="5" y="8" width="4" height="1" fill="currentColor" />
      <rect x="5" y="10" width="6" height="1" fill="currentColor" />
      <rect x="5" y="12" width="3" height="1" fill="currentColor" />
    </svg>
  );
}

function IconChat({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect
        x="1"
        y="2"
        width="14"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="3" y="5" width="2" height="1" fill="currentColor" />
      <rect x="7" y="5" width="2" height="1" fill="currentColor" />
      <rect x="11" y="5" width="2" height="1" fill="currentColor" />
      <rect x="3" y="11" width="1" height="1" fill="currentColor" />
      <rect x="4" y="12" width="1" height="1" fill="currentColor" />
      <rect x="5" y="13" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

function IconTerminal({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect
        x="1"
        y="2"
        width="14"
        height="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect
        x="1"
        y="2"
        width="14"
        height="3"
        fill="currentColor"
        opacity="0.3"
      />
      <rect x="3" y="3" width="1" height="1" fill="currentColor" />
      <rect x="5" y="3" width="1" height="1" fill="currentColor" />
      <rect x="3" y="7" width="1" height="1" fill="currentColor" />
      <rect x="4" y="8" width="1" height="1" fill="currentColor" />
      <rect x="3" y="9" width="1" height="1" fill="currentColor" />
      <rect x="6" y="10" width="4" height="1" fill="currentColor" />
    </svg>
  );
}

function IconStar({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <rect x="7" y="1" width="2" height="2" fill="currentColor" />
      <rect x="6" y="3" width="4" height="2" fill="currentColor" />
      <rect x="1" y="5" width="14" height="2" fill="currentColor" />
      <rect x="3" y="7" width="10" height="2" fill="currentColor" />
      <rect x="4" y="9" width="8" height="1" fill="currentColor" />
      <rect x="3" y="10" width="3" height="2" fill="currentColor" />
      <rect x="10" y="10" width="3" height="2" fill="currentColor" />
      <rect x="2" y="12" width="2" height="2" fill="currentColor" />
      <rect x="12" y="12" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const aboutContent = {
  title: "ABOUT THIS RECITAL",
  logLine: "LOG_001: HI THERE",
  body: [
    'I got asked why I do recitals, and more broadly, why I continue to play music. Then I thought, hm, I have a short answer, which is that "I love music," but I feel like I don\'t really get to give the long answer. So I decided to take a chance to get a bit more personal than usual and share my thoughts here.',
    "Music really has a special place in my heart because it really kept me going during the most difficult times. In high school, I moved far away from home and family. I had a difficult time adjusting, making friends, navigating language barriers, and generally feeling disconnected from the people around me. Listening to music helped, but what really got me through was the little world of music I started building by playing and practicing the art of making music.",
    "Then my world opened up in a different way. I met friends in orchestra, learned to loosen up and goof around, and found a space where I could grow through music. Everything from practicing for all-state orchestra, experiencing an irreplaceable joy when I feel fully connected to the music while playing, dragging myself to lessons knowing that I will probably end up getting completely roasted, concerts where everything came together, and recitals where I fell short and felt I hadn't done justice to the pieces—all of this formed a cycle of music-making that has shaped how I think and live life overall. Music has made me the most vulnerable in some ways and also has made me strong in ways I know other things couldn't have. It has influenced how I approach other fields, navigate challenges, and make decisions, and is ultimately fundamental to how I move through the world.",
    "I know this can sound a bit dramatic or overly serious, but I do feel this way. As a non-professional musician, there have definitely been moments where I've had to decide whether to keep going. But I've never really intended to step away. Even when it's difficult, I want to stay with it. I've met some of the best people through music, and even though the repertoire I play is often centuries old, I always find ways to be inspired.",
    "I am not the most virtuosic instrumentalist, and so I don't find particular joy in playing the most technically impressive pieces. What matters to me instead is that every engagement I have with music is genuine, personal, and respectful toward the music itself. This is perhaps why I felt drawn to Schubert, whose music has guided me most in times of crisis. It is a privilege to continue playing the violin and to be part of this tradition and culture, and I hope to continue doing so for a while :)",
  ],
};

const quotesContent = [
  {
    text: "Wow there is basically no development in the first movt. What. Oh I see, this mans was too depressed to develop. He devloped in the second instead",
    author: "ERIC, IN REACTION TO THE 1ST MVT OF A MINOR SONATA",
  },
  {
    text: "Schubert wrote some hood music this isn't one of them",
    author: "ONE OF US",
  },
  {
    text: "We sound good overall, some details r fu**ed tho",
    author: "ERIC",
  },
  {
    text: "Here, it’s like…like...like..b i r d s",
    author: "LIZZY, TO THE 3RD MVT",
  },
  {
    text: "Schubert is like really bi-polar",
    author: "ERIC",
  },
  {
    text: "The trio in the 2nd movement is just weird, this section just creeps me out",
    author: "ERIC",
  },
  {
    text: "N I C E.",
    author: "Lizzy",
  },
];

const factsContent = [
  {
    tag: "BUFF: PROLIFIC",
    fact: "He wrote over 140 songs in a single year. In 1815 alone, at just 18, he produced an astonishing flood of lieder. That's roughly one song every two and a half days, on top of operas, masses, and symphonies.",
  },
  {
    tag: "LOG: LEFT ON READ",
    fact: "Schubert's friends sent a volume of 16 Goethe settings to the poet in 1816, hoping for a response or endorsement. Nothing came of it.",
  },
  {
    tag: "LORE: THE SCHUBERTIADEN",
    fact: 'Viennese social gatherings called "Schubertiaden" were devoted entirely to performing his songs and dances, which is pretty good for someone who struggled financially his whole life.',
  },
  {
    tag: "QUEST: FINAL CONCERT",
    fact: "His only public concert, in March 1828, was successful enough that he could finally buy a piano. He died eight months later, at 31, of typhoid fever from contaminated water.",
  },
  {
    tag: "NO ONE ASKED: BUT",
    fact: "Lizzy's favorite piece form Schubert is his C Major String Quintet",
  },
  {
    tag: "GEAR: NIGHT VISION",
    fact: "He famously slept in his spectacles so he could start composing the moment he woke up without wasting seconds finding his glasses.",
  },
  {
    tag: "LOG: BEETHOVEN FAN",
    fact: "Regardless of whether they met on his deathbed, Schubert deeply revered Beethoven. He served as one of the torchbearers at Beethoven's funeral, and requested to be buried alongside him at the Währing cemetery in Vienna.",
  },
];

const TABS = [
  { icon: IconTerminal, label: "ABOUT" },
  { icon: IconQuote, label: "QUOTES" },
  { icon: IconScroll, label: "FACTS" },
  { icon: IconChat, label: "GUEST" },
];

// ─── CSS ─────────────────────────────────────────────────────────────────────

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root {
  --bg: #0d0d0d;
  --bg-surface: #141418;
  --terminal-bg: #1a1a22;
  --accent: #c8b8e8;
  --accent-bright: #e0d0ff;
  --accent-dim: #6b5f8a;
  --text: #d4d0dc;
  --text-dim: #78747e;
  --border: #2a2830;
  --border-bright: #3d3850;
  --font-pixel: 'Press Start 2P', monospace;
  --font-mono: 'IBM Plex Mono', monospace;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

html, body, #root {
  height: 100%; overflow: hidden;
  background: var(--bg); color: var(--text);
  font-family: var(--font-mono);
  -webkit-font-smoothing: antialiased;
}

.scanlines {
  position: fixed; inset: 0; pointer-events: none; z-index: 100;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px);
}

/* ── App shell: FIXED full viewport, nothing scrolls ── */
.app-root {
  display: flex; flex-direction: column;
  height: 100dvh; max-width: 420px; margin: 0 auto;
  position: relative; overflow: hidden;
}

/* ── Header: fixed at top ── */
.app-header {
  flex-shrink: 0;
  background: var(--bg); border-bottom: 1px solid var(--border); padding: 0 16px;
  z-index: 10;
}
.header-bar { display: flex; align-items: center; gap: 8px; height: 44px; }
.header-title { font-family: var(--font-pixel); font-size: 9px; color: var(--accent); letter-spacing: 1px; }
.header-status { margin-left: auto; font-family: var(--font-pixel); font-size: 6px; color: var(--accent-dim); animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

/* ── Content area: fills remaining space, NO scroll ── */
.content-area {
  flex: 1; min-height: 0;
  display: flex; flex-direction: column;
  padding: 12px; overflow: hidden;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.content-area.exit-left { transform: translateX(-30px); opacity: 0; }
.content-area.exit-right { transform: translateX(30px); opacity: 0; }

/* ── Panel window: fills content-area ── */
.panel-window {
  flex: 1; min-height: 0;
  display: flex; flex-direction: column;
  border: 1px solid var(--border-bright); background: var(--bg-surface);
  animation: fadeUp 0.35s ease;
  overflow: hidden;
}
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.window-header {
  flex-shrink: 0;
  display: flex; align-items: center; gap: 8px;
  padding: 10px 12px; border-bottom: 1px solid var(--border); background: var(--terminal-bg);
}
.window-dot { width: 8px; height: 8px; background: var(--accent); }
.window-dot.hollow { background: transparent; border: 1px solid var(--border-bright); margin-left: auto; }
.window-title { font-family: var(--font-pixel); font-size: 8px; color: var(--accent); letter-spacing: 1px; }

/* ── ONLY scrollable element ── */
.window-body {
  flex: 1; min-height: 0;
  overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: 16px;
}

/* ── Swipe dots ── */
.swipe-dots {
  flex-shrink: 0;
  display: flex; justify-content: center; gap: 8px; padding: 6px 0;
}
.dot { width: 6px; height: 6px; background: var(--border-bright); transition: all 0.2s ease; }
.dot.active { background: var(--accent); width: 16px; }

/* ── Tab bar: fixed at bottom ── */
.tab-bar {
  flex-shrink: 0;
  display: flex; background: var(--bg-surface); border-top: 1px solid var(--border);
  padding-bottom: env(safe-area-inset-bottom);
}
.tab-btn {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 8px 0; background: none; border: none; cursor: pointer;
  color: var(--text-dim); transition: color 0.15s;
}
.tab-btn.active { color: var(--accent); }
.tab-label { font-family: var(--font-pixel); font-size: 5px; letter-spacing: 0.5px; }

/* ── About ── */
.about-avatar {
  width: 56px; height: 56px; border: 1px solid var(--border-bright); background: var(--terminal-bg);
  display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: var(--accent);
}
.about-title { font-family: var(--font-pixel); font-size: 12px; color: var(--accent-bright); line-height: 1.8; margin-bottom: 6px; }
.log-tag { font-family: var(--font-pixel); font-size: 6px; color: var(--bg); background: var(--accent); display: inline-block; padding: 3px 8px; margin-bottom: 18px; }
.about-text p { font-size: 12px; line-height: 1.7; color: var(--text); margin-bottom: 12px; }
.stats-section { margin-top: 12px; display: flex; flex-direction: column; gap: 8px; }
.stat-card { border: 1px solid var(--border); background: var(--terminal-bg); padding: 12px; }
.stat-label { font-family: var(--font-pixel); font-size: 6px; color: var(--accent); display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.stat-value { font-size: 11px; line-height: 1.6; color: var(--text-dim); }

/* ── Quotes ── */
.quotes-sub { font-family: var(--font-pixel); font-size: 5px; color: var(--text-dim); letter-spacing: 1px; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px dashed var(--border); }
.quote-block { padding: 12px 0; border-bottom: 1px solid var(--border); }
.quote-block:last-of-type { border-bottom: none; }
.quote-marker { font-family: var(--font-pixel); font-size: 7px; color: var(--accent-dim); margin-bottom: 4px; }
.quote-text { font-size: 12px; line-height: 1.65; color: var(--text); margin-bottom: 6px; }
.quote-author { font-family: var(--font-pixel); font-size: 6px; color: var(--accent); font-style: normal; }

/* ── Facts ── */
.facts-boot { background: var(--accent); color: var(--bg); padding: 12px; margin-bottom: 14px; font-family: var(--font-pixel); font-size: 6px; line-height: 2; }
.boot-line { display: block; }
.fact-card { border: 1px solid var(--border); padding: 12px; margin-bottom: 8px; background: var(--terminal-bg); }
.fact-tag { font-family: var(--font-pixel); font-size: 6px; color: var(--accent); display: flex; align-items: center; gap: 5px; margin-bottom: 6px; }
.fact-text { font-size: 11px; line-height: 1.65; color: var(--text); }

/* ── Guestbook ── */
.guest-intro { font-size: 11px; line-height: 1.6; color: var(--text-dim); margin-bottom: 16px; font-family: var(--font-pixel); font-size: 6px; letter-spacing: 0.5px; }
.guest-form { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.guest-input, .guest-textarea {
  background: var(--terminal-bg); border: 1px solid var(--border);
  color: var(--text); font-family: var(--font-mono); font-size: 12px;
  padding: 10px; outline: none; resize: none;
}
.guest-input::placeholder, .guest-textarea::placeholder { color: var(--text-dim); }
.guest-input:focus, .guest-textarea:focus { border-color: var(--accent-dim); }
.guest-textarea { min-height: 70px; }
.guest-submit {
  background: var(--accent); color: var(--bg); border: none;
  font-family: var(--font-pixel); font-size: 7px; letter-spacing: 1px;
  padding: 10px; cursor: pointer;
}
.guest-submit:active { background: var(--accent-bright); }
.guest-divider { border: none; border-top: 1px dashed var(--border); margin: 6px 0 14px; }
.guest-entries { display: flex; flex-direction: column; gap: 10px; }
.guest-entry { border: 1px solid var(--border); background: var(--terminal-bg); padding: 12px; }
.guest-name { font-family: var(--font-pixel); font-size: 6px; color: var(--accent); margin-bottom: 6px; }
.guest-msg { font-size: 11px; line-height: 1.5; color: var(--text); }
.guest-time { font-family: var(--font-pixel); font-size: 5px; color: var(--text-dim); margin-top: 6px; }

/* ── Fade-in ── */
.fade-in { animation: fadeIn 0.5s ease both; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
`;

// ─── Panels ──────────────────────────────────────────────────────────────────

function AboutPanel() {
  return (
    <div className="panel-window">
      <div className="window-header">
        <span className="window-dot" />
        <span className="window-title">RECITAL.EXE</span>
        <span className="window-dot hollow" />
      </div>
      <div className="window-body">
        <div className="about-avatar">
          <IconNote size={36} />
        </div>
        <h1 className="about-title">{aboutContent.title}</h1>
        <div className="log-tag">{aboutContent.logLine}</div>
        <div className="about-text">
          {aboutContent.body.map((p, i) => (
            <p
              key={i}
              className="fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="stats-section">
          {/* {aboutContent.stats.map((s, i) => (
            <div
              key={i}
              className="stat-card fade-in"
              style={{ animationDelay: `${(i + 3) * 0.15}s` }}
            >
              <div className="stat-label">
                <IconStar size={10} /> {s.label}
              </div>
              <div className="stat-value">{s.value}</div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

function QuotesPanel() {
  return (
    <div className="panel-window">
      <div className="window-header">
        <span className="window-dot" />
        <span className="window-title">QUOTES.TXT</span>
        <span className="window-dot hollow" />
      </div>
      <div className="window-body">
        <div className="quotes-sub">RANDOM QUOTES FROM VARIOUS OCCASIONS</div>
        {quotesContent.map((q, i) => (
          <div
            key={i}
            className="quote-block fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="quote-marker">{">"}_</div>
            <div className="quote-text">&ldquo;{q.text}&rdquo;</div>
            <cite className="quote-author">{q.author}</cite>
          </div>
        ))}
      </div>
    </div>
  );
}

function FactsPanel() {
  return (
    <div className="panel-window">
      <div className="window-header">
        <span className="window-dot" />
        <span className="window-title">FACTS.ROM</span>
        <span className="window-dot hollow" />
      </div>
      <div className="window-body">
        <div className="facts-boot">
          <span className="boot-line">BOOTING SCHOOB FACTS...</span>
          <span className="boot-line">LOADING</span>
          <span className="boot-line">SCHUBERT_INTEL.SYS</span>
          <span className="boot-line">
            UNCOVERING THE MOST RANDOM FACTS ABOUT SCHUBERT
          </span>
        </div>
        {factsContent.map((f, i) => (
          <div
            key={i}
            className="fact-card fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="fact-tag">
              <IconStar size={8} /> {f.tag}
            </div>
            <p className="fact-text">{f.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// Replace your existing GuestbookPanel with this.
// Make sure useEffect is imported at the top:
// import { useState, useRef, useCallback, useEffect } from "react";

interface GuestEntry {
  name: string;
  msg: string;
  time: string;
}

function GuestbookPanel() {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch entries on mount
  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const submit = async () => {
    if (!name.trim() || !msg.trim() || submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), msg: msg.trim() }),
      });
      if (res.ok) {
        const entry = await res.json();
        setEntries([entry, ...entries]);
        setName("");
        setMsg("");
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="panel-window">
      <div className="window-header">
        <span className="window-dot" />
        <span className="window-title">GUESTBOOK.LOG</span>
        <span className="window-dot hollow" />
      </div>
      <div className="window-body">
        <p className="guest-intro">LEAVE A MESSAGE IN THE LOG.</p>
        <div className="guest-form">
          <input
            className="guest-input"
            placeholder="HANDLE / NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
          />
          <textarea
            className="guest-textarea"
            placeholder="YOUR MESSAGE..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            maxLength={280}
          />
          <button
            className="guest-submit"
            onClick={submit}
            disabled={submitting}
          >
            {submitting ? "TRANSMITTING..." : "TRANSMIT_MSG"}
          </button>
        </div>
        <hr className="guest-divider" />
        <div className="guest-entries">
          {loading ? (
            <p
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "6px",
                color: "var(--text-dim)",
              }}
            >
              LOADING ENTRIES...
            </p>
          ) : entries.length === 0 ? (
            <p
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "6px",
                color: "var(--text-dim)",
              }}
            >
              NO ENTRIES YET. BE THE FIRST.
            </p>
          ) : (
            entries.map((e, i) => (
              <div
                key={i}
                className="guest-entry fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="guest-name">@{e.name}</div>
                <div className="guest-msg">{e.msg}</div>
                <div className="guest-time">{e.time}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState(0);
  const [swipe, setSwipe] = useState<"left" | "right" | null>(null);
  const startX = useRef(0);
  const startY = useRef(0);

  const go = useCallback(
    (i: number) => {
      if (i === tab) return;
      setSwipe(i > tab ? "left" : "right");
      setTimeout(() => {
        setTab(i);
        setSwipe(null);
      }, 200);
    },
    [tab],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.changedTouches[0].screenX;
    startY.current = e.changedTouches[0].screenY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diffX = startX.current - e.changedTouches[0].screenX;
    const diffY = startY.current - e.changedTouches[0].screenY;
    if (Math.abs(diffX) < 60 || Math.abs(diffY) > Math.abs(diffX)) return;
    if (diffX > 0 && tab < 3) go(tab + 1);
    else if (diffX < 0 && tab > 0) go(tab - 1);
  };

  const panels = [
    <AboutPanel key="a" />,
    <QuotesPanel key="q" />,
    <FactsPanel key="f" />,
    <GuestbookPanel key="g" />,
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="app-root">
        <div className="scanlines" />
        <header className="app-header">
          <div className="header-bar">
            <span style={{ display: "flex", color: "var(--accent)" }}>
              <IconNote size={16} />
            </span>
            <span className="header-title">SCHUBERTIADEN.EXE</span>
            <span className="header-status">● LIVE</span>
          </div>
        </header>

        <div
          className={`content-area ${swipe === "left" ? "exit-left" : ""} ${
            swipe === "right" ? "exit-right" : ""
          }`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {panels[tab]}
        </div>

        <div className="swipe-dots">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`dot ${tab === i ? "active" : ""}`} />
          ))}
        </div>

        <nav className="tab-bar">
          {TABS.map((t, i) => {
            const Icon = t.icon;
            return (
              <button
                key={i}
                className={`tab-btn ${tab === i ? "active" : ""}`}
                onClick={() => go(i)}
              >
                <Icon size={18} />
                <span className="tab-label">{t.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
