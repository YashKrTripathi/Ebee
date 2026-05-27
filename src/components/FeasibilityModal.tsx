
import { useState, ChangeEvent, FormEvent } from "react";
import { X, Search, Check, Calculator, Clock, Cpu, Award, IndianRupee, FileText, Printer, ArrowRight, Eye, ShieldCheck, Mail, Building2, MapPin, Loader2 } from "lucide-react";
import { FeasibilityReport, AuditRequestInput } from "../types";
interface FeasibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyName?: string;
  initialEmail?: string;
}
export function FeasibilityModal({
  isOpen,
  onClose,
  initialPropertyName = "",
  initialEmail = ""
}: FeasibilityModalProps) {
  const [formData, setFormData] = useState<AuditRequestInput>({
    propertyName: initialPropertyName,
    email: initialEmail,
    city: "Bengaluru",
    propertyType: "Residential Apartment",
    totalParkingSlots: 80,
    transformerCapacity: "150 kVA (Standard)"
  });
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [report, setReport] = useState<FeasibilityReport | null>(null);
  const [activeTab, setActiveTab] = useState<"tech" | "fin" | "map">("tech");
  const [error, setError] = useState<string | null>(null);
  const loadingSteps = ["Analyzing property size & parking geometry...", "Querying smart grid requirements & municipal bylaws...", "Calculating load-balancing power curves for your building...", "Estimating CAPEX delta against legacy layouts...", "Assembling unified ebee Smart DB engineering blueprint..."];
  if (!isOpen) return null;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "totalParkingSlots" ? Number(value) : value
    }));
  };
  const runTriggerSteps = () => {
    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return interval;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.propertyName || !formData.email) {
      setError("Please fill in RWA/Property Name and Email to run report.");
      return;
    }
    setLoading(true);
    setError(null);
    const stepInterval = runTriggerSteps();
    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to contact the feasibility engine server.");
      }
      const data = await response.json();
      clearInterval(stepInterval);
      setReport(data.report);
    } catch (err: any) {
      console.error(err);
      setError("Unable to generate feasibility report. Please ensure your backend is active and try again.");
      clearInterval(stepInterval);
    } finally {
      setLoading(false);
    }
  };
  const handlePrint = () => {
    window.print();
  };
  return <div className="fixed inset-0 bg-neutral-200/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`bg-neutral-200 border border-neutral-300  w-full max-w-4xl shadow-2xl shadow-neutral-300/50 overflow-hidden transition-all duration-300 relative ${report ? "max-h-[90vh] flex flex-col" : "max-h-none"}`} id="printable-feasibility-report">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#e8a317]/20 via-primary-500/10 to-[#232427] px-6 py-4 flex justify-between items-center border-b border-neutral-300/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-primary-500 font-bold text-neutral-900 border border-neutral-700/80 text-sm flex justify-center items-center tracking-tighter">
              eb
            </span>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-neutral-800 flex items-center gap-1.5 font-body">
                ebee AI Feasibility Suite <span className="text-[10px] bg-primary-500/20 text-primary-400 font-mono font-semibold px-2 py-0.5">v1.4 India</span>
              </h3>
              <p className="text-[10px] text-neutral-500 font-mono">Zero-Friction EV Charging Architecture</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-neutral-500 hover:text-neutral-800 hover:bg-neutral-800 p-1.5 rounded-full transition-colors print:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content container */}
        <div className="p-4 md:p-8 overflow-y-auto flex-1">
          {error && <div className="mb-4 md:mb-6 bg-red-600/10 border border-red-500/30 p-4 text-xs font-mono text-red-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
              {error}
            </div>}

          {!report && !loading ? (/* Input Form Screen */
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="max-w-xl">
                <h4 className="text-lg md:text-xl font-bold tracking-tight text-neutral-800 mb-1 md:mb-2">Request Free AI Site Feasibility Audit</h4>
                <p className="text-xs md:text-sm text-neutral-500">
                  Submit details of your Indian residential or commercial property. Our custom Gemini server model automatically analyzes building requirements, cabling costs, and grid kVA limits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 pt-2">
                {/* RWA name */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-primary-500" /> Property Name / RWA name
                  </label>
                  <input required type="text" name="propertyName" value={formData.propertyName} onChange={handleInputChange} placeholder="e.g. Parkwood Apartments Association" className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition" />
                  <p className="text-[9px] text-neutral-500 leading-none">Will be featured on the custom Engineering blueprint</p>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary-500" /> Your Email Address
                  </label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. secretary@parkwoodrwa.in" className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition" />
                  <p className="text-[9px] text-neutral-500 leading-none">For sending the printed version copy</p>
                </div>

                {/* City select */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-500" /> Property City
                  </label>
                  <select name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition">
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>

                {/* Property Type select */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    Type of Property
                  </label>
                  <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition">
                    <option value="Residential Apartment">Residential Apartment Society</option>
                    <option value="Commercial Techpark">Commercial Office Tech Park</option>
                    <option value="Retail Mall">Retail Mall or Transit Hub</option>
                    <option value="Builder Floor">Builder Floor / Individual Houses</option>
                  </select>
                </div>

                {/* Total parking slots */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-primary-500" /> Total Parking Spots
                  </label>
                  <input type="number" name="totalParkingSlots" value={formData.totalParkingSlots} onChange={handleInputChange} className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition" />
                  <p className="text-[9px] text-neutral-500 leading-none">Assists with sizing the centralized ebee Smart DB limits</p>
                </div>

                {/* Transformer status */}
                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                    Transformer Spare Load Capacity
                  </label>
                  <input type="text" name="transformerCapacity" value={formData.transformerCapacity} onChange={handleInputChange} placeholder="e.g. 150 kVA available, or Unknown" className="w-full bg-neutral-200 border border-neutral-300 focus:border-primary-500 md: text-neutral-800 px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm outline-none transition" />
                  <p className="text-[9px] text-neutral-500 leading-none">ebee's Dynamic load buffer manages transformer overhead</p>
                </div>
              </div>

              <div className="pt-2 md:pt-4 border-t border-neutral-300/60 flex justify-end">
                <button type="submit" className="px-6 py-3 bg-primary-500 font-bold text-neutral-950 text-sm tracking-tight hover:bg-primary-400 active:scale-95 transition-all text-center flex items-center gap-2">
                  \uD83D\uDE80 Run AI EV Feasibility Audit Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>) : loading ? (/* Loading Steps Screen */
        <div className="py-16 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-neutral-300 border-t-primary-500 animate-spin flex items-center justify-center"></div>
                <Loader2 className="w-7 h-7 text-primary-500 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="space-y-2">
                <h4 className="text-neutral-800 font-bold font-body text-md">Compiling Custom Site Audit Blueprint...</h4>
                <p className="text-primary-400 text-xs font-mono animate-pulse max-w-sm mx-auto">
                  {loadingSteps[loadingStep]}
                </p>
              </div>
              <p className="text-xs text-neutral-500 max-w-md">
                Using Gemini AI server proxy. We are factoring regional state active-duty EV mandates and ebee Dynamic Distribution Board guidelines.
              </p>
            </div>) : (/* Generated PDF-style Report Presentation */
        <div className="space-y-6 text-neutral-800 text-left font-body">
              
              {/* Proposal Header Banner */}
              <div className="bg-gradient-to-br from-neutral-900 to-[#122e31]/30 p-5 border border-neutral-300 relative">
                <div className="absolute top-4 right-4 md:flex items-center gap-2 hidden print:hidden">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] text-green-400 font-mono">Completed</span>
                </div>

                <span className="text-[10px] text-primary-500 font-bold font-mono tracking-widest uppercase block mb-1">
                  PRE-CONSTRUCTION FEASIBILITY BRIEF
                </span>
                <h4 className="text-lg md:text-xl font-extrabold text-neutral-800 leading-snug tracking-tight">
                  {report?.rwaProposalTitle}
                </h4>
                <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-neutral-500 font-medium">
                  <p>🏢 <span className="text-neutral-200">Owner/RWA:</span> {formData.propertyName}</p>
                  <p>📍 <span className="text-neutral-200">Hub:</span> {formData.city}</p>
                  <p>👥 <span className="text-neutral-200">Requested to:</span> {formData.email}</p>
                </div>
              </div>

              {/* Score card & Quick Metrics bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Gauge Score */}
                <div className="bg-neutral-200/80 backdrop-blur-sm p-4 border border-neutral-300/80 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">
                    Feasibility Index
                  </span>
                  <div className="relative flex items-center justify-center">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" className="stroke-neutral-800" strokeWidth="8" fill="transparent" />
                      <circle cx="48" cy="48" r="40" className="stroke-primary-500" strokeWidth="8" fill="transparent" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * (1 - (report?.feasibilityScore || 90) / 100)} />
                    </svg>
                    <span className="absolute text-xl font-mono text-neutral-800 font-extrabold">
                      {report?.feasibilityScore}%
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-green-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> High Feasibility Unit
                  </span>
                </div>

                {/* Stats 2 DB Recommendations */}
                <div className="bg-neutral-200/80 backdrop-blur-sm p-4 border border-neutral-300/80 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5 block">
                    ebee Central Hardware
                  </span>
                  <p className="text-3xl font-mono font-bold text-primary-400 leading-none">
                    {report?.recommendedSmartDBCount} <span className="text-xs font-body text-neutral-500 font-medium font-mono">Smart DBs</span>
                  </p>
                  <p className="mt-1 pb-1.5 border-b border-neutral-300 text-[10px] text-neutral-500 leading-tight">
                    One dynamic smart DB panel fully balances active power feed over multiple parallel slots.
                  </p>
                  <p className="text-xs font-bold text-neutral-200 mt-2">
                    Recommending: <span className="text-primary-400 font-mono">{report?.estimatedChargingPoints} Sockets</span>
                  </p>
                  <p className="text-[10px] text-neutral-500">Fits typical active demand metrics.</p>
                </div>

                {/* Summary Bullet info */}
                <div className="bg-neutral-200/80 backdrop-blur-sm p-4 border border-neutral-300/80 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1 block">
                    Audit Team Verdict
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed font-body font-normal italic">
                    "{report?.primarySummary}"
                  </p>
                </div>
              </div>

              {/* Tabs selector */}
              <div className="flex border-b border-neutral-300 gap-1 inline-flex p-1 bg-neutral-200 w-full print:hidden">
                <button type="button" onClick={() => setActiveTab("tech")} className={`flex-1 flex justify-center items-center gap-2 py-2 px-3 text-xs font-bold  transition-all ${activeTab === "tech" ? "bg-primary-500 text-neutral-950" : "text-neutral-500 hover:text-neutral-800"}`}>
                  <Cpu className="w-3.5 h-3.5" /> Grid & Safety
                </button>
                <button type="button" onClick={() => setActiveTab("fin")} className={`flex-1 flex justify-center items-center gap-2 py-2 px-3 text-xs font-bold  transition-all ${activeTab === "fin" ? "bg-primary-500 text-neutral-950" : "text-neutral-500 hover:text-neutral-800"}`}>
                  <IndianRupee className="w-3.5 h-3.5" /> Budget delta (40% saved)
                </button>
                <button type="button" onClick={() => setActiveTab("map")} className={`flex-1 flex justify-center items-center gap-2 py-2 px-3 text-xs font-bold  transition-all ${activeTab === "map" ? "bg-primary-500 text-neutral-950" : "text-neutral-500 hover:text-neutral-800"}`}>
                  <Clock className="w-3.5 h-3.5" /> 15-Day Rollout Flow
                </button>
              </div>

              {/* Tab Content 1: Tech & Load */}
              {activeTab === "tech" && report && <div className="space-y-4 pt-1 transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-200 p-4 border border-neutral-300 space-y-2">
                      <h5 className="text-xs font-extrabold text-primary-400 flex items-center gap-1.5 uppercase tracking-wider">
                        ⚡ Active Dynamic Load Allocation
                      </h5>
                      <p className="text-2xl font-mono text-neutral-800 font-extrabold leading-none">
                        {report.powerAnalysis.peakLoadEstimationKW} <span className="text-xs font-body text-neutral-500">kW Estimated Peak</span>
                      </p>
                      <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                        {report.powerAnalysis.loadBalancingBenefitsText}
                      </p>
                    </div>

                    <div className="bg-neutral-200 p-4 border border-neutral-300 space-y-2">
                      <h5 className="text-xs font-extrabold text-primary-400 flex items-center gap-1.5 uppercase tracking-wider">
                        🛡️ Power Grid / Transformer Diagnostic
                      </h5>
                      <p className="text-xs text-neutral-300 font-medium">
                        System Level: <span className="text-green-400 font-mono font-bold font-body">{report.powerAnalysis.safetyRating}</span>
                      </p>
                      <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                        {report.powerAnalysis.transformerAnalysisText}
                      </p>
                    </div>
                  </div>

                  {/* Mandate compliances banner */}
                  <div className="bg-primary-950/20 border border-primary-900/30 p-4 space-y-1">
                    <span className="text-[10px] bg-primary-500/20 text-primary-400 px-2 py-0.5 font-mono font-semibold uppercase">
                      {report.complianceCheck.meetsMandateState}
                    </span>
                    <p className="text-xs text-neutral-300 pt-1 font-body font-normal">
                      {report.complianceCheck.mandateText}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      📝 <span className="font-semibold text-neutral-300">Tax benefit notes:</span> {report.complianceCheck.regulatoryIncentivesText}
                    </p>
                  </div>
                </div>}

              {/* Tab Content 2: CAPEX Pricing comparisons */}
              {activeTab === "fin" && report && <div className="space-y-4 pt-1 transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Traditional Block */}
                    <div className="bg-neutral-200 p-4 border border-neutral-300 space-y-3 opacity-75">
                      <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex justify-between items-center">
                        <span>Traditional Sub-Meter Grid</span>
                        <span className="text-[10px] bg-red-950 text-red-400 px-2 py-0.5 font-body">High cost</span>
                      </h5>
                      <p className="text-2xl font-mono text-neutral-800 font-bold">
                        ₹{report.financialEstimates.traditionalCapexINR.toLocaleString("en-IN")}
                      </p>
                      <ul className="text-[11px] text-neutral-500 space-y-1.5 font-body">
                        <li className="flex items-center gap-1.5">❌ Thick separate copper cabling from individual submeters</li>
                        <li className="flex items-center gap-1.5">❌ Society transformer overload risks (requiring expensive sanction upgrades)</li>
                        <li className="flex items-center gap-1.5">❌ No centralized panel; ugly clutter of cables and chargers everywhere</li>
                      </ul>
                    </div>

                    {/* ebee Smart Board architecture */}
                    <div className="bg-[#12241d] p-4 border border-primary-900/40 space-y-3 relative overflow-hidden">
                      {/* Huge gold savings indicator */}
                      <div className="absolute top-3 right-3 bg-primary-500 text-neutral-950 font-extrabold text-[10px] px-2.5 py-0.5 font-body tracking-tight">
                        SAVE {report.financialEstimates.costSavingsPercent}% CAPEX
                      </div>

                      <h5 className="text-xs font-extrabold text-primary-400 uppercase tracking-widest flex items-center gap-1">
                        ❇️ ebee Smart DB centralized layout
                      </h5>
                      <p className="text-2xl font-mono text-neutral-800 font-extrabold">
                        ₹{report.financialEstimates.ebeeCapexINR.toLocaleString("en-IN")}
                      </p>
                      <ul className="text-[11px] text-neutral-200 space-y-1.5 font-body">
                        <li className="flex items-center gap-1.5">✅ Simple centralized DB; thin cost-reduced loop wiring to cheap sockets</li>
                        <li className="flex items-center gap-1.5">✅ Dynamic balancing stops transformer trips (₹0 load sanction penalty)</li>
                        <li className="flex items-center gap-1.5">✅ Smart cloud meters on WhatsApp. Unified billing for RWA</li>
                      </ul>
                    </div>
                  </div>

                  {/* Financial metrics footnote */}
                  <div className="bg-neutral-200/50 p-3.5 border border-neutral-300/60 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase">ROI Payback Period</span>
                      <span className="text-md font-mono text-primary-400 font-bold">{report.financialEstimates.paybackPeriodMonths} Months</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase">Estimated Yearly AMC fee</span>
                      <span className="text-md font-mono text-primary-400 font-bold">₹{report.financialEstimates.annualMaintenanceINR.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>}

              {/* Tab Content 3: 15-Day delivery blueprint */}
              {activeTab === "map" && report && <div className="space-y-4 pt-1 transition-all">
                  <div className="bg-neutral-200 border border-neutral-300/80 overflow-hidden">
                    <div className="bg-neutral-200 px-4 py-2 text-[11px] font-bold text-neutral-500 uppercase tracking-widest grid grid-cols-12 gap-2 text-center">
                      <span className="col-span-3 text-left">Phase & Timeline</span>
                      <span className="col-span-9 text-left">Action description</span>
                    </div>
                    <div className="divide-y divide-neutral-800/60 text-xs">
                      {report.implementationRoadmap.map((step, idx) => <div key={idx} className="p-4 grid grid-cols-12 gap-2 tracking-wide font-body font-normal hover:bg-neutral-200/20 transition-colors">
                          <div className="col-span-12 md:col-span-3 font-semibold text-primary-400">
                            <span className="block text-[10px] font-mono text-neutral-500 uppercase">{step.timeline}</span>
                            {step.phase}
                          </div>
                          <div className="col-span-12 md:col-span-9 text-neutral-350 leading-relaxed font-body font-normal pt-1 md:pt-0">
                            {step.description}
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>}

              {/* PDF Actions button bar */}
              <div className="border-t border-neutral-300/60 pt-5 flex flex-wrap gap-3 justify-end print:hidden">
                <button type="button" onClick={() => setReport(null)} className="px-4 py-2 border border-neutral-300 text-xs hover:bg-neutral-200 transition tracking-tight">
                  \u25C0\uFE0F Reset Audit details
                </button>
                <button type="button" onClick={handlePrint} className="px-4 py-2 bg-neutral-200 hover:bg-neutral-800 text-[#e8a317] border border-[#e8a317]/20 font-bold text-xs tracking-tight flex items-center gap-1.5 transition-all active:scale-95">
                  <Printer className="w-3.5 h-3.5" /> Save Feasibility PDF / Print
                </button>
                <button type="button" onClick={onClose} className="px-5 py-2 bg-primary-500 text-neutral-950 font-bold text-xs tracking-tight transition hover:bg-primary-400 active:scale-95">
                  Complete Feasibility Check
                </button>
              </div>

            </div>)}
        </div>
      </div>
    </div>;
}