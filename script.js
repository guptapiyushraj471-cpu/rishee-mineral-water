/* ============================================
   Rishee Mineral Water — Premium Stylesheet
   Author: Shreeji DigiTech
   ============================================ */

/* ---------- CSS Variables ---------- */
:root {
  --blue-deep:    #0a1628;
  --blue-mid:     #0c2d5e;
  --blue-brand:   #0d5ede;
  --aqua:         #00c6e0;
  --aqua-light:   #7df0ff;
  --white:        #ffffff;
  --off-white:    #f4f9ff;
  --text-dark:    #0e1b2e;
  --text-mid:     #3a567a;
  --text-light:   #7a9bbf;
  --glass-bg:     rgba(255,255,255,0.08);
  --glass-border: rgba(255,255,255,0.18);
  --card-bg:      #ffffff;
  --card-shadow:  0 8px 40px rgba(13,94,222,0.12);
  --radius:       18px;
  --radius-sm:    10px;
  --transition:   0.35s cubic-bezier(0.4,0,0.2,1);
  --font-display: 'Playfair Display', serif;
  --font-body:    'DM Sans', sans-serif;
}

/* ---------- Reset & Base ---------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  color: var(--text-dark);
  background: var(--white);
  overflow-x: hidden;
  line-height: 1.65;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
button { border: none; cursor: pointer; font-family: var(--font-body); }
ul { list-style: none; }

/* ---------- Utilities ---------- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.section-pad { padding: 100px 0; }
.mt-20 { margin-top: 20px; }
.gradient-text {
  background: linear-gradient(135deg, var(--aqua), var(--blue-brand));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ---------- Section Header ---------- */
.section-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--blue-brand);
  background: rgba(13,94,222,0.09);
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 14px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-dark);
  margin-bottom: 16px;
}
.section-sub {
  color: var(--text-mid);
  font-size: 1.05rem;
  max-width: 520px;
}
.section-header { text-align: center; margin-bottom: 60px; }
.section-header .section-sub { margin: 0 auto; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  white-space: nowrap;
}
.btn-primary {
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  color: var(--white);
  box-shadow: 0 4px 20px rgba(13,94,222,0.35);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(13,94,222,0.45);
}
.btn-ghost {
  background: transparent;
  color: var(--white);
  border: 1.5px solid rgba(255,255,255,0.4);
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.12);
  border-color: var(--aqua-light);
}
.btn-sm {
  padding: 9px 20px;
  font-size: 0.85rem;
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  color: var(--white);
  border-radius: 50px;
}
.btn-sm:hover { transform: translateY(-1px); box-shadow: 0 4px 18px rgba(0,198,224,0.3); }
.btn-full { width: 100%; justify-content: center; }
.btn-whatsapp {
  background: #25D366;
  color: var(--white);
  padding: 13px 28px;
  border-radius: 50px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  box-shadow: 0 4px 18px rgba(37,211,102,0.3);
  transition: var(--transition);
}
.btn-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,211,102,0.4); }

