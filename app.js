// app.js (Schema.org সহ সম্পূর্ণ সংস্করণ)

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- Schema Generator Helper ---
function generateSchema(title, description, url, isApp = true) {
    const baseUrl = "https://financialhub.calculatorfree.in";
    const fullUrl = url === '/' ? baseUrl : baseUrl + url;
    
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Financial Hub",
                "url": baseUrl,
                "logo": "https://www.calculatorfree.in/wp-content/uploads/2025/07/cropped-calculatorfree.png"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl }]
            }
        ]
    };

    if (url !== '/') {
        schema["@graph"][1].itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": title.split(' - ')[0], // Take the main part of the title
            "item": fullUrl
        });
    }

    if (isApp) {
        schema["@graph"].push({
            "@type": "SoftwareApplication",
            "name": title.split(' - ')[0],
            "operatingSystem": "Any",
            "applicationCategory": "FinanceApplication",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
            },
            "description": description
        });
    } else {
        schema["@graph"].push({
            "@type": "WebPage",
            "name": title,
            "description": description
        });
    }

    return JSON.stringify(schema);
}

// --- রাউটিং ---

app.get('/', (req, res) => {
    const title = 'Financial Hub - Free Financial Calculators | SIP, EMI, Tax, FD, PPF';
    const desc = 'Free online financial calculators for SIP, EMI, Income Tax, FD, PPF, GST, HRA and more. Plan your investments, loans and taxes — 100% free.';
    res.render('index', { 
        title: title,
        isHomePage: true,
        canonicalPath: '/',
        description: desc,
        schema: generateSchema('Financial Hub', desc, '/', false)
    });
});

app.get('/emi-calculator', (req, res) => {
    const title = 'EMI Calculator — Home, Car & Personal Loan EMI';
    const desc = 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans instantly with amortization schedule and pie chart.';
    res.render('emi_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/emi-calculator', description: desc,
        schema: generateSchema(title, desc, '/emi-calculator')
    });
});

app.get('/simple-interest', (req, res) => {
    const title = 'Simple Interest Calculator';
    const desc = 'Calculate simple interest on your investments or loans in real-time with yearly breakdown.';
    res.render('simple_interest', { 
        title: title, isHomePage: false, canonicalPath: '/simple-interest', description: desc,
        schema: generateSchema(title, desc, '/simple-interest')
    });
});

app.get('/compound-interest', (req, res) => {
    const title = 'Compound Interest Calculator';
    const desc = 'Visualize the power of compounding with our advanced calculator. See year-by-year growth and EAR.';
    res.render('compound_interest', { 
        title: title, isHomePage: false, canonicalPath: '/compound-interest', description: desc,
        schema: generateSchema(title, desc, '/compound-interest')
    });
});

app.get('/advanced-profit-loss', (req, res) => {
    const title = 'Advanced Profit & Loss Calculator';
    const desc = 'Analyze business profitability, break-even points, and profit growth scenarios.';
    res.render('advanced_profit_loss', { 
        title: title, isHomePage: false, canonicalPath: '/advanced-profit-loss', description: desc,
        schema: generateSchema(title, desc, '/advanced-profit-loss')
    });
});

app.get('/gst-calculator', (req, res) => {
    const title = 'GST Calculator — Add & Remove GST Online';
    const desc = 'Add or remove GST from any price instantly. Get detailed CGST, SGST and IGST breakdowns. Supports all GST slabs: 5%, 12%, 18%, 28%.';
    res.render('gst_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/gst-calculator', description: desc,
        schema: generateSchema(title, desc, '/gst-calculator')
    });
});

app.get('/schd-dividend-calculator', (req, res) => {
    const title = 'SCHD Dividend Growth Calculator';
    const desc = 'Project future portfolio value with dividend reinvestment, tax considerations, and expense ratios.';
    res.render('schd_dividend_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/schd-dividend-calculator', description: desc,
        schema: generateSchema(title, desc, '/schd-dividend-calculator')
    });
});

app.get('/sip-calculator', (req, res) => {
    const title = 'SIP Calculator — Mutual Fund Investment Calculator';
    const desc = 'Calculate the future value of your Systematic Investment Plan (SIP) with year-by-year projections, inflation adjustment and goal planning.';
    res.render('sip_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/sip-calculator', description: desc,
        schema: generateSchema(title, desc, '/sip-calculator')
    });
});

app.get('/retirement-calculator', (req, res) => {
    const title = 'Retirement Planning Calculator';
    const desc = 'Plan for your retirement corpus, analyze shortfalls, and get actionable investment advice.';
    res.render('retirement_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/retirement-calculator', description: desc,
        schema: generateSchema(title, desc, '/retirement-calculator')
    });
});

app.get('/loan-prepayment-calculator', (req, res) => {
    const title = 'Loan Prepayment Calculator';
    const desc = 'See how much interest and time you can save by prepaying your loans with interactive charts.';
    res.render('loan_prepayment_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/loan-prepayment-calculator', description: desc,
        schema: generateSchema(title, desc, '/loan-prepayment-calculator')
    });
});


app.get('/budget-calculator', (req, res) => {
    const title = 'Monthly Budget Planner — 50/30/20 Rule Calculator';
    const desc = 'Plan your monthly budget effectively. Track income vs expenses and analyze your spending habits using the 50/30/20 rule.';
    res.render('budget_calculator', { 
        title: title, isHomePage: false, canonicalPath: '/budget-calculator', description: desc,
        schema: generateSchema(title, desc, '/budget-calculator')
    });
});

// New Calculators
app.get('/income-tax-calculator', (req, res) => {
    const title = 'Income Tax Calculator FY 2024-25 — Old vs New Regime';
    const desc = 'Compare Old vs New Tax Regime for FY 2024-25 (AY 2025-26). Find which regime saves you more tax with our free income tax calculator.';
    res.render('income_tax_calculator', {
        title: title, isHomePage: false, canonicalPath: '/income-tax-calculator', description: desc,
        schema: generateSchema(title, desc, '/income-tax-calculator')
    });
});

app.get('/fd-calculator', (req, res) => {
    const title = 'FD Calculator — Fixed Deposit Maturity & Interest';
    const desc = 'Calculate Fixed Deposit maturity amount and interest earned for any bank. Supports quarterly, monthly, and annual compounding.';
    res.render('fd_calculator', {
        title: title, isHomePage: false, canonicalPath: '/fd-calculator', description: desc,
        schema: generateSchema(title, desc, '/fd-calculator')
    });
});

app.get('/ppf-calculator', (req, res) => {
    const title = 'PPF Calculator — Public Provident Fund Maturity';
    const desc = 'Calculate PPF maturity amount for 15, 20 or 25 years. See year-wise interest growth and tax savings under 80C.';
    res.render('ppf_calculator', {
        title: title, isHomePage: false, canonicalPath: '/ppf-calculator', description: desc,
        schema: generateSchema(title, desc, '/ppf-calculator')
    });
});

app.get('/hra-calculator', (req, res) => {
    const title = 'HRA Calculator — House Rent Allowance Exemption';
    const desc = 'Calculate your HRA tax exemption under Section 10(13A). Compare all three rules and find how much HRA is tax-free.';
    res.render('hra_calculator', {
        title: title, isHomePage: false, canonicalPath: '/hra-calculator', description: desc,
        schema: generateSchema(title, desc, '/hra-calculator')
    });
});

// 8 New Calculators
app.get('/cagr-calculator', (req, res) => {
    const title = 'CAGR Calculator — Compound Annual Growth Rate';
    const desc = 'Calculate the Compound Annual Growth Rate (CAGR) of any investment. Measure true annual returns on stocks, mutual funds, and more.';
    res.render('cagr_calculator', { title, isHomePage: false, canonicalPath: '/cagr-calculator', description: desc, schema: generateSchema(title, desc, '/cagr-calculator') });
});

app.get('/inflation-calculator', (req, res) => {
    const title = 'Inflation Calculator — Future Value of Money';
    const desc = 'Calculate how inflation erodes purchasing power over time. Find the future value needed to match today\'s purchasing power.';
    res.render('inflation_calculator', { title, isHomePage: false, canonicalPath: '/inflation-calculator', description: desc, schema: generateSchema(title, desc, '/inflation-calculator') });
});

app.get('/step-up-sip-calculator', (req, res) => {
    const title = 'Step-Up SIP Calculator — Increase SIP Yearly';
    const desc = 'Calculate returns on Step-Up SIP where you increase your monthly investment by a fixed percentage every year.';
    res.render('step_up_sip_calculator', { title, isHomePage: false, canonicalPath: '/step-up-sip-calculator', description: desc, schema: generateSchema(title, desc, '/step-up-sip-calculator') });
});

app.get('/gratuity-calculator', (req, res) => {
    const title = 'Gratuity Calculator — Payment of Gratuity Act 1972';
    const desc = 'Calculate your gratuity amount based on last drawn salary and years of service as per the Payment of Gratuity Act, 1972.';
    res.render('gratuity_calculator', { title, isHomePage: false, canonicalPath: '/gratuity-calculator', description: desc, schema: generateSchema(title, desc, '/gratuity-calculator') });
});

app.get('/nps-calculator', (req, res) => {
    const title = 'NPS Calculator — National Pension System';
    const desc = 'Plan your National Pension System (NPS) corpus. Calculate maturity amount, tax-free lump sum (60%) and monthly pension.';
    res.render('nps_calculator', { title, isHomePage: false, canonicalPath: '/nps-calculator', description: desc, schema: generateSchema(title, desc, '/nps-calculator') });
});

app.get('/car-loan-calculator', (req, res) => {
    const title = 'Car Loan EMI Calculator';
    const desc = 'Calculate your car loan EMI, total interest payable and compare down payment options with interactive charts.';
    res.render('car_loan_calculator', { title, isHomePage: false, canonicalPath: '/car-loan-calculator', description: desc, schema: generateSchema(title, desc, '/car-loan-calculator') });
});

app.get('/gold-calculator', (req, res) => {
    const title = 'Gold Investment Calculator — Physical, ETF & SGB';
    const desc = 'Compare returns on Physical Gold, Gold ETF and Sovereign Gold Bonds (SGB). Includes tax treatment comparison.';
    res.render('gold_calculator', { title, isHomePage: false, canonicalPath: '/gold-calculator', description: desc, schema: generateSchema(title, desc, '/gold-calculator') });
});

app.get('/ssy-calculator', (req, res) => {
    const title = 'SSY Calculator — Sukanya Samriddhi Yojana';
    const desc = 'Calculate Sukanya Samriddhi Yojana (SSY) maturity amount for your daughter. See year-wise growth and tax-free returns.';
    res.render('ssy_calculator', { title, isHomePage: false, canonicalPath: '/ssy-calculator', description: desc, schema: generateSchema(title, desc, '/ssy-calculator') });
});

// Static Pages (No 'Application' schema needed, just Breadcrumbs)
app.get('/about', (req, res) => res.render('about', { title: 'About Us', isHomePage: false, description: 'About Financial Hub', schema: generateSchema('About Us', 'About Financial Hub', '/about', false) }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Us', isHomePage: false, description: 'Contact Financial Hub', schema: generateSchema('Contact Us', 'Contact Financial Hub', '/contact', false) }));
app.get('/privacy-policy', (req, res) => res.render('privacy', { title: 'Privacy Policy', isHomePage: false, description: 'Privacy Policy', schema: generateSchema('Privacy Policy', 'Privacy Policy', '/privacy-policy', false) }));
app.get('/disclaimer', (req, res) => res.render('disclaimer', { title: 'Disclaimer', isHomePage: false, description: 'Disclaimer', schema: generateSchema('Disclaimer', 'Disclaimer', '/disclaimer', false) }));

// 5. সার্ভার চালু করা
app.listen(port, () => {
    console.log(`Financial Hub server is running at http://localhost:${port}`);
});