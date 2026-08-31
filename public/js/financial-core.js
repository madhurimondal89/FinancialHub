/**
 * Financial Hub — Universal Financial Platform Engine
 * Handles: Number-to-Words, Spotlight Search (Ctrl+K), PDF/CSV Exports,
 * URL Param Sharing, Saved Calculations & PWA Offline Engine.
 */

// Registry of all 50 Calculators for Spotlight Search and Goal Finder
const FINANCIAL_CALCULATORS = [
    // 1. Investment & Wealth (15)
    { id: 'sip', title: 'SIP Calculator', path: '/sip-calculator', category: 'Investment', icon: '📊', tags: ['sip', 'mutual fund', 'monthly', 'wealth', 'invest', 'crore'] },
    { id: 'step-up-sip', title: 'Step-Up SIP Calculator', path: '/step-up-sip-calculator', category: 'Investment', icon: '🚀', tags: ['step up', 'sip', 'top up', 'increment', 'wealth'] },
    { id: 'lumpsum', title: 'Lump Sum Investment Calculator', path: '/lumpsum-calculator', category: 'Investment', icon: '💎', tags: ['lumpsum', 'one time', 'mutual fund', 'cagr', 'wealth'] },
    { id: 'mutual-fund', title: 'Mutual Fund Returns Calculator', path: '/mutual-fund-calculator', category: 'Investment', icon: '📈', tags: ['mutual fund', 'nav', 'returns', 'cagr', 'sip', 'growth'] },
    { id: 'swp', title: 'SWP Calculator (Systematic Withdrawal)', path: '/swp-calculator', category: 'Investment', icon: '💸', tags: ['swp', 'systematic withdrawal', 'pension', 'monthly income', 'mutual fund'] },
    { id: 'compound-interest', title: 'Compound Interest Calculator', path: '/compound-interest', category: 'Investment', icon: '⚡', tags: ['compound', 'interest', 'cagr', 'growth', 'exponential'] },
    { id: 'simple-interest', title: 'Simple Interest Calculator', path: '/simple-interest', category: 'Investment', icon: '🧮', tags: ['simple', 'interest', 'flat rate', 'loan', 'ptr'] },
    { id: 'fd', title: 'FD Calculator (Fixed Deposit)', path: '/fd-calculator', category: 'Investment', icon: '🏦', tags: ['fd', 'fixed deposit', 'bank', 'safe', 'interest'] },
    { id: 'rd', title: 'RD Calculator (Recurring Deposit)', path: '/rd-calculator', category: 'Investment', icon: '📅', tags: ['rd', 'recurring deposit', 'monthly deposit', 'bank', 'post office'] },
    { id: 'ppf', title: 'PPF Calculator (Public Provident Fund)', path: '/ppf-calculator', category: 'Investment', icon: '🏛️', tags: ['ppf', 'provident fund', 'tax free', '15 year', '80c'] },
    { id: 'gold', title: 'Gold Investment Calculator (SGB & ETF)', path: '/gold-calculator', category: 'Investment', icon: '🥇', tags: ['gold', 'sgb', 'etf', 'physical gold', 'bullion', 'jewellery'] },
    { id: 'schd', title: 'SCHD Dividend Calculator', path: '/schd-dividend-calculator', category: 'Investment', icon: '💰', tags: ['schd', 'dividend', 'reinvestment', 'drip', 'passive income'] },
    { id: 'dividend-yield', title: 'Dividend Yield Calculator', path: '/dividend-yield-calculator', category: 'Investment', icon: '🪙', tags: ['dividend', 'yield', 'stock', 'payout', 'passive income'] },
    { id: 'stock-profit', title: 'Stock Profit & Brokerage Calculator', path: '/stock-profit-calculator', category: 'Investment', icon: '📊', tags: ['stock', 'brokerage', 'stt', 'equity', 'delivery', 'profit'] },
    { id: 'cagr', title: 'CAGR Calculator', path: '/cagr-calculator', category: 'Investment', icon: '📐', tags: ['cagr', 'annualized return', 'growth rate', 'stock'] },

    // 2. Loans & Real Estate (11)
    { id: 'emi', title: 'Loan EMI Calculator', path: '/emi-calculator', category: 'Loans', icon: '🏠', tags: ['emi', 'home loan', 'personal loan', 'interest', 'schedule'] },
    { id: 'home-loan-eligibility', title: 'Home Loan Eligibility Calculator', path: '/home-loan-eligibility', category: 'Loans', icon: '🏡', tags: ['home loan', 'eligibility', 'foir', 'salary', 'borrow'] },
    { id: 'personal-loan', title: 'Personal Loan EMI Calculator', path: '/personal-loan-calculator', category: 'Loans', icon: '💳', tags: ['personal loan', 'instant loan', 'emi', 'interest', 'unsecured'] },
    { id: 'car-loan', title: 'Car Loan EMI Calculator', path: '/car-loan-calculator', category: 'Loans', icon: '🚗', tags: ['car loan', 'auto loan', 'vehicle', 'down payment', 'emi'] },
    { id: 'bike-loan', title: 'Bike Loan EMI Calculator', path: '/bike-loan-calculator', category: 'Loans', icon: '🏍️', tags: ['bike loan', 'two wheeler', 'motorcycle', 'scooter', 'emi'] },
    { id: 'education-loan', title: 'Education Loan EMI Calculator', path: '/education-loan-calculator', category: 'Loans', icon: '🎓', tags: ['education loan', 'student loan', 'moratorium', '80e', 'college'] },
    { id: 'gold-loan', title: 'Gold Loan EMI & Per Gram Value', path: '/gold-loan-calculator', category: 'Loans', icon: '👑', tags: ['gold loan', 'jewellery loan', 'ltv', 'per gram', 'gold interest'] },
    { id: 'loan-prepayment', title: 'Loan Prepayment Calculator', path: '/loan-prepayment-calculator', category: 'Loans', icon: '⚡', tags: ['prepayment', 'part payment', 'save interest', 'home loan'] },
    { id: 'loan-transfer', title: 'Home Loan Balance Transfer Calculator', path: '/loan-transfer-calculator', category: 'Loans', icon: '🔄', tags: ['balance transfer', 'refinance', 'switch loan', 'lower interest'] },
    { id: 'hra', title: 'HRA Exemption Calculator', path: '/hra-calculator', category: 'Loans', icon: '🏢', tags: ['hra', 'house rent', 'tax deduction', 'exemption', 'salary'] },
    { id: 'rental-yield', title: 'Rental Yield Calculator', path: '/rental-yield-calculator', category: 'Loans', icon: '🏬', tags: ['rental yield', 'property return', 'real estate', 'rent income'] },

    // 3. Tax, Business & Payroll (9)
    { id: 'income-tax', title: 'Income Tax Calculator (New vs Old)', path: '/income-tax-calculator', category: 'Tax', icon: '🧾', tags: ['income tax', 'tax regime', '80c', 'salary', 'tds', 'budget'] },
    { id: 'in-hand-salary', title: 'In-Hand CTC Salary Calculator', path: '/in-hand-salary-calculator', category: 'Tax', icon: '💼', tags: ['in hand salary', 'ctc', 'take home', 'pf deduction', 'gross salary'] },
    { id: 'capital-gains', title: 'Capital Gains Tax (LTCG / STCG)', path: '/capital-gains-tax-calculator', category: 'Tax', icon: '📉', tags: ['capital gains', 'ltcg', 'stcg', 'stock tax', 'real estate tax', '12.5%'] },
    { id: 'tds', title: 'TDS Calculator (Tax Deducted at Source)', path: '/tds-calculator', category: 'Tax', icon: '📑', tags: ['tds', '194c', '194j', '194i', 'withholding tax', 'contractor'] },
    { id: 'freelance-tax', title: 'Freelance & 44ADA Tax Calculator', path: '/freelance-tax-calculator', category: 'Tax', icon: '💻', tags: ['freelance', '44ada', 'presumptive tax', 'consultant', 'professional'] },
    { id: 'crypto-tax', title: 'Crypto Tax Calculator (30% + 1% TDS)', path: '/crypto-tax-calculator', category: 'Tax', icon: '🪙', tags: ['crypto', 'bitcoin', 'virtual digital assets', 'vda', 'crypto tax'] },
    { id: 'gst', title: 'GST Calculator', path: '/gst-calculator', category: 'Tax', icon: '🏷️', tags: ['gst', 'tax invoice', 'cgst', 'sgst', 'igst', 'reverse gst'] },
    { id: 'profit-loss', title: 'Advanced Profit & Loss Calculator', path: '/advanced-profit-loss', category: 'Tax', icon: '📈', tags: ['profit', 'loss', 'margin', 'business', 'breakeven'] },
    { id: 'startup-runway', title: 'Startup Runway & Burn Rate Calculator', path: '/startup-runway-calculator', category: 'Tax', icon: '🔥', tags: ['runway', 'burn rate', 'cash runway', 'startup', 'founders'] },

    // 4. Retirement & Govt Schemes (8)
    { id: 'retirement', title: 'Retirement Corpus Calculator', path: '/retirement-calculator', category: 'Retirement', icon: '🎯', tags: ['retirement', 'pension', 'financial freedom', 'fire', 'corpus'] },
    { id: 'nps', title: 'NPS Calculator (National Pension)', path: '/nps-calculator', category: 'Retirement', icon: '🛡️', tags: ['nps', 'national pension', 'annuity', '80ccd'] },
    { id: 'epf', title: 'EPF Calculator (Employee Provident Fund)', path: '/epf-calculator', category: 'Retirement', icon: '👔', tags: ['epf', 'pf', 'provident fund', 'employer pf', 'vpf', '8.25%'] },
    { id: 'gratuity', title: 'Gratuity Calculator', path: '/gratuity-calculator', category: 'Retirement', icon: '🎁', tags: ['gratuity', 'salary', 'service', 'resignation'] },
    { id: 'scss', title: 'Senior Citizen Savings Scheme (SCSS)', path: '/scss-calculator', category: 'Retirement', icon: '👴', tags: ['scss', 'senior citizen', 'post office', '8.2%', 'quarterly pension'] },
    { id: 'mssc', title: 'Mahila Samman Savings Certificate (MSSC)', path: '/mssc-calculator', category: 'Retirement', icon: '👩', tags: ['mssc', 'mahila samman', 'women scheme', '7.5%', 'post office'] },
    { id: 'nsc', title: 'National Savings Certificate (NSC)', path: '/nsc-calculator', category: 'Retirement', icon: '📜', tags: ['nsc', 'post office', '80c tax saving', '7.7%', 'guaranteed'] },
    { id: 'ssy', title: 'Sukanya Samriddhi Yojana (SSY)', path: '/ssy-calculator', category: 'Retirement', icon: '👧', tags: ['ssy', 'sukanya', 'girl child', 'post office', 'tax free', '8.2%'] },

    // 5. Financial Goals, FIRE & Planning (7)
    { id: 'pomis', title: 'Post Office Monthly Income Scheme (POMIS)', path: '/pomis-calculator', category: 'Planning', icon: '📬', tags: ['pomis', 'monthly income', 'post office', '7.4%', 'safe income'] },
    { id: 'kvp', title: 'Kisan Vikas Patra (KVP)', path: '/kvp-calculator', category: 'Planning', icon: '🌾', tags: ['kvp', 'kisan vikas patra', 'double money', 'post office', '7.5%'] },
    { id: 'child-education', title: 'Child Education & Marriage Planner', path: '/child-education-planner', category: 'Planning', icon: '🎒', tags: ['child education', 'college fund', 'higher education', 'marriage goal'] },
    { id: 'fire', title: 'FIRE Calculator (Early Retirement)', path: '/fire-calculator', category: 'Planning', icon: '🏖️', tags: ['fire', 'financial independence', 'retire early', '4% rule', 'lean fire'] },
    { id: 'emergency-fund', title: 'Emergency Fund Calculator', path: '/emergency-fund-calculator', category: 'Planning', icon: '🦺', tags: ['emergency fund', 'rainy day fund', 'safety cushion', 'liquid savings'] },
    { id: 'budget', title: '50/30/20 Budget Planner', path: '/budget-calculator', category: 'Planning', icon: '📋', tags: ['budget', '50 30 20', 'expense', 'savings', 'salary'] },
    { id: 'inflation', title: 'Inflation Calculator (Purchasing Power)', path: '/inflation-calculator', category: 'Planning', icon: '🔥', tags: ['inflation', 'purchasing power', 'future cost', 'cpi'] }
];

