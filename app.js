// app.js (সম্পূর্ণ এবং সর্বশেষ সংস্করণ)

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- রাউটিং ---

app.get('/', (req, res) => res.render('index', { 
    title: 'Financial Hub - Free & Interactive Financial Calculators',
    isHomePage: true,
    description: 'A collection of free, world-class financial calculators for your investment, loan, tax, and retirement planning needs. Interactive tools with charts and guides.'
}));

app.get('/emi-calculator', (req, res) => res.render('emi_calculator', { 
    title: 'Interactive EMI Calculator with Charts & Schedule',
    isHomePage: false,
    description: 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans instantly with our interactive calculator, charts, and amortization schedule.'
}));

app.get('/simple-interest', (req, res) => res.render('simple_interest', { 
    title: 'Simple Interest Calculator with Yearly Breakdown',
    isHomePage: false,
    description: 'Calculate simple interest on your investments or loans in real-time. Our tool provides a detailed year-by-year breakdown and visual charts.'
}));

app.get('/compound-interest', (req, res) => res.render('compound_interest', { 
    title: 'Compound Interest Calculator with Charts & EAR',
    isHomePage: false,
    description: 'Visualize the power of compounding with our advanced calculator. See year-by-year growth, pie charts, and the Effective Annual Rate (EAR) of your investment.'
}));

app.get('/advanced-profit-loss', (req, res) => res.render('advanced_profit_loss', { 
    title: 'Advanced Profit & Loss Calculator with Scenarios',
    isHomePage: false,
    description: 'Analyze your business profitability with our advanced P&L calculator. Get real-time charts, break-even analysis, and profit growth scenarios.'
}));

app.get('/gst-calculator', (req, res) => res.render('gst_calculator', { 
    title: 'GST Calculator - Add or Remove GST with Breakdown',
    isHomePage: false,
    description: 'Easily calculate GST amounts for any product or service. Our tool lets you add or remove GST from a price and provides a detailed CGST/SGST breakdown.'
}));

app.get('/schd-dividend-calculator', (req, res) => res.render('schd_dividend_calculator', { 
    title: 'Advanced SCHD Dividend Growth Calculator',
    isHomePage: false,
    description: 'Project the future value of your SCHD investment with our advanced calculator, considering dividend growth, taxes, and expense ratios.'
}));

app.get('/sip-calculator', (req, res) => res.render('sip_calculator', { 
    title: 'SIP Calculator with Monthly & Yearly Projections',
    isHomePage: false,
    description: 'Calculate the future value of your Systematic Investment Plan (SIP) in mutual funds. See detailed monthly or yearly projections with charts.'
}));

app.get('/retirement-calculator', (req, res) => res.render('retirement_calculator', { 
    title: 'Retirement Planning Calculator with Shortfall Analysis',
    isHomePage: false,
    description: 'Plan for your retirement with our comprehensive calculator. Find out your required corpus, projected savings, and get actionable suggestions to bridge any shortfall.'
}));

app.get('/loan-prepayment-calculator', (req, res) => res.render('loan_prepayment_calculator', { 
    title: 'Loan Prepayment Calculator - See Your Savings',
    isHomePage: false,
    description: 'Calculate how much interest and time you can save by prepaying your home, car, or personal loan. Compare scenarios with our interactive charts.'
}));

// সার্ভার চালু করা
app.listen(port, () => {
    console.log(`Financial Hub server is running at http://localhost:${port}`);
});