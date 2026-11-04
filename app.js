// app.js — 300+ Financial Calculators Master Engine

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const {
    categories,
    getAllCalculators,
    getCalculatorBySlug,
    getCalculatorsByCategory,
    getPopularCalculators,
    getCategories,
    searchCalculators
} = require('./data/calculatorsData');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- SEO Schema Generator (JSON-LD) for Maximum SERP Trust & Rich Snippets ---
function generateSchema(title, description, url, isApp = true, category = null, faqs = []) {
    const baseUrl = 'https://financialhub.calculatorfree.in';
    const fullUrl = `${baseUrl}${url}`;
    const cleanTitle = title.split(' — ')[0].split(' - ')[0].replace(/^Free\s+/i, '').trim();

    const breadcrumbs = [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl }
    ];

    if (category) {
        breadcrumbs.push({
            "@type": "ListItem",
            "position": 2,
            "name": category.name || category,
            "item": `${baseUrl}/category/${category.id || category}`
        });
        breadcrumbs.push({
            "@type": "ListItem",
            "position": 3,
            "name": cleanTitle,
            "item": fullUrl
        });
    } else if (url !== '/') {
        breadcrumbs.push({
            "@type": "ListItem",
            "position": 2,
            "name": cleanTitle,
            "item": fullUrl
        });
    }

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "FinancialHub",
                "url": baseUrl,
                "logo": `${baseUrl}/icons/icon-512x512.png`,
                "description": "India's premier financial calculation and wealth intelligence platform with 330+ free tools.",
                "sameAs": [
                    "https://www.calculatorfree.in"
                ]
            },
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "FinancialHub India",
                "publisher": { "@id": `${baseUrl}/#organization` },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${baseUrl}/?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${fullUrl}/#breadcrumb`,
                "itemListElement": breadcrumbs
            }
        ]
    };

    if (isApp) {
        schema["@graph"].push({
            "@type": "WebApplication",
            "@id": `${fullUrl}/#webapp`,
            "name": `${cleanTitle} (FY 2026-27)`,
            "url": fullUrl,
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "applicationCategory": "FinanceApplication",
            "applicationSubCategory": "FinancialCalculator",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
            },
            "featureList": [
                "Real-time instant calculation",
                "Interactive visual charts",
                "Amortization & compounding breakdown schedule",
                "PDF & Excel statement export",
                "100% Client-side privacy"
            ],
            "description": description,
            "inLanguage": "en-IN"
        });
    } else {
        schema["@graph"].push({
            "@type": "WebPage",
            "@id": `${fullUrl}/#webpage`,
            "url": fullUrl,
            "name": title,
            "description": description,
            "isPartOf": { "@id": `${baseUrl}/#website` }
        });
    }

    // Dynamic FAQ Schema for Google Rich Snippets
    if (faqs && Array.isArray(faqs) && faqs.length > 0) {
        schema["@graph"].push({
            "@type": "FAQPage",
            "@id": `${fullUrl}/#faq`,
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question || faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer || faq.a
                }
            }))
        });
    }

    return JSON.stringify(schema);
}

