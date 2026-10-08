/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';

interface AppCardProps {
  title: string;
  subtitle: string;
  url?: string;
  disabled?: boolean;
  icon: React.ReactNode;
}

function LaserIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Top mounting gantry */}
      <line x1="12" y1="6" x2="36" y2="6" strokeWidth="2.5" />
      {/* Laser cutter optic housing */}
      <rect x="16" y="6" width="16" height="12" rx="2" strokeWidth="2.5" />
      <line x1="16" y1="12" x2="32" y2="12" strokeWidth="1.5" />
      {/* Conical focus nozzle */}
      <path d="M19 18l5 7 5-7" strokeWidth="2.5" />
      {/* High-precision laser beam */}
      <line x1="24" y1="25" x2="24" y2="38" strokeWidth="2.5" />
      {/* Cutting focal point and sparks */}
      <circle cx="24" cy="38" r="2.5" fill="currentColor" />
      <path d="M19 35l-4-2M29 35l4-2" strokeWidth="2" />
      {/* Material workpiece base plate */}
      <line x1="8" y1="42" x2="40" y2="42" strokeWidth="2.5" />
    </svg>
  );
}

function SteeringWheelIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Steering wheel outer rim */}
      <circle cx="24" cy="24" r="18" strokeWidth="2.5" />
      {/* Central horn / hub */}
      <circle cx="24" cy="24" r="6" />
      {/* Left spoke */}
      <path d="M6.5 24h11.5" strokeWidth="2" />
      {/* Right spoke */}
      <path d="M30 24h11.5" strokeWidth="2" />
      {/* Bottom vertical spoke */}
      <path d="M24 30v12" strokeWidth="2" />
      {/* Center cap marker */}
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PomosIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Gear shift knob profile */}
      <rect x="12" y="8" width="24" height="30" rx="12" strokeWidth="2.5" />
      {/* Shift gate pattern */}
      <path d="M18 17v12M24 17v12M30 17v12M18 23h12" strokeWidth="2" />
      {/* Shift lever base */}
      <path d="M20 38h8v3h-8z" fill="currentColor" />
    </svg>
  );
}

function AppCard({ title, subtitle, url, disabled = false, icon }: AppCardProps) {
  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className="relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 select-none opacity-60 cursor-not-allowed transition-all duration-200"
      >
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-zinc-100 text-zinc-400">
            {icon}
          </div>
          <span className="text-zinc-400 p-1">
            <Lock className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl font-bold tracking-tight text-zinc-500">
            {title}
          </h2>
          <p className="text-sm font-medium text-zinc-400 mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-zinc-200 bg-white shadow-xs hover:shadow-lg hover:border-zinc-300 hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-zinc-100 text-zinc-800 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200">
          {icon}
        </div>
        <div className="text-zinc-400 group-hover:text-zinc-900 p-1 transition-colors duration-200">
          <ArrowUpRight
            className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black">
          {title}
        </h2>
        <p className="text-sm font-medium text-zinc-500 mt-1">
          {subtitle}
        </p>
      </div>
    </a>
  );
}

export default function App() {
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col justify-between py-12 md:py-20 px-6 sm:px-8 lg:px-12 antialiased selection:bg-zinc-900 selection:text-white">
      {/* Top Header with Centered EPP NATUR Logo */}
      <header className="flex flex-col items-center justify-center pt-4 md:pt-8">
        {logoLoaded ? (
          <img
            src="https://www.eppnatur.es/media/yootheme/cache/1c/logo_eppnatur_3-1ce587ca.webp"
            alt="EPP NATUR"
            className="h-16 sm:h-20 w-auto object-contain max-w-[280px] sm:max-w-[340px]"
            onError={() => setLogoLoaded(false)}
          />
        ) : (
          <div className="text-2xl sm:text-3xl font-extrabold tracking-wider text-zinc-900">
            EPP NATUR
          </div>
        )}
      </header>

      {/* Main Content: 3 Large Application Cards */}
      <div className="w-full max-w-5xl mx-auto my-12 md:my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AppCard
            title="LASER"
            subtitle="Laser Project"
            url="https://eppsystem.vercel.app/"
            icon={<LaserIcon className="w-7 h-7" />}
          />

          <AppCard
            title="STEERING WHEELS"
            subtitle="Steering Wheels Project"
            url="https://eppsw.vercel.app/"
            icon={<SteeringWheelIcon className="w-7 h-7" />}
          />

          <AppCard
            title="POMOS"
            subtitle="Coming Soon"
            disabled={true}
            icon={<PomosIcon className="w-7 h-7" />}
          />
        </div>
      </div>

      {/* Discreet Quiet Baseline */}
      <footer className="text-center text-xs text-zinc-400 select-none pb-4">
        EPP NATUR
      </footer>
    </main>
  );
}
