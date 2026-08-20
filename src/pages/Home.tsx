/**
 * LOGICAL FP — Portal Home Page
 * Style: "Structured Clarity" — Swiss International Typography
 * Deep Navy #0A1628 signature color, Noto Serif JP + Space Grotesk
 * Layout: Asymmetric hero + numbered service cards
 */

import { useState, useEffect, useRef } from "react";

// Local assets are intentionally bundled for provider-independent deployment.
// BASE_URL accounts for deployments served from a subpath (e.g. GitHub Pages project sites).
const LOGO_URL = `${import.meta.env.BASE_URL}assets/logo.png`;
const HERO_URL = `${import.meta.env.BASE_URL}assets/hero.webp`;
const CARD_DOCTOR_URL = `${import.meta.env.BASE_URL}assets/service-doctor.webp`;
const CARD_SIMULATOR_URL = `${import.meta.env.BASE_URL}assets/service-simulator.webp`;
const CARD_CONSULTANT_URL = `${import.meta.env.BASE_URL}assets/service-consultant.webp`;

const services = [
  {
    id: "01",
    title: "勤務医向け\n無料FP相談",
    titleEn: "Doctor FP Consulting",
    description: "1級ファイナンシャルプランナー×税理士が、勤務医の先生の資産形成・節税をロジカルに解説。感情論ではなく、データと根拠で答えます。",
    tag: "FREE CONSULTATION",
    url: "https://doctor.logicalfp.pro",
    image: CARD_DOCTOR_URL,
    accent: "#1E5FD8",
  },
  {
    id: "02",
    title: "ライフプラン\nシミュレーター",
    titleEn: "Life Plan Simulator",
    description: "インフレ・公的年金・複数資産を厳密にモデル化。老後必要資金の精緻な算出と、アセットアロケーション計画を一元的にサポートします。",
    tag: "SIMULATION TOOL",
    url: "https://simulator.logicalfp.pro",
    image: CARD_SIMULATOR_URL,
    accent: "#22C55E",
  },
  {
    id: "03",
    title: "コンサルタント\nポータル",
    titleEn: "Consultant Portal",
    description: "FPコンサルタント専用の業務支援ツール。クライアント管理・提案書作成・分析レポートを統合したプロフェッショナル向けプラットフォーム。",
    tag: "PROFESSIONAL TOOL",
    url: "https://consultant.logicalfp.pro",
    image: CARD_CONSULTANT_URL,
    accent: "#C9A84C",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`service-card group bg-white border border-gray-100 overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.titleEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Number badge */}
        <div className="absolute top-4 left-4">
          <span
            className="label-mono text-white/90 text-xs tracking-widest"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {service.id}
          </span>
        </div>
        {/* Tag */}
        <div className="absolute bottom-4 left-4">
          <span
            className="label-mono text-xs px-2 py-1 text-white border border-white/40 backdrop-blur-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem" }}
          >
            {service.tag}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-gray-900 mb-3 leading-tight whitespace-pre-line"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          {service.description}
        </p>

        {/* CTA */}
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          style={{ color: service.accent, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="link-underline">サービスを開く</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: service.accent }}
      />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: servicesRef, visible: servicesVisible } = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <a href={import.meta.env.BASE_URL} className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="LOGICAL FP"
              className="w-8 h-8 object-contain"
            />
            <div>
              <span
                className="font-bold text-sm tracking-wider"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: scrolled ? "#0A1628" : "#ffffff",
                }}
              >
                LOGICAL FP
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-xs font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.05em",
                  color: scrolled ? "#374151" : "rgba(255,255,255,0.85)",
                }}
              >
                {s.titleEn}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0A1628" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_URL}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="animate-fade-in-up mb-6">
              <span
                className="label-mono text-[#C9A84C] border border-[#C9A84C]/40 px-3 py-1.5 inline-block"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem" }}
              >
                1ST CLASS FP SYSTEM
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="animate-fade-in-up animate-delay-100 text-white leading-tight mb-6"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.15,
              }}
            >
              感情論ではなく、<br />
              <span style={{ color: "#C9A84C" }}>ロジック</span>で<br />
              資産を設計する。
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in-up animate-delay-200 text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              1級ファイナンシャルプランナー監修のプロフェッショナルサービス群。
              勤務医向けFP相談から、ライフプランシミュレーター、コンサルタントツールまで。
            </p>

            {/* Scroll indicator */}
            <div className="animate-fade-in-up animate-delay-400 flex items-center gap-3 text-white/40">
              <div className="w-px h-12 bg-white/20" />
              <span
                className="label-mono text-xs"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SCROLL TO EXPLORE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
      </section>

      {/* ── Services Section ── */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container">
          {/* Section header */}
          <div
            ref={servicesRef}
            className={`mb-16 transition-all duration-700 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#0A1628]" />
              <span
                className="label-mono text-[#0A1628]/60"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem" }}
              >
                OUR SERVICES
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0A1628]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              サービス一覧
            </h2>
            <p
              className="mt-3 text-gray-500 text-sm max-w-lg"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              LOGICAL FPが提供する3つの専門サービス。それぞれのサービスサイトへアクセスしてください。
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Statement Section ── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img src={LOGO_URL} alt="LOGICAL FP" className="w-16 h-16 object-contain opacity-90" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              1級FPの知性で、<br />
              あなたの資産形成を<br />
              論理的に設計する。
            </h2>
            <p
              className="text-white/50 text-sm leading-relaxed mb-10"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              データと根拠に基づいたアドバイス。感情的な判断を排除し、
              あなたの状況に最適な答えを提供します。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
              {[
                { value: "1級", label: "FP資格", sub: "最高峰の国家資格" },
                { value: "0.09%", label: "希少性", sub: "FP保有者中の割合" },
                { value: "3", label: "サービス", sub: "専門ツール群" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold text-[#C9A84C] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/80 text-xs font-medium mb-1"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-white/30 text-xs"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#060E1A] py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="LOGICAL FP" className="w-8 h-8 object-contain opacity-80" />
              <div>
                <div
                  className="text-white/80 text-sm font-bold tracking-wider"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  LOGICAL FP
                </div>
                <div
                  className="text-white/30 text-xs mt-0.5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  1級FP監修サービス
                </div>
              </div>
            </div>

            {/* Service links */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-white/40 hover:text-white/80 transition-colors duration-200 text-xs"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.05em" }}
                >
                  {s.titleEn}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p
              className="text-white/20 text-xs"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              © 2026 LOGICAL FP — All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span
                className="text-white/20 text-xs"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                logicalfp.pro
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
