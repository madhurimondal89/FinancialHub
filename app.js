// app.js (সম্পূর্ণ এবং সর্বশেষ সংস্করণ)

// 1. মডিউল ইম্পোর্ট
const express = require('express');
const path = require('path');

// 2. Express অ্যাপ ইনিশিয়ালাইজেশন
const app = express();
const port = 3000;

// 3. মিডলওয়্যার সেটআপ (Middleware Setup)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 4. ভিউ ইঞ্জিন সেটআপ (View Engine Setup)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// --- রাউটিং ---

// হোমপেজ রুট
app.get('/', (req, res) => res.render('index', { title: 'Financial Hub' }));

// EMI Calculator Route
app.get('/emi-calculator', (req, res) => {
    res.render('emi_calculator', { title: 'EMI Calculator' });
});

// Simple Interest Calculator Route
app.get('/simple-interest', (req, res) => {
    res.render('simple_interest', { title: 'Simple Interest Calculator' });
});

// Compound Interest Calculator Route
app.get('/compound-interest', (req, res) => {
    res.render('compound_interest', { title: 'Compound Interest Calculator' });
});

// Advanced Profit & Loss Calculator Route
app.get('/advanced-profit-loss', (req, res) => {
    res.render('advanced_profit_loss', { title: 'Advanced Profit & Loss Analysis' });
});

// GST Calculator Route
app.get('/gst-calculator', (req, res) => {
    res.render('gst_calculator', { title: 'GST Calculator' });
});

// SCHD Dividend Calculator Route
app.get('/schd-dividend-calculator', (req, res) => {
    res.render('schd_dividend_calculator', { title: 'SCHD Dividend Growth Calculator' });
});

// SIP Calculator Route
app.get('/sip-calculator', (req, res) => {
    res.render('sip_calculator', { title: 'SIP Calculator' });
});
// Retirement Calculator Route
app.get('/retirement-calculator', (req, res) => {
    res.render('retirement_calculator', { title: 'Retirement Planning Calculator' });
});

// Loan Prepayment Calculator Route
app.get('/loan-prepayment-calculator', (req, res) => {
    res.render('loan_prepayment_calculator', { title: 'Loan Prepayment Calculator' });
});

// 5. সার্ভার চালু করা (Start the server)
app.listen(port, () => {
    console.log(`Financial Hub server is running at http://localhost:${port}`);
});