// --- 1. NUMBER TO INDIAN WORDS CONVERTER ---
function convertNumberToIndianWords(num) {
    if (isNaN(num) || num === null || num === undefined || num === 0) return 'Zero Rupees';
    num = Math.round(Number(num));
    if (num < 0) return 'Negative ' + convertNumberToIndianWords(Math.abs(num));

    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function twoDigits(n) {
        if (n < 20) return ones[n];
        return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
    }

    function threeDigits(n) {
        const hundred = Math.floor(n / 100);
        const rest = n % 100;
        let res = '';
        if (hundred > 0) res += ones[hundred] + ' Hundred';
        if (rest > 0) res += (res ? ' ' : '') + twoDigits(rest);
        return res;
    }

    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const thousand = Math.floor((num % 100000) / 1000);
    const hundredAndRest = num % 1000;

    let parts = [];
    if (crore > 0) parts.push(threeDigits(crore) + (crore === 1 ? ' Crore' : ' Crores'));
    if (lakh > 0) parts.push(twoDigits(lakh) + (lakh === 1 ? ' Lakh' : ' Lakhs'));
    if (thousand > 0) parts.push(twoDigits(thousand) + ' Thousand');
    if (hundredAndRest > 0) parts.push(threeDigits(hundredAndRest));

    return parts.join(' ') + ' Rupees';
}

