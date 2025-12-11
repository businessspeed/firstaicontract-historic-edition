@tailwind base;
@tailwind components;
@tailwind utilities;

/* GLOBAL STYLES */
body {
  background: black;
  color: white;
  font-family: sans-serif;
}

/* Universal containers */
.section {
  padding: 80px 0;
}

.section-center {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Glass effect */
.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(22px);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Gold button */
.gold-btn {
  background: linear-gradient(to bottom, var(--gold-light), var(--gold-dark));
  color: black;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 10px;
  transition: 0.2s;
}

.gold-btn:hover {
  opacity: 0.85;
}

/* Fade animation */
.fade-in {
  animation: fadeIn .8s ease forwards;
}

@keyframes fadeIn {
  from { opacity:0; transform: translateY(25px); }
  to { opacity:1; transform: translateY(0); }
}
/* Fade in animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fadeInSlow {
  animation: fadeIn 1.6s ease-out forwards;
}

/* Slow gold breathing effect */
@keyframes slowGlow {
  0% { opacity: 0.10; }
  50% { opacity: 0.23; }
  100% { opacity: 0.10; }
}

.animate-slowGlow {
  animation: slowGlow 6s ease-in-out infinite;
}

/* Luxury button style */
.lux-btn {
  @apply bg-white/10 border border-white/20 rounded-xl py-3 px-5 text-white
         backdrop-blur-xl transition-all shadow-lg text-lg;
}

.lux-btn:hover {
  background: rgba(255,215,0,0.15);
  border-color: #d4af37;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255,215,0,0.45);
}
/* CINEMATIC GOLD PARTICLE ANIMATION */

@keyframes goldFloat {
  0%   { transform: translateY(0px) translateX(0px); opacity: 0.25; }
  50%  { transform: translateY(-25px) translateX(15px); opacity: 0.45; }
  100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
}

@keyframes goldNoise {
  0%   { opacity: 0.05; }
  50%  { opacity: 0.12; }
  100% { opacity: 0.05; }
}

.animate-goldFloat {
  animation: goldFloat 8s ease-in-out infinite;
}

.animate-goldNoise {
  animation: goldNoise 6s ease-in-out infinite;
}
/* Smooth Cinematic Parallax */
.parallax {
  transform: translateY(var(--parallax-y, 0));
  transition: transform 0.15s ease-out;
}

/* Scroll Reveal Animations */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  animation: fadeUp 1.3s ease-out forwards;
}
/* FAZA 3A — Cinematic Scroll Reveal */

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
