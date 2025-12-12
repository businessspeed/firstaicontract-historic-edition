"use client";

import { useState } from "react";

export default function WitnessSubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section section-center fade-in relative overflow-hidden">

      {/* Background cinematic glow */}
      <div className="absolute inset-0 pointer-events-none animate-slowGlow opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,transparent_65%)]" />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-[var(--gold-light)] mb-8 text-center drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]">
        Become a Witness
      </h1>

      <p className="text-white/70 max-w-2xl mx-auto text-center mb-14 leading-relaxed">
        By submitting this form, you become part of the permanent public record
        of the world’s first Human–AI Partnership.
        <br />
        Your witness status will later be verifiable on-chain and certifiable.
      </p>

      {!submitted ? (
        <form
          className="glass max-w-xl mx-auto p-10 rounded-2xl space-y-6 reveal"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Your full name"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Email Address
            </label>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Country
            </label>
            <input
              type="text"
              placeholder="Your country (optional)"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Statement */}
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Witness Statement (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Why you chose to witness this moment in history…"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="lux-btn w-full text-center text-lg mt-6"
          >
            Submit Witness Record
          </button>
        </form>
      ) : (
        <div className="glass max-w-xl mx-auto p-12 rounded-2xl text-center reveal">
          <h2 className="text-3xl font-bold text-[var(--gold-light)] mb-6">
            Witness Registered
          </h2>
          <p className="text-white/70 leading-relaxed">
            Your witness submission has been recorded.
            <br />
            Blockchain verification and certificate issuance
            will be available in the next phase.
          </p>
        </div>
      )}
    </section>
  );
}