function formatCompactIndianCurrency(num) {
    if (!num || isNaN(num)) return '₹0';
    const n = Math.abs(Number(num));
    let sign = num < 0 ? '-' : '';
    if (n >= 10000000) {
        return sign + '₹' + (n / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
    } else if (n >= 100000) {
        return sign + '₹' + (n / 100000).toFixed(2).replace(/\.00$/, '') + ' L';
    } else if (n >= 1000) {
        return sign + '₹' + (n / 1000).toFixed(1).replace(/\.0$/, '') + ' K';
    }
    return sign + '₹' + Math.round(n).toLocaleString('en-IN');
}

/**
 * Attaches a live Number-to-Words helper under an input field
 */
function attachNumberToWords(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);
    if (!input || !output) return;

    function update() {
        const val = parseFloat(input.value);
        if (isNaN(val) || val <= 0) {
            output.textContent = '';
            output.style.display = 'none';
        } else {
            const shortStr = formatCompactIndianCurrency(val);
            const words = convertNumberToIndianWords(val);
            output.innerHTML = `<span><strong>${shortStr}</strong> • ${words}</span>`;
            output.style.display = 'block';
        }
    }

    input.addEventListener('input', update);
    input.addEventListener('change', update);
    update();
}

/**
 * Create Quick Preset Chips for an Input
 */
function createPresetChips(containerId, inputId, sliderId, presets, onUpdateCallback) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    if (!container || !input) return;

    container.className = 'preset-chips-container';
    container.innerHTML = '';

    presets.forEach(p => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'preset-chip';
        chip.textContent = p.label;
        chip.addEventListener('click', () => {
            input.value = p.value;
            if (slider) slider.value = p.value;
            // Highlight active chip
            container.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            if (typeof onUpdateCallback === 'function') onUpdateCallback();
        });
        container.appendChild(chip);
    });
}

// --- 2. URL QUERY PARAMS SYNCING & LOADING ---
function syncParamsToURL(params) {
    if (!window.history.replaceState) return;
    const url = new URL(window.location.href);
    Object.keys(params).forEach(k => {
        if (params[k] !== undefined && params[k] !== null && params[k] !== '') {
            url.searchParams.set(k, params[k]);
        } else {
            url.searchParams.delete(k);
        }
    });
    window.history.replaceState({}, '', url.toString());
}

function loadParamsFromURL() {
    const url = new URL(window.location.href);
    const res = {};
    url.searchParams.forEach((value, key) => {
        res[key] = value;
    });
    return res;
}

