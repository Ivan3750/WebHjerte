import PriceStrip from "../ui/PriceStrip";
import NichePackage from "../ui/NichePackage";
import GuaranteesBlock from "../home/GuaranteesBlock";
import CasesCarousel from "../home/CasesCarousel";
import ProcessBlock from "../home/ProcessBlock";
import SupportTariffsBlock from "../../(pages)/services/_components/SupportTariffsBlock";
import { ArosScene } from "../seo/scenes/Aarhus";
import { AiChatDemo, AiSavings, AiDayCompare, AiByTrade, AiStart } from "./AiBlocks";
import { SiteAnatomy, SiteTree } from "./SiteBlocks";
import { ShopJourney, ShopPlatforms, ShopPrice } from "./ShopBlocks";
import { CareStatus, CareMonth, CareCosts } from "./CareBlocks";
import { WpEditDemo } from "./WpBlocks";
import { TradesThreeSeconds, TradesGrid, VvsTwoPaths, ElTrust, ElCharger, TomrerBeforeAfter, RestCommission, SalonBuilder } from "./NicheBlocks";
import { JyllandRegions, JyllandScenes, AarhusRank, AarhusScene, VejleScene, HorsensScene } from "./LocalBlocks";
import { PlatformQuiz, ShopifyTasks, ShopifyVsWoo, GeoCompare, GeoSteps, ChatbotLead } from "./TopicBlocks";
import {
  HeroTrades,
  HeroVvs,
  HeroEl,
  HeroTomrer,
  HeroRestaurant,
  HeroSalon,
  HeroJylland,
  HeroVejle,
  HeroWpHorsens,
  HeroOrbit,
  HeroShopify,
  HeroGeo,
  HeroChatbot,
} from "./HeroVisuals";

/**
 * Hver side har sin egen hero (tema, opbygning, illustration) og sine egne blokke.
 *  hero:   { theme, layout, visual }  – erstatter den fælles PageHero
 *  aside:  erstatter formularen i den fælles PageHero (når der ikke er egen hero)
 *  blocks: (page) => [...]            – erstatter de fælles blokke (pris, garantier, cases, proces)
 *  open:   antal åbne afsnit i "Godt at vide"
 *  facts:  egne nøgletal i hero, når siden ikke har dem i data
 */
const pkg = (p) => <NichePackage key="np" className="bg-[#f7f6f6] pt-16 sm:pt-24" trade={p.nichePackage} />;