/* ============================================
   NAVBAR
   ============================================ */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: var(--transition);
}
.navbar.scrolled {
  background: rgba(10,22,40,0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 12px 0;
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.logo-drop { font-size: 1.6rem; }
.logo-text {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
}
.logo-text em {
  display: block;
  font-style: normal;
  font-size: 0.7rem;
  font-family: var(--font-body);
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--aqua);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}
.nav-links a {
  color: rgba(255,255,255,0.85);
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.nav-links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 2px;
  background: var(--aqua);
  border-radius: 2px;
  transition: width 0.25s;
}
.nav-links a:not(.nav-cta):hover::after { width: 100%; }
.nav-links a:hover { color: var(--white); }
.nav-cta {
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  color: var(--white) !important;
  padding: 9px 22px;
  border-radius: 50px;
  font-size: 0.88rem !important;
  box-shadow: 0 3px 14px rgba(13,94,222,0.4);
}
.nav-cta:hover { transform: translateY(-1px); }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 6px;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

/* ============================================
   HERO
   ============================================ */
.hero {
  min-height: 100vh;
  background: linear-gradient(145deg, var(--blue-deep) 0%, var(--blue-mid) 60%, #062a7a 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; }

/* Waves */
.wave {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 220px;
  background-repeat: repeat-x;
}
.wave1 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'%3E%3Cpath fill='rgba(0,198,224,0.12)' d='M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,165.3C672,160,768,128,864,117.3C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,220L0,220Z'/%3E%3C/svg%3E");
  background-size: 1440px 220px;
  animation: waveAnim 8s linear infinite;
}
.wave2 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'%3E%3Cpath fill='rgba(13,94,222,0.15)' d='M0,100L60,106.7C120,113,240,128,360,122.7C480,117,600,91,720,90.7C840,91,960,117,1080,122.7C1200,128,1320,112,1380,104L1440,96L1440,220L0,220Z'/%3E%3C/svg%3E");
  background-size: 1440px 220px;
  animation: waveAnim 12s linear infinite reverse;
}
.wave3 {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'%3E%3Cpath fill='rgba(255,255,255,0.05)' d='M0,180L80,170.7C160,160,320,139,480,138.7C640,139,800,160,960,160C1120,160,1280,139,1360,128L1440,117L1440,220L0,220Z'/%3E%3C/svg%3E");
  background-size: 1440px 220px;
  animation: waveAnim 6s linear infinite;
}
@keyframes waveAnim {
  0% { background-position-x: 0; }
  100% { background-position-x: 1440px; }
}

/* Bubbles */
.hero-bubbles { position: absolute; inset: 0; }
.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,198,224,0.2), transparent);
  animation: bubbleFloat linear infinite;
}
.b1 { width: 80px; height: 80px; left: 8%; animation-duration: 12s; animation-delay: 0s; }
.b2 { width: 50px; height: 50px; left: 22%; animation-duration: 9s; animation-delay: 2s; }
.b3 { width: 120px; height: 120px; left: 65%; animation-duration: 15s; animation-delay: 1s; }
.b4 { width: 40px; height: 40px; left: 80%; animation-duration: 8s; animation-delay: 3s; }
.b5 { width: 70px; height: 70px; left: 45%; animation-duration: 11s; animation-delay: 0.5s; }
@keyframes bubbleFloat {
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-100px) scale(1); opacity: 0; }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 60px;
  max-width: 700px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  color: var(--aqua-light);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 7px 16px;
  border-radius: 50px;
  margin-bottom: 24px;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 24px;
}
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255,255,255,0.75);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 560px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat strong {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--aqua-light);
  font-family: var(--font-display);
}
.stat span { font-size: 0.8rem; color: rgba(255,255,255,0.6); letter-spacing: 0.05em; }
.stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.15); }

/* Hero Scroll Hint */
.hero-scroll-hint {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
  animation: fadeIn 2s ease 1.5s both;
}
.hero-scroll-hint span { color: rgba(255,255,255,0.5); font-size: 0.75rem; letter-spacing: 0.1em; }
.scroll-arrow {
  width: 20px; height: 20px;
  border-right: 2px solid rgba(255,255,255,0.4);
  border-bottom: 2px solid rgba(255,255,255,0.4);
  transform: rotate(45deg);
  animation: scrollBounce 1.5s ease infinite;
}
@keyframes scrollBounce {
  0%,100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(6px); }
}

/* ============================================
   ABOUT
   ============================================ */
.about { background: var(--off-white); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.about-visual { position: relative; }
.about-img-wrap { position: relative; }
.about-img-block { border-radius: var(--radius); overflow: hidden; }
.img-placeholder {
  width: 100%;
  aspect-ratio: 4/4;
  background: linear-gradient(145deg, var(--blue-mid), var(--blue-brand));
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.img-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 30%, rgba(0,198,224,0.25), transparent 70%);
}