// --- 3. EXPORT SUITE: CSV, PDF, WHATSAPP, COPY LINK ---
function exportTableToCSV(arg1, arg2) {
    let filename = 'financial_schedule';
    let table = null;

    // Smart argument resolver (supports both exportTableToCSV(file, table) and exportTableToCSV(table, file))
    if (typeof arg1 === 'string' && document.getElementById(arg1)) {
        table = document.getElementById(arg1);
        filename = arg2 || 'financial_schedule';
    } else if (typeof arg2 === 'string' && document.getElementById(arg2)) {
        table = document.getElementById(arg2);
        filename = arg1 || 'financial_schedule';
    } else if (arg1 && arg1.tagName === 'TABLE') {
        table = arg1;
        filename = arg2 || 'financial_schedule';
    } else if (arg2 && arg2.tagName === 'TABLE') {
        table = arg2;
        filename = arg1 || 'financial_schedule';
    } else if (typeof arg1 === 'string') {
        filename = arg1;
    }

    // If table still not found, search DOM for any schedule table
    if (!table) {
        table = document.querySelector('#breakdownTable, #projectionTable, #emiScheduleTable, #scheduleTable, table');
    }

    let csvContent = '\uFEFF'; // UTF-8 BOM for Microsoft Excel compatibility

    // 1. Prepend Calculator Title & Date Header in CSV
    const titleEl = document.querySelector('h1.calc-page-heading') || document.querySelector('h1') || document.querySelector('h2');
    const title = titleEl ? titleEl.textContent.trim() : document.title.split('—')[0].trim();
    csvContent += `"${title.replace(/"/g, '""')}"\r\n`;
    csvContent += `"Generated via: financialhub.calculatorfree.in"\r\n`;
    csvContent += `"Date: ${new Date().toLocaleDateString('en-IN')}"\r\n\r\n`;

    // 2. Add Key Calculation Metrics
    csvContent += `"CALCULATION SUMMARY"\r\n`;
    csvContent += `"Metric","Value"\r\n`;

    const mainOut = document.getElementById('mainOutputValue') || document.getElementById('futureValue') || document.getElementById('rMaturity') || document.querySelector('.amount') || document.querySelector('.highlight-result');
    if (mainOut) {
        const cleanVal = mainOut.textContent.replace(/₹\s?/g, 'Rs. ').trim();
        csvContent += `"Primary Highlight","${cleanVal.replace(/"/g, '""')}"\r\n`;
    }

    // Grab input parameters and secondary outputs
    document.querySelectorAll('.calculator-input-group, .summary-item, .bg-body-tertiary.rounded-3, .form-group').forEach(el => {
        const l = el.querySelector('.label, .form-label, .small, label');
        const v = el.querySelector('.value, .sync-num-input, .h5, input');
        if (l && v) {
            const labelText = l.textContent.trim().replace(/"/g, '""');
            const valText = (v.value !== undefined && v.value !== '' ? v.value : v.textContent).replace(/₹\s?/g, 'Rs. ').trim().replace(/"/g, '""');
            if (labelText && valText && !labelText.includes('Reset')) {
                csvContent += `"${labelText}","${valText}"\r\n`;
            }
        }
    });

    csvContent += `\r\n`;

    // 3. Add Table Breakdown (if schedule exists)
    if (table) {
        csvContent += `"YEAR-BY-YEAR DETAILED SCHEDULE"\r\n`;
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            const cols = row.querySelectorAll('th, td');
            const rowData = [];
            cols.forEach(col => {
                let text = col.innerText.replace(/₹\s?/g, 'Rs. ').replace(/"/g, '""').trim();
                rowData.push(`"${text}"`);
            });
            if (rowData.length > 0) csvContent += rowData.join(',') + '\r\n';
        });
    }

    // Trigger Browser Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    const safeFilename = (filename || 'financial_report').toLowerCase().replace(/[^a-z0-9_-]+/g, '_').replace(/\.csv$/i, '') + '.csv';
    link.download = safeFilename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }, 150);

    showToast('Excel/CSV spreadsheet downloaded successfully!', 'success');
}

function cleanPdfText(val) {
    if (val === null || val === undefined) return '';
    return String(val).replace(/₹\s?/g, 'Rs. ');
}

