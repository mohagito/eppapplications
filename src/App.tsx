/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Lock, Layers } from 'lucide-react';

interface AppCardProps {
  badge: string;
  title: string;
  subtitle: string;
  url?: string;
  disabled?: boolean;
  theme: 'emerald' | 'blue' | 'amber';
  icon: React.ReactNode;
}

function LaserIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
      {/* Top mounting rail */}
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

function SteeringWheelIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
      {/* Steering wheel outer rim */}
      <circle cx="24" cy="24" r="18" strokeWidth="2.5" />
      {/* Central horn / hub */}
      <circle cx="24" cy="24" r="6" strokeWidth="2" />
      {/* Left spoke */}
      <path d="M6.5 24h11.5" strokeWidth="2.5" />
      {/* Right spoke */}
      <path d="M30 24h11.5" strokeWidth="2.5" />
      {/* Bottom vertical spoke */}
      <path d="M24 30v12" strokeWidth="2.5" />
      {/* Center cap marker */}
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PomosIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
      {/* Gear shift knob profile */}
      <rect x="12" y="8" width="24" height="30" rx="12" strokeWidth="2.5" />
      {/* Shift gate pattern */}
      <path d="M18 17v12M24 17v12M30 17v12M18 23h12" strokeWidth="2" />
      {/* Shift lever base */}
      <path d="M20 38h8v3h-8z" fill="currentColor" />
    </svg>
  );
}

function EppNaturLogo() {
  return (
    <div className="flex flex-col items-center select-none">
      <img
        src="https://www.eppnatur.es/media/yootheme/cache/1c/logo_eppnatur_3-1ce587ca.webp"
        alt="EPP NATUR"
        className="h-16 sm:h-20 w-auto object-contain max-w-[280px] sm:max-w-[340px]"
        loading="eager"
      />
    </div>
  );
}

function AppCard({
  badge,
  title,
  subtitle,
  url,
  disabled = false,
  theme,
  icon,
}: AppCardProps) {
  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-amber-500/25 bg-[#0b1424] opacity-80 cursor-not-allowed select-none transition-all duration-200"
      >
        <div>
          {/* Top Row: Pill badge + Right Circular Icon */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-950/80 text-amber-400 border border-amber-500/40">
              {badge}
            </span>
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-950/50 border border-amber-500/30 text-amber-400">
              {icon}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-8 mb-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-200">
              {title}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-1">
              {subtitle}
            </p>
          </div>
        </div>

        <div>
          {/* Divider */}
          <div className="border-t border-slate-800/80 my-4" />

          {/* Bottom Action Row */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
              COMING SOON
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-950/40 border border-amber-500/30 text-amber-500/70">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isEmerald = theme === 'emerald';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b1424] hover:bg-[#0e1a30] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1424] hover:-translate-y-0.5 ${
        isEmerald
          ? 'border border-emerald-500/30 hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-950/40 focus-visible:ring-emerald-400'
          : 'border border-blue-500/30 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-950/40 focus-visible:ring-blue-400'
      }`}
    >
      <div>
        {/* Top Row: Pill badge + Right Circular Icon */}
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${
              isEmerald
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                : 'bg-blue-950/80 text-blue-400 border border-blue-500/40'
            }`}
          >
            {badge}
          </span>
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
              isEmerald
                ? 'bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400/60'
                : 'bg-blue-950/50 border border-blue-500/30 text-blue-400 group-hover:border-blue-400/60'
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mt-8 mb-4">
          <h2
            className={`text-xl font-bold tracking-tight text-white transition-colors duration-200 ${
              isEmerald ? 'group-hover:text-emerald-300' : 'group-hover:text-blue-300'
            }`}
          >
            {title}
          </h2>
          <p className="text-xs font-medium text-slate-400 mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <div>
        {/* Divider */}
        <div className="border-t border-slate-800/80 my-4" />

        {/* Bottom Action Row */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
            OPEN APPLICATION
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isEmerald
                ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400'
                : 'bg-blue-950/60 border border-blue-500/40 text-blue-400 group-hover:bg-blue-500 group-hover:text-black group-hover:border-blue-400'
            }`}
          >
            <ArrowRight
              className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#060b13] [background-image:radial-gradient(#18263e_1px,transparent_1px)] [background-size:24px_24px] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-slate-700 selection:text-white">
      {/* Central Dark Portal Card */}
      <div className="w-full max-w-4xl bg-[#0c1424] border border-[#172338] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/80">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center">
          <EppNaturLogo />

          {/* Kicker Pill */}
          <div className="mt-4 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d1627] border border-[#1e2f4a] text-slate-300 text-xs font-mono font-medium tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>EPP NATUR PRODUCTION PORTAL</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Production Applications
          </h1>
        </div>

        {/* Section Meta Bar */}
        <div className="mt-10 mb-4 flex items-center justify-between text-xs px-1">
          <span className="font-semibold tracking-wider text-slate-400 uppercase text-[11px]">
            AVAILABLE APPLICATIONS
          </span>
          <span className="text-slate-500 font-medium text-[11px]">
            2 Active Systems · 1 Pending
          </span>
        </div>

        {/* 3 Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AppCard
            badge="LASER"
            title="LASER"
            subtitle="Laser Project"
            url="https://eppsystem.vercel.app/"
            theme="emerald"
            icon={<LaserIcon className="w-5 h-5" />}
          />

          <AppCard
            badge="STEERING WHEELS"
            title="STEERING WHEELS"
            subtitle="Steering Wheels Project"
            url="https://eppsw.vercel.app/"
            theme="blue"
            icon={<SteeringWheelIcon className="w-5 h-5" />}
          />

          <AppCard
            badge="COMING SOON"
            title="POMOS"
            subtitle="Coming Soon"
            disabled={true}
            theme="amber"
            icon={<PomosIcon className="w-5 h-5" />}
          />
        </div>
      </div>
    </main>
  );
}