/* Water animation inside about image */
.water-animation { position: relative; display: flex; align-items: center; justify-content: center; }
.water-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(0,198,224,0.4);
  animation: waterRipple 3s ease-out infinite;
}
.wc1 { width: 80px; height: 80px; animation-delay: 0s; }
.wc2 { width: 140px; height: 140px; animation-delay: 0.8s; }
.wc3 { width: 200px; height: 200px; animation-delay: 1.6s; }
@keyframes waterRipple {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
.water-icon { font-size: 4rem; z-index: 2; animation: waterDrop 2s ease-in-out infinite; }
@keyframes waterDrop {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.about-badge-float {
  position: absolute;
  bottom: -24px; right: -24px;
  background: var(--white);
  border-radius: var(--radius-sm);
  padding: 18px 24px;
  box-shadow: var(--card-shadow);
  text-align: center;
}
.badge-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--blue-brand);
}
.badge-label { font-size: 0.78rem; color: var(--text-mid); }

.about-desc { color: var(--text-mid); margin-bottom: 14px; font-size: 1rem; }
.about-points { margin: 24px 0; display: flex; flex-direction: column; gap: 12px; }
.about-point {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--text-dark);
  font-weight: 500;
}
.point-icon {
  width: 24px; height: 24px;
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  flex-shrink: 0;
}

/* ============================================
   PRODUCTS
   ============================================ */
.products { background: var(--white); }
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: stretch;
}
.product-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 36px 28px 28px;
  box-shadow: var(--card-shadow);
  border: 1.5px solid rgba(13,94,222,0.07);
  position: relative;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(13,94,222,0.18);
  border-color: rgba(0,198,224,0.3);
}
.product-featured {
  background: linear-gradient(145deg, var(--blue-deep), var(--blue-mid));
  color: var(--white);
  border-color: transparent;
  transform: scale(1.03);
}
.product-featured:hover { transform: scale(1.03) translateY(-6px); }
.product-featured h3,
.product-featured p,
.product-featured .product-price { color: var(--white); }
.product-featured .product-specs span { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); }
.product-featured p { color: rgba(255,255,255,0.75); }

.product-badge {
  position: absolute;
  top: 20px; right: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(13,94,222,0.1);
  color: var(--blue-brand);
  padding: 4px 12px;
  border-radius: 50px;
}
.featured-badge { background: rgba(0,198,224,0.25); color: var(--aqua-light); }

/* Bottle art */
.product-visual {
  display: flex;
  justify-content: center;
  margin: 16px 0 28px;
  min-height: 140px;
  align-items: flex-end;
}
.bottle-art { display: flex; flex-direction: column; align-items: center; }
.bottle-body, .jar-body {
  border-radius: 8px 8px 20px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(13,94,222,0.2);
  background: rgba(13,94,222,0.05);
}
.bottle-500 .bottle-body { width: 36px; height: 100px; border-radius: 10px 10px 14px 14px; }
.bottle-1l .bottle-body  { width: 48px; height: 130px; border-radius: 10px 10px 16px 16px; }
.bottle-20l .jar-body    { width: 90px; height: 120px; border-radius: 12px 12px 20px 20px; }
.water-fill {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(0,198,224,0.6), rgba(13,94,222,0.35));
  animation: waterLevelAnim 4s ease-in-out infinite;
  height: 70%;
  border-radius: 0 0 12px 12px;
}
@keyframes waterLevelAnim {
  0%,100% { height: 65%; }
  50% { height: 75%; }
}
.bottle-label {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--blue-brand);
  z-index: 2;
  white-space: nowrap;
  background: rgba(255,255,255,0.85);
  padding: 2px 5px;
  border-radius: 3px;
}

.product-info { flex: 1; display: flex; flex-direction: column; }
.product-info h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}
.product-info p { font-size: 0.9rem; color: var(--text-mid); line-height: 1.7; flex: 1; }
.product-specs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0;
}
.product-specs span {
  font-size: 0.78rem;
  background: rgba(13,94,222,0.07);
  color: var(--text-mid);
  padding: 4px 12px;
  border-radius: 50px;
}
.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}
.product-price {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--blue-brand);
}
.product-price small { font-size: 0.75rem; font-weight: 400; color: var(--text-light); font-family: var(--font-body); }

/* ============================================
   WHY CHOOSE US
   ============================================ */