function exportCalculatorPDF(config) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        showToast('PDF Engine is loading, please try in 2 seconds...', 'info');
        return;
    }

    const { docTitle, summaryData, tableHeaders, tableRows, filename, chartCanvasId } = config;
    const doc = new window.jspdf.jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // 1. Top Header Banner
    doc.setFillColor(15, 23, 42); // Navy Blue #0f172a
    doc.rect(0, 0, 210, 30, 'F');

    doc.setTextColor(245, 158, 11); // Gold #f59e0b
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('FinancialHub', 14, 16);

    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.setFont('helvetica', 'normal');
    doc.text('financialhub.calculatorfree.in · Official Financial Statement', 14, 23);

    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }), 196, 18, { align: 'right' });

    // 2. Report Title
    let currentY = 40;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text(cleanPdfText(docTitle) || 'Financial Calculation Report', 14, currentY);

    currentY += 8;

    // 3. Capture Chart Image if available
    let chartImg = null;
    try {
        const canvas = document.getElementById(chartCanvasId) || 
                       document.querySelector('canvas#sipChart') || 
                       document.querySelector('canvas#emiChart') || 
                       document.querySelector('canvas#universalCalculatorChart') || 
                       document.querySelector('canvas');
        if (canvas) {
            chartImg = canvas.toDataURL('image/png');
        }
    } catch (e) {
        console.warn('Could not capture chart canvas for PDF:', e);
    }

    // 4. Upper Section: Summary Cards & Embedded Donut Chart
    if (summaryData && summaryData.length > 0) {
        const leftWidth = chartImg ? 105 : 182;
        const totalCards = summaryData.length;

        // Find primary highlight item (like Future Value or Maturity Amount)
        const highlightItem = summaryData.find(s => s.highlight) || summaryData[summaryData.length - 1];

        // Draw Big Highlight Box on Left
        doc.setFillColor(245, 243, 255); // Soft Violet #f5f3ff
        doc.roundedRect(14, currentY, leftWidth, 22, 2, 2, 'F');
        doc.setDrawColor(124, 58, 237);
        doc.setLineWidth(0.5);
        doc.roundedRect(14, currentY, leftWidth, 22, 2, 2, 'D');

        doc.setFontSize(8.5);
        doc.setTextColor(109, 40, 217);
        doc.setFont('helvetica', 'bold');
        doc.text(cleanPdfText(highlightItem.label).toUpperCase(), 20, currentY + 7);

        doc.setFontSize(14);
        doc.setTextColor(16, 185, 129); // Emerald Green
        doc.setFont('helvetica', 'bold');
        doc.text(cleanPdfText(highlightItem.value), 20, currentY + 16);

        // Draw Remaining Secondary Metrics in a neat 2-col grid
        const otherItems = summaryData.filter(s => s !== highlightItem);
        let secY = currentY + 26;
        const colW = (leftWidth - 4) / 2;

        otherItems.forEach((item, idx) => {
            const col = idx % 2;
            const row = Math.floor(idx / 2);
            const xPos = 14 + (col * (colW + 4));
            const yPos = secY + (row * 15);

            doc.setFillColor(248, 250, 252);
            doc.roundedRect(xPos, yPos, colW, 13, 2, 2, 'F');
            doc.setDrawColor(226, 232, 240);
            doc.setLineWidth(0.3);
            doc.roundedRect(xPos, yPos, colW, 13, 2, 2, 'D');

            doc.setFontSize(7.5);
            doc.setTextColor(100, 116, 139);
            doc.setFont('helvetica', 'normal');
            doc.text(cleanPdfText(item.label), xPos + 4, yPos + 5);

            doc.setFontSize(9.5);
            doc.setTextColor(15, 23, 42);
            doc.setFont('helvetica', 'bold');
            doc.text(cleanPdfText(item.value), xPos + 4, yPos + 10.5);
        });

        // Embed Chart Image on the Right
        if (chartImg) {
            try {
                doc.setFillColor(248, 250, 252);
                doc.roundedRect(125, currentY, 71, 55, 3, 3, 'F');
                doc.setDrawColor(226, 232, 240);
                doc.roundedRect(125, currentY, 71, 55, 3, 3, 'D');

                doc.setFontSize(8);
                doc.setTextColor(100, 116, 139);
                doc.setFont('helvetica', 'bold');
                doc.text('VISUAL BREAKDOWN', 160.5, currentY + 6, { align: 'center' });

                doc.addImage(chartImg, 'PNG', 133, currentY + 9, 55, 43);
            } catch (err) {
                console.warn('Error embedding chart in PDF:', err);
            }
        }

        currentY += Math.max(chartImg ? 60 : 45, 26 + (Math.ceil(otherItems.length / 2) * 15) + 6);
    }

    // 5. Schedule Breakdown Table using autoTable
    if (tableHeaders && tableRows && tableRows.length > 0 && doc.autoTable) {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
        doc.text('Detailed Growth / Amortization Breakdown', 14, currentY);

        const cleanHeaders = tableHeaders.map(cleanPdfText);
        const cleanRows = tableRows.map(row => row.map(cleanPdfText));

        doc.autoTable({
            startY: currentY + 3,
            head: [cleanHeaders],
            body: cleanRows,
            theme: 'striped',
            headStyles: { fillColor: [15, 23, 42], textColor: [245, 158, 11], fontStyle: 'bold', fontSize: 8.5 },
            bodyStyles: { fontSize: 8, textColor: [51, 65, 85] },
            alternateRowStyles: { fillColor: [248, 250, 252] },
            margin: { left: 14, right: 14 }
        });
    }

    // 6. Footer Note with Page Numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184);
        doc.text(`Generated via Financial Hub (financialhub.calculatorfree.in) — 100% Private, Client-Side Calculation Engine (Page ${i} of ${pageCount})`, 105, 288, { align: 'center' });
    }

    doc.save((filename || 'financial_report') + '.pdf');
    showToast('PDF downloaded successfully with visual chart!', 'success');
}

function copyShareableURL() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied with your calculation values!', 'success');
    }).catch(() => {
        prompt('Copy this shareable link:', window.location.href);
    });
}

