const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables
css = css.replace(/--orange:\s*#[a-fA-F0-9]+;/g, '--primary: #5A4FF3;\n  --primary-light: #7C72FF;\n  --primary-hover: #4F46E5;');
css = css.replace(/--orange-deep:\s*#[a-fA-F0-9]+;/g, '--primary-dark: #4338CA;');
css = css.replace(/--ink:\s*#[a-fA-F0-9]+;/g, '--ink: #000000;');
css = css.replace(/--muted:\s*#[a-fA-F0-9]+;/g, '--muted: #333333;');
css = css.replace(/--soft:\s*#[a-fA-F0-9]+;/g, '--soft: #FFFFFF;');
css = css.replace(/--surface:\s*#[a-fA-F0-9]+;/g, '--surface: #FFFFFF;');

// 2. Variable Usages
css = css.replace(/var\(--orange\)/g, 'var(--primary)');
css = css.replace(/var\(--orange-deep\)/g, 'var(--primary-dark)');

// 3. Dark Backgrounds
css = css.replace(/--olive:\s*#[a-fA-F0-9]+;/g, '--olive: #FFFFFF;');

// 4. Buttons
css = css.replace(/border-radius:\s*6px;/g, 'border-radius: 12px;');

// 5. Gradients
css = css.replace(/linear-gradient\(90deg,\s*#facc15,\s*#f59e0b\)/g, 'linear-gradient(135deg, #5A4FF3 0%, #7C72FF 100%)');

// Override classes at the end for safety
css += '\n\n/* Global Theme Overrides */\n';
css += '.button-secondary { color: var(--ink); background: #fff; border: 1px solid var(--border); border-radius: 12px; }\n';
css += '.button-ghost { background: #fff !important; border: 1px solid var(--primary) !important; color: var(--primary) !important; border-radius: 12px !important; }\n';
css += '.button-ghost:hover { background: var(--primary) !important; color: #fff !important; }\n';
css += '.cta-overlay .button-ghost { background: #fff !important; border: 1px solid var(--primary) !important; color: var(--primary) !important; }\n';
css += '.cta-overlay .button-ghost:hover { background: var(--primary) !important; color: #fff !important; }\n';

css += '.footer { background: var(--surface) !important; color: var(--ink) !important; padding: 56px 6vw 34px; border-top: 1px solid var(--border); }\n';
css += '.footer h3 { font-size: 11px; margin: 0 0 19px; color: var(--ink) !important; }\n';
css += '.footer a { display: block; color: var(--muted) !important; margin-bottom: 10px; font-size: 11px; }\n';
css += '.footer a:hover { color: var(--primary) !important; }\n';
css += '.footer-bottom { padding-top: 34px; margin-top: 56px; border-top: 1px solid var(--border) !important; display: flex; justify-content: space-between; align-items: flex-end; }\n';
css += '.footer-bottom p { font-size: 11px; color: var(--muted) !important; margin: 0; }\n';

css += '.product-card, .solution-card, .savings-card, .why-story-visual, .feature-visual, .calc-output-card { background: #fff !important; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 4px 12px rgba(0,0,0,0.04); }\n';
css += '.product-card:hover { transform: translateY(-4px); border-color: var(--primary); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }\n';
css += '.savings-card strong, .savings-card h3, .calc-output-card p { color: var(--primary) !important; }\n';

// Typography fixes
css += 'body { color: var(--ink); background: var(--surface); }\n';
css += 'h1, h2, h3, h4, h5, h6 { color: var(--ink); }\n';
css += '.nav-item { color: var(--muted); }\n';
css += '.nav-item.is-active { color: var(--primary); }\n';
css += '.journey-eyebrow, .why-kicker, .calc-kicker, .section-label, .eyebrow { color: var(--primary) !important; }\n';

fs.writeFileSync('src/styles.css', css);
console.log("CSS refactor complete");