.why {
  background: linear-gradient(160deg, #f0f6ff, var(--off-white));
  position: relative;
  overflow: hidden;
}
.why-bg-blob {
  position: absolute;
  top: -120px; right: -120px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(13,94,222,0.06), transparent 70%);
  pointer-events: none;
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.why-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 36px 28px;
  box-shadow: 0 4px 24px rgba(13,94,222,0.07);
  border: 1.5px solid rgba(13,94,222,0.07);
  transition: var(--transition);
}
.why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(13,94,222,0.14);
  border-color: rgba(0,198,224,0.25);
}
.why-icon {
  font-size: 2.4rem;
  margin-bottom: 18px;
  display: block;
}
.why-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
}
.why-card p { font-size: 0.9rem; color: var(--text-mid); line-height: 1.7; }

/* ============================================
   TESTIMONIALS
   ============================================ */
.testimonials {
  background: linear-gradient(145deg, var(--blue-deep), #0b1e40);
  position: relative;
  overflow: hidden;
}
.testimonials .section-label { color: var(--aqua-light); background: rgba(0,198,224,0.12); }
.testimonials .section-title { color: var(--white); }
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: center;
}
.testi-card {
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  padding: 36px 28px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: relative;
  transition: var(--transition);
}
.testi-card:hover {
  background: rgba(255,255,255,0.11);
  transform: translateY(-4px);
}
.testi-featured {
  background: rgba(0,198,224,0.1);
  border-color: rgba(0,198,224,0.35);
  transform: scale(1.04);
}
.testi-featured:hover { transform: scale(1.04) translateY(-4px); }
.testi-quote {
  font-size: 4rem;
  font-family: var(--font-display);
  color: var(--aqua);
  line-height: 1;
  margin-bottom: -8px;
}
.testi-card p {
  color: rgba(255,255,255,0.8);
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 24px;
}
.testi-author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.testi-avatar {
  width: 46px; height: 46px;
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--white);
  flex-shrink: 0;
}
.testi-author strong { display: block; color: var(--white); font-size: 0.95rem; }
.testi-author span { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
.testi-stars { color: #fbbf24; font-size: 1rem; letter-spacing: 2px; }

/* ============================================
   CONTACT
   ============================================ */
.contact { background: var(--off-white); }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: start;
}
.contact-info .section-title { margin-top: 10px; }
.contact-info > p { color: var(--text-mid); margin-top: 14px; font-size: 1rem; }
.contact-details { margin-top: 32px; display: flex; flex-direction: column; gap: 20px; }
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.c-icon {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, var(--blue-brand), var(--aqua));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.contact-item strong { display: block; color: var(--text-dark); font-weight: 600; font-size: 0.88rem; }
.contact-item span { color: var(--text-mid); font-size: 0.93rem; }

/* Form */
.contact-form-wrap {
  background: var(--white);
  border-radius: var(--radius);
  padding: 44px 40px;
  box-shadow: var(--card-shadow);
}
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark);
  letter-spacing: 0.02em;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid rgba(13,94,222,0.15);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.93rem;
  color: var(--text-dark);
  background: #f8fbff;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--blue-brand);
  box-shadow: 0 0 0 3px rgba(13,94,222,0.1);
  background: var(--white);
}
.form-group textarea { resize: vertical; min-height: 100px; }
.form-group select { cursor: pointer; }
.form-error {
  font-size: 0.78rem;
  color: #e53e3e;
  min-height: 14px;
  display: block;
}
input.invalid, select.invalid, textarea.invalid {
  border-color: #e53e3e;
}
.form-success {
  display: none;
  background: rgba(37,211,102,0.1);
  border: 1.5px solid rgba(37,211,102,0.3);
  border-radius: var(--radius-sm);
  padding: 14px 18px;
  color: #15803d;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}
.form-success.show { display: block; }

/* ============================================
   FOOTER
   ============================================ */
.footer {
  background: var(--blue-deep);
  padding-top: 70px;
}
.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand p {
  color: rgba(255,255,255,0.5);
  font-size: 0.88rem;
  margin-top: 16px;
  line-height: 1.75;
  max-width: 280px;
}
.footer-social {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.footer-social a {
  width: 38px; height: 38px;
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  font-weight: 700;
  transition: var(--transition);
}
.footer-social a:hover {
  background: var(--blue-brand);
  border-color: var(--blue-brand);
  color: var(--white);
  transform: translateY(-2px);
}
.footer-links h4 {
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.footer-links a {
  display: block;
  color: rgba(255,255,255,0.5);
  font-size: 0.88rem;
  margin-bottom: 12px;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--aqua-light); }
.footer-bottom {
  text-align: center;
  padding: 22px 0;
}
.footer-bottom p { color: rgba(255,255,255,0.35); font-size: 0.82rem; }

/* ============================================
   WHATSAPP FLOAT
   ============================================ */
.whatsapp-float {
  position: fixed;
  bottom: 28px; right: 28px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: var(--white);
  padding: 12px 20px 12px 14px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.88rem;
  box-shadow: 0 6px 24px rgba(37,211,102,0.45);
  transition: var(--transition);
  animation: waPulse 2.5s ease infinite;
}
.whatsapp-float:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 36px rgba(37,211,102,0.55);
  animation: none;
}
.wa-icon svg { width: 28px; height: 28px; }
@keyframes waPulse {
  0%,100% { box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
  50% { box-shadow: 0 6px 36px rgba(37,211,102,0.7); }
}

/* Back to Top */
.back-top {
  position: fixed;
  bottom: 92px; right: 34px;
  width: 42px; height: 42px;
  background: var(--blue-brand);
  color: var(--white);
  border-radius: 50%;
  font-size: 1.1rem;
  box-shadow: 0 4px 18px rgba(13,94,222,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  opacity: 0;
  pointer-events: none;
  z-index: 998;
}
.back-top.visible { opacity: 1; pointer-events: all; }
.back-top:hover { background: var(--aqua); transform: translateY(-2px); }

/* ============================================
   ANIMATIONS / REVEAL
   ============================================ */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.reveal, .reveal-left, .reveal-right {
  opacity: 0;
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal          { transform: translateY(30px); }
.reveal-left     { transform: translateX(-40px); }
.reveal-right    { transform: translateX(40px); }

.reveal.visible,
.reveal-left.visible,
.reveal-right.visible {
  opacity: 1;
  transform: none;
}

/* Stagger delays */
.reveal:nth-child(1) { transition-delay: 0.05s; }
.reveal:nth-child(2) { transition-delay: 0.15s; }
.reveal:nth-child(3) { transition-delay: 0.25s; }
.reveal:nth-child(4) { transition-delay: 0.35s; }
.reveal:nth-child(5) { transition-delay: 0.45s; }
.reveal:nth-child(6) { transition-delay: 0.55s; }

/* Hero specific */
.hero-content .reveal:nth-child(1) { transition-delay: 0.2s; }
.hero-content .reveal:nth-child(2) { transition-delay: 0.35s; }
.hero-content .reveal:nth-child(3) { transition-delay: 0.5s; }
.hero-content .reveal:nth-child(4) { transition-delay: 0.65s; }
.hero-content .reveal:nth-child(5) { transition-delay: 0.8s; }

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .product-featured { transform: scale(1); }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 60px; }
  .about-badge-float { bottom: -12px; right: -8px; }
  .contact-grid { grid-template-columns: 1fr; gap: 50px; }
  .testi-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .testi-featured { transform: scale(1); }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(10,22,40,0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    z-index: 999;
    backdrop-filter: blur(16px);
  }
  .nav-links.open { display: flex; }
  .nav-links a { font-size: 1.3rem !important; }
  .hamburger { display: flex; z-index: 1001; }

  .section-pad { padding: 70px 0; }
  .products-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
  .why-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; gap: 28px; }
  .contact-form-wrap { padding: 32px 24px; }
  .hero-stats { gap: 20px; }
  .whatsapp-float .wa-label { display: none; }
  .whatsapp-float { padding: 12px; border-radius: 50%; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .hero-actions .btn { text-align: center; justify-content: center; }
  .hero-stats { flex-direction: column; gap: 16px; }
  .stat-divider { width: 60px; height: 1px; }
}