function shareViaWhatsApp(title, summaryText) {
    const text = `📊 *${title}* via Financial Hub\n\n${summaryText}\n\n👉 *View & customize calculation:* ${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// --- 4. SAVED CALCULATIONS (LOCAL HISTORY) ---
const SAVED_CALCS_KEY = 'fh_saved_calculations';

function getSavedCalculations() {
    try {
        return JSON.parse(localStorage.getItem(SAVED_CALCS_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

function saveCalculation(name, details) {
    const calcs = getSavedCalculations();
    const newEntry = {
        id: 'calc_' + Date.now(),
        name: name || 'Calculation ' + (calcs.length + 1),
        path: window.location.pathname,
        url: window.location.href,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        details: details || {}
    };
    calcs.unshift(newEntry);
    if (calcs.length > 25) calcs.pop(); // Keep last 25
    localStorage.setItem(SAVED_CALCS_KEY, JSON.stringify(calcs));
    showToast(`Saved as "${newEntry.name}" in your local history!`, 'success');
    updateSavedCountBadge();
}

function deleteSavedCalculation(id) {
    let calcs = getSavedCalculations().filter(c => c.id !== id);
    localStorage.setItem(SAVED_CALCS_KEY, JSON.stringify(calcs));
    renderSavedCalculationsModal();
    updateSavedCountBadge();
    showToast('Removed from history', 'info');
}

function updateSavedCountBadge() {
    const badge = document.getElementById('savedCalcsCountBadge');
    if (badge) {
        const count = getSavedCalculations().length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
}

// --- 5. TOAST NOTIFICATION UTILITY ---
function showToast(message, type = 'success') {
    let toast = document.getElementById('fh-universal-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'fh-universal-toast';
        toast.className = 'fh-toast';
        document.body.appendChild(toast);
    }
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
    toast.classList.add('show', type);
    setTimeout(() => {
        toast.classList.remove('show', type);
    }, 3500);
}

// --- 6. SPOTLIGHT SEARCH (CTRL + K) ---
function openSpotlightSearch() {
    const modal = document.getElementById('spotlightModal');
    const input = document.getElementById('spotlightInput');
    if (modal && input) {
        modal.classList.add('active');
        input.value = '';
        renderSpotlightResults('');
        setTimeout(() => input.focus(), 50);
    }
}

function closeSpotlightSearch() {
    const modal = document.getElementById('spotlightModal');
    if (modal) modal.classList.remove('active');
}

async function renderSpotlightResults(query) {
    const resultsContainer = document.getElementById('spotlightResults');
    if (!resultsContainer) return;

    const q = (query || '').trim().toLowerCase();
    let list = FINANCIAL_CALCULATORS.filter(c => {
        if (!q) return true;
        if (c.title.toLowerCase().includes(q)) return true;
        if (c.category.toLowerCase().includes(q)) return true;
        return (c.tags || []).some(t => t.includes(q));
    });

    try {
        const res = await fetch('/api/search?q=' + encodeURIComponent(q));
        if (res.ok) {
            const apiResults = await res.json();
            if (apiResults && apiResults.length > 0) {
                list = apiResults.map(c => ({
                    id: c.id,
                    title: c.title,
                    path: '/' + c.slug,
                    category: c.category,
                    icon: c.icon || '📊'
                }));
            }
        }
    } catch(e) {}

    if (list.length === 0) {
        resultsContainer.innerHTML = `
            <div class="spotlight-empty">
                <span style="font-size:2rem;">🔍</span>
                <p>No calculator found for "<strong>${query}</strong>"</p>
                <small>Try searching for SIP, EMI, Tax, PPF, FD, Gold, or Retirement</small>
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = list.slice(0, 15).map((c, index) => `
        <a href="${c.path}" class="spotlight-item ${index === 0 ? 'selected' : ''}" data-index="${index}">
            <span class="spotlight-item-icon">${c.icon}</span>
            <div class="spotlight-item-info">
                <div class="spotlight-item-title">${c.title}</div>
                <div class="spotlight-item-category text-capitalize">${c.category}</div>
            </div>
            <span class="spotlight-item-arrow">→</span>
        </a>
    `).join('');
}

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + K or Cmd + K or /
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const modal = document.getElementById('spotlightModal');
        if (modal && modal.classList.contains('active')) {
            closeSpotlightSearch();
        } else {
            openSpotlightSearch();
        }
    } else if (e.key === 'Escape') {
        closeSpotlightSearch();
        closeSavedModal();
    }
});

// Spotlight search keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('spotlightInput');
    const results = document.getElementById('spotlightResults');

    if (input) {
        input.addEventListener('input', (e) => renderSpotlightResults(e.target.value));
        input.addEventListener('keydown', (e) => {
            const items = results.querySelectorAll('.spotlight-item');
            if (!items.length) return;
            let current = results.querySelector('.spotlight-item.selected');
            let currentIndex = current ? parseInt(current.getAttribute('data-index')) : 0;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                currentIndex = (currentIndex + 1) % items.length;
                items.forEach(it => it.classList.remove('selected'));
                items[currentIndex].classList.add('selected');
                items[currentIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                items.forEach(it => it.classList.remove('selected'));
                items[currentIndex].classList.add('selected');
                items[currentIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (current) window.location.href = current.getAttribute('href');
            }
        });
    }

    updateSavedCountBadge();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('[SW] Registered successfully scope:', reg.scope))
            .catch(err => console.warn('[SW] Registration note:', err));
    }
});

// --- 7. SAVED CALCULATIONS MODAL RENDERER ---
function openSavedModal() {
    const modal = document.getElementById('savedCalcsModal');
    if (modal) {
        renderSavedCalculationsModal();
        modal.classList.add('active');
    }
}

function closeSavedModal() {
    const modal = document.getElementById('savedCalcsModal');
    if (modal) modal.classList.remove('active');
}

function renderSavedCalculationsModal() {
    const list = document.getElementById('savedCalcsList');
    if (!list) return;
    const calcs = getSavedCalculations();
    if (calcs.length === 0) {
        list.innerHTML = `
            <div class="spotlight-empty p-4">
                <span style="font-size:2.5rem;">💾</span>
                <h5>No saved calculations yet</h5>
                <p class="text-muted" style="font-size:0.9rem;">Click "Save Calculation" on any calculator to keep a personal record here. 100% private to your browser.</p>
            </div>
        `;
        return;
    }

    list.innerHTML = calcs.map(c => `
        <div class="saved-calc-card">
            <div class="saved-calc-main">
                <h6>${c.name}</h6>
                <div class="saved-calc-meta">
                    <span>${c.date}</span> • <span>${c.path.replace('/', '').replace('-', ' ').toUpperCase()}</span>
                </div>
            </div>
            <div class="saved-calc-actions">
                <a href="${c.url}" class="btn btn-sm btn-outline-warning">Open</a>
                <button type="button" class="btn btn-sm btn-outline-danger" onclick="deleteSavedCalculation('${c.id}')">✕</button>
            </div>
        </div>
    `).join('');
}

// --- 8. PWA INSTALL PROMPT PROACTIVE TRIGGER ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBanner = document.getElementById('pwaInstallBanner');
    if (installBanner) installBanner.style.display = 'flex';
});

function installPWAApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                showToast('Financial Hub installed successfully!', 'success');
            }
            deferredPrompt = null;
            const banner = document.getElementById('pwaInstallBanner');
            if (banner) banner.style.display = 'none';
        });
    } else {
        showToast('To install, tap "Add to Home Screen" in your browser menu.', 'info');
    }
}

// ============================================================
// UNIVERSAL ACTION TOOLBAR NORMALIZER & AUTO-HOOK FOR ALL 300+ CALCULATORS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Normalize Action Toolbars across all templates
    const toolbar = document.querySelector('.action-toolbar');
    if (toolbar) {
        toolbar.style.display = 'flex'; // Ensure visible

        const label = toolbar.querySelector('.toolbar-label');
        if (label) label.textContent = 'Tools & Export:';

        // Ensure PDF Button
        let pdfBtn = toolbar.querySelector('#btnExportPDF, #uniBtnPDF, #tbBtnPDF, [id*="PDF"]');
        if (!pdfBtn) {
            pdfBtn = document.createElement('button');
            pdfBtn.type = 'button';
            pdfBtn.className = 'btn-action-tool';
            pdfBtn.id = 'btnExportPDF';
            pdfBtn.innerHTML = '<span>📄</span> Download PDF Report';
            toolbar.insertBefore(pdfBtn, toolbar.children[1] || null);
        }

        // Ensure CSV Button
        let csvBtn = toolbar.querySelector('#btnExportCSV, #uniBtnCSV, #tbBtnCSV, [id*="CSV"]');
        if (!csvBtn) {
            csvBtn = document.createElement('button');
            csvBtn.type = 'button';
            csvBtn.className = 'btn-action-tool';
            csvBtn.id = 'btnExportCSV';
            csvBtn.innerHTML = '<span>📊</span> Export Excel/CSV';
            if (pdfBtn && pdfBtn.nextSibling) {
                toolbar.insertBefore(csvBtn, pdfBtn.nextSibling);
            } else {
                toolbar.appendChild(csvBtn);
            }
        }

        // Ensure WhatsApp Button
        let waBtn = toolbar.querySelector('.btn-whatsapp, [id*="WA"], [id*="Share"], [id*="WhatsApp"]');
        if (!waBtn) {
            waBtn = document.createElement('button');
            waBtn.type = 'button';
            waBtn.className = 'btn-action-tool btn-whatsapp';
            waBtn.id = 'btnShareWA';
            waBtn.innerHTML = '<span>💬</span> Share on WhatsApp';
            toolbar.appendChild(waBtn);
        }

        // Ensure Copy Link Button
        let copyBtn = toolbar.querySelector('[id*="Copy"], [id*="Link"]');
        if (!copyBtn) {
            copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'btn-action-tool';
            copyBtn.id = 'btnCopyLink';
            copyBtn.innerHTML = '<span>🔗</span> Copy Link';
            toolbar.appendChild(copyBtn);
        }

        // Ensure Save Button
        let saveBtn = toolbar.querySelector('[id*="Save"]');
        if (!saveBtn) {
            saveBtn = document.createElement('button');
            saveBtn.type = 'button';
            saveBtn.className = 'btn-action-tool';
            saveBtn.id = 'btnSaveCalc';
            saveBtn.innerHTML = '<span>💾</span> Save Calculation';
            toolbar.appendChild(saveBtn);
        }

        // Universal Event Wiring
        if (pdfBtn && !pdfBtn.dataset.wired) {
            pdfBtn.dataset.wired = 'true';
            pdfBtn.addEventListener('click', () => {
                const titleEl = document.querySelector('h1.calc-page-heading') || document.querySelector('h1') || document.querySelector('h2');
                const title = titleEl ? titleEl.textContent.trim() : document.title.split('—')[0].trim();
                
                const summaryData = [];
                const mainOut = document.getElementById('mainOutputValue') || document.getElementById('futureValue') || document.getElementById('rMaturity') || document.querySelector('.amount') || document.querySelector('.highlight-result');
                if (mainOut) {
                    summaryData.push({ label: 'Key Result', value: mainOut.textContent.trim(), highlight: true });
                }
                document.querySelectorAll('.summary-item, .calculator-input-group, .bg-body-tertiary.rounded-3').forEach(el => {
                    const l = el.querySelector('.label, .form-label, .small');
                    const v = el.querySelector('.value, .sync-num-input, .h5');
                    if (l && v && summaryData.length < 6) {
                        const textVal = v.value !== undefined ? v.value : v.textContent.trim();
                        if (textVal) summaryData.push({ label: l.textContent.trim(), value: textVal });
                    }
                });

                const table = document.querySelector('table');
                let tableHeaders = null;
                let tableRows = null;
                if (table) {
                    tableHeaders = [];
                    table.querySelectorAll('thead th').forEach(th => tableHeaders.push(th.textContent.trim()));
                    tableRows = [];
                    table.querySelectorAll('tbody tr').forEach(tr => {
                        const row = [];
                        tr.querySelectorAll('td').forEach(td => row.push(td.textContent.trim()));
                        if (row.length) tableRows.push(row);
                    });
                }

                exportCalculatorPDF({
                    docTitle: title,
                    summaryData: summaryData.length ? summaryData : null,
                    tableHeaders: tableHeaders && tableHeaders.length ? tableHeaders : null,
                    tableRows: tableRows && tableRows.length ? tableRows : null,
                    filename: (title || 'financial_report').toLowerCase().replace(/[^a-z0-9]+/g, '_')
                });
            });
        }

        if (csvBtn && !csvBtn.dataset.wired) {
            csvBtn.dataset.wired = 'true';
            csvBtn.addEventListener('click', () => {
                const table = document.querySelector('table');
                if (table && table.id) {
                    exportTableToCSV('financial_schedule', table.id);
                } else if (table) {
                    table.id = 'dynamicScheduleTable';
                    exportTableToCSV('financial_schedule', 'dynamicScheduleTable');
                } else {
                    showToast('No table schedule data found to export.', 'info');
                }
            });
        }

        if (waBtn && !waBtn.dataset.wired) {
            waBtn.dataset.wired = 'true';
            waBtn.addEventListener('click', () => {
                const titleEl = document.querySelector('h1.calc-page-heading') || document.querySelector('h1') || document.querySelector('h2');
                const title = titleEl ? titleEl.textContent.trim() : document.title.split('—')[0].trim();
                const mainOut = document.getElementById('mainOutputValue') || document.getElementById('futureValue') || document.querySelector('.amount');
                const resultText = mainOut ? `🎯 *Result:* ${mainOut.textContent.trim()}\n` : '';
                const summary = `📊 *${title}*\n${resultText}Check your financial numbers:\n`;
                shareViaWhatsApp(title, summary);
            });
        }

        if (copyBtn && !copyBtn.dataset.wired) {
            copyBtn.dataset.wired = 'true';
            copyBtn.addEventListener('click', copyShareableURL);
        }

        if (saveBtn && !saveBtn.dataset.wired) {
            saveBtn.dataset.wired = 'true';
            saveBtn.addEventListener('click', () => {
                const titleEl = document.querySelector('h1.calc-page-heading') || document.querySelector('h1') || document.querySelector('h2');
                const title = titleEl ? titleEl.textContent.trim() : 'Financial Calculation';
                const mainOut = document.getElementById('mainOutputValue') || document.getElementById('futureValue') || document.querySelector('.amount');
                const val = mainOut ? mainOut.textContent.trim() : '';
                const name = prompt('Save Calculation As:', `${title} - ${val}`);
                if (name) {
                    saveCalculation(name, { Title: title, Result: val, Date: new Date().toLocaleDateString('en-IN') });
                }
            });
        }
    }
});