export const VARIANTS = {
  /* ─── Hovedsider ─── */
  ai: {
    hero: { theme: { accent: "#3ddc97", bg: "#121a17", pattern: "dots" }, layout: "split-rev", visual: <AiChatDemo /> },
    blocks: () => [<AiSavings key="s" />, <AiDayCompare key="d" />, <AiByTrade key="t" />, <AiStart key="p" />],
    open: 0,
  },
  site: {
    blocks: () => [<SiteAnatomy key="a" />, <SiteTree key="t" />, <PriceStrip key="p" />, <CasesCarousel key="c" />],
    open: 1,
  },
  shop: {
    blocks: () => [<ShopJourney key="j" />, <ShopPlatforms key="p" />, <ShopPrice key="pr" />, <CasesCarousel key="c" />],
    open: 0,
  },
  care: {
    aside: <CareStatus />,
    blocks: () => [
      <CareMonth key="m" />,
      <div key="t" className="bg-[#1c1e1e] pt-16 sm:pt-24">
        <SupportTariffsBlock />
      </div>,
      <CareCosts key="c" />,
    ],
    open: 0,
  },

  /* ─── Brancher ─── */
  "hjemmeside-til-haandvaerkere": {
    hero: { theme: { accent: "#f0a63a", bg: "#1d1b18", pattern: "dots" }, layout: "split", visual: <HeroTrades /> },
    blocks: (p) => [<TradesThreeSeconds key="q" />, <TradesGrid key="g" />, pkg(p), <CasesCarousel key="c" />],
    open: 0,
  },
  "hjemmeside-til-vvs": {
    hero: { theme: { accent: "#0a8fc7", ink: "#fff", title: "#0a6d99", bg: "#e6f2f8", light: true, pattern: "waves" }, layout: "split", visual: <HeroVvs /> },
    blocks: (p) => [<VvsTwoPaths key="v" />, pkg(p), <GuaranteesBlock key="g" />],
    open: 0,
  },
  "hjemmeside-til-elektriker": {
    hero: { theme: { accent: "#f5c84c", bg: "#121417", pattern: "grid" }, layout: "center", visual: <HeroEl /> },
    blocks: (p) => [<ElTrust key="t" />, <ElCharger key="c" />, pkg(p)],
    open: 0,
  },
  "hjemmeside-til-tomrer": {
    hero: { theme: { accent: "#b8692e", ink: "#fff", title: "#8a4a1c", bg: "#f4ede3", light: true, pattern: "lines" }, layout: "split-rev", visual: <HeroTomrer /> },
    blocks: (p) => [<TomrerBeforeAfter key="b" />, pkg(p), <ProcessBlock key="pr" />],
    open: 0,
  },
  "hjemmeside-til-restauranter": {
    hero: { theme: { accent: "#e8875b", bg: "#1f1916", pattern: "none", glow: "#e8875b" }, layout: "split", visual: <HeroRestaurant /> },
    blocks: () => [<RestCommission key="r" />, <PriceStrip key="p" />, <CasesCarousel key="c" />],
    open: 0,
  },
  "hjemmeside-til-saloner": {
    hero: { theme: { accent: "#c9557d", ink: "#fff", title: "#a83d64", bg: "#f8ecef", light: true, pattern: "dots" }, layout: "split-rev", visual: <HeroSalon /> },
    blocks: (p) => [<SalonBuilder key="s" />, <CasesCarousel key="c" />, pkg(p)],
    open: 0,
  },

  /* ─── Områder ─── */
  "webbureau-jylland": {
    hero: { theme: { accent: "#3ddc97", bg: "#101a1e", pattern: "lines" }, layout: "split-rev", visual: <HeroJylland /> },
    blocks: () => [<JyllandRegions key="r" />, <JyllandScenes key="s" />, <PriceStrip key="p" />],
    open: 0,
  },
  "webbureau-aarhus": {
    hero: { theme: { accent: "#6ea8ff", bg: "#0f141c", pattern: "none" }, layout: "stack", visual: <ArosScene /> },
    blocks: () => [<AarhusRank key="r" />, <AarhusScene key="s" />, <GuaranteesBlock key="g" />, <CasesCarousel key="c" />],
    open: 0,
  },
  "webbureau-vejle": {
    hero: { theme: { accent: "#00a8e8", ink: "#fff", title: "#0a6d99", bg: "#f1f7fa", light: true, pattern: "grid" }, layout: "split", visual: <HeroVejle /> },
    blocks: () => [<VejleScene key="s" />, <PriceStrip key="p" />, <ProcessBlock key="pr" />],
    open: 0,
  },
  "wordpress-horsens": {
    facts: [{ num: "Selv", label: "Ret tekster og priser uden udvikler" }, { num: "4.500 kr", label: "WordPress fra (inkl. moms)" }, { num: "Horsens", label: "Vi kan mødes lokalt" }],
    hero: { theme: { accent: "#2271b1", ink: "#fff", title: "#1d4f7a", bg: "#edf2f6", light: true, pattern: "dots" }, layout: "split", visual: <HeroWpHorsens /> },
    blocks: () => [<WpEditDemo key="w" />, <HorsensScene key="h" />, <PriceStrip key="p" />],
    open: 0,
  },

  /* ─── Emner ─── */
  "alle-typer-hjemmesider": {
    facts: [{ num: "8+", label: "Platforme jeg arbejder i" }, { num: "AI", label: "Kan tilføjes på dem alle" }, { num: "Ærligt", label: "Råd – også om det, du har" }],
    hero: { theme: { accent: "#8a8ff0", bg: "#13141c", pattern: "grid" }, layout: "center", visual: <HeroOrbit /> },
    blocks: () => [<PlatformQuiz key="q" />, <PriceStrip key="p" />, <CasesCarousel key="c" />],
    open: 0,
  },
  "shopify-hjemmeside": {
    facts: [{ num: "Driftssikker", label: "Shopify klarer drift og sikkerhed" }, { num: "Flytning", label: "Uden at miste placeringer" }, { num: "MobilePay", label: "Og kort, klar fra start" }],
    hero: { theme: { accent: "#1f9d6b", ink: "#fff", title: "#16754f", bg: "#e8f5ee", light: true, pattern: "grid" }, layout: "split", visual: <HeroShopify /> },
    blocks: () => [<ShopifyTasks key="t" />, <ShopifyVsWoo key="v" />, <ShopJourney key="j" />],
    open: 0,
  },
  "geo-ai-synlighed": {
    facts: [{ num: "6 trin", label: "Fra spørgsmål til måling" }, { num: "4 AI'er", label: "ChatGPT, Gemini, Perplexity, Google" }, { num: "3.500 kr", label: "AI SEO-pakker fra" }],
    hero: { theme: { accent: "#8a8ff0", bg: "#16141f", pattern: "dots" }, layout: "center", visual: <HeroGeo /> },
    blocks: () => [<GeoCompare key="c" />, <GeoSteps key="s" />, <AiStart key="a" />],
    open: 0,
  },
  "ai-chatbot-til-hjemmeside": {
    facts: [{ num: "24/7", label: "Svar uden for åbningstid" }, { num: "Leads", label: "Sendt direkte til din mail" }, { num: "24 timer", label: "Til fast tilbud" }],
    hero: { theme: { accent: "#00a8e8", bg: "#0e1820", pattern: "lines" }, layout: "split-rev", visual: <HeroChatbot /> },
    blocks: () => [<ChatbotLead key="l" />, <AiSavings key="s" />, <AiByTrade key="t" />],
    open: 0,
  },
};
