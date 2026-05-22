import fs from 'fs';
import path from 'path';

const SRC_DIR = './src/components';

const statsStripPath = path.join(SRC_DIR, 'sections/StatsStrip.tsx');
let statsStripContent = fs.readFileSync(statsStripPath, 'utf8');

statsStripContent = statsStripContent.replace(/bg-\[#0a1628\]/g, 'bg-transparent');
statsStripContent = statsStripContent.replace(/bg-\[linear-gradient\(180deg,rgba\(15,30,53,0\.82\),rgba\(10,22,40,0\.64\)\)\]/g, 'bg-white/90');
statsStripContent = statsStripContent.replace(/from-\[\#0f1e35\]\/90/g, 'from-white/90');
statsStripContent = statsStripContent.replace(/bg-\[\#0f1e35\]\/90/g, 'bg-white/90');
statsStripContent = statsStripContent.replace(/border-primary-500\/15/g, 'border-neutral-200');
statsStripContent = statsStripContent.replace(/hover:border-primary-500\/45/g, 'hover:border-primary-400');
statsStripContent = statsStripContent.replace(/bg-\[linear-gradient\(180deg,rgba\(15,30,53,0\.6\),rgba\(10,22,40,0\.2\)\)\]/g, 'bg-neutral-50');
statsStripContent = statsStripContent.replace(/bg-\[linear-gradient\(180deg,rgba\(15,30,53,0\.7\),rgba\(9,18,34,0\.3\)\)\]/g, 'bg-neutral-50');
statsStripContent = statsStripContent.replace(/bg-\[\#0d1b31\]\/70/g, 'bg-neutral-50/70');
statsStripContent = statsStripContent.replace(/bg-\[\#0f1e35\]/g, 'bg-white');
statsStripContent = statsStripContent.replace(/text-neutral-500/g, 'text-neutral-500'); // remains
statsStripContent = statsStripContent.replace(/text-primary-300\/80/g, 'text-primary-600');
statsStripContent = statsStripContent.replace(/text-primary-300/g, 'text-primary-600');
statsStripContent = statsStripContent.replace(/text-primary-500/g, 'text-primary-600');
statsStripContent = statsStripContent.replace(/bg-neutral-800\/90/g, 'bg-neutral-200/90');

fs.writeFileSync(statsStripPath, statsStripContent, 'utf8');

const whatsappSimulatorPath = path.join(SRC_DIR, 'WhatsAppSimulator.tsx');
let waContent = fs.readFileSync(whatsappSimulatorPath, 'utf8');

// Screen container
waContent = waContent.replace(/bg-\[\#13203c\]/g, 'bg-[#f0f2f5]');
// Header
waContent = waContent.replace(/bg-\[\#15233c\]\/80/g, 'bg-white/90');
waContent = waContent.replace(/text-neutral-800/g, 'text-neutral-800'); // Ensure it stays
// Chat BG
waContent = waContent.replace(/bg-\[\#0d1627\]/g, 'bg-[#efeae2]');
// Bot Bubble
waContent = waContent.replace(/bg-\[\#1c2638\]\/90/g, 'bg-white');
// User Bubble (keep gradient or just solid)
waContent = waContent.replace(/bg-gradient-to-br from-primary-500\/20 to-primary-600\/10/g, 'bg-[#d9fdd3]');
waContent = waContent.replace(/text-primary-50/g, 'text-neutral-800');
// Live Charging Status Card inside Simulator
waContent = waContent.replace(/from-\[\#1c2638\]\/95 to-\[\#15233c\]\/95/g, 'from-white/95 to-neutral-50/95');
waContent = waContent.replace(/bg-\[\#0a1118\]/g, 'bg-neutral-200');
// Input Bar
waContent = waContent.replace(/bg-\[\#15233c\]\/90/g, 'bg-white/90');
waContent = waContent.replace(/bg-\[\#101b2e\]/g, 'bg-neutral-100');
// Header badge
waContent = waContent.replace(/border-primary-500\/30/g, 'border-primary-300');
// Status Bar text
waContent = waContent.replace(/text-neutral-800\/90/g, 'text-neutral-800');

fs.writeFileSync(whatsappSimulatorPath, waContent, 'utf8');

console.log('Fixed components');