// ============================================================
// LIVE MARKET RATES & CRYPTO/FOREX AUTO-UPDATER
// ============================================================
window.FinancialLiveRates = null;

async function refreshLiveMarketRates() {
    try {
        const res = await fetch('/api/live-rates');
        if (!res.ok) return;
        const data = await res.json();
        window.FinancialLiveRates = data;

        const fmtINR = (n, maxDec = 0) => new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: maxDec
        }).format(n);

        // Update Moving Ticker Elements by Class
        if (data.usd_inr) {
            document.querySelectorAll('.tk-live-usd').forEach(el => el.textContent = fmtINR(data.usd_inr, 2));
        }
        if (data.eur_inr) {
            document.querySelectorAll('.tk-live-eur').forEach(el => el.textContent = fmtINR(data.eur_inr, 2));
        }
        if (data.gbp_inr) {
            document.querySelectorAll('.tk-live-gbp').forEach(el => el.textContent = fmtINR(data.gbp_inr, 2));
        }
        if (data.btc_inr) {
            document.querySelectorAll('.tk-live-btc').forEach(el => el.textContent = fmtINR(data.btc_inr, 0));
        }
        if (data.btc_change_24h !== undefined) {
            const isPos = data.btc_change_24h >= 0;
            document.querySelectorAll('.tk-live-btc-chg').forEach(el => {
                el.className = isPos ? 'tk-change-pos' : 'tk-change-neg';
                el.textContent = `${isPos ? '+' : ''}${data.btc_change_24h}%`;
            });
        }
        if (data.eth_inr) {
            document.querySelectorAll('.tk-live-eth').forEach(el => el.textContent = fmtINR(data.eth_inr, 0));
        }
        if (data.eth_change_24h !== undefined) {
            const isPos = data.eth_change_24h >= 0;
            document.querySelectorAll('.tk-live-eth-chg').forEach(el => {
                el.className = isPos ? 'tk-change-pos' : 'tk-change-neg';
                el.textContent = `${isPos ? '+' : ''}${data.eth_change_24h}%`;
            });
        }
        if (data.gold_24k_10g) {
            document.querySelectorAll('.tk-live-gold').forEach(el => el.textContent = fmtINR(data.gold_24k_10g, 0));
        }
        if (data.silver_1kg) {
            document.querySelectorAll('.tk-live-silver').forEach(el => el.textContent = fmtINR(data.silver_1kg, 0));
        }

        // Update Homepage Live Dashboard (if present)
        const hpUsd = document.getElementById('hpLiveUsd');
        if (hpUsd && data.usd_inr) hpUsd.textContent = fmtINR(data.usd_inr, 2);

        const hpBtc = document.getElementById('hpLiveBtc');
        if (hpBtc && data.btc_inr) hpBtc.textContent = fmtINR(data.btc_inr, 0);

        const hpEth = document.getElementById('hpLiveEth');
        if (hpEth && data.eth_inr) hpEth.textContent = fmtINR(data.eth_inr, 0);

        const hpGold = document.getElementById('hpLiveGold');
        if (hpGold && data.gold_24k_10g) hpGold.textContent = fmtINR(data.gold_24k_10g, 0);

        const hpTime = document.getElementById('hpLiveTime');
        if (hpTime && data.lastUpdated) hpTime.textContent = `Updated: ${data.lastUpdated}`;

    } catch (e) {
        console.warn('[LiveRates] update note:', e.message);
    }
}

// Auto-run on load and poll every 45s
document.addEventListener('DOMContentLoaded', () => {
    refreshLiveMarketRates();
    setInterval(refreshLiveMarketRates, 45000);
});
