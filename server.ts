import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const DEFAULT_PORT = 3000;
const configuredPort = Number(process.env.PORT);
const PORT = Number.isFinite(configuredPort) && configuredPort > 0 ? configuredPort : DEFAULT_PORT;
const HOST = "127.0.0.1";

app.use(express.json());

// Lazy-loaded GenAI client to prevent startup crashes if GEMINI_API_KEY is not defined
let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not configured or uses placeholder value. Falling back to local calculator model.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST route for Feasibility Report Generation
app.post("/api/audit", async (req, res) => {
  const { propertyName, email, city, propertyType, totalParkingSlots, transformerCapacity } = req.body;

  if (!propertyName || !email) {
    return res.status(400).json({ error: "Property name and email are required." });
  }

  const ai = getGenAI();

  if (!ai) {
    // Elegant fallback simulation representing India property EV charging calculations
    const slots = Number(totalParkingSlots) || 80;
    const isBig = slots > 150;
    const dbCount = Math.max(1, Math.ceil(slots / 32));
    const chargingPoints = Math.max(4, Math.ceil(slots * 0.15)); // Recommend 15% EV slots
    const peakLoad = chargingPoints * 7.4 * 0.4; // 7.4 kW charger with 40% concurrency thanks to Smart DB load balancing
    const traditionalCapex = chargingPoints * 115000; // 1.15L per port traditional
    const ebeeCapex = Math.round((chargingPoints * 72000 + dbCount * 120000) * 0.9); // ~40% lower installation capex
    const savingsPercent = Math.round(((traditionalCapex - ebeeCapex) / traditionalCapex) * 100);

    const fallbackReport = {
      feasibilityScore: isBig ? 88 : 94,
      recommendedSmartDBCount: dbCount,
      estimatedChargingPoints: chargingPoints,
      rwaProposalTitle: `ebee Zero-Friction EV Smart Infrastructure Audit for ${propertyName}`,
      primarySummary: `A pre-feasibility analysis for implementing the ebee app-less centralized charging network at ${propertyName}, ${city || "Bengaluru"}. Based on your facility setup, ebee’s unified Smart Distribution Board architecture yields unmatched capital savings and prevents transformer overloading without requiring expensive power sanction upgrades.`,
      powerAnalysis: {
        peakLoadEstimationKW: parseFloat(peakLoad.toFixed(1)),
        safetyRating: "Class-A Certified with Dynamic Load Shifting",
        loadBalancingBenefitsText: "By implementing centralized Smart DBs, ebee manages current spikes over multiple chargers seamlessly. Dynamic active-phase balancing restricts peak demand below your default transformer limit. No upgrade on grid capacity is necessary.",
        transformerAnalysisText: `With ${transformerCapacity || "150"} kVA available building load, standard sub-meters would risk overloading during evening hours. ebee throttles or delays socket cycles dynamically to guarantee safe domestic load baseline.`
      },
      financialEstimates: {
        traditionalCapexINR: traditionalCapex,
        ebeeCapexINR: ebeeCapex,
        costSavingsPercent: Math.max(30, savingsPercent),
        paybackPeriodMonths: Math.floor(10 + Math.random() * 5),
        annualMaintenanceINR: Math.round(chargingPoints * 4500)
      },
      complianceCheck: {
        meetsMandateState: city ? `${city} EV Mandate Ready` : "National EV Building Code Compliant",
        mandateText: `Complies fully with state bylaws requiring designated power ducts & active charging terminals across at least 15% to 20% of designated residential spaces.`,
        regulatoryIncentivesText: "Enables fast-track property tax rebate approvals (where state laws apply) and zero-friction transfer of ownership validation for carbon credit returns."
      },
      implementationRoadmap: [
        { phase: "Phase 1: Physical Survey", timeline: "Day 1 to 3", description: "On-site RWA verification of duct routing, cabling, and transformer health check in Bengaluru/Pune/Mumbai hubs." },
        { phase: "Phase 2: DB Setup", timeline: "Day 4 to 8", description: "Installation of the centralized ebee Smart DB next to the building's main breaker panel." },
        { phase: "Phase 3: Cabling", timeline: "Day 9 to 11", description: "Cost-reduced, daisy-chained ducting to individual owner parking spaces." },
        { phase: "Phase 4: WhatsApp Integration", timeline: "Day 12 to 14", description: "Mapping smart terminals to physical slots and activating the unified WhatsApp Chatbot Bot API." },
        { phase: "Phase 5: Live Handoff", timeline: "Day 15", description: "Residents plug in, scan, pay in 5-sec with zero app setup. Immediate revenue stream active for property management." }
      ]
    };

    return res.json({ report: fallbackReport, source: "simulation_fallback" });
  }

  try {
    const prompt = `Generate a detailed, highly accurate, and professional EV Infrastructure Feasibility Audit Report for an Indian building property using these inputs:
    - Property name/RWA: "${propertyName}"
    - City: "${city || "Bengaluru"}"
    - Property type: "${propertyType || "Residential Apartment"}"
    - Total Parking Slots: ${totalParkingSlots || 80}
    - Transformer Spare Capacity/Sufficient Load: "${transformerCapacity || "150 kVA available"}"
    - Requestor Email: "${email}"

    Use ebee's specific USP:
    - First "app-less" smart charging system (uses WhatsApp for interaction, UPI for instant payment in 5 seconds).
    - Uses a centralized "Smart DB" (Distribution Board) that cuts installation costs up to 40% and controls up to 32 charging points.
    - Features Dynamic Load Balancing to protect the property's main transformer from overloading during peak EV charging times (e.g. evening).
    - Takes exactly 15 days from site audit to live operational status.

    Compute realistic financial CAPEX values in Indian Rupees (INR) and load parameters suitable for Indian buildings. Ensure all descriptions are completely realistic, native to Indian society management challenges (RWA dynamics, load anxiety, high builder wiring costs), polished, and highly structured.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: [
            "feasibilityScore",
            "recommendedSmartDBCount",
            "estimatedChargingPoints",
            "rwaProposalTitle",
            "primarySummary",
            "powerAnalysis",
            "financialEstimates",
            "complianceCheck",
            "implementationRoadmap"
          ],
          properties: {
            feasibilityScore: {
              type: Type.INTEGER,
              description: "A feasibility score from 1 to 100 based on capacity, parking slots, and ease of installation."
            },
            recommendedSmartDBCount: {
              type: Type.INTEGER,
              description: "Number of ebee Smart DB units recommended (1 Smart DB dynamically controls up to 32 endpoints)."
            },
            estimatedChargingPoints: {
              type: Type.INTEGER,
              description: "Recommended active charging sockets needed to satisfy standard EV mandates (usually 10-20% of spaces)."
            },
            rwaProposalTitle: {
              type: Type.STRING,
              description: "Tailored title for the property proposal, e.g., 'ebee Infrastructure Audit for Parkwood RWA'"
            },
            primarySummary: {
              type: Type.STRING,
              description: "Engaging, authoritative 3-4 sentence project overview tailoring to this specific property and its city."
            },
            powerAnalysis: {
              type: Type.OBJECT,
              required: ["peakLoadEstimationKW", "safetyRating", "loadBalancingBenefitsText", "transformerAnalysisText"],
              properties: {
                peakLoadEstimationKW: {
                  type: Type.NUMBER,
                  description: "Estimated total peak load drawn in kW when using ebee's centralized dynamic load management."
                },
                safetyRating: {
                  type: Type.STRING,
                  description: "Assended safety rating, e.g., 'Grade A+ Certified Central Distribution'"
                },
                loadBalancingBenefitsText: {
                  type: Type.STRING,
                  description: "How ebee's dynamic load sharing prevents tripping the main transformer and maximizes efficiency."
                },
                transformerAnalysisText: {
                  type: Type.STRING,
                  description: "Direct analysis of their building transformer kVA/capacity and how to avoid grid sanction charges."
                }
              }
            },
            financialEstimates: {
              type: Type.OBJECT,
              required: ["traditionalCapexINR", "ebeeCapexINR", "costSavingsPercent", "paybackPeriodMonths", "annualMaintenanceINR"],
              properties: {
                traditionalCapexINR: {
                  type: Type.INTEGER,
                  description: "Estimated total CAPEX for standard individual EV charger setups and ducting (usually higher)."
                },
                ebeeCapexINR: {
                  type: Type.INTEGER,
                  description: "Estimated ebee CAPEX (typically 40% lower due to centralized cabling, cheap sockets, and smart DBs)."
                },
                costSavingsPercent: {
                  type: Type.INTEGER,
                  description: "Expected percentage of capital saved (aim around 35-45%)."
                },
                paybackPeriodMonths: {
                  type: Type.INTEGER,
                  description: "Estimated ROI payback period in months for the society/builders."
                },
                annualMaintenanceINR: {
                  type: Type.INTEGER,
                  description: "Estimated yearly AMC/maintenance costs under ebee's centralized monitoring."
                }
              }
            },
            complianceCheck: {
              type: Type.OBJECT,
              required: ["meetsMandateState", "mandateText", "regulatoryIncentivesText"],
              properties: {
                meetsMandateState: {
                  type: Type.STRING,
                  description: "e.g., 'Karnataka EV Bylaw Compliant' or similar depending on chosen city (usually Bengaluru, Pune, Mumbai)."
                },
                mandateText: {
                  type: Type.STRING,
                  description: "Explanation of regional regulatory/municipal EV mandates (like India's 20% active charging spaces mandate)."
                },
                regulatoryIncentivesText: {
                  type: Type.STRING,
                  description: "Details on subsidies, FSI exemptions, carbon offsets or property tax benefits available for this property setup."
                }
              }
            },
            implementationRoadmap: {
              type: Type.ARRAY,
              description: "A 5-step detailed operational plan totaling ebee's strict '15 Days from Site Audit' timeline.",
              items: {
                type: Type.OBJECT,
                required: ["phase", "timeline", "description"],
                properties: {
                  phase: { type: Type.STRING, description: "e.g., 'Phase 1: Civil Survey'" },
                  timeline: { type: Type.STRING, description: "e.g., 'Day 1 to 3'" },
                  description: { type: Type.STRING, description: "A highly specific descriptive explanation of action items." }
                }
              }
            }
          }
        }
      }
    });

    const reportText = response.text || "";
    const parsedReport = JSON.parse(reportText.trim());
    return res.json({ report: parsedReport, source: "gemini_api" });
  } catch (err: any) {
    console.error("Error generating Gemini audit feasibility report: ", err);
    return res.status(500).json({ error: "Failed to compile the report dynamically. Please try again or check logs." });
  }
});

// Configure Vite middleware in development or direct static serving in production
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server connected.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled static files from dist.");
  }

  const server = app.listen(PORT, HOST, () => {
    console.log(`Express custom server running on http://localhost:${PORT}`);
  });

  server.once("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Stop the existing process or free the port, then run npm run dev again.`);
      process.exit(1);
    }
    throw error;
  });
}

setupVite();