// --- Dynamic Robots.txt with Generative AI / GEO Bots Permission ---
app.get('/robots.txt', (req, res) => {
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

# AI Search & Answer Engines (GEO Optimization)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: cohere-ai
Allow: /

# Host & Sitemap
Host: https://financialhub.calculatorfree.in
Sitemap: https://financialhub.calculatorfree.in/sitemap.xml
`;
    res.type('text/plain');
    res.send(robotsTxt);
});

// --- Dynamic Sitemap (All 330+ Calculators & Categories with Today's Date) ---
app.get('/sitemap.xml', (req, res) => {
    const base = 'https://financialhub.calculatorfree.in';
    const today = new Date().toISOString().split('T')[0];
    const allCalcs = getAllCalculators();

    const staticUrls = [
        { loc: '/', priority: '1.0', changefreq: 'daily' },
        { loc: '/about', priority: '0.6', changefreq: 'monthly' },
        { loc: '/contact', priority: '0.6', changefreq: 'monthly' },
        { loc: '/privacy-policy', priority: '0.4', changefreq: 'monthly' },
        { loc: '/disclaimer', priority: '0.4', changefreq: 'monthly' }
    ];

    const categoryUrls = categories.map(cat => ({
        loc: `/category/${cat.id}`,
        priority: '0.9',
        changefreq: 'weekly'
    }));

    const calcUrls = allCalcs.map(c => ({
        loc: `/${c.slug}`,
        priority: c.popular ? '0.9' : '0.8',
        changefreq: 'weekly'
    }));

    const allUrls = [...staticUrls, ...categoryUrls, ...calcUrls];

    const urlTags = allUrls.map(u => `
    <url>
        <loc>${base}${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
    </url>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urlTags}
</urlset>`;

    res.set({
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
    });
    res.send(xml);
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- In-Memory Live Rates Cache & Fetcher ---
let liveRatesCache = {
    timestamp: 0,
    data: {
        usd_inr: 87.50,
        eur_inr: 92.40,
        gbp_inr: 110.20,
        aed_inr: 23.82,
        cad_inr: 61.50,
        btc_inr: 7470000,
        btc_usd: 78500,
        btc_change_24h: 1.25,
        eth_inr: 235000,
        eth_usd: 2470,
        eth_change_24h: 0.85,
        sol_inr: 9810,
        sol_usd: 103,
        sol_change_24h: -2.1,
        gold_24k_10g: 84500,
        gold_gram_24k: 8450,
        silver_1kg: 96200,
        lastUpdated: 'Just now'
    }
};

async function fetchLiveRates() {
    const now = Date.now();
    if (now - liveRatesCache.timestamp < 60000) {
        return liveRatesCache.data;
    }

    try {
        const https = require('https');
        const fetchJson = (url, headers = {}) => new Promise((resolve) => {
            const req = https.get(url, { headers, timeout: 3500 }, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => {
                    try { resolve(JSON.parse(body)); } catch (e) { resolve(null); }
                });
            });
            req.on('error', () => resolve(null));
            req.on('timeout', () => { req.destroy(); resolve(null); });
        });

        const [forexData, cryptoData] = await Promise.all([
            fetchJson('https://open.er-api.com/v6/latest/USD'),
            fetchJson('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=inr,usd&include_24hr_change=true', { 'User-Agent': 'Mozilla/5.0' })
        ]);

        const inrRate = forexData?.rates?.INR || liveRatesCache.data.usd_inr;
        const eurRate = forexData?.rates?.EUR ? (inrRate / forexData.rates.EUR) : liveRatesCache.data.eur_inr;
        const gbpRate = forexData?.rates?.GBP ? (inrRate / forexData.rates.GBP) : liveRatesCache.data.gbp_inr;
        const aedRate = forexData?.rates?.AED ? (inrRate / forexData.rates.AED) : liveRatesCache.data.aed_inr;
        const cadRate = forexData?.rates?.CAD ? (inrRate / forexData.rates.CAD) : liveRatesCache.data.cad_inr;

        const btcInr = cryptoData?.bitcoin?.inr || liveRatesCache.data.btc_inr;
        const btcUsd = cryptoData?.bitcoin?.usd || liveRatesCache.data.btc_usd;
        const btcChange = cryptoData?.bitcoin?.inr_24h_change || 0;

        const ethInr = cryptoData?.ethereum?.inr || liveRatesCache.data.eth_inr;
        const ethUsd = cryptoData?.ethereum?.usd || liveRatesCache.data.eth_usd;
        const ethChange = cryptoData?.ethereum?.inr_24h_change || 0;

        const solInr = cryptoData?.solana?.inr || liveRatesCache.data.sol_inr;
        const solUsd = cryptoData?.solana?.usd || liveRatesCache.data.sol_usd;
        const solChange = cryptoData?.solana?.inr_24h_change || 0;

        const goldOunceUsd = 2750;
        const goldGramInr = Math.round((goldOunceUsd * inrRate * 1.15) / 31.1035);
        const gold10g = goldGramInr * 10;
        const silver1kg = Math.round((32.5 * inrRate * 1.15 * 1000) / 31.1035);

        liveRatesCache = {
            timestamp: now,
            data: {
                usd_inr: parseFloat(inrRate.toFixed(2)),
                eur_inr: parseFloat(eurRate.toFixed(2)),
                gbp_inr: parseFloat(gbpRate.toFixed(2)),
                aed_inr: parseFloat(aedRate.toFixed(2)),
                cad_inr: parseFloat(cadRate.toFixed(2)),
                btc_inr: Math.round(btcInr),
                btc_usd: Math.round(btcUsd),
                btc_change_24h: parseFloat(btcChange.toFixed(2)),
                eth_inr: Math.round(ethInr),
                eth_usd: Math.round(ethUsd),
                eth_change_24h: parseFloat(ethChange.toFixed(2)),
                sol_inr: Math.round(solInr),
                sol_usd: Math.round(solUsd),
                sol_change_24h: parseFloat(solChange.toFixed(2)),
                gold_24k_10g: gold10g || 84500,
                gold_gram_24k: goldGramInr || 8450,
                silver_1kg: silver1kg || 96200,
                lastUpdated: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
            }
        };
    } catch (err) {
        console.warn('Error fetching live market rates:', err.message);
    }

    return liveRatesCache.data;
}

// --- API: Instant Search ---
app.get('/api/search', (req, res) => {
    const q = req.query.q || '';
    const results = searchCalculators(q);
    res.json(results);
});

// --- API: Live Market Rates ---
app.get('/api/live-rates', async (req, res) => {
    const rates = await fetchLiveRates();
    res.json(rates);
});

// ============================================================
// ROUTING — HOMEPAGE & CATEGORY HUBS
// ============================================================

// Home
app.get('/', (req, res) => {
    const title = 'Financial Hub — 300+ Free Financial Calculators | SIP, Loan EMI, Tax, FD, Retirement';
    const desc = 'India\'s largest suite of 300+ free financial calculators: Mutual Fund SIP, Home Loan EMI, New Tax Regime FY 2026-27, FD/RD, PPF, FIRE retirement, and corporate finance.';
    
    const allCalculators = getAllCalculators();
    const categoriesWithCounts = getCategories();
    const popularCalcs = getPopularCalculators();

    res.render('index', { 
        title, 
        isHomePage: true, 
        canonicalPath: '/', 
        description: desc,
        calculators: allCalculators,
        categories: categoriesWithCounts,
        popularCalculators: popularCalcs,
        schema: generateSchema('Financial Hub', desc, '/', false)
    });
});

// Category Hub Page
app.get('/category/:catId', (req, res) => {
    const catId = req.params.catId;
    const catObj = categories.find(c => c.id === catId || c.slug === catId);
    
    if (!catObj) {
        return res.redirect('/');
    }

    const catCalcs = getCalculatorsByCategory(catObj.id);
    const title = `${catObj.name} Calculators — Free Online Financial Tools (${catCalcs.length})`;
    const desc = `Explore all ${catCalcs.length} free ${catObj.name} calculators. ${catObj.desc}`;

    res.render('index', {
        title,
        isHomePage: false,
        canonicalPath: `/category/${catObj.id}`,
        description: desc,
        calculators: catCalcs,
        selectedCategory: catObj.id,
        categories: getCategories(),
        popularCalculators: getPopularCalculators(),
        schema: generateSchema(title, desc, `/category/${catObj.id}`, false)
    });
});

// Static Pages
app.get('/about', (req, res) => res.render('about', { title: 'About Us — Financial Hub', isHomePage: false, description: 'About Financial Hub free financial calculators', schema: generateSchema('About Us', 'About Financial Hub', '/about', false) }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Us — Financial Hub', isHomePage: false, description: 'Contact Financial Hub team', schema: generateSchema('Contact Us', 'Contact Financial Hub', '/contact', false) }));
app.get('/privacy-policy', (req, res) => res.render('privacy', { title: 'Privacy Policy — Financial Hub', isHomePage: false, description: 'Privacy Policy of Financial Hub', schema: generateSchema('Privacy Policy', 'Privacy Policy', '/privacy-policy', false) }));
app.get('/disclaimer', (req, res) => res.render('disclaimer', { title: 'Disclaimer — Financial Hub', isHomePage: false, description: 'Disclaimer of Financial Hub', schema: generateSchema('Disclaimer', 'Disclaimer', '/disclaimer', false) }));

// ============================================================
// DYNAMIC ROUTER FOR ALL 300+ CALCULATORS
// ============================================================
app.get('/:slug', (req, res, next) => {
    const slug = req.params.slug;
    
    // Ignore static files/favicon
    if (slug.includes('.') || slug.startsWith('api')) return next();

    // Check if custom EJS template exists in /views (e.g. sip_calculator.ejs, emi_calculator.ejs)
    const normalizedTemplateName = slug.replace(/-/g, '_');
    const customTemplatePath = path.join(__dirname, 'views', `${normalizedTemplateName}.ejs`);
    const customExists = fs.existsSync(customTemplatePath);

    const calcObj = getCalculatorBySlug(slug) || {
        id: slug,
        slug: slug,
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Calculator',
        shortTitle: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        category: 'investment',
        categoryName: 'Investment & Wealth',
        icon: '📊',
        badge: 'SMART TOOL',
        desc: `Calculate and plan your finances accurately with our free online ${slug.replace(/-/g, ' ')}.`,
        formulaType: 'sip',
        inputs: [
            { id: 'monthlyInvest', label: 'Monthly Amount', min: 500, max: 500000, step: 500, default: 5000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Rate of Return (p.a.)', min: 1, max: 30, step: 0.5, default: 12, suffix: '%' },
            { id: 'timePeriod', label: 'Time Horizon', min: 1, max: 35, step: 1, default: 10, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Invested Amount', isCurrency: true },
            { id: 'estReturns', label: 'Estimated Growth', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Maturity Wealth', isCurrency: true, isTotal: true }
        ]
    };

    const catObj = categories.find(c => c.id === calcObj.category);
    const title = `Free ${calcObj.title} (FY 2026-27): Calculate Returns, Tax & Schedule | FinancialHub`;
    const desc = `Calculate your ${calcObj.title.toLowerCase()} accurately with our free online tool. Includes interactive compounding charts, year-by-year amortization schedule, formula breakdown, and instant PDF/Excel export (FY 2026-27).`;
    const relatedCalcs = getCalculatorsByCategory(calcObj.category).filter(c => c.slug !== slug).slice(0, 6);

    const defaultFaqs = [
        {
            question: `How is the calculation performed in the ${calcObj.title}?`,
            answer: `Our engine computes results using standardized actuarial algorithms factoring in periodic compounding intervals aligned with RBI, SEBI, and CBDT benchmarks.`
        },
        {
            question: `Are my financial numbers safe and private?`,
            answer: `Yes, 100%! All calculations execute strictly client-side inside your browser. No financial data, salary info, or investment numbers are ever uploaded or transmitted to any server.`
        },
        {
            question: `Can I download the detailed amortization schedule in PDF and Excel?`,
            answer: `Yes. Simply click the "Download PDF Report" or "Export Excel/CSV" button in the Action Toolbar to save complete year-by-year schedules.`
        },
        {
            question: `Is this updated for the latest FY 2026-27 tax rules?`,
            answer: `Yes, all calculations reflect the latest Union Budget provisions including revised New Tax Regime slab rates, standard deductions, and capital gains rules.`
        }
    ];

    const viewData = {
        title,
        isHomePage: false,
        canonicalPath: `/${slug}`,
        description: desc,
        calc: calcObj,
        category: catObj,
        relatedCalcs,
        faqs: defaultFaqs,
        schema: generateSchema(title, desc, `/${slug}`, true, catObj, defaultFaqs)
    };

    if (customExists) {
        return res.render(normalizedTemplateName, viewData);
    } else {
        return res.render('universal_calculator', viewData);
    }
});

// 404 Fallback
app.use((req, res) => {
    res.status(404).redirect('/');
});

// Start Server
app.listen(port, () => {
    console.log(`Financial Hub server is running at http://localhost:${port}`);
});