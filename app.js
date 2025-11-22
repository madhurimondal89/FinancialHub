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
    const title = 'Financial Hub - Free & Interactive Financial Calculators';
    const desc = 'A collection of free, world-class financial calculators for your investment, loan, tax, and retirement planning needs.';
    res.render('index', { 
        title: title,
        isHomePage: true,
        description: desc,
        schema: generateSchema('Financial Hub', desc, '/', false) // Homepage isn't a single app, it's a collection
    });
});

app.get('/emi-calculator', (req, res) => {
    const title = 'Interactive EMI Calculator';
    const desc = 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans instantly with our interactive calculator.';
    res.render('emi_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/emi-calculator')
    });
});

app.get('/simple-interest', (req, res) => {
    const title = 'Simple Interest Calculator';
    const desc = 'Calculate simple interest on your investments or loans in real-time with yearly breakdown.';
    res.render('simple_interest', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/simple-interest')
    });
});

app.get('/compound-interest', (req, res) => {
    const title = 'Compound Interest Calculator';
    const desc = 'Visualize the power of compounding with our advanced calculator. See year-by-year growth and EAR.';
    res.render('compound_interest', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/compound-interest')
    });
});

app.get('/advanced-profit-loss', (req, res) => {
    const title = 'Advanced Profit & Loss Calculator';
    const desc = 'Analyze business profitability, break-even points, and profit growth scenarios.';
    res.render('advanced_profit_loss', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/advanced-profit-loss')
    });
});

app.get('/gst-calculator', (req, res) => {
    const title = 'GST Calculator';
    const desc = 'Add or remove GST from any price. Get detailed CGST and SGST breakdowns instantly.';
    res.render('gst_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/gst-calculator')
    });
});

app.get('/schd-dividend-calculator', (req, res) => {
    const title = 'SCHD Dividend Growth Calculator';
    const desc = 'Project future portfolio value with dividend reinvestment, tax considerations, and expense ratios.';
    res.render('schd_dividend_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/schd-dividend-calculator')
    });
});

app.get('/sip-calculator', (req, res) => {
    const title = 'SIP Calculator';
    const desc = 'Calculate the future value of your Systematic Investment Plan (SIP) with detailed projections.';
    res.render('sip_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/sip-calculator')
    });
});

app.get('/retirement-calculator', (req, res) => {
    const title = 'Retirement Planning Calculator';
    const desc = 'Plan for your retirement corpus, analyze shortfalls, and get actionable investment advice.';
    res.render('retirement_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/retirement-calculator')
    });
});

app.get('/loan-prepayment-calculator', (req, res) => {
    const title = 'Loan Prepayment Calculator';
    const desc = 'See how much interest and time you can save by prepaying your loans with interactive charts.';
    res.render('loan_prepayment_calculator', { 
        title: title, isHomePage: false, description: desc,
        schema: generateSchema(title, desc, '/loan-prepayment-calculator')
    });
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