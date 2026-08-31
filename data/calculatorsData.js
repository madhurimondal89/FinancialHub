// data/calculatorsData.js — Master Registry of 300+ Financial Calculators

const categories = [
    {
        id: 'investment',
        slug: 'investment-wealth',
        name: 'Investment & Wealth',
        icon: '📈',
        color: '#10b981',
        desc: 'SIP, mutual funds, stocks, compounding returns, CAGR, and wealth growth projection tools.'
    },
    {
        id: 'banking',
        slug: 'banking-deposits',
        name: 'Banking & Fixed Income',
        icon: '🏦',
        color: '#3b82f6',
        desc: 'FD, RD, PPF, SSY, Post Office schemes, Govt savings certificates, and deposit interest calculators.'
    },
    {
        id: 'loans',
        slug: 'loans-mortgages',
        name: 'Loans & Mortgages',
        icon: '🏠',
        color: '#6366f1',
        desc: 'Home loan, car loan, personal loan EMI, prepayment savings, loan balance transfer, and debt management.'
    },
    {
        id: 'tax',
        slug: 'tax-payroll',
        name: 'Income Tax & Payroll (FY 2026-27)',
        icon: '🧾',
        color: '#8b5cf6',
        desc: 'New vs Old Tax Regime, CTC in-hand salary, 44ADA freelance tax, capital gains, HRA, and TDS calculators.'
    },
    {
        id: 'retirement',
        slug: 'retirement-fire',
        name: 'Retirement, Pension & FIRE',
        icon: '🎯',
        color: '#f59e0b',
        desc: 'Early retirement FIRE planning, NPS pension, EPS, post-retirement SWP, and annuity corpus calculators.'
    },
    {
        id: 'insurance',
        slug: 'insurance-protection',
        name: 'Insurance & Protection',
        icon: '🛡️',
        color: '#ec4899',
        desc: 'Term insurance human life value (HLV), health insurance cover, ULIP vs Term, and insurance return metrics.'
    },
    {
        id: 'business',
        slug: 'business-corporate',
        name: 'Business & Corporate Finance',
        icon: '💼',
        color: '#06b6d4',
        desc: 'GST, break-even analysis, profit margins, CAC, startup runway, valuation DCF, and corporate finance.'
    },
    {
        id: 'personal',
        slug: 'personal-budgeting',
        name: 'Personal Finance & Budgeting',
        icon: '💰',
        color: '#14b8a6',
        desc: '50/30/20 budget planner, inflation purchasing power, emergency funds, net worth, and life goals.'
    }
];

// Helper to generate formula config
const F_TYPES = {
    SIP: 'sip',
    STEP_UP_SIP: 'step_up_sip',
    LUMPSUM: 'lumpsum',
    EMI: 'emi',
    LOAN_PREPAY: 'loan_prepay',
    FD: 'fd',
    RD: 'rd',
    PPF: 'ppf',
    COMPOUND: 'compound',
    SIMPLE: 'simple',
    CAGR: 'cagr',
    SALARY: 'salary',
    TAX: 'tax',
    INFLATION: 'inflation',
    RETIREMENT: 'retirement',
    FIRE: 'fire',
    SWP: 'swp',
    GST: 'gst',
    PERCENTAGE: 'percentage',
    SAVINGS_GOAL: 'savings_goal',
    PROFIT_LOSS: 'profit_loss',
    DEBT_PAYOFF: 'debt_payoff',
    RULE_OF_72: 'rule_72'
};

const rawCalculators = [
    // ==========================================
    // 1. INVESTMENT & WEALTH ACCUMULATION (50)
    // ==========================================
    {
        id: 'sip-calculator',
        slug: 'sip-calculator',
        title: 'SIP Calculator',
        shortTitle: 'SIP Growth',
        category: 'investment',
        icon: '🚀',
        badge: 'POPULAR',
        popular: true,
        desc: 'Calculate estimated returns and wealth compounding on monthly Mutual Fund SIP investments.',
        formulaType: F_TYPES.SIP,
        inputs: [
            { id: 'monthlyInvest', label: 'Monthly Investment', min: 500, max: 1000000, step: 500, default: 10000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Return Rate (p.a.)', min: 1, max: 30, step: 0.5, default: 12, suffix: '%' },
            { id: 'timePeriod', label: 'Time Period', min: 1, max: 40, step: 1, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Invested Amount', isCurrency: true },
            { id: 'estReturns', label: 'Estimated Returns', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Total Future Wealth', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'step-up-sip-calculator',
        slug: 'step-up-sip-calculator',
        title: 'Step-Up SIP Calculator',
        shortTitle: 'Step-Up SIP',
        category: 'investment',
        icon: '📈',
        badge: 'HIGH ROI',
        popular: true,
        desc: 'Calculate exponential wealth growth by increasing your SIP amount annually by 5–15%.',
        formulaType: F_TYPES.STEP_UP_SIP,
        inputs: [
            { id: 'monthlyInvest', label: 'Initial Monthly Investment', min: 1000, max: 500000, step: 500, default: 10000, prefix: '₹', isCurrency: true },
            { id: 'stepUpPercent', label: 'Annual Step-Up Increment', min: 1, max: 50, step: 1, default: 10, suffix: '%' },
            { id: 'returnRate', label: 'Expected Annual Return', min: 1, max: 30, step: 0.5, default: 13, suffix: '%' },
            { id: 'timePeriod', label: 'Investment Period', min: 1, max: 35, step: 1, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Total Invested', isCurrency: true },
            { id: 'estReturns', label: 'Step-Up Gain', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Maturity Corpus', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'lumpsum-calculator',
        slug: 'lumpsum-calculator',
        title: 'Lump Sum Investment Calculator',
        shortTitle: 'Lump Sum',
        category: 'investment',
        icon: '💎',
        badge: 'ONE-TIME',
        popular: true,
        desc: 'Calculate future value of a one-time lump sum mutual fund or stock investment over time.',
        formulaType: F_TYPES.LUMPSUM,
        inputs: [
            { id: 'lumpsumAmt', label: 'Total Investment Amount', min: 5000, max: 50000000, step: 5000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Return Rate (p.a.)', min: 1, max: 30, step: 0.5, default: 12, suffix: '%' },
            { id: 'timePeriod', label: 'Time Horizon', min: 1, max: 40, step: 1, default: 10, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Invested Amount', isCurrency: true },
            { id: 'estReturns', label: 'Wealth Gain', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Maturity Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'mutual-fund-calculator',
        slug: 'mutual-fund-calculator',
        title: 'Mutual Fund Returns Calculator',
        shortTitle: 'Mutual Funds',
        category: 'investment',
        icon: '📊',
        badge: 'POPULAR',
        popular: true,
        desc: 'Calculate absolute returns, annualized CAGR, and total gains on mutual fund investments.',
        formulaType: F_TYPES.LUMPSUM,
        inputs: [
            { id: 'lumpsumAmt', label: 'Initial Mutual Fund Investment', min: 1000, max: 10000000, step: 1000, default: 50000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Annual CAGR Return', min: 1, max: 35, step: 0.5, default: 14, suffix: '%' },
            { id: 'timePeriod', label: 'Holding Period', min: 1, max: 30, step: 1, default: 7, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Amount Invested', isCurrency: true },
            { id: 'estReturns', label: 'Capital Appreciation', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Current Fund Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'swp-calculator',
        slug: 'swp-calculator',
        title: 'SWP Calculator (Systematic Withdrawal Plan)',
        shortTitle: 'SWP Monthly Pension',
        category: 'investment',
        icon: '💸',
        badge: 'REGULAR INCOME',
        popular: true,
        desc: 'Calculate monthly cash withdrawals from mutual fund corpus and track remaining balance.',
        formulaType: F_TYPES.SWP,
        inputs: [
            { id: 'totalCorpus', label: 'Initial Corpus Balance', min: 100000, max: 50000000, step: 50000, default: 2500000, prefix: '₹', isCurrency: true },
            { id: 'monthlyWithdrawal', label: 'Monthly Withdrawal Amount', min: 1000, max: 500000, step: 1000, default: 20000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Annual Return on Fund', min: 1, max: 20, step: 0.5, default: 9, suffix: '%' },
            { id: 'timePeriod', label: 'Withdrawal Duration', min: 1, max: 35, step: 1, default: 10, suffix: ' Years' }
        ],
        outputs: [
            { id: 'totalWithdrawn', label: 'Total Money Withdrawn', isCurrency: true, isHighlight: true },
            { id: 'remainingCorpus', label: 'Remaining Corpus Balance', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'cagr-calculator',
        slug: 'cagr-calculator',
        title: 'CAGR Calculator (Compound Annual Growth Rate)',
        shortTitle: 'CAGR Return',
        category: 'investment',
        icon: '📐',
        badge: 'ANALYTICS',
        desc: 'Calculate the accurate geometric annualized growth rate of investments over any time span.',
        formulaType: F_TYPES.CAGR,
        inputs: [
            { id: 'startValue', label: 'Initial Investment Value', min: 1000, max: 50000000, step: 1000, default: 50000, prefix: '₹', isCurrency: true },
            { id: 'endValue', label: 'Final Maturity Value', min: 1000, max: 500000000, step: 5000, default: 150000, prefix: '₹', isCurrency: true },
            { id: 'years', label: 'Number of Years', min: 1, max: 40, step: 0.5, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'cagrRate', label: 'Compound Annual Growth Rate (CAGR)', isPercentage: true, isHighlight: true },
            { id: 'absoluteGain', label: 'Absolute Growth Gain', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'compound-interest',
        slug: 'compound-interest',
        title: 'Compound Interest Calculator',
        shortTitle: 'Compound Interest',
        category: 'investment',
        icon: '⚡',
        badge: 'FOUNDATIONAL',
        desc: 'Visualize exponential compounding with daily, monthly, quarterly, or annual frequency.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'principal', label: 'Principal Amount', min: 1000, max: 10000000, step: 1000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Annual Interest Rate', min: 1, max: 30, step: 0.25, default: 10.5, suffix: '%' },
            { id: 'time', label: 'Time Horizon', min: 1, max: 40, step: 1, default: 10, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Principal Amount', isCurrency: true },
            { id: 'totalInterest', label: 'Total Compound Interest', isCurrency: true, isHighlight: true },
            { id: 'maturityAmt', label: 'Total Future Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'simple-interest',
        slug: 'simple-interest',
        title: 'Simple Interest Calculator',
        shortTitle: 'Simple Interest',
        category: 'investment',
        icon: '➕',
        badge: 'BASIC',
        desc: 'Calculate simple interest for loans, promissory notes, and fixed rate returns.',
        formulaType: F_TYPES.SIMPLE,
        inputs: [
            { id: 'principal', label: 'Principal Sum', min: 1000, max: 10000000, step: 1000, default: 50000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Annual Interest Rate', min: 0.5, max: 30, step: 0.25, default: 7.5, suffix: '%' },
            { id: 'time', label: 'Duration (Years)', min: 0.5, max: 30, step: 0.5, default: 3, suffix: ' Years' }
        ],
        outputs: [
            { id: 'principalAmt', label: 'Principal Sum', isCurrency: true },
            { id: 'interestEarned', label: 'Simple Interest Earned', isCurrency: true, isHighlight: true },
            { id: 'totalAmount', label: 'Total Maturity Sum', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'rule-of-72-calculator',
        slug: 'rule-of-72-calculator',
        title: 'Rule of 72 Calculator (Doubling Time)',
        shortTitle: 'Rule of 72',
        category: 'investment',
        icon: '⏱️',
        badge: 'QUICK ESTIMATE',
        desc: 'Quickly find out how many years it will take to double your money at any return rate.',
        formulaType: F_TYPES.RULE_OF_72,
        inputs: [
            { id: 'rate', label: 'Expected Annual Return Rate', min: 1, max: 40, step: 0.5, default: 12, suffix: '%' },
            { id: 'principal', label: 'Starting Investment Amount', min: 5000, max: 10000000, step: 5000, default: 100000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'yearsToDouble', label: 'Years Required to 2X Money', isDecimal: true, isHighlight: true },
            { id: 'doubledValue', label: 'Doubled Corpus Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'gold-calculator',
        slug: 'gold-calculator',
        title: 'Gold & Sovereign Gold Bond (SGB) Calculator',
        shortTitle: 'Gold / SGB Return',
        category: 'investment',
        icon: '🥇',
        badge: 'SGB 2.5% + GAINS',
        popular: true,
        desc: 'Calculate returns on Physical Gold, Digital Gold, and Sovereign Gold Bonds with 2.5% annual coupon.',
        formulaType: F_TYPES.LUMPSUM,
        inputs: [
            { id: 'lumpsumAmt', label: 'Investment in Gold/SGB', min: 5000, max: 5000000, step: 5000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Gold CAGR + Coupon', min: 1, max: 25, step: 0.5, default: 11.5, suffix: '%' },
            { id: 'timePeriod', label: 'SGB Maturity Horizon', min: 1, max: 20, step: 1, default: 8, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Gold Investment Value', isCurrency: true },
            { id: 'estReturns', label: 'Appreciation + Interest Payout', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Total Maturity Wealth', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'stock-profit-calculator',
        slug: 'stock-profit-calculator',
        title: 'Stock Profit & Loss Calculator',
        shortTitle: 'Stock Profit & PnL',
        category: 'investment',
        icon: '📈',
        badge: 'TRADING',
        desc: 'Calculate net profit, percentage return, brokerage, and STT on equity trades.',
        formulaType: F_TYPES.PROFIT_LOSS,
        inputs: [
            { id: 'buyPrice', label: 'Buying Price per Share', min: 1, max: 100000, step: 1, default: 450, prefix: '₹' },
            { id: 'sellPrice', label: 'Selling Price per Share', min: 1, max: 150000, step: 1, default: 620, prefix: '₹' },
            { id: 'shares', label: 'Total Quantity of Shares', min: 1, max: 50000, step: 1, default: 200 }
        ],
        outputs: [
            { id: 'netProfit', label: 'Net Profit / Gain', isCurrency: true, isHighlight: true },
            { id: 'roiPercent', label: 'Return on Investment (ROI)', isPercentage: true, isTotal: true }
        ]
    },
    {
        id: 'dividend-yield-calculator',
        slug: 'dividend-yield-calculator',
        title: 'Dividend Yield & Passive Income Calculator',
        shortTitle: 'Dividend Yield',
        category: 'investment',
        icon: '💰',
        badge: 'PASSIVE CASH',
        desc: 'Calculate dividend yield percentage and annual passive cash flow from your stock portfolio.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'sharePrice', label: 'Stock Current Market Price', min: 10, max: 50000, step: 5, default: 1200, prefix: '₹' },
            { id: 'annualDividend', label: 'Annual Dividend per Share', min: 0.5, max: 1000, step: 0.5, default: 48, prefix: '₹' },
            { id: 'totalShares', label: 'Total Shares Owned', min: 1, max: 100000, step: 5, default: 250 }
        ],
        outputs: [
            { id: 'dividendYield', label: 'Dividend Yield %', isPercentage: true, isHighlight: true },
            { id: 'annualIncome', label: 'Annual Passive Income', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'schd-dividend-calculator',
        slug: 'schd-dividend-calculator',
        title: 'SCHD & Dividend Reinvestment (DRIP) Calculator',
        shortTitle: 'Dividend DRIP Growth',
        category: 'investment',
        icon: '🔄',
        badge: 'DRIP COMPOUNDING',
        desc: 'Project exponential passive dividend cash flow with automatic dividend reinvestment.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'principal', label: 'Starting Portfolio Value', min: 10000, max: 20000000, step: 10000, default: 500000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Dividend Yield + Capital Growth', min: 2, max: 25, step: 0.5, default: 11, suffix: '%' },
            { id: 'time', label: 'Investment Timeframe', min: 1, max: 30, step: 1, default: 12, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedAmt', label: 'Initial Principal', isCurrency: true },
            { id: 'totalInterest', label: 'Reinvested Compounded Growth', isCurrency: true, isHighlight: true },
            { id: 'maturityAmt', label: 'Ending Portfolio Balance', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'target-corpus-sip-calculator',
        slug: 'target-corpus-sip-calculator',
        title: 'Target Corpus Goal SIP Calculator',
        shortTitle: 'Goal SIP Required',
        category: 'investment',
        icon: '🎯',
        badge: 'GOAL BASED',
        popular: true,
        desc: 'Find out the exact monthly SIP required to achieve ₹1 Crore, ₹5 Crore, or any target wealth.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'targetCorpus', label: 'Target Financial Goal Amount', min: 500000, max: 100000000, step: 500000, default: 10000000, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Annual Return Rate', min: 1, max: 25, step: 0.5, default: 13, suffix: '%' },
            { id: 'timePeriod', label: 'Years to Achieve Goal', min: 1, max: 35, step: 1, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyRequired', label: 'Monthly SIP Required', isCurrency: true, isHighlight: true },
            { id: 'totalInvested', label: 'Total Out-of-Pocket Investment', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'stock-average-calculator',
        slug: 'stock-average-calculator',
        title: 'Stock Average Price Calculator',
        shortTitle: 'Stock Averaging',
        category: 'investment',
        icon: '📉',
        badge: 'BUY THE DIP',
        desc: 'Calculate your weighted average buying price after adding shares at different price levels.',
        formulaType: F_TYPES.PROFIT_LOSS,
        inputs: [
            { id: 'firstBuyPrice', label: 'First Buy Price', min: 1, max: 50000, step: 1, default: 850, prefix: '₹' },
            { id: 'firstQuantity', label: 'First Buy Quantity', min: 1, max: 10000, step: 1, default: 100 },
            { id: 'secondBuyPrice', label: 'Second Buy (Dip) Price', min: 1, max: 50000, step: 1, default: 620, prefix: '₹' },
            { id: 'secondQuantity', label: 'Second Buy Quantity', min: 1, max: 10000, step: 1, default: 150 }
        ],
        outputs: [
            { id: 'newAveragePrice', label: 'New Weighted Average Price', isCurrency: true, isHighlight: true },
            { id: 'totalInvestedAmount', label: 'Total Invested Capital', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'crypto-profit-calculator',
        slug: 'crypto-profit-calculator',
        title: 'Crypto Profit & 30% Tax Calculator',
        shortTitle: 'Crypto Profit & Tax',
        category: 'investment',
        icon: '🪙',
        badge: '30% VDA TAX',
        desc: 'Calculate crypto trading profits, 30% flat Indian VDA tax, and 1% TDS deduction.',
        formulaType: F_TYPES.PROFIT_LOSS,
        inputs: [
            { id: 'buyPrice', label: 'Buy Price', min: 100, max: 10000000, step: 500, default: 50000, prefix: '₹' },
            { id: 'sellPrice', label: 'Sell Price', min: 100, max: 15000000, step: 500, default: 95000, prefix: '₹' },
            { id: 'units', label: 'Coin / Token Units', min: 0.001, max: 10000, step: 0.1, default: 2 }
        ],
        outputs: [
            { id: 'grossProfit', label: 'Gross Crypto Gain', isCurrency: true },
            { id: 'taxPayable', label: '30% Flat Tax Liability', isCurrency: true, isHighlight: true },
            { id: 'netInHandProfit', label: 'Post-Tax In-Hand Profit', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'asset-allocation-rebalancing-calculator',
        slug: 'asset-allocation-rebalancing-calculator',
        title: 'Portfolio Asset Allocation & Rebalancing Calculator',
        shortTitle: 'Asset Rebalancing',
        category: 'investment',
        icon: '⚖️',
        badge: 'RISK CONTROL',
        desc: 'Determine exact buy/sell amounts to rebalance Equity, Debt, and Gold back to target ratio.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'totalPortfolio', label: 'Total Portfolio Size', min: 50000, max: 50000000, step: 25000, default: 1500000, prefix: '₹', isCurrency: true },
            { id: 'currentEquity', label: 'Current Equity %', min: 0, max: 100, step: 1, default: 75, suffix: '%' },
            { id: 'targetEquity', label: 'Target Equity %', min: 0, max: 100, step: 1, default: 60, suffix: '%' }
        ],
        outputs: [
            { id: 'rebalanceAmount', label: 'Amount to Shift / Rebalance', isCurrency: true, isHighlight: true },
            { id: 'finalEquityValue', label: 'Target Equity Allocation Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'xirr-calculator',
        slug: 'xirr-calculator',
        title: 'XIRR Calculator for Irregular Cash Flows',
        shortTitle: 'XIRR Return',
        category: 'investment',
        icon: '🔀',
        badge: 'ADVANCED',
        desc: 'Calculate exact Extended Internal Rate of Return (XIRR) for irregular SIP purchases and redemptions.',
        formulaType: F_TYPES.CAGR,
        inputs: [
            { id: 'totalInvested', label: 'Total Money Invested Across Dates', min: 10000, max: 20000000, step: 5000, default: 300000, prefix: '₹', isCurrency: true },
            { id: 'currentValue', label: 'Current Portfolio Value', min: 10000, max: 50000000, step: 5000, default: 520000, prefix: '₹', isCurrency: true },
            { id: 'holdingYears', label: 'Weighted Average Tenure', min: 1, max: 25, step: 0.5, default: 4, suffix: ' Years' }
        ],
        outputs: [
            { id: 'xirrReturn', label: 'Annualized XIRR Return', isPercentage: true, isHighlight: true },
            { id: 'totalGain', label: 'Total Capital Gain', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'rolling-returns-calculator',
        slug: 'rolling-returns-calculator',
        title: 'Mutual Fund Rolling Returns Analyzer',
        shortTitle: 'Rolling Returns',
        category: 'investment',
        icon: '🌀',
        badge: 'CONSISTENCY',
        desc: 'Analyze 3-year, 5-year, and 10-year rolling returns to filter out market timing bias.',
        formulaType: F_TYPES.CAGR,
        inputs: [
            { id: 'startNav', label: 'Start Period Benchmark NAV', min: 10, max: 2000, step: 1, default: 100, prefix: '₹' },
            { id: 'endNav', label: 'End Period Benchmark NAV', min: 10, max: 10000, step: 1, default: 215, prefix: '₹' },
            { id: 'tenureYears', label: 'Rolling Window (Years)', min: 1, max: 15, step: 1, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'rollingCagr', label: 'Rolling CAGR Return', isPercentage: true, isHighlight: true },
            { id: 'pointToPointGain', label: 'Absolute Point-to-Point Gain %', isPercentage: true, isTotal: true }
        ]
    },
    {
        id: 'pe-ratio-calculator',
        slug: 'pe-ratio-calculator',
        title: 'Price to Earnings (P/E) Ratio Valuation Calculator',
        shortTitle: 'P/E Valuation',
        category: 'investment',
        icon: '🏷️',
        badge: 'VALUATION',
        desc: 'Check if a stock is overvalued or undervalued based on trailing and forward EPS.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'sharePrice', label: 'Current Share Price', min: 1, max: 100000, step: 1, default: 1450, prefix: '₹' },
            { id: 'eps', label: 'Earnings Per Share (EPS)', min: 0.1, max: 5000, step: 0.5, default: 65, prefix: '₹' }
        ],
        outputs: [
            { id: 'peRatio', label: 'P/E Multiple (Valuation)', isDecimal: true, isHighlight: true },
            { id: 'earningsYield', label: 'Earnings Yield %', isPercentage: true, isTotal: true }
        ]
    },

    // ==========================================
    // 2. BANKING, DEPOSITS & FIXED INCOME (40)
    // ==========================================
    {
        id: 'fd-calculator',
        slug: 'fd-calculator',
        title: 'Bank FD Calculator (Fixed Deposit)',
        shortTitle: 'FD Maturity',
        category: 'banking',
        icon: '🏦',
        badge: '7.5%–8.25% FD',
        popular: true,
        desc: 'Calculate Fixed Deposit maturity amount and quarterly compounded interest across major Indian banks.',
        formulaType: F_TYPES.FD,
        inputs: [
            { id: 'depositAmt', label: 'Total FD Deposit Amount', min: 5000, max: 10000000, step: 5000, default: 200000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Annual Interest Rate', min: 3, max: 12, step: 0.1, default: 7.25, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 0.5, max: 10, step: 0.5, default: 3, suffix: ' Years' }
        ],
        outputs: [
            { id: 'principal', label: 'Principal Deposited', isCurrency: true },
            { id: 'totalInterest', label: 'Total Interest Earned', isCurrency: true, isHighlight: true },
            { id: 'maturityValue', label: 'Maturity Amount', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'rd-calculator',
        slug: 'rd-calculator',
        title: 'Recurring Deposit (RD) Calculator',
        shortTitle: 'RD Interest',
        category: 'banking',
        icon: '🔁',
        badge: 'GUARANTEED',
        popular: true,
        desc: 'Calculate maturity value and quarterly compounding interest for monthly bank/post office RD deposits.',
        formulaType: F_TYPES.RD,
        inputs: [
            { id: 'monthlyDeposit', label: 'Monthly Deposit Amount', min: 500, max: 500000, step: 500, default: 5000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Annual Interest Rate', min: 3, max: 11, step: 0.1, default: 7.1, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 0.5, max: 10, step: 0.5, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'totalInvested', label: 'Total Deposited Amount', isCurrency: true },
            { id: 'interestEarned', label: 'Total Interest Earned', isCurrency: true, isHighlight: true },
            { id: 'maturityValue', label: 'Maturity Value', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'ppf-calculator',
        slug: 'ppf-calculator',
        title: 'PPF Calculator (Public Provident Fund)',
        shortTitle: 'PPF 7.1% Tax-Free',
        category: 'banking',
        icon: '🏛️',
        badge: 'EEE 7.1% TAX-FREE',
        popular: true,
        desc: 'Calculate 15-year PPF maturity wealth, annual interest compounding, and 80C tax deductions.',
        formulaType: F_TYPES.PPF,
        inputs: [
            { id: 'annualDeposit', label: 'Yearly Deposit (Max ₹1.5L)', min: 500, max: 150000, step: 500, default: 150000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Govt PPF Interest Rate', min: 6, max: 10, step: 0.1, default: 7.1, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 15, max: 30, step: 5, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'totalInvested', label: 'Total Deposited (15 Yrs)', isCurrency: true },
            { id: 'totalInterest', label: 'Total Tax-Free Interest', isCurrency: true, isHighlight: true },
            { id: 'maturityAmount', label: 'Maturity Corpus (100% Tax-Free)', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'ssy-calculator',
        slug: 'ssy-calculator',
        title: 'Sukanya Samriddhi Yojana (SSY) Calculator',
        shortTitle: 'SSY 8.2% Govt',
        category: 'banking',
        icon: '👧',
        badge: '8.2% HIGHEST GOVT',
        popular: true,
        desc: 'Calculate tax-free maturity wealth for your daughter under Sukanya Samriddhi Yojana at 8.2% interest.',
        formulaType: F_TYPES.PPF,
        inputs: [
            { id: 'annualDeposit', label: 'Yearly Contribution', min: 250, max: 150000, step: 250, default: 150000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Govt SSY Interest Rate', min: 7, max: 10, step: 0.1, default: 8.2, suffix: '%' },
            { id: 'tenureYears', label: 'Scheme Maturity Period', min: 21, max: 21, step: 1, default: 21, suffix: ' Years' }
        ],
        outputs: [
            { id: 'totalInvested', label: 'Total Deposited (15 Yrs)', isCurrency: true },
            { id: 'totalInterest', label: 'Total Compounded Interest', isCurrency: true, isHighlight: true },
            { id: 'maturityAmount', label: 'Total Maturity Payout at Age 21', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'scss-calculator',
        slug: 'scss-calculator',
        title: 'Senior Citizen Savings Scheme (SCSS) Calculator',
        shortTitle: 'SCSS 8.2% Pension',
        category: 'banking',
        icon: '🧓',
        badge: '8.2% QUARTERLY',
        popular: true,
        desc: 'Calculate quarterly interest pension payouts on SCSS deposits up to ₹30 Lakh for senior citizens.',
        formulaType: F_TYPES.SIMPLE,
        inputs: [
            { id: 'principal', label: 'Deposit Amount (Max ₹30 Lakh)', min: 10000, max: 3000000, step: 10000, default: 1500000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Govt SCSS Interest Rate', min: 7, max: 10, step: 0.1, default: 8.2, suffix: '%' },
            { id: 'time', label: 'Tenure (5 Years)', min: 5, max: 8, step: 3, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'quarterlyInterest', label: 'Quarterly Pension Payout', isCurrency: true, isHighlight: true },
            { id: 'totalInterestEarned', label: 'Total 5-Year Interest', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'mssc-calculator',
        slug: 'mssc-calculator',
        title: 'Mahila Samman Savings Certificate (MSSC) Calculator',
        shortTitle: 'Mahila Samman (MSSC)',
        category: 'banking',
        icon: '👩',
        badge: '7.5% 2-YEAR',
        desc: 'Calculate quarterly compounded returns on 2-year Govt MSSC deposit up to ₹2 Lakh for women.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'principal', label: 'Deposit Amount (Max ₹2 Lakh)', min: 1000, max: 200000, step: 1000, default: 200000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'MSSC Interest Rate', min: 6, max: 9, step: 0.1, default: 7.5, suffix: '%' },
            { id: 'time', label: 'Tenure (2 Years)', min: 2, max: 2, step: 1, default: 2, suffix: ' Years' }
        ],
        outputs: [
            { id: 'principalAmt', label: 'Deposit Sum', isCurrency: true },
            { id: 'totalInterest', label: 'Total Interest Earned', isCurrency: true, isHighlight: true },
            { id: 'maturityAmt', label: 'Maturity Value after 2 Yrs', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'pomis-calculator',
        slug: 'pomis-calculator',
        title: 'Post Office Monthly Income Scheme (POMIS) Calculator',
        shortTitle: 'Post Office MIS',
        category: 'banking',
        icon: '🏤',
        badge: '7.4% MONTHLY',
        desc: 'Calculate guaranteed monthly income payouts on Post Office MIS single (₹9L) & joint (₹15L) accounts.',
        formulaType: F_TYPES.SIMPLE,
        inputs: [
            { id: 'principal', label: 'Deposit Amount (Max ₹15 Lakh)', min: 1000, max: 1500000, step: 5000, default: 900000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Govt MIS Interest Rate', min: 6, max: 9, step: 0.1, default: 7.4, suffix: '%' },
            { id: 'time', label: 'Lock-in Tenure (5 Years)', min: 5, max: 5, step: 1, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyPayout', label: 'Guaranteed Monthly Income', isCurrency: true, isHighlight: true },
            { id: 'total5YrInterest', label: 'Total 5-Year Interest Payout', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'nsc-calculator',
        slug: 'nsc-calculator',
        title: 'National Savings Certificate (NSC) Calculator',
        shortTitle: 'NSC 7.7% Tax Saver',
        category: 'banking',
        icon: '📜',
        badge: '7.7% SEC 80C',
        desc: 'Calculate 5-year maturity value and annual compounding interest on Govt NSC VIII Issue certificates.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'principal', label: 'NSC Investment Amount', min: 1000, max: 5000000, step: 1000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'NSC Annual Interest Rate', min: 6, max: 10, step: 0.1, default: 7.7, suffix: '%' },
            { id: 'time', label: 'Tenure (5 Years)', min: 5, max: 5, step: 1, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'investedPrincipal', label: 'Invested Principal', isCurrency: true },
            { id: 'totalInterestEarned', label: 'Compounded Interest', isCurrency: true, isHighlight: true },
            { id: 'maturitySum', label: '5-Year Maturity Amount', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'kvp-calculator',
        slug: 'kvp-calculator',
        title: 'Kisan Vikas Patra (KVP) Money Doubler Calculator',
        shortTitle: 'KVP 7.5% Doubler',
        category: 'banking',
        icon: '🌾',
        badge: '115 MONTHS 2X',
        desc: 'Calculate exact maturity doubling tenure and 7.5% compounded returns on Kisan Vikas Patra certificates.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'principal', label: 'KVP Deposit Sum', min: 1000, max: 5000000, step: 1000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Govt KVP Interest Rate', min: 6, max: 9, step: 0.1, default: 7.5, suffix: '%' },
            { id: 'time', label: 'Doubling Tenure (9.58 Years)', min: 9.58, max: 9.58, step: 0.1, default: 9.58, suffix: ' Years' }
        ],
        outputs: [
            { id: 'principalAmount', label: 'Original Deposit', isCurrency: true },
            { id: 'doubledMaturity', label: 'Doubled Maturity Value (2X)', isCurrency: true, isHighlight: true }
        ]
    },
    {
        id: 'fd-monthly-payout-calculator',
        slug: 'fd-monthly-payout-calculator',
        title: 'FD Monthly Interest Payout Calculator',
        shortTitle: 'FD Monthly Interest',
        category: 'banking',
        icon: '💵',
        badge: 'NON-CUMULATIVE',
        desc: 'Calculate regular monthly or quarterly interest payouts on non-cumulative bank fixed deposits.',
        formulaType: F_TYPES.SIMPLE,
        inputs: [
            { id: 'depositAmount', label: 'Fixed Deposit Amount', min: 50000, max: 20000000, step: 25000, default: 1000000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Annual Interest Rate', min: 4, max: 11, step: 0.1, default: 7.5, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 1, max: 10, step: 1, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyPayout', label: 'Monthly Payout in Bank Account', isCurrency: true, isHighlight: true },
            { id: 'totalInterestPaid', label: 'Total Interest Paid Across Tenure', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 3. LOANS, MORTGAGES & DEBT MANAGEMENT (50)
    // ==========================================
    {
        id: 'emi-calculator',
        slug: 'emi-calculator',
        title: 'Loan EMI Calculator',
        shortTitle: 'Loan EMI',
        category: 'loans',
        icon: '💳',
        badge: 'POPULAR',
        popular: true,
        desc: 'Calculate monthly EMI, interest breakdown, and amortization schedule for any loan.',
        formulaType: F_TYPES.EMI,
        inputs: [
            { id: 'loanAmt', label: 'Total Loan Amount', min: 50000, max: 20000000, step: 50000, default: 3000000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Interest Rate (p.a.)', min: 5, max: 25, step: 0.1, default: 8.75, suffix: '%' },
            { id: 'tenureYears', label: 'Loan Tenure', min: 1, max: 30, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyEmi', label: 'Monthly EMI', isCurrency: true, isHighlight: true },
            { id: 'totalInterest', label: 'Total Interest Payable', isCurrency: true },
            { id: 'totalPayment', label: 'Total Payment (Principal + Interest)', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'home-loan-emi-calculator',
        slug: 'home-loan-emi-calculator',
        title: 'Home Loan EMI Calculator',
        shortTitle: 'Home Loan EMI',
        category: 'loans',
        icon: '🏠',
        badge: '8.4%–9.0% ROI',
        popular: true,
        desc: 'Calculate monthly home loan EMI, total interest, and Section 24b/80C tax exemption benefits.',
        formulaType: F_TYPES.EMI,
        inputs: [
            { id: 'loanAmt', label: 'Home Loan Amount', min: 500000, max: 50000000, step: 100000, default: 5000000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Home Loan Interest Rate', min: 6, max: 15, step: 0.05, default: 8.5, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 5, max: 30, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyEmi', label: 'Monthly Home Loan EMI', isCurrency: true, isHighlight: true },
            { id: 'totalInterest', label: 'Total Interest Over 20 Yrs', isCurrency: true },
            { id: 'totalPayment', label: 'Total Amount Payable', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'car-loan-calculator',
        slug: 'car-loan-calculator',
        title: 'Car Loan EMI Calculator',
        shortTitle: 'Car Loan EMI',
        category: 'loans',
        icon: '🚗',
        badge: 'VEHICLE',
        popular: true,
        desc: 'Calculate monthly car loan EMI, down payment impact, and total interest for new & used cars.',
        formulaType: F_TYPES.EMI,
        inputs: [
            { id: 'loanAmt', label: 'Car Loan Amount', min: 100000, max: 10000000, step: 25000, default: 800000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Car Loan Interest Rate', min: 7, max: 18, step: 0.25, default: 9.25, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 1, max: 8, step: 1, default: 5, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyEmi', label: 'Monthly Car EMI', isCurrency: true, isHighlight: true },
            { id: 'totalInterest', label: 'Total Interest Cost', isCurrency: true },
            { id: 'totalPayment', label: 'Total Outflow', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'personal-loan-calculator',
        slug: 'personal-loan-calculator',
        title: 'Personal Loan EMI Calculator',
        shortTitle: 'Personal Loan',
        category: 'loans',
        icon: '💼',
        badge: 'UNSECURED',
        desc: 'Calculate quick monthly personal loan EMI and processing fee costs across top banks.',
        formulaType: F_TYPES.EMI,
        inputs: [
            { id: 'loanAmt', label: 'Personal Loan Sum', min: 25000, max: 3000000, step: 10000, default: 300000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Interest Rate (p.a.)', min: 10, max: 28, step: 0.5, default: 12.5, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 1, max: 5, step: 1, default: 3, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyEmi', label: 'Monthly EMI', isCurrency: true, isHighlight: true },
            { id: 'totalInterest', label: 'Total Interest Payable', isCurrency: true },
            { id: 'totalPayment', label: 'Total Loan Cost', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'loan-prepayment-calculator',
        slug: 'loan-prepayment-calculator',
        title: 'Loan Prepayment & Part-Payment Savings Calculator',
        shortTitle: 'Prepayment Savings',
        category: 'loans',
        icon: '⚡',
        badge: 'SAVE LAKHS',
        popular: true,
        desc: 'Calculate how much interest and EMI tenure you save by making periodic part-prepayments.',
        formulaType: F_TYPES.LOAN_PREPAY,
        inputs: [
            { id: 'loanAmt', label: 'Current Loan Outstanding', min: 200000, max: 30000000, step: 50000, default: 3500000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Interest Rate (p.a.)', min: 6, max: 16, step: 0.1, default: 8.6, suffix: '%' },
            { id: 'tenureYears', label: 'Remaining Tenure', min: 1, max: 30, step: 1, default: 18, suffix: ' Years' },
            { id: 'prepayAmount', label: 'Annual Prepayment Amount', min: 10000, max: 1000000, step: 10000, default: 100000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'interestSaved', label: 'Total Interest Saved', isCurrency: true, isHighlight: true },
            { id: 'tenureReduced', label: 'Tenure Reduced By (Years)', isDecimal: true, isTotal: true }
        ]
    },
    {
        id: 'loan-transfer-calculator',
        slug: 'loan-transfer-calculator',
        title: 'Home Loan Balance Transfer Savings Calculator',
        shortTitle: 'Balance Transfer',
        category: 'loans',
        icon: '🔄',
        badge: 'LOWER EMI',
        desc: 'Check if transferring your home loan to a bank with lower interest rate actually saves money after fees.',
        formulaType: F_TYPES.LOAN_PREPAY,
        inputs: [
            { id: 'loanAmt', label: 'Outstanding Loan Principal', min: 500000, max: 30000000, step: 100000, default: 4000000, prefix: '₹', isCurrency: true },
            { id: 'currentRate', label: 'Current Bank Interest Rate', min: 7, max: 16, step: 0.1, default: 9.25, suffix: '%' },
            { id: 'newRate', label: 'New Bank Interest Rate', min: 6.5, max: 14, step: 0.1, default: 8.4, suffix: '%' },
            { id: 'remainingTenure', label: 'Remaining Tenure', min: 1, max: 25, step: 1, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'monthlyEmiSavings', label: 'Monthly EMI Reduction', isCurrency: true, isHighlight: true },
            { id: 'netInterestSavings', label: 'Net Total Interest Saved', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'rent-vs-buy-calculator',
        slug: 'rent-vs-buy-calculator',
        title: 'Rent vs Buy Home Decision Calculator',
        shortTitle: 'Rent vs Buy Home',
        category: 'loans',
        icon: '⚖️',
        badge: 'BIG DECISION',
        popular: true,
        desc: 'Compare buying a house with a mortgage vs renting and investing down payment in equity SIPs.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'propertyPrice', label: 'Property Purchase Price', min: 2000000, max: 100000000, step: 500000, default: 7500000, prefix: '₹', isCurrency: true },
            { id: 'monthlyRent', label: 'Monthly Rent for Similar Home', min: 5000, max: 250000, step: 2000, default: 22000, prefix: '₹', isCurrency: true },
            { id: 'tenureYears', label: 'Time Horizon (Years)', min: 5, max: 30, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'betterFinancialOption', label: 'Financially Superior Option', isString: true, isHighlight: true },
            { id: 'estimatedWealthDelta', label: 'Estimated Extra Wealth Accumulated', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'interest-free-home-loan-calculator',
        slug: 'interest-free-home-loan-calculator',
        title: 'Interest-Free Home Loan (Home Loan + SIP) Calculator',
        shortTitle: '0% Interest Home Loan',
        category: 'loans',
        icon: '✨',
        badge: 'GENIUS STRATEGY',
        popular: true,
        desc: 'Make your home loan effectively 0% interest by running a parallel 0.15% monthly SIP.',
        formulaType: F_TYPES.SIP,
        inputs: [
            { id: 'loanAmount', label: 'Home Loan Amount', min: 1000000, max: 30000000, step: 200000, default: 4000000, prefix: '₹', isCurrency: true },
            { id: 'loanRate', label: 'Loan Interest Rate', min: 7, max: 14, step: 0.1, default: 8.5, suffix: '%' },
            { id: 'tenureYears', label: 'Loan Tenure', min: 10, max: 30, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'sipRequired', label: 'Monthly Recovery SIP (0.15%)', isCurrency: true, isHighlight: true },
            { id: 'sipMaturityCorpus', label: 'SIP Corpus (Recovers Total Interest)', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'home-loan-eligibility',
        slug: 'home-loan-eligibility',
        title: 'Home Loan Eligibility Calculator',
        shortTitle: 'Loan Eligibility',
        category: 'loans',
        icon: '📋',
        badge: 'FOIR 50%',
        desc: 'Calculate maximum home loan amount you qualify for based on monthly take-home salary and existing EMIs.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'monthlyNetSalary', label: 'Net Monthly In-Hand Salary', min: 20000, max: 1000000, step: 5000, default: 85000, prefix: '₹', isCurrency: true },
            { id: 'existingEmis', label: 'Existing Monthly EMIs', min: 0, max: 300000, step: 2000, default: 12000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Bank Interest Rate (p.a.)', min: 7, max: 14, step: 0.1, default: 8.5, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 5, max: 30, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'maxLoanEligible', label: 'Maximum Home Loan Eligible', isCurrency: true, isHighlight: true },
            { id: 'maxAffordableEmi', label: 'Max Permissible Monthly EMI', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'gold-loan-calculator',
        slug: 'gold-loan-calculator',
        title: 'Gold Loan LTV & Interest Calculator',
        shortTitle: 'Gold Loan LTV',
        category: 'loans',
        icon: '🥇',
        badge: '75% RBI LTV',
        desc: 'Calculate maximum gold loan eligibility based on 75% RBI Loan-to-Value (LTV) and 22K/24K gold rate.',
        formulaType: F_TYPES.SIMPLE,
        inputs: [
            { id: 'goldWeightGrams', label: 'Gold Weight (Grams)', min: 5, max: 500, step: 5, default: 40, suffix: ' g' },
            { id: 'goldPurityKarat', label: 'Gold Purity (22K vs 24K)', min: 18, max: 24, step: 2, default: 22, suffix: ' Karat' },
            { id: 'interestRate', label: 'Gold Loan Interest Rate', min: 7, max: 20, step: 0.5, default: 9.5, suffix: '%' }
        ],
        outputs: [
            { id: 'maxLoanDisbursal', label: 'Eligible Gold Loan (75% LTV)', isCurrency: true, isHighlight: true },
            { id: 'monthlyInterest', label: 'Monthly Interest Amount', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 4. INCOME TAX, PAYROLL & SALARY (50)
    // ==========================================
    {
        id: 'income-tax-calculator',
        slug: 'income-tax-calculator',
        title: 'Income Tax Calculator (FY 2026-27 / AY 2027-28)',
        shortTitle: 'Income Tax Calculator',
        category: 'tax',
        icon: '🧾',
        badge: 'NEW REGIME UPDATED',
        popular: true,
        desc: 'Calculate income tax liability for FY 2026-27 under New vs Old Tax Regime with standard deduction & rebate.',
        formulaType: F_TYPES.TAX,
        inputs: [
            { id: 'annualIncome', label: 'Gross Annual Salary Income', min: 300000, max: 50000000, step: 25000, default: 1200000, prefix: '₹', isCurrency: true },
            { id: 'exemptionsOldRegime', label: '80C / 80D / HRA Deductions (Old)', min: 0, max: 1500000, step: 10000, default: 250000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'newRegimeTax', label: 'New Tax Regime Liability', isCurrency: true, isHighlight: true },
            { id: 'oldRegimeTax', label: 'Old Tax Regime Liability', isCurrency: true },
            { id: 'taxSavings', label: 'Recommended Regime & Savings', isString: true, isTotal: true }
        ]
    },
    {
        id: 'in-hand-salary-calculator',
        slug: 'in-hand-salary-calculator',
        title: 'In-Hand Salary Calculator (CTC to Monthly Take-Home)',
        shortTitle: 'CTC to In-Hand Salary',
        category: 'tax',
        icon: '💼',
        badge: 'CTC BREAKDOWN',
        popular: true,
        desc: 'Convert annual Cost to Company (CTC) into exact monthly net take-home salary after EPF, Professional Tax & TDS.',
        formulaType: F_TYPES.SALARY,
        inputs: [
            { id: 'ctcAnnual', label: 'Annual Cost to Company (CTC)', min: 200000, max: 20000000, step: 25000, default: 1500000, prefix: '₹', isCurrency: true },
            { id: 'monthlyBonus', label: 'Variable / Annual Bonus Component', min: 0, max: 2000000, step: 10000, default: 100000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'monthlyInHand', label: 'Net Monthly Take-Home Salary', isCurrency: true, isHighlight: true },
            { id: 'monthlyEpf', label: 'Monthly EPF Employee + Employer', isCurrency: true },
            { id: 'annualTaxDeduction', label: 'Estimated Annual TDS Tax', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'freelance-tax-calculator',
        slug: 'freelancer-income-tax-calculator-44ada',
        title: 'Section 44ADA Freelancer & Consultant Tax Calculator',
        shortTitle: '44ADA Freelance Tax',
        category: 'tax',
        icon: '💻',
        badge: '50% PRESUMPTIVE',
        popular: true,
        desc: 'Calculate income tax for software engineers, doctors, and professionals under 50% presumptive taxation up to ₹75L.',
        formulaType: F_TYPES.TAX,
        inputs: [
            { id: 'grossGrossReceipts', label: 'Gross Annual Professional Receipts', min: 200000, max: 7500000, step: 50000, default: 3000000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'presumptiveIncome', label: 'Taxable Income (50% of Gross)', isCurrency: true },
            { id: 'taxPayable44ADA', label: 'Total Tax Payable under 44ADA', isCurrency: true, isHighlight: true },
            { id: 'effectiveTaxRate', label: 'Effective Overall Tax Rate %', isPercentage: true, isTotal: true }
        ]
    },
    {
        id: 'capital-gains-tax-calculator',
        slug: 'capital-gains-tax-calculator',
        title: 'Capital Gains Tax Calculator (STCG & LTCG 12.5%)',
        shortTitle: 'Capital Gains Tax',
        category: 'tax',
        icon: '📊',
        badge: 'BUDGET 2024-26',
        popular: true,
        desc: 'Calculate 20% STCG and 12.5% LTCG on equity shares, mutual funds, real estate, and unlisted securities.',
        formulaType: F_TYPES.TAX,
        inputs: [
            { id: 'totalLtcgGains', label: 'Long-Term Capital Gains (LTCG)', min: 0, max: 50000000, step: 25000, default: 350000, prefix: '₹', isCurrency: true },
            { id: 'totalStcgGains', label: 'Short-Term Capital Gains (STCG)', min: 0, max: 50000000, step: 25000, default: 100000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'ltcgTaxPayable', label: 'LTCG Tax (12.5% above ₹1.25L Exemption)', isCurrency: true, isHighlight: true },
            { id: 'stcgTaxPayable', label: 'STCG Tax (20% flat)', isCurrency: true },
            { id: 'totalCapitalGainsTax', label: 'Total Tax Liability', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'hra-calculator',
        slug: 'hra-calculator',
        title: 'HRA Exemption Calculator (House Rent Allowance)',
        shortTitle: 'HRA Tax Exemption',
        category: 'tax',
        icon: '🏡',
        badge: 'METRO 50% / 40%',
        popular: true,
        desc: 'Calculate maximum tax-exempt House Rent Allowance (HRA) under Section 10(13A) for metro and non-metro cities.',
        formulaType: F_TYPES.TAX,
        inputs: [
            { id: 'basicSalary', label: 'Annual Basic Salary + DA', min: 100000, max: 10000000, step: 10000, default: 600000, prefix: '₹', isCurrency: true },
            { id: 'hraReceived', label: 'Actual HRA Received from Employer', min: 50000, max: 5000000, step: 10000, default: 240000, prefix: '₹', isCurrency: true },
            { id: 'rentPaid', label: 'Total Rent Paid in Year', min: 50000, max: 5000000, step: 10000, default: 300000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'exemptHra', label: 'Tax-Exempt HRA Amount', isCurrency: true, isHighlight: true },
            { id: 'taxableHra', label: 'Taxable HRA Balance', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'gratuity-calculator',
        slug: 'gratuity-calculator',
        title: 'Gratuity Calculator (Payment of Gratuity Act)',
        shortTitle: 'Gratuity Calculation',
        category: 'tax',
        icon: '🎁',
        badge: '₹20L TAX-FREE',
        desc: 'Calculate gratuity payout after 5+ years of continuous service based on 15/26 formula and tax exemption.',
        formulaType: F_TYPES.SALARY,
        inputs: [
            { id: 'lastDrawnBasic', label: 'Last Drawn Basic Salary + DA', min: 10000, max: 1000000, step: 2000, default: 55000, prefix: '₹', isCurrency: true },
            { id: 'tenureYears', label: 'Years of Continuous Service (Min 5)', min: 5, max: 40, step: 1, default: 8, suffix: ' Years' }
        ],
        outputs: [
            { id: 'gratuityPayable', label: 'Total Gratuity Payout', isCurrency: true, isHighlight: true },
            { id: 'taxFreeGratuity', label: 'Tax-Exempt Gratuity (Up to ₹20 Lakh)', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'epf-calculator',
        slug: 'epf-calculator',
        title: 'EPF & VPF Calculator (Employees Provident Fund)',
        shortTitle: 'EPF Corpus 8.25%',
        category: 'tax',
        icon: '🏦',
        badge: '8.25% EPF',
        popular: true,
        desc: 'Calculate Employee + Employer EPF retirement corpus and annual interest compounding at 8.25%.',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'monthlyBasic', label: 'Monthly Basic Salary + DA', min: 15000, max: 500000, step: 2000, default: 45000, prefix: '₹', isCurrency: true },
            { id: 'currentAge', label: 'Current Age', min: 20, max: 55, step: 1, default: 28, suffix: ' Yrs' },
            { id: 'retireAge', label: 'Retirement Age', min: 55, max: 60, step: 1, default: 58, suffix: ' Yrs' }
        ],
        outputs: [
            { id: 'totalEmployeeShare', label: 'Total Employee EPF Contribution', isCurrency: true },
            { id: 'totalEmployerShare', label: 'Total Employer EPF Contribution', isCurrency: true },
            { id: 'epfMaturityCorpus', label: 'Total EPF Corpus at Retirement', isCurrency: true, isHighlight: true, isTotal: true }
        ]
    },
    {
        id: 'tds-calculator',
        slug: 'tds-calculator',
        title: 'TDS Calculator (Tax Deducted at Source)',
        shortTitle: 'TDS Rates',
        category: 'tax',
        icon: '✂️',
        badge: '194J / 194C / 194I',
        desc: 'Calculate TDS deduction on contractor fees, professional charges, rent, and fixed deposit interest.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'paymentAmount', label: 'Total Gross Invoice / Payout Amount', min: 10000, max: 10000000, step: 5000, default: 150000, prefix: '₹', isCurrency: true },
            { id: 'tdsPercentage', label: 'Applicable TDS Rate % (1%, 2%, 10%)', min: 0.1, max: 30, step: 0.1, default: 10, suffix: '%' }
        ],
        outputs: [
            { id: 'tdsDeducted', label: 'TDS Amount to be Deposited', isCurrency: true, isHighlight: true },
            { id: 'netPayable', label: 'Net Amount Payable to Vendor', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'gst-calculator',
        slug: 'gst-calculator',
        title: 'GST Calculator (5%, 12%, 18%, 28%)',
        shortTitle: 'GST Tax',
        category: 'tax',
        icon: '🏷️',
        badge: 'CGST + SGST + IGST',
        popular: true,
        desc: 'Calculate GST inclusive and exclusive price, CGST, SGST, and IGST components for any invoice.',
        formulaType: F_TYPES.GST,
        inputs: [
            { id: 'amount', label: 'Base Invoice Amount', min: 100, max: 50000000, step: 500, default: 25000, prefix: '₹', isCurrency: true },
            { id: 'gstRate', label: 'GST Tax Slab Rate', min: 0, max: 28, step: 1, default: 18, suffix: '%' }
        ],
        outputs: [
            { id: 'gstAmount', label: 'Total GST Tax Added', isCurrency: true, isHighlight: true },
            { id: 'totalWithGst', label: 'Total Gross Invoice Value', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 5. RETIREMENT, PENSION & FIRE (35)
    // ==========================================
    {
        id: 'retirement-calculator',
        slug: 'retirement-calculator',
        title: 'Retirement Corpus Planner Calculator',
        shortTitle: 'Retirement Planner',
        category: 'retirement',
        icon: '🌴',
        badge: 'INFLATION ADJUSTED',
        popular: true,
        desc: 'Calculate exact retirement corpus required to maintain living standard adjusted for lifestyle inflation.',
        formulaType: F_TYPES.RETIREMENT,
        inputs: [
            { id: 'currentAge', label: 'Your Current Age', min: 20, max: 55, step: 1, default: 30, suffix: ' Yrs' },
            { id: 'retireAge', label: 'Desired Retirement Age', min: 45, max: 70, step: 1, default: 60, suffix: ' Yrs' },
            { id: 'monthlyExp', label: 'Current Monthly Living Expenses', min: 10000, max: 500000, step: 5000, default: 45000, prefix: '₹', isCurrency: true },
            { id: 'inflation', label: 'Expected Annual Inflation', min: 3, max: 10, step: 0.5, default: 6, suffix: '%' }
        ],
        outputs: [
            { id: 'targetCorpus', label: 'Total Retirement Corpus Needed', isCurrency: true, isHighlight: true },
            { id: 'monthlySipNeeded', label: 'Monthly SIP Required to Achieve It', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'fire-calculator',
        slug: 'fire-calculator',
        title: 'FIRE Calculator (Financial Independence Retire Early)',
        shortTitle: 'FIRE Calculator',
        category: 'retirement',
        icon: '🔥',
        badge: '25X / 33X RULE',
        popular: true,
        desc: 'Calculate your Lean FIRE, Standard FIRE, and Fat FIRE milestone numbers and early retirement date.',
        formulaType: F_TYPES.FIRE,
        inputs: [
            { id: 'currentAge', label: 'Current Age', min: 20, max: 55, step: 1, default: 27, suffix: ' Yrs' },
            { id: 'targetFireAge', label: 'Target Early Retirement Age', min: 35, max: 55, step: 1, default: 45, suffix: ' Yrs' },
            { id: 'annualExpense', label: 'Annual Living Expenses', min: 200000, max: 5000000, step: 50000, default: 600000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'fireNumber', label: 'Your FIRE Corpus Target (30X)', isCurrency: true, isHighlight: true },
            { id: 'coastFireNumber', label: 'Coast FIRE Threshold', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'nps-calculator',
        slug: 'nps-calculator',
        title: 'NPS Calculator (National Pension System)',
        shortTitle: 'NPS Pension & Annuity',
        category: 'retirement',
        icon: '🏛️',
        badge: 'SEC 80CCD(1B)',
        popular: true,
        desc: 'Calculate NPS retirement lump sum wealth (60%) and lifetime monthly pension annuity (40%).',
        formulaType: F_TYPES.COMPOUND,
        inputs: [
            { id: 'monthlyInvest', label: 'Monthly NPS Contribution', min: 500, max: 150000, step: 500, default: 10000, prefix: '₹', isCurrency: true },
            { id: 'currentAge', label: 'Current Age', min: 18, max: 55, step: 1, default: 28, suffix: ' Yrs' },
            { id: 'expectedReturn', label: 'Expected NPS Return (Equity+Debt)', min: 7, max: 15, step: 0.5, default: 10.5, suffix: '%' }
        ],
        outputs: [
            { id: 'totalCorpusAt60', label: 'Total NPS Corpus at Age 60', isCurrency: true, isHighlight: true },
            { id: 'lumpsumTaxFree', label: '60% Tax-Free Lump Sum Payout', isCurrency: true },
            { id: 'monthlyPension', label: 'Expected Monthly Pension (40% Annuity)', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'atal-pension-yojana-calculator',
        slug: 'atal-pension-yojana-calculator',
        title: 'Atal Pension Yojana (APY) Calculator',
        shortTitle: 'APY Govt Pension',
        category: 'retirement',
        icon: '🛡️',
        badge: 'GOVT GUARANTEED',
        desc: 'Find exact monthly premium to secure ₹1,000 to ₹5,000 guaranteed lifetime monthly pension under APY.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'entryAge', label: 'Joining Age (18 to 40)', min: 18, max: 40, step: 1, default: 25, suffix: ' Yrs' },
            { id: 'desiredPension', label: 'Desired Monthly Pension at 60', min: 1000, max: 5000, step: 1000, default: 5000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'monthlyContribution', label: 'Monthly APY Contribution Required', isCurrency: true, isHighlight: true },
            { id: 'nomineeCorpus', label: 'Corpus Returned to Nominee (Family)', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 6. INSURANCE & PROTECTION (25)
    // ==========================================
    {
        id: 'term-insurance-calculator',
        slug: 'term-insurance-calculator',
        title: 'Term Insurance Cover & Human Life Value (HLV) Calculator',
        shortTitle: 'Term Insurance HLV',
        category: 'insurance',
        icon: '🛡️',
        badge: '15X–20X INCOME',
        popular: true,
        desc: 'Calculate exact term life insurance sum assured needed to safeguard your family against liabilities.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'annualIncome', label: 'Annual Income', min: 300000, max: 20000000, step: 50000, default: 1200000, prefix: '₹', isCurrency: true },
            { id: 'outstandingLoans', label: 'Total Outstanding Debts & Mortgages', min: 0, max: 30000000, step: 100000, default: 3500000, prefix: '₹', isCurrency: true },
            { id: 'familyExpensesYears', label: 'Years of Family Support Needed', min: 10, max: 35, step: 1, default: 20, suffix: ' Years' }
        ],
        outputs: [
            { id: 'recommendedCover', label: 'Recommended Term Insurance Cover', isCurrency: true, isHighlight: true },
            { id: 'estimatedAnnualPremium', label: 'Estimated Annual Pure Term Premium', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'health-insurance-estimator',
        slug: 'health-insurance-calculator',
        title: 'Health Insurance Family Floater Coverage Calculator',
        shortTitle: 'Health Insurance Cover',
        category: 'insurance',
        icon: '🏥',
        badge: 'SUPER TOP-UP',
        desc: 'Calculate optimal base health cover + Super Top-up deductible to cover rising medical inflation.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'familyMembers', label: 'Number of Family Members', min: 1, max: 6, step: 1, default: 4 },
            { id: 'tierCity', label: 'City of Residence (Metro vs Tier 2)', min: 1, max: 2, step: 1, default: 1 },
            { id: 'seniorParents', label: 'Include Senior Citizen Parents (60+)', min: 0, max: 2, step: 1, default: 0 }
        ],
        outputs: [
            { id: 'optimalCover', label: 'Recommended Sum Insured Cover', isCurrency: true, isHighlight: true },
            { id: 'superTopUpDeductible', label: 'Super Top-up Buffer Amount', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 7. BUSINESS & CORPORATE FINANCE (35)
    // ==========================================
    {
        id: 'break-even-calculator',
        slug: 'break-even-calculator',
        title: 'Break-Even Point (BEP) Calculator',
        shortTitle: 'Break-Even Point',
        category: 'business',
        icon: '⚖️',
        badge: 'PROFIT THRESHOLD',
        popular: true,
        desc: 'Calculate unit sales and revenue required to cover all fixed and variable business expenses.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'fixedCosts', label: 'Total Monthly Fixed Costs', min: 10000, max: 10000000, step: 5000, default: 150000, prefix: '₹', isCurrency: true },
            { id: 'sellingPriceUnit', label: 'Selling Price per Unit', min: 10, max: 100000, step: 10, default: 500, prefix: '₹' },
            { id: 'variableCostUnit', label: 'Variable Cost per Unit', min: 5, max: 80000, step: 5, default: 200, prefix: '₹' }
        ],
        outputs: [
            { id: 'bepUnits', label: 'Break-Even Volume (Units Needed)', isInteger: true, isHighlight: true },
            { id: 'bepRevenue', label: 'Break-Even Revenue Milestone', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'profit-margin-calculator',
        slug: 'profit-margin-calculator',
        title: 'Gross Margin & Net Profit Margin Calculator',
        shortTitle: 'Profit Margin',
        category: 'business',
        icon: '📊',
        badge: 'MARGIN %',
        popular: true,
        desc: 'Calculate gross profit, operating margin, markup percentage, and net in-hand profit margins.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'revenue', label: 'Total Sales Revenue', min: 1000, max: 50000000, step: 5000, default: 500000, prefix: '₹', isCurrency: true },
            { id: 'cogs', label: 'Cost of Goods Sold (COGS)', min: 500, max: 40000000, step: 5000, default: 280000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'grossMarginPercent', label: 'Gross Profit Margin %', isPercentage: true, isHighlight: true },
            { id: 'grossProfitAmount', label: 'Total Gross Profit', isCurrency: true, isTotal: true }
        ]
    },
    {
        id: 'startup-runway-calculator',
        slug: 'startup-runway-calculator',
        title: 'Startup Runway & Cash Burn Rate Calculator',
        shortTitle: 'Startup Runway',
        category: 'business',
        icon: '🚀',
        badge: 'CASH RUNWAY',
        desc: 'Calculate how many months of operational runway your startup has before needing fundraising.',
        formulaType: F_TYPES.PERCENTAGE,
        inputs: [
            { id: 'cashInBank', label: 'Cash in Bank (Treasury)', min: 100000, max: 100000000, step: 100000, default: 2500000, prefix: '₹', isCurrency: true },
            { id: 'monthlyGrossBurn', label: 'Monthly Operating Expenses', min: 10000, max: 10000000, step: 10000, default: 350000, prefix: '₹', isCurrency: true },
            { id: 'monthlyRevenue', label: 'Monthly Cash Inflow / Revenue', min: 0, max: 10000000, step: 10000, default: 100000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'runwayMonths', label: 'Runway Available (Months)', isDecimal: true, isHighlight: true },
            { id: 'netMonthlyBurn', label: 'Net Cash Burn per Month', isCurrency: true, isTotal: true }
        ]
    },

    // ==========================================
    // 8. PERSONAL FINANCE & EVERYDAY MONEY (30)
    // ==========================================
    {
        id: 'budget-calculator',
        slug: 'budget-calculator',
        title: '50/30/20 Monthly Budget Planner Calculator',
        shortTitle: '50/30/20 Budget',
        category: 'personal',
        icon: '🥧',
        badge: 'BALANCED LIFE',
        popular: true,
        desc: 'Split monthly net salary into 50% Needs (Rent/Groceries), 30% Wants, and 20% Compounding Savings.',
        formulaType: F_TYPES.SALARY,
        inputs: [
            { id: 'monthlyInHand', label: 'Monthly Net Take-Home Salary', min: 10000, max: 2000000, step: 2000, default: 60000, prefix: '₹', isCurrency: true }
        ],
        outputs: [
            { id: 'needs50', label: 'Needs Budget (50%) — Essential Living', isCurrency: true },
            { id: 'wants30', label: 'Wants Budget (30%) — Lifestyle & Fun', isCurrency: true },
            { id: 'savings20', label: 'Savings & SIP Budget (20% Minimum)', isCurrency: true, isHighlight: true, isTotal: true }
        ]
    },
    {
        id: 'inflation-calculator',
        slug: 'inflation-calculator',
        title: 'Inflation & Purchasing Power Erosion Calculator',
        shortTitle: 'Inflation Erosion',
        category: 'personal',
        icon: '🎈',
        badge: 'FUTURE EXPENSES',
        popular: true,
        desc: 'Calculate how much inflation erodes purchasing power and what today’s ₹50,000 will cost in 10–25 years.',
        formulaType: F_TYPES.INFLATION,
        inputs: [
            { id: 'currentAmount', label: 'Current Expense / Amount Today', min: 1000, max: 10000000, step: 1000, default: 50000, prefix: '₹', isCurrency: true },
            { id: 'inflationRate', label: 'Expected Annual Inflation Rate', min: 2, max: 15, step: 0.5, default: 6.5, suffix: '%' },
            { id: 'years', label: 'Years into Future', min: 1, max: 40, step: 1, default: 15, suffix: ' Years' }
        ],
        outputs: [
            { id: 'futureCost', label: 'Future Cost Required to Maintain Living', isCurrency: true, isHighlight: true },
            { id: 'purchasingPowerLost', label: 'Purchasing Power Purchasing Drop %', isPercentage: true, isTotal: true }
        ]
    },
    {
        id: 'emergency-fund-calculator',
        slug: 'emergency-fund-calculator',
        title: 'Emergency Fund Goal & Liquid Corpus Calculator',
        shortTitle: 'Emergency Fund',
        category: 'personal',
        icon: '🦺',
        badge: '6–12 MONTHS SAFETY',
        popular: true,
        desc: 'Calculate exact liquid safety buffer needed (6 to 12 months expenses) for medical or job loss emergencies.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'monthlyExpenses', label: 'Monthly Essential Expenses (Rent + Food + EMIs)', min: 10000, max: 1000000, step: 2000, default: 45000, prefix: '₹', isCurrency: true },
            { id: 'monthsBuffer', label: 'Buffer Horizon (Months)', min: 3, max: 18, step: 1, default: 6, suffix: ' Months' }
        ],
        outputs: [
            { id: 'targetEmergencyCorpus', label: 'Target Emergency Fund Size', isCurrency: true, isHighlight: true },
            { id: 'recommendedSplit', label: 'Split: 50% Savings A/c + 50% Liquid FD', isString: true, isTotal: true }
        ]
    },
    {
        id: 'child-education-planner',
        slug: 'child-education-planner',
        title: 'Child Higher Education & College Fund Planner',
        shortTitle: 'Child College Fund',
        category: 'personal',
        icon: '🎓',
        badge: '10% COLLEGE INFLATION',
        popular: true,
        desc: 'Calculate future college degree costs factoring 10% educational inflation and the monthly SIP required.',
        formulaType: F_TYPES.SAVINGS_GOAL,
        inputs: [
            { id: 'currentCost', label: 'Today’s Cost of Degree / MBA', min: 200000, max: 10000000, step: 50000, default: 2000000, prefix: '₹', isCurrency: true },
            { id: 'yearsUntilCollege', label: 'Years Until Child Enters College', min: 1, max: 20, step: 1, default: 12, suffix: ' Years' },
            { id: 'educationInflation', label: 'Higher Education Inflation Rate', min: 5, max: 15, step: 0.5, default: 9.5, suffix: '%' }
        ],
        outputs: [
            { id: 'futureCollegeCost', label: 'Inflated Future College Fee', isCurrency: true, isHighlight: true },
            { id: 'monthlySipNeeded', label: 'Monthly SIP Required @ 12% CAGR', isCurrency: true, isTotal: true }
        ]
    }
];

// Additional specs to reach 300+ total calculators
const additionalCalculatorsSpecs = [
    // --- Additional Investment & Wealth Calculators ---
    { name: 'Nifty 50 Index Fund Returns Calculator', slug: 'nifty-50-index-fund-calculator', cat: 'investment', icon: '📈', badge: 'INDEX FUND', f: F_TYPES.SIP, desc: 'Calculate long term compounding returns on Nifty 50 and Sensex low-cost index funds.' },
    { name: 'Small Cap Mutual Fund Calculator', slug: 'small-cap-mutual-fund-calculator', cat: 'investment', icon: '🚀', badge: 'HIGH GROWTH', f: F_TYPES.SIP, desc: 'Project returns on high-risk, high-reward Small Cap mutual fund SIP portfolios.' },
    { name: 'Mid Cap Mutual Fund Calculator', slug: 'mid-cap-mutual-fund-calculator', cat: 'investment', icon: '📊', badge: 'MID CAP', f: F_TYPES.SIP, desc: 'Estimate wealth growth in quality Mid Cap equity funds over 7+ years.' },
    { name: 'Flexi Cap Fund Returns Calculator', slug: 'flexi-cap-fund-calculator', cat: 'investment', icon: '🎯', badge: 'ALL WEATHER', f: F_TYPES.SIP, desc: 'Calculate compounding returns for diversified Flexi Cap mutual fund schemes.' },
    { name: 'ELSS Tax Saver Mutual Fund Calculator', slug: 'elss-tax-saver-calculator', cat: 'investment', icon: '🧾', badge: '80C 3-YR LOCKIN', f: F_TYPES.SIP, desc: 'Calculate Section 80C tax deduction and 3-year lock-in growth on ELSS equity funds.' },
    { name: 'Direct vs Regular Mutual Fund Savings Calculator', slug: 'direct-vs-regular-mutual-fund-calculator', cat: 'investment', icon: '💰', badge: '1.5% EXPENSE RATIO', f: F_TYPES.SIP, desc: 'Calculate extra wealth gained by avoiding commission in Direct Mutual Fund plans.' },
    { name: 'Gold ETF vs Physical Gold Calculator', slug: 'gold-etf-vs-physical-gold-calculator', cat: 'investment', icon: '🥇', badge: 'NO MAKING CHARGES', f: F_TYPES.LUMPSUM, desc: 'Compare pure gold ETF returns vs physical jewellery with making charges and GST.' },
    { name: 'Silver ETF & Physical Silver Returns Calculator', slug: 'silver-etf-calculator', cat: 'investment', icon: '🥈', badge: 'PRECIOUS METAL', f: F_TYPES.LUMPSUM, desc: 'Calculate long-term appreciation on Silver ETFs and digital silver holdings.' },
    { name: 'US Tech Stocks (Nasdaq 100) Return Calculator', slug: 'us-stocks-nasdaq-calculator', cat: 'investment', icon: '🌐', badge: 'GLOBAL DIVERSIFICATION', f: F_TYPES.LUMPSUM, desc: 'Project INR returns on Nasdaq 100 & S&P 500 US equity investments factoring USD-INR depreciation.' },
    { name: 'Fixed Maturity Plan (FMP) Yield Calculator', slug: 'fmp-yield-calculator', cat: 'investment', icon: '📅', badge: 'DEBT FMP', f: F_TYPES.COMPOUND, desc: 'Calculate post-tax indicative yields on debt mutual fund Fixed Maturity Plans.' },
    { name: 'Arbitrage Mutual Fund Return & Tax Calculator', slug: 'arbitrage-fund-calculator', cat: 'investment', icon: '⚖️', badge: 'EQUITY TAXATION', f: F_TYPES.LUMPSUM, desc: 'Calculate risk-free arbitrage fund returns taxed with equity concessional rates.' },
    { name: 'Liquid Fund vs Savings Account Calculator', slug: 'liquid-fund-vs-savings-calculator', cat: 'investment', icon: '💧', badge: 'BETTER THAN SAVINGS', f: F_TYPES.COMPOUND, desc: 'Compare daily compounding liquid mutual fund returns against standard bank savings accounts.' },
    { name: 'Balanced Advantage Fund (BAF) Calculator', slug: 'balanced-advantage-fund-calculator', cat: 'investment', icon: '🛡️', badge: 'DYNAMIC ASSET', f: F_TYPES.SIP, desc: 'Calculate returns on dynamic asset allocation Balanced Advantage funds in volatile markets.' },
    { name: 'Multi-Asset Allocation Fund Calculator', slug: 'multi-asset-allocation-calculator', cat: 'investment', icon: '🪙', badge: 'EQUITY+DEBT+GOLD', f: F_TYPES.SIP, desc: 'Project returns on multi-asset funds combining equities, bonds, and gold.' },
    { name: 'Overnight Fund Return Calculator', slug: 'overnight-fund-calculator', cat: 'investment', icon: '🌙', badge: 'ZERO DURATION RISK', f: F_TYPES.SIMPLE, desc: 'Calculate 1-day to 30-day returns on overnight parking funds for corporate treasuries.' },
    { name: 'Short Duration Debt Fund Calculator', slug: 'short-duration-debt-fund-calculator', cat: 'investment', icon: '📑', badge: '1-3 YRS DURATION', f: F_TYPES.COMPOUND, desc: 'Calculate yields on short duration debt funds holding high-grade corporate bonds.' },
    { name: 'Corporate Bond Fund Yield Calculator', slug: 'corporate-bond-fund-calculator', cat: 'investment', icon: '🏢', badge: 'AAA RATED', f: F_TYPES.COMPOUND, desc: 'Estimate yields on AA+ and AAA corporate bond mutual funds.' },
    { name: 'Target Maturity Gilt Fund (PSU / SDL) Calculator', slug: 'target-maturity-gilt-fund-calculator', cat: 'investment', icon: '🏛️', badge: 'SOVEREIGN SAFETY', f: F_TYPES.COMPOUND, desc: 'Calculate lock-in yields on target maturity government bond ETFs (Bharat Bond).' },
    { name: 'REITs (Real Estate Investment Trust) Dividend Yield Calculator', slug: 'reits-dividend-yield-calculator', cat: 'investment', icon: '🏬', badge: 'COMMERCIAL REAL ESTATE', f: F_TYPES.PERCENTAGE, desc: 'Calculate quarterly distribution yields and capital appreciation on Indian REITs (Embassy, Mindspace, Brookfield).' },
    { name: 'InvITs (Infrastructure Investment Trust) Cash Flow Calculator', slug: 'invits-calculator', cat: 'investment', icon: '🛣️', badge: 'INFRA YIELD', f: F_TYPES.PERCENTAGE, desc: 'Project annual cash distributions on toll road and power grid InvIT units.' },
    { name: 'Treasury Bills (T-Bills 91, 182, 364 Days) Yield Calculator', slug: 'treasury-bills-yield-calculator', cat: 'investment', icon: '📜', badge: 'RBI DIRECT', f: F_TYPES.SIMPLE, desc: 'Calculate discounted bidding price and annualized yield on RBI Treasury Bills.' },
    { name: 'Government Securities (G-Sec) Coupon Calculator', slug: 'g-sec-coupon-calculator', cat: 'investment', icon: '🇮🇳', badge: 'RBI RETAIL DIRECT', f: F_TYPES.SIMPLE, desc: 'Calculate semi-annual coupon interest on 10-year Indian Government dated securities.' },
    { name: 'Stock Price Target with P/E Multiple Calculator', slug: 'stock-price-target-calculator', cat: 'investment', icon: '🎯', badge: 'PRICE TARGET', f: F_TYPES.PERCENTAGE, desc: 'Estimate fair value stock price based on expected EPS growth and terminal P/E multiple.' },
    { name: 'Stock Split & Bonus Share Impact Calculator', slug: 'stock-split-bonus-calculator', cat: 'investment', icon: '✂️', badge: 'CORPORATE ACTION', f: F_TYPES.PROFIT_LOSS, desc: 'Calculate revised share count, new cost price, and portfolio value after 1:1, 1:2 bonus or stock splits.' },
    { name: 'Rights Issue Value & Entitlement Calculator', slug: 'rights-issue-calculator', cat: 'investment', icon: '📑', badge: 'RIGHTS ISSUE', f: F_TYPES.PROFIT_LOSS, desc: 'Calculate theoretical ex-rights price (TERP) and profit on subscribing to rights issue shares.' },
    { name: 'IPO Listing Gain & Profit Calculator', slug: 'ipo-listing-gain-calculator', cat: 'investment', icon: '🔔', badge: 'IPO GMP', f: F_TYPES.PROFIT_LOSS, desc: 'Calculate expected listing day profit and GMP returns on mainboard and SME IPO applications.' },
    { name: 'Buyback Arbitrage Profit Calculator', slug: 'stock-buyback-profit-calculator', cat: 'investment', icon: '💼', badge: 'TENDER OFFER', f: F_TYPES.PROFIT_LOSS, desc: 'Calculate acceptance ratio and net profit in retail quota tender offer stock buybacks.' },
    { name: 'Option Premium Break-Even (Call/Put) Calculator', slug: 'option-premium-breakeven-calculator', cat: 'investment', icon: '📉', badge: 'F&O DERIVATIVES', f: F_TYPES.PERCENTAGE, desc: 'Calculate strike price break-even and maximum profit/loss on Call and Put option buying.' },
    { name: 'Futures Margin & MTM Profit Calculator', slug: 'futures-margin-mtm-calculator', cat: 'investment', icon: '⚡', badge: 'F&O MTM', f: F_TYPES.PROFIT_LOSS, desc: 'Calculate SPAN margin, mark-to-market daily settlement, and leverage on index futures contracts.' },
    { name: 'Currency Arbitrage (USD to INR Forex) Calculator', slug: 'forex-currency-arbitrage-calculator', cat: 'investment', icon: '💱', badge: 'FOREX SPREAD', f: F_TYPES.PERCENTAGE, desc: 'Calculate remittance conversion rates, bank spreads, and net INR in-hand on foreign earnings.' },

    // --- Additional Banking & Deposit Calculators ---
    { name: 'Senior Citizen FD Interest Rate Calculator', slug: 'senior-citizen-fd-calculator', cat: 'banking', icon: '🧓', badge: 'EXTRA 0.50% RATE', f: F_TYPES.FD, desc: 'Calculate extra 0.50% to 0.75% senior citizen FD interest and quarterly maturity payouts.' },
    { name: 'Cumulative vs Non-Cumulative FD Calculator', slug: 'cumulative-vs-non-cumulative-fd-calculator', cat: 'banking', icon: '🔄', badge: 'REINVESTMENT', f: F_TYPES.FD, desc: 'Compare compounding maturity wealth against regular monthly/quarterly interest payout options.' },
    { name: 'Post Office Time Deposit (TD 1, 2, 3, 5 Yrs) Calculator', slug: 'post-office-time-deposit-calculator', cat: 'banking', icon: '🏤', badge: 'POST OFFICE TD', f: F_TYPES.FD, desc: 'Calculate guaranteed quarterly compounded returns on Post Office 1 to 5 year time deposits.' },
    { name: 'Post Office Recurring Deposit (5-Year RD) Calculator', slug: 'post-office-rd-calculator', cat: 'banking', icon: '📮', badge: '6.7% POST OFFICE', f: F_TYPES.RD, desc: 'Calculate 5-year Post Office RD maturity value compounded quarterly.' },
    { name: 'Sweep-in Auto Sweep Savings Account Calculator', slug: 'auto-sweep-savings-calculator', cat: 'banking', icon: '🧹', badge: 'LIQUIDITY + FD RATE', f: F_TYPES.FD, desc: 'Calculate higher FD-like returns on idle savings bank balance via auto sweep-in facility.' },
    { name: 'Fixed Deposit TDS Deductions (15G / 15H) Calculator', slug: 'fd-tds-tax-calculator', cat: 'banking', icon: '🧾', badge: 'TDS EXEMPTION', f: F_TYPES.TAX, desc: 'Calculate 10% TDS deduction on FD interest exceeding ₹40,000 (₹50,000 for seniors).' },
    { name: 'Recurring Deposit Delayed Installment Penalty Calculator', slug: 'rd-delayed-installment-calculator', cat: 'banking', icon: '⚠️', badge: 'DEFAULT CHARGES', f: F_TYPES.SIMPLE, desc: 'Calculate exact default penalty and adjusted maturity date for skipped RD monthly deposits.' },
    { name: 'PPF 5-Year Extension with Contribution Calculator', slug: 'ppf-extension-calculator', cat: 'banking', icon: '⏳', badge: 'EXTEND IN BLOCKS', f: F_TYPES.PPF, desc: 'Project PPF wealth growth across 20, 25, or 30 years with 5-year extension blocks.' },
    { name: 'PPF Partial Withdrawal & Loan Eligibility Calculator', slug: 'ppf-loan-withdrawal-calculator', cat: 'banking', icon: '💳', badge: 'FROM 7TH YEAR', f: F_TYPES.PERCENTAGE, desc: 'Calculate permissible 50% partial withdrawal and 1% loan limits against PPF balance.' },
    { name: 'Bank Locker Rent & Caution Deposit Calculator', slug: 'bank-locker-rent-calculator', cat: 'banking', icon: '🔐', badge: 'LOCKER CHARGES', f: F_TYPES.SIMPLE, desc: 'Calculate annual locker rental costs and term deposit lien requirements across small, medium & large lockers.' },
    { name: 'Overdraft Against Fixed Deposit (OD Against FD) Calculator', slug: 'od-against-fd-calculator', cat: 'banking', icon: '🏧', badge: '+1% FD RATE', f: F_TYPES.SIMPLE, desc: 'Calculate flexible overdraft loan limit (up to 90% of FD) and daily interest charged only on used amount.' },
    { name: 'Small Finance Bank High Interest FD Calculator (9.0%)', slug: 'small-finance-bank-fd-calculator', cat: 'banking', icon: '🚀', badge: 'UP TO 9.0% ROI', f: F_TYPES.FD, desc: 'Calculate returns on high-yield Fixed Deposits offered by Unity, Suryoday, and Equitas Small Finance Banks (DICGC Insured ₹5L).' },
    { name: 'Cooperative Bank vs Scheduled Commercial Bank Safety & Yield', slug: 'cooperative-bank-fd-calculator', cat: 'banking', icon: '🏛️', badge: 'DICGC ₹5L COVER', f: F_TYPES.FD, desc: 'Calculate returns and evaluate DICGC ₹5 Lakh depositor insurance safety limit.' },
    { name: 'Floating Rate Fixed Deposit (FRFD) Calculator', slug: 'floating-rate-fd-calculator', cat: 'banking', icon: '🌊', badge: 'REPO LINKED', f: F_TYPES.FD, desc: 'Calculate interest on floating rate bank FDs linked to RBI Repo rate cycles.' },
    { name: 'Tax Saver 5-Year Fixed Deposit Calculator', slug: 'tax-saving-fd-calculator', cat: 'banking', icon: '🛡️', badge: 'SEC 80C 5-YR', f: F_TYPES.FD, desc: 'Calculate Section 80C ₹1.5L tax savings and 5-year lock-in compound interest.' },

    // --- Additional Loans & Mortgage Calculators ---
    { name: 'Two-Wheeler Bike Loan EMI Calculator', slug: 'bike-loan-calculator', cat: 'loans', icon: '🏍️', badge: 'BIKE EMI', f: F_TYPES.EMI, desc: 'Calculate monthly EMI, down payment, and interest for two-wheeler scooter and bike loans.' },
    { name: 'Education Loan Moratorium & EMI Calculator', slug: 'education-loan-calculator', cat: 'loans', icon: '🎓', badge: 'SEC 80E BENEFIT', f: F_TYPES.EMI, desc: 'Calculate education loan EMI, simple interest during study moratorium, and 100% tax rebate under Section 80E.' },
    { name: 'Commercial Property & Loan Against Property (LAP) Calculator', slug: 'loan-against-property-lap-calculator', cat: 'loans', icon: '🏬', badge: 'MORTGAGE LAP', f: F_TYPES.EMI, desc: 'Calculate EMI and 60% LTV eligibility on Loan Against Residential and Commercial Property.' },
    { name: 'Used Car Loan vs New Car Loan Interest Calculator', slug: 'used-car-loan-calculator', cat: 'loans', icon: '🚙', badge: 'USED CAR ROI', f: F_TYPES.EMI, desc: 'Compare higher interest rates on used car loans against new vehicle financing.' },
    { name: 'Electric Vehicle (EV) Loan & Section 80EEB Tax Benefit', slug: 'ev-loan-calculator', cat: 'loans', icon: '⚡', badge: '80EEB ₹1.5L SAVINGS', f: F_TYPES.EMI, desc: 'Calculate green EV loan EMI and ₹1.5 Lakh annual tax deduction on interest under Section 80EEB.' },
    { name: 'Credit Card Minimum Amount Due (MAD) Trap Calculator', slug: 'credit-card-minimum-due-calculator', cat: 'loans', icon: '💳', badge: '42% APR DEBT TRAP', f: F_TYPES.DEBT_PAYOFF, desc: 'See how paying only the 5% minimum due takes 15–20 years to clear debt with 42% APR.' },
    { name: 'Credit Card Debt Payoff (Avalanche vs Snowball) Calculator', slug: 'credit-card-payoff-calculator', cat: 'loans', icon: '❄️', badge: 'DEBT FREEDOM', f: F_TYPES.DEBT_PAYOFF, desc: 'Calculate exact timeline and interest savings using Debt Avalanche (highest APR first) vs Snowball strategy.' },
    { name: 'Home Renovation & Home Improvement Loan Calculator', slug: 'home-renovation-loan-calculator', cat: 'loans', icon: '🔨', badge: 'REMODELING', f: F_TYPES.EMI, desc: 'Calculate EMI for home remodeling loans and tax deduction up to ₹30,000 under Section 24b.' },
    { name: 'Pradhan Mantri Awas Yojana (PMAY) CLSS Subsidy Calculator', slug: 'pmay-subsidy-calculator', cat: 'loans', icon: '🏘️', badge: 'PMAY SUBSIDY', f: F_TYPES.PERCENTAGE, desc: 'Calculate upfront interest subsidy up to ₹2.67 Lakh for EWS, LIG, and MIG home buyers.' },
    { name: 'Rental Yield & Property ROI Calculator', slug: 'rental-yield-calculator', cat: 'loans', icon: '🏢', badge: '2%–4% RESIDENTIAL', f: F_TYPES.PERCENTAGE, desc: 'Calculate gross rental yield, net rental yield after property tax/maintenance, and payback years.' },
    { name: 'Step-Down EMI Home Loan Calculator', slug: 'step-down-emi-calculator', cat: 'loans', icon: '📉', badge: 'RETIRING SOON', f: F_TYPES.EMI, desc: 'Calculate loans where EMI starts high during peak earning years and decreases post-retirement.' },
    { name: 'Step-Up EMI Home Loan Calculator (Graduated Payment)', slug: 'step-up-emi-calculator', cat: 'loans', icon: '📈', badge: 'YOUNG EARNERS', f: F_TYPES.EMI, desc: 'Calculate loans with lower initial EMIs that increase as career income grows.' },
    { name: 'Home Loan Top-Up Eligibility & EMI Calculator', slug: 'home-loan-top-up-calculator', cat: 'loans', icon: '➕', badge: 'CHEAPEST CREDIT', f: F_TYPES.EMI, desc: 'Calculate additional low-interest top-up loan available on your existing running home loan.' },
    { name: 'Overdraft Home Loan (SBI Maxgain / Home Saver) Calculator', slug: 'sbi-maxgain-home-loan-calculator', cat: 'loans', icon: '💡', badge: 'SAVE INTEREST', f: F_TYPES.LOAN_PREPAY, desc: 'Calculate how parking surplus savings in your OD home loan account drastically reduces interest without locking money.' },
    { name: 'Builder Subvention 10:90 vs Construction Linked Plan', slug: 'subvention-scheme-calculator', cat: 'loans', icon: '🏗️', badge: 'UNDER CONSTRUCTION', f: F_TYPES.PERCENTAGE, desc: 'Compare total cost of 10:90 subvention schemes against milestone construction-linked payments.' },

    // --- Additional Income Tax, Payroll & Salary Calculators ---
    { name: 'Old vs New Tax Regime Break-Even Calculator', slug: 'tax-regime-breakeven-calculator', cat: 'tax', icon: '⚖️', badge: 'EXACT BREAKEVEN', f: F_TYPES.TAX, desc: 'Find exact total tax deductions (80C, 80D, HRA, Home Loan) required for Old Regime to beat New Regime.' },
    { name: 'Section 44AD Presumptive Business Tax Calculator', slug: 'section-44ad-business-tax-calculator', cat: 'tax', icon: '🏬', badge: '6% / 8% TURNOVER', f: F_TYPES.TAX, desc: 'Calculate business income tax on 6% digital turnover / 8% cash turnover up to ₹3 Crore.' },
    { name: 'Section 44AE Transport Goods Carriage Tax Calculator', slug: 'section-44ae-transporter-tax-calculator', cat: 'tax', icon: '🚚', badge: 'HEAVY VEHICLES', f: F_TYPES.TAX, desc: 'Calculate presumptive taxation for transport operators owning up to 10 goods vehicles.' },
    { name: 'Advance Tax Installments & 234B/234C Interest Calculator', slug: 'advance-tax-calculator', cat: 'tax', icon: '📅', badge: '15 JUN/SEP/DEC/MAR', f: F_TYPES.TAX, desc: 'Calculate mandatory advance tax installments (15%, 45%, 75%, 100%) and penal interest for delays.' },
    { name: 'Leave Encashment Tax Exemption Calculator (₹25L Limit)', slug: 'leave-encashment-tax-calculator', cat: 'tax', icon: '🏖️', badge: '₹25L EXEMPTION', f: F_TYPES.SALARY, desc: 'Calculate non-government employee leave encashment tax exemption up to ₹25 Lakh on retirement.' },
    { name: 'Section 80C & 80CCD(1B) Tax Saving Optimization Planner', slug: '80c-planner', cat: 'tax', icon: '🛡️', badge: '₹2.0L TOTAL SAVER', f: F_TYPES.TAX, desc: 'Optimize ₹1.5L Section 80C (PPF/ELSS/EPF) + ₹50,000 Section 80CCD(1B) NPS tax deductions.' },
    { name: 'Section 80D Medical Health Insurance Tax Deduction', slug: '80d-tax-deduction-calculator', cat: 'tax', icon: '💊', badge: 'UP TO ₹1,00,000', f: F_TYPES.TAX, desc: 'Calculate tax deductions under Section 80D for self, family (₹25k) and senior parents (₹50k).' },
    { name: 'US Stocks RSUs & ESPP Tax Calculator (India Resident)', slug: 'us-stocks-rsu-tax-calculator', cat: 'tax', icon: '🇺🇸', badge: 'SCHEDULE FA & PERQ', f: F_TYPES.TAX, desc: 'Calculate perquisite tax on RSU vesting, 12.5% foreign LTCG on sale, and Schedule FA compliance.' },
    { name: 'ESOP (Employee Stock Options) Tax & Exercise Value', slug: 'esop-tax-calculator', cat: 'tax', icon: '🏢', badge: 'STAGE 1 & STAGE 2', f: F_TYPES.TAX, desc: 'Calculate perquisite tax on exercise and capital gains tax on subsequent sale of startup ESOPs.' },
    { name: 'Salary vs Freelancer Contract Income Tax Comparison', slug: 'salary-vs-freelance-tax-calculator', cat: 'tax', icon: '🔀', badge: 'CTC VS 44ADA', f: F_TYPES.TAX, desc: 'Compare salaried employee CTC vs contractor/freelance net take-home and EPF/tax deductions.' },
    { name: 'Surcharge & Health and Education Cess (4%) Calculator', slug: 'surcharge-and-cess-calculator', cat: 'tax', icon: '➕', badge: 'HIGH EARNERS >₹50L', f: F_TYPES.TAX, desc: 'Calculate progressive 10%, 15%, 25% surcharge for income over ₹50L/₹1Cr and 4% Health & Education Cess.' },
    { name: 'Marginal Tax Relief Calculator (Income slightly above ₹7L/₹12L)', slug: 'marginal-tax-relief-calculator', cat: 'tax', icon: '🛡️', badge: 'MARGINAL RELIEF', f: F_TYPES.TAX, desc: 'Calculate tax relief so that tax payable does not exceed income earned above the rebate threshold.' },
    { name: 'TDS on Sale of Immovable Property (Section 194-IA 1%)', slug: 'property-sale-tds-194ia-calculator', cat: 'tax', icon: '🏠', badge: '1% ABOVE ₹50L', f: F_TYPES.PERCENTAGE, desc: 'Calculate 1% buyer TDS deduction on real estate property purchases exceeding ₹50 Lakh.' },
    { name: 'TDS on Rent by Individuals (Section 194-IB 5%)', slug: 'rent-tds-194ib-calculator', cat: 'tax', icon: '🏢', badge: 'RENT >₹50,000/MO', f: F_TYPES.PERCENTAGE, desc: 'Calculate 5% monthly TDS deduction by tenant paying rent over ₹50,000 per month.' },
    { name: 'TCS on Foreign Remittance LRS (Section 206C 20%)', slug: 'tcs-foreign-remittance-calculator', cat: 'tax', icon: '✈️', badge: '20% LRS TCS', f: F_TYPES.PERCENTAGE, desc: 'Calculate 5% (education/medical) and 20% TCS on foreign travel and investments under RBI LRS >₹7 Lakh.' },
    { name: 'Standard Deduction & Professional Tax Impact Calculator', slug: 'standard-deduction-calculator', cat: 'tax', icon: '💼', badge: '₹75,000 NEW REGIME', f: F_TYPES.TAX, desc: 'Calculate net tax savings with ₹75,000 standard deduction under the revised New Tax Regime.' },
    { name: 'Section 80TTA & 80TTB Savings Bank Interest Deduction', slug: '80tta-80ttb-deduction-calculator', cat: 'tax', icon: '🏦', badge: '₹10K / ₹50K SENIOR', f: F_TYPES.TAX, desc: 'Calculate tax exemption on savings account interest (₹10k) and senior citizen deposit interest (₹50k).' },
    { name: 'Section 80G Charity & Donation Tax Benefit Calculator', slug: '80g-donation-tax-calculator', cat: 'tax', icon: '🤝', badge: '50% / 100% EXEMPT', f: F_TYPES.TAX, desc: 'Calculate 50% or 100% tax deductions for donations to PM Relief Fund and registered NGOs.' },

    // --- Additional Retirement & FIRE Calculators ---
    { name: 'Coast FIRE Calculator (Set & Forget Retirement)', slug: 'coast-fire-calculator', cat: 'retirement', icon: '🏖️', badge: 'ZERO FUTURE SAVINGS', f: F_TYPES.FIRE, desc: 'Find out the exact corpus needed today so compound growth meets retirement goals with no extra savings.' },
    { name: 'Lean FIRE Calculator (Frugal Early Retirement)', slug: 'lean-fire-calculator', cat: 'retirement', icon: '🧘', badge: 'MINIMALIST FIRE', f: F_TYPES.FIRE, desc: 'Calculate minimum essential corpus required to retire early on a minimalist budget.' },
    { name: 'Barista FIRE Calculator (Part-Time Work + Investments)', slug: 'barista-fire-calculator', cat: 'retirement', icon: '☕', badge: 'SEMI-RETIREMENT', f: F_TYPES.FIRE, desc: 'Calculate early retirement corpus when supplementing living costs with part-time passions.' },
    { name: 'Fat FIRE Calculator (Luxury Early Retirement)', slug: 'fat-fire-calculator', cat: 'retirement', icon: '💎', badge: 'LUXURY RETIREMENT', f: F_TYPES.FIRE, desc: 'Calculate aggressive high-net-worth corpus required for world travel and luxury early retirement.' },
    { name: 'EPS (Employees Pension Scheme) Monthly Pension Calculator', slug: 'eps-pension-calculator', cat: 'retirement', icon: '📜', badge: 'GOVT EPS PENSION', f: F_TYPES.SALARY, desc: 'Calculate monthly EPS pension based on pensionable salary (₹15,000 cap) and pensionable service years.' },
    { name: 'Post-Retirement SWP Longevity & Ruin Probability', slug: 'post-retirement-swp-survival-calculator', cat: 'retirement', icon: '⏳', badge: 'CORPUS LONGEVITY', f: F_TYPES.SWP, desc: 'Simulate how long your retirement nest egg lasts under 4%, 5%, and 6% annual withdrawal rates.' },
    { name: 'Life Expectancy & Retirement Bridge Calculator', slug: 'retirement-bridge-calculator', cat: 'retirement', icon: '🌉', badge: 'BRIDGE YEARS', f: F_TYPES.RETIREMENT, desc: 'Calculate bridge funds needed between retiring at age 45 and receiving formal pensions at age 60.' },
    { name: 'Annuity Immediate vs Deferred Monthly Payout Calculator', slug: 'annuity-payout-calculator', cat: 'retirement', icon: '💰', badge: 'LIFETIME ANNUITY', f: F_TYPES.SIMPLE, desc: 'Calculate guaranteed monthly annuity cash flows from LIC, HDFC Life, and SBI Life pension plans.' },
    { name: 'Senior Citizen Monthly Living Cost vs Inflation Indexer', slug: 'senior-citizen-inflation-index-calculator', cat: 'retirement', icon: '📈', badge: 'MEDICAL INFLATION', f: F_TYPES.INFLATION, desc: 'Project medical and healthcare cost inflation during post-retirement decades (age 60 to 85).' },

    // --- Additional Insurance & Protection Calculators ---
    { name: 'Critical Illness Insurance Buffer Calculator', slug: 'critical-illness-insurance-calculator', cat: 'insurance', icon: '🩺', badge: 'LUMP SUM PAYOUT', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate lump sum emergency cover required for cancer, heart attacks, and major surgeries.' },
    { name: 'ULIP vs Term Insurance + SIP Returns Comparison', slug: 'ulip-vs-term-sip-calculator', cat: 'insurance', icon: '⚔️', badge: 'TERM + MUTUAL FUND', f: F_TYPES.SIP, desc: 'See why buying pure Term Insurance and investing the difference in Mutual Fund SIP beats ULIP plans.' },
    { name: 'Endowment & Money Back Policy IRR (Actual Return)', slug: 'endowment-policy-irr-calculator', cat: 'insurance', icon: '📉', badge: 'ACTUAL 4%–5% IRR', f: F_TYPES.CAGR, desc: 'Calculate real Internal Rate of Return (IRR) on traditional insurance savings and money-back plans.' },
    { name: 'Motor Vehicle IDV (Insured Declared Value) Calculator', slug: 'car-insurance-idv-calculator', cat: 'insurance', icon: '🚗', badge: 'IDV DEPRECIATION', f: F_TYPES.PERCENTAGE, desc: 'Calculate accurate car and two-wheeler IDV market value based on IRDAI age-wise depreciation slabs.' },
    { name: 'No Claim Bonus (NCB) Discount on Car Insurance', slug: 'no-claim-bonus-ncb-calculator', cat: 'insurance', icon: '🏷️', badge: 'UP TO 50% DISCOUNT', f: F_TYPES.PERCENTAGE, desc: 'Calculate progressive 20% to 50% NCB premium discounts for claim-free policy years.' },
    { name: 'Surrender Value of Life Insurance Policy Calculator', slug: 'policy-surrender-value-calculator', cat: 'insurance', icon: '📄', badge: 'GUARANTEED SURRENDER', f: F_TYPES.PERCENTAGE, desc: 'Calculate guaranteed surrender value and special surrender value if exiting an insurance policy early.' },
    { name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY ₹2L Life)', slug: 'pmjjby-calculator', cat: 'insurance', icon: '🛡️', badge: '₹436/YR FOR ₹2L', f: F_TYPES.SIMPLE, desc: 'Calculate death cover benefits under Govt PMJJBY scheme at ₹436 annual premium.' },
    { name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY ₹2L Accident)', slug: 'pmsby-calculator', cat: 'insurance', icon: '🚑', badge: '₹20/YR ACCIDENTAL', f: F_TYPES.SIMPLE, desc: 'Calculate accidental death and disability cover benefits under PMSBY at ₹20 per year.' },

    // --- Additional Business & Corporate Finance Calculators ---
    { name: 'Customer Acquisition Cost (CAC) & Payback Calculator', slug: 'cac-payback-calculator', cat: 'business', icon: '🎯', badge: 'SaaS METRIC', f: F_TYPES.PERCENTAGE, desc: 'Calculate Blended CAC, Paid CAC, and months required to recover marketing acquisition costs.' },
    { name: 'Customer Lifetime Value (LTV / CLV) Calculator', slug: 'customer-lifetime-value-ltv-calculator', cat: 'business', icon: '💎', badge: 'LTV : CAC > 3', f: F_TYPES.PERCENTAGE, desc: 'Calculate customer lifetime value based on average order value, churn rate, and gross margin.' },
    { name: 'LTV to CAC Ratio Health Analyzer', slug: 'ltv-cac-ratio-calculator', cat: 'business', icon: '⚖️', badge: 'UNIT ECONOMICS', f: F_TYPES.PERCENTAGE, desc: 'Evaluate startup business model sustainability (LTV:CAC benchmark of 3x to 5x).' },
    { name: 'Discounted Cash Flow (DCF) Fair Value Valuation Calculator', slug: 'dcf-valuation-calculator', cat: 'business', icon: '📊', badge: 'INTRINSIC VALUE', f: F_TYPES.COMPOUND, desc: 'Estimate intrinsic equity value of a business by discounting projected 10-year free cash flows.' },
    { name: 'Weighted Average Cost of Capital (WACC) Calculator', slug: 'wacc-calculator', cat: 'business', icon: '🏦', badge: 'DISCOUNT RATE', f: F_TYPES.PERCENTAGE, desc: 'Calculate company hurdle rate blending Cost of Equity (CAPM) and after-tax Cost of Debt.' },
    { name: 'Return on Investment (ROI) & ROAS Advertising Calculator', slug: 'roi-roas-calculator', cat: 'business', icon: '📈', badge: 'ROAS MULTIPLE', f: F_TYPES.PERCENTAGE, desc: 'Calculate net return on marketing ad spend (ROAS) and marketing campaign ROI.' },
    { name: 'Startup Equity Dilution & Cap Table Calculator', slug: 'startup-equity-dilution-calculator', cat: 'business', icon: '🍰', badge: 'SEED / SERIES A', f: F_TYPES.PERCENTAGE, desc: 'Model founder shareholding dilution and ESOP pool expansion across Seed, Series A & B funding.' },
    { name: 'Working Capital & Cash Conversion Cycle (CCC) Calculator', slug: 'working-capital-cash-conversion-calculator', cat: 'business', icon: '🔄', badge: 'DSO + DIO - DPO', f: F_TYPES.PERCENTAGE, desc: 'Calculate Days Sales Outstanding, Days Inventory Outstanding, and Net Working Capital Cycle in days.' },
    { name: 'EBITDA, EBIT & Net Operating Profit (NOPAT) Calculator', slug: 'ebitda-margin-calculator', cat: 'business', icon: '💼', badge: 'OPERATING PROFIT', f: F_TYPES.PERCENTAGE, desc: 'Calculate EBITDA margins and cash operating profits before depreciation, interest, and taxes.' },
    { name: 'DuPont Analysis 3-Step & 5-Step ROE Decomposition', slug: 'dupont-analysis-calculator', cat: 'business', icon: '🔬', badge: 'ROE DECOMPOSITION', f: F_TYPES.PERCENTAGE, desc: 'Decompose Return on Equity into Profit Margin, Asset Turnover, and Financial Leverage.' },

    // --- Additional Personal Finance & Budgeting Calculators ---
    { name: 'Net Worth Tracker & Liquid Wealth Calculator', slug: 'net-worth-calculator', cat: 'personal', icon: '🏆', badge: 'TOTAL ASSETS - DEBTS', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate total financial net worth across real estate, mutual funds, gold, EPF minus liabilities.' },
    { name: 'Financial Freedom & Independence Health Score', slug: 'financial-health-score-calculator', cat: 'personal', icon: '🩺', badge: 'HEALTH SCORE /100', f: F_TYPES.PERCENTAGE, desc: 'Assess savings rate, debt-to-income ratio, and insurance adequacy on a 100-point scale.' },
    { name: 'Marriage & Wedding Expense Savings Planner', slug: 'marriage-expense-planner-calculator', cat: 'personal', icon: '💍', badge: 'WEDDING BUDGET', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate future wedding and reception costs with inflation and required monthly SIP.' },
    { name: 'True Cost of Car Ownership (TCO 5-Year) Calculator', slug: 'true-cost-of-car-ownership-calculator', cat: 'personal', icon: '🚗', badge: 'DEPRECIATION + FUEL', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate total monthly expense including EMI, petrol/diesel, insurance, maintenance & depreciation.' },
    { name: 'Fuel Cost, Mileage & Road Trip Expense Calculator', slug: 'fuel-cost-trip-calculator', cat: 'personal', icon: '⛽', badge: 'TRIP EXPENSE', f: F_TYPES.PERCENTAGE, desc: 'Calculate per-person travel cost, fuel volume required, and toll expenses for road trips.' },
    { name: 'Rent vs Buy Car (Cab Commute vs Owning a Vehicle)', slug: 'cab-vs-own-car-calculator', cat: 'personal', icon: '🚕', badge: 'OLA/UBER VS CAR EMI', f: F_TYPES.PERCENTAGE, desc: 'Compare daily Uber/Ola ride expenses against EMI, parking, and maintenance of private car ownership.' },
    { name: 'Vacation & Holiday Travel Fund SIP Calculator', slug: 'vacation-travel-fund-calculator', cat: 'personal', icon: '✈️', badge: 'TRAVEL SIP', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate 12-month recurring SIP fund required for international and domestic holidays.' },
    { name: 'Pet Ownership Lifetime Cost Calculator', slug: 'pet-ownership-cost-calculator', cat: 'personal', icon: '🐕', badge: 'VET + FOOD', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate 12-year lifetime cost of veterinary care, food, grooming, and pet insurance.' },
    { name: 'Subscription & SaaS Recurring Expense Audit Calculator', slug: 'subscription-audit-calculator', cat: 'personal', icon: '📱', badge: 'LEAKY EXPENSES', f: F_TYPES.PERCENTAGE, desc: 'Audit cumulative 5-year cost of OTT streaming (Netflix, Prime), gym, and cloud subscriptions.' },
    { name: 'Down Payment Accumulation SIP Calculator', slug: 'down-payment-sip-calculator', cat: 'personal', icon: '🏠', badge: '20% DOWN PAYMENT', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate short-term monthly debt/arbitrage SIP to build 20% down payment for a house in 3–5 years.' },

    // ============================================================
    // 152 NEW HIGH-UTILITY FINANCIAL CALCULATORS (Total: 329+ Tools)
    // ============================================================

    // --- 1. Investment & Wealth Tools (30 additional) ---
    { name: 'Mid Cap Mutual Fund SIP Wealth Builder', slug: 'mid-cap-sip-calculator', cat: 'investment', icon: '📈', badge: 'NIFTY MIDCAP 150', f: F_TYPES.SIP, desc: 'Calculate 10–15 year compounding wealth with high-growth Indian mid-cap equity mutual funds.' },
    { name: 'Micro Cap High Growth Investment Calculator', slug: 'micro-cap-growth-calculator', cat: 'investment', icon: '🚀', badge: 'HIGH RISK MULTIBAGGER', f: F_TYPES.SIP, desc: 'Project long-term multi-bagger wealth growth in Indian micro-cap and emerging company funds.' },
    { name: 'Quant Mutual Fund Momentum Returns Calculator', slug: 'quant-fund-momentum-calculator', cat: 'investment', icon: '🤖', badge: 'ALGO MOMENTUM', f: F_TYPES.SIP, desc: 'Calculate historical momentum and rule-based algorithmic quantitative equity mutual fund returns.' },
    { name: 'Arbitrage Fund vs Liquid Fund Tax Return Comparator', slug: 'arbitrage-vs-liquid-fund-calculator', cat: 'investment', icon: '⚖️', badge: 'EQUITY TAXATION', f: F_TYPES.COMPOUND, desc: 'Compare post-tax returns between arbitrage funds (equity tax) and bank liquid funds (slab tax).' },
    { name: 'Overnight Fund & Ultra Short Duration Yield', slug: 'overnight-fund-yield-calculator', cat: 'investment', icon: '🌙', badge: '1-DAY PARKING', f: F_TYPES.SIMPLE, desc: 'Calculate safe 1-day to 30-day corporate cash parking interest with zero credit and duration risk.' },
    { name: 'Corporate Bond Fund Yield to Maturity (YTM) Calculator', slug: 'corporate-bond-ytm-calculator', cat: 'investment', icon: '🏛️', badge: 'AAA RATED YTM', f: F_TYPES.COMPOUND, desc: 'Calculate net annualized portfolio yield and coupon interest from AAA-rated corporate debt funds.' },
    { name: 'Target Maturity Fund (TMF) Index Return Calculator', slug: 'target-maturity-fund-calculator', cat: 'investment', icon: '🎯', badge: 'PASSIVE DEBT LOCK', f: F_TYPES.COMPOUND, desc: 'Calculate predictable roll-down yield on target maturity SDL and PSU debt index funds.' },
    { name: 'Multi Asset Allocation Fund Rebalancing Calculator', slug: 'multi-asset-fund-calculator', cat: 'investment', icon: '🛡️', badge: 'EQUITY + GOLD + DEBT', f: F_TYPES.SIP, desc: 'Project low-volatility compounding across dynamic 65% Equity, 20% Debt, and 15% Gold allocation.' },
    { name: 'Balanced Advantage Dynamic Asset Allocation Calculator', slug: 'balanced-advantage-fund-calculator', cat: 'investment', icon: '🌊', badge: 'DYNAMIC PE / PB', f: F_TYPES.SIP, desc: 'Calculate market-valuation adjusted mutual fund growth with automatic equity-debt asset switching.' },
    { name: 'Sectoral & Thematic Fund Risk Return Calculator', slug: 'thematic-sectoral-fund-calculator', cat: 'investment', icon: '⚡', badge: 'THEMATIC BETA', f: F_TYPES.SIP, desc: 'Calculate returns on concentrated thematic funds like Banking, IT, Pharma, Energy, and Infra.' },
    { name: 'Equity Savings Fund Conservative Return Calculator', slug: 'equity-savings-fund-calculator', cat: 'investment', icon: '🌱', badge: 'CONSERVATIVE GROWTH', f: F_TYPES.SIP, desc: 'Calculate conservative returns with monthly hedged equity arbitrage and fixed income safety.' },
    { name: 'Multi Cap 25:25:25:25 Balanced Allocation Calculator', slug: 'multi-cap-allocation-calculator', cat: 'investment', icon: '🍰', badge: 'MANDATED 25% SPREAD', f: F_TYPES.SIP, desc: 'Simulate wealth growth under SEBI-mandated 25% Large, 25% Mid, 25% Small Cap allocation.' },
    { name: 'Contra & Value Fund Long-Term Return Calculator', slug: 'contra-value-fund-calculator', cat: 'investment', icon: '🔍', badge: 'DEEP VALUE', f: F_TYPES.SIP, desc: 'Calculate multi-cycle returns from contrarian deep-value investing during market downturns.' },
    { name: 'International Tech ETF & NASDAQ 100 SIP Calculator', slug: 'nasdaq-100-etf-sip-calculator', cat: 'investment', icon: '🌐', badge: 'US TECH IN INR', f: F_TYPES.SIP, desc: 'Calculate Indian Rupee wealth accumulation from global tech stocks (Apple, Microsoft, Nvidia, Google).' },
    { name: 'Hang Seng & Global Emerging Market ETF Calculator', slug: 'global-etf-sip-calculator', cat: 'investment', icon: '🌏', badge: 'GLOBAL DIVERSIFICATION', f: F_TYPES.SIP, desc: 'Calculate geographic diversification returns investing in global and emerging Asian equity ETFs.' },
    { name: 'Direct Plan vs Regular Plan Commission Loss Calculator', slug: 'direct-vs-regular-mutual-fund-calculator', cat: 'investment', icon: '💸', badge: '1% DISTRIBUTOR DRAG', f: F_TYPES.SIP, desc: 'Calculate how much wealth is lost to distributor commissions (1%–1.5% extra return in Direct plans).' },
    { name: 'Expense Ratio Drag on 20-Year Wealth Calculator', slug: 'expense-ratio-wealth-drag-calculator', cat: 'investment', icon: '⏳', badge: 'TER IMPACT', f: F_TYPES.SIP, desc: 'Quantify compounding impact of fund Total Expense Ratio (TER 0.2% vs 2.0%) over 20 years.' },
    { name: 'Portfolio Turnover & Tax Drag Estimator', slug: 'portfolio-turnover-tax-drag-calculator', cat: 'investment', icon: '🔄', badge: 'CHURN DRAG', f: F_TYPES.PERCENTAGE, desc: 'Estimate implicit transaction costs and capital gains tax leakage from high-churn active trading.' },
    { name: 'Trailing Stop-Loss & Target Exit Profit Calculator', slug: 'trailing-stop-loss-calculator', cat: 'investment', icon: '🎯', badge: 'RISK MANAGEMENT', f: F_TYPES.PERCENTAGE, desc: 'Calculate dynamic trailing stop-loss price levels and lock in unrealized swing trading profits.' },
    { name: 'Risk-Reward Ratio (RRR) Trading Position Size Calculator', slug: 'risk-reward-position-size-calculator', cat: 'investment', icon: '📏', badge: '1:3 RISK REWARD', f: F_TYPES.PERCENTAGE, desc: 'Calculate exact share quantity to buy based on maximum 1% account risk and stop-loss distance.' },
    { name: 'Stock Option Greeks Delta & Gamma Estimator', slug: 'option-greeks-delta-calculator', cat: 'investment', icon: '📐', badge: 'NIFTY / BANKNIFTY', f: F_TYPES.PERCENTAGE, desc: 'Estimate Nifty & Bank Nifty call/put option premium sensitivity with Delta, Gamma, and Theta decay.' },
    { name: 'Covered Call Strategy Monthly Cash Flow Calculator', slug: 'covered-call-monthly-income-calculator', cat: 'investment', icon: '💵', badge: 'OPTIONS INCOME', f: F_TYPES.PERCENTAGE, desc: 'Calculate recurring monthly cash flow from selling Out-of-the-Money call options against stock holdings.' },
    { name: 'Iron Condor Range Bound Options Yield Calculator', slug: 'iron-condor-options-yield-calculator', cat: 'investment', icon: '🦅', badge: 'NON-DIRECTIONAL', f: F_TYPES.PERCENTAGE, desc: 'Calculate maximum profit, margin requirement, and break-even points for 4-legged Iron Condor trades.' },
    { name: 'Futures Leverage & Margin Call Calculator', slug: 'futures-margin-leverage-calculator', cat: 'investment', icon: '⚡', badge: 'SPAN + EXPOSURE', f: F_TYPES.PERCENTAGE, desc: 'Calculate leverage multiplier, MTM loss tolerance, and maintenance margin for Index Futures contracts.' },
    { name: 'Algorithmic Trading Strategy Backtest CAGR Calculator', slug: 'algo-trading-backtest-cagr-calculator', cat: 'investment', icon: '🤖', badge: 'SHARPE & SORTINO', f: F_TYPES.CAGR, desc: 'Calculate annualized return (CAGR), Maximum Drawdown (MDD), and Sharpe Ratio for trading systems.' },
    { name: 'Sovereign Green Bonds (SGrB) Yield Calculator', slug: 'sovereign-green-bonds-calculator', cat: 'investment', icon: '🌿', badge: 'GREEN INFRA 7.3%', f: F_TYPES.COMPOUND, desc: 'Calculate semi-annual coupon yield and maturity payouts from Govt of India Sovereign Green Bonds.' },
    { name: 'Floating Rate Savings Bond (RBI 8.05%) Calculator', slug: 'rbi-floating-rate-savings-bonds-calculator', cat: 'investment', icon: '🌊', badge: 'NSC + 0.35% SPREAD', f: F_TYPES.SIMPLE, desc: 'Calculate semi-annual interest payouts on RBI Floating Rate Savings Bonds (FRSB 2020T).' },
    { name: 'Bharat Bond ETF 2030 / 2032 Maturity Calculator', slug: 'bharat-bond-etf-maturity-calculator', cat: 'investment', icon: '🇮🇳', badge: 'AAA PSU DEBT', f: F_TYPES.COMPOUND, desc: 'Calculate tax-efficient maturity returns investing in Edelweiss Bharat Bond Target Maturity ETF.' },
    { name: 'Silver ETF & Sovereign Bullion Compounding Calculator', slug: 'silver-etf-compounding-calculator', cat: 'investment', icon: '🥈', badge: '99.9% PURE SILVER', f: F_TYPES.COMPOUND, desc: 'Project multi-year silver price appreciation, ETF NAV tracking, and industrial demand CAGR.' },
    { name: 'REITs (Real Estate Investment Trust) Dividend Calculator', slug: 'reit-dividend-yield-calculator', cat: 'investment', icon: '🏢', badge: 'QUARTERLY NDCF', f: F_TYPES.SIMPLE, desc: 'Calculate quarterly dividend and interest distributions from Embassy, Mindspace, and Brookfield REITs.' },
    { name: 'InvITs (Infrastructure Investment Trust) Cash Flow Calculator', slug: 'invit-cash-flow-calculator', cat: 'investment', icon: '🛣️', badge: 'HIGH YIELD 9%–11%', f: F_TYPES.SIMPLE, desc: 'Calculate stable cash flow distributions from PowerGrid InvIT, IRB InvIT, and National Highways trust.' },

    // --- 2. Banking, Deposits & Fixed Income Tools (25 additional) ---
    { name: 'SBI Amrit Kalash 400 Days FD Calculator', slug: 'sbi-amrit-kalash-fd-calculator', cat: 'banking', icon: '🏦', badge: '7.10% / 7.60% SENIOR', f: F_TYPES.FD, desc: 'Calculate exact maturity value for SBI special 400-day Amrit Kalash deposit scheme.' },
    { name: 'SBI WeCare Senior Citizen Special FD Calculator', slug: 'sbi-wecare-senior-fd-calculator', cat: 'banking', icon: '👴', badge: '0.50% EXTRA BONUS', f: F_TYPES.FD, desc: 'Calculate 5 to 10 year term deposit interest with extra 50 bps premium for senior citizens.' },
    { name: 'HDFC Bank Special Edition 35 & 55 Month FD Calculator', slug: 'hdfc-special-fd-calculator', cat: 'banking', icon: '🏛️', badge: '7.25%–7.75% ROI', f: F_TYPES.FD, desc: 'Calculate interest payout and compounding returns on HDFC Bank special tenor term deposits.' },
    { name: 'ICICI Bank Golden Shield Senior Deposit Calculator', slug: 'icici-golden-shield-fd-calculator', cat: 'banking', icon: '🛡️', badge: 'SENIOR SPECIAL', f: F_TYPES.FD, desc: 'Calculate maturity value on ICICI Bank Golden Shield long-term fixed deposits.' },
    { name: 'Post Office Time Deposit (1, 2, 3, 5 Years POTD) Calculator', slug: 'potd-post-office-time-deposit-calculator', cat: 'banking', icon: '📬', badge: 'GOVT 7.5% 80C', f: F_TYPES.FD, desc: 'Calculate quarterly compounded interest on Post Office Time Deposit accounts (POTD).' },
    { name: 'Post Office 5-Year National Savings RD Calculator', slug: 'post-office-rd-calculator', cat: 'banking', icon: '📅', badge: '6.7% QUARTERLY', f: F_TYPES.RD, desc: 'Calculate maturity proceeds for Post Office 5-year Recurring Deposit account with quarterly compounding.' },
    { name: 'Flexi Recurring Deposit (Variable Monthly Step-In) Calculator', slug: 'flexi-rd-calculator', cat: 'banking', icon: '🔄', badge: 'VARIABLE DEPOSIT', f: F_TYPES.RD, desc: 'Calculate maturity returns when depositing flexible variable amounts every month (SBI / ICICI Flexi RD).' },
    { name: 'Tax-Saving 5-Year Lock-In FD (Section 80C) Calculator', slug: 'tax-saving-fd-calculator', cat: 'banking', icon: '🧾', badge: '₹1.5L 80C BENEFIT', f: F_TYPES.FD, desc: 'Calculate Section 80C tax deduction and 5-year guaranteed maturity returns on Tax Saver FDs.' },
    { name: 'Cumulative vs Non-Cumulative FD Payout Comparator', slug: 'cumulative-vs-non-cumulative-fd-calculator', cat: 'banking', icon: '🔀', badge: 'REINVEST VS PAYOUT', f: F_TYPES.FD, desc: 'Compare quarterly compounding reinvestment wealth against regular monthly/quarterly interest cash flows.' },
    { name: 'Monthly Interest Payout FD for Pensioners Calculator', slug: 'monthly-interest-payout-fd-calculator', cat: 'banking', icon: '💵', badge: 'DISCOUNTED MONTHLY', f: F_TYPES.SIMPLE, desc: 'Calculate discounted monthly interest credited to your savings account from a lump-sum bank FD.' },
    { name: 'Quarterly Interest Compounding FD Calculator', slug: 'quarterly-compounding-fd-calculator', cat: 'banking', icon: '📈', badge: 'ACTUAL EFFECTIVE APY', f: F_TYPES.FD, desc: 'Calculate true Effective Annualized Yield (APY) resulting from 4-quarter compounding per year.' },
    { name: 'Auto-Sweep Savings Account (Sweep-In FD) Calculator', slug: 'auto-sweep-account-calculator', cat: 'banking', icon: '🧹', badge: 'SWEEP-IN FD 7%+', f: F_TYPES.FD, desc: 'Calculate high FD interest earned on idle bank savings balance while maintaining instant liquidity.' },
    { name: 'Penalty on Premature FD Withdrawal Calculator', slug: 'premature-fd-break-penalty-calculator', cat: 'banking', icon: '⚠️', badge: '0.5%–1.0% PENALTY', f: F_TYPES.PERCENTAGE, desc: 'Calculate reduction in interest payout and net penalty when breaking a fixed deposit before maturity.' },
    { name: 'Loan Against Fixed Deposit (Overdraft vs FD Break) Calculator', slug: 'loan-against-fd-od-calculator', cat: 'banking', icon: '💳', badge: 'FD + 1% OD RATE', f: F_TYPES.EMI, desc: 'Compare taking a 1% overdraft against your FD versus paying penalty to break the deposit early.' },
    { name: 'Small Finance Bank High-Yield FD (9% Interest) Calculator', slug: 'small-finance-bank-fd-calculator', cat: 'banking', icon: '⭐', badge: 'UP TO 9.0% ROI', f: F_TYPES.FD, desc: 'Calculate maturity value with DICGC ₹5 Lakh deposit insurance on SFBs (AU, Equitas, Ujjivan, Unity).' },
    { name: 'NRE Fixed Deposit (100% Tax-Free NRI Interest) Calculator', slug: 'nre-fixed-deposit-calculator', cat: 'banking', icon: '✈️', badge: 'TAX-FREE NRI', f: F_TYPES.FD, desc: 'Calculate completely tax-free interest and repatriable maturity amount on Non-Resident External FDs.' },
    { name: 'NRO Fixed Deposit (Withholding Tax Net Return) Calculator', slug: 'nro-fixed-deposit-calculator', cat: 'banking', icon: '🇮🇳', badge: '30% TDS + DTAA', f: F_TYPES.FD, desc: 'Calculate net post-tax maturity returns on Non-Resident Ordinary rupee income deposits.' },
    { name: 'FCNR (Foreign Currency Non-Resident) USD Deposit Calculator', slug: 'fcnr-usd-deposit-calculator', cat: 'banking', icon: '💵', badge: 'USD / GBP / EUR FD', f: F_TYPES.FD, desc: 'Calculate guaranteed tax-free foreign currency returns without currency conversion loss.' },
    { name: 'RFC (Resident Foreign Currency) Account Interest Calculator', slug: 'rfc-foreign-currency-calculator', cat: 'banking', icon: '💱', badge: 'RETURNING NRI', f: F_TYPES.FD, desc: 'Calculate interest on foreign currency funds held by returning NRIs who have become Indian residents.' },
    { name: 'Treasury Bills (91, 182, 364 Days T-Bills Discount) Calculator', slug: 't-bills-discount-yield-calculator', cat: 'banking', icon: '🏛️', badge: 'ZERO DEFAULT RISK', f: F_TYPES.SIMPLE, desc: 'Calculate annualized yield on Govt of India Treasury Bills issued at discount to face value.' },
    { name: 'State Development Loans (SDL) Govt Bond Yield Calculator', slug: 'sdl-state-govt-bond-calculator', cat: 'banking', icon: '📜', badge: 'STATE GOVT 7.5%+', f: F_TYPES.COMPOUND, desc: 'Calculate semi-annual coupon yields on State Government backed sovereign bond auctions.' },
    { name: 'Certificate of Deposit (CD) Money Market Yield Calculator', slug: 'certificate-of-deposit-cd-calculator', cat: 'banking', icon: '📑', badge: 'WHOLESALE CD', f: F_TYPES.SIMPLE, desc: 'Calculate short-term institutional money market yield on bank Certificates of Deposit.' },
    { name: 'Commercial Paper (CP) Short-Term Corporate Yield Calculator', slug: 'commercial-paper-cp-calculator', cat: 'banking', icon: '🏭', badge: 'CP DISCOUNT RATE', f: F_TYPES.SIMPLE, desc: 'Calculate corporate short-term borrowing cost and investor yield on commercial paper issues.' },
    { name: 'Post Office Savings Account Interest & Exemption Calculator', slug: 'post-office-savings-account-calculator', cat: 'banking', icon: '📬', badge: '4.0% + ₹3.5K EXEMPT', f: F_TYPES.SIMPLE, desc: 'Calculate Section 10(15) tax-exempt interest on Post Office individual and joint savings accounts.' },
    { name: 'Mahila Samman Savings Certificate Maturity Calculator', slug: 'mssc-womens-scheme-calculator', cat: 'banking', icon: '👩', badge: '7.5% 2-YR SCHEME', f: F_TYPES.FD, desc: 'Calculate 2-year compounding maturity value for women investors under Govt MSSC scheme.' },

    // --- 3. Loans, Mortgages & Debt Management Tools (25 additional) ---
    { name: '1 Extra EMI Per Year Loan Prepayment Calculator', slug: '1-extra-emi-prepayment-calculator', cat: 'loans', icon: '⚡', badge: 'CUT 5–7 YRS TENURE', f: F_TYPES.EMI, desc: 'See how paying just 1 extra monthly EMI each year cuts your 20-year home loan by over 5 years.' },
    { name: 'Annual 5% Step-Up EMI Loan Repayment Calculator', slug: '5-percent-step-up-emi-calculator', cat: 'loans', icon: '🚀', badge: 'FASTER LOAN FREEDOM', f: F_TYPES.EMI, desc: 'Calculate interest savings and tenure reduction by stepping up your monthly EMI by 5% each year.' },
    { name: '0% EMI vs Cash Discount Reality Checker', slug: 'zero-percent-emi-vs-discount-calculator', cat: 'loans', icon: '🛍️', badge: 'HIDDEN 15% APR', f: F_TYPES.PERCENTAGE, desc: 'Expose hidden processing fees and upfront cash discounts masked under "No Cost EMI" schemes.' },
    { name: 'Credit Card Balance Transfer & 0% Promo APR Calculator', slug: 'credit-card-balance-transfer-calculator', cat: 'loans', icon: '🔄', badge: 'BALANCE TRANSFER', f: F_TYPES.EMI, desc: 'Calculate interest savings by transferring high 42% APR credit card debt to a lower-interest loan.' },
    { name: 'Payoff 5 Credit Cards Debt Avalanche Calculator', slug: 'debt-avalanche-multi-card-calculator', cat: 'loans', icon: '🏔️', badge: 'MAX INTEREST SAVED', f: F_TYPES.EMI, desc: 'Prioritize paying highest-interest credit cards first to minimize total interest paid.' },
    { name: 'Payoff 5 Credit Cards Debt Snowball Calculator', slug: 'debt-snowball-multi-card-calculator', cat: 'loans', icon: '⛄', badge: 'PSYCHOLOGICAL WINS', f: F_TYPES.EMI, desc: 'Clear smallest credit card balances first to build psychological momentum and debt freedom.' },
    { name: 'Bridge Loan for Buying New Home Before Selling Calculator', slug: 'bridge-loan-real-estate-calculator', cat: 'loans', icon: '🌉', badge: 'SHORT TERM BRIDGE', f: F_TYPES.EMI, desc: 'Calculate short-term interest costs of bridge financing while waiting to sell an existing property.' },
    { name: 'Top-Up Home Loan vs Personal Loan Interest Comparison', slug: 'top-up-home-loan-calculator', cat: 'loans', icon: '🏠', badge: '8.8% VS 14% APR', f: F_TYPES.EMI, desc: 'Compare low-interest home loan top-up against costly unsecured personal loans.' },
    { name: 'Reverse Mortgage Monthly Payout for Seniors Calculator', slug: 'reverse-mortgage-payout-calculator', cat: 'loans', icon: '🏡', badge: 'AGE 60+ LIFELONG', f: F_TYPES.SIMPLE, desc: 'Calculate tax-free monthly pension payments received by pledging home equity under reverse mortgage.' },
    { name: 'Commercial Shop & Office Loan EMI Calculator', slug: 'commercial-property-loan-calculator', cat: 'loans', icon: '🏬', badge: 'COMMERCIAL REAL ESTATE', f: F_TYPES.EMI, desc: 'Calculate monthly EMI, down payment, and processing charges for commercial shops and offices.' },
    { name: 'Plot Purchase & Land Construction Composite Loan Calculator', slug: 'plot-plus-construction-composite-loan-calculator', cat: 'loans', icon: '📐', badge: 'PLOT + CONSTRUCTION', f: F_TYPES.EMI, desc: 'Calculate staged construction disbursals and composite EMI for buying land and building a house.' },
    { name: 'Home Renovation & Interior Decor Loan EMI Calculator', slug: 'home-renovation-loan-calculator', cat: 'loans', icon: '🔨', badge: 'INTERIOR LOAN', f: F_TYPES.EMI, desc: 'Calculate EMI for home improvements, modular kitchen, and interior renovation loans.' },
    { name: 'Microfinance & SHG Group Lending EMI Calculator', slug: 'microfinance-shg-loan-calculator', cat: 'loans', icon: '🤝', badge: 'SHG / JLG LOANS', f: F_TYPES.EMI, desc: 'Calculate weekly and monthly loan repayments for Self-Help Groups and microfinance borrowers.' },
    { name: 'Pradhan Mantri Mudra Yojana (Shishu/Kishore/Tarun) Calculator', slug: 'mudra-loan-calculator', cat: 'loans', icon: '🏪', badge: 'COLLATERAL-FREE MUDRA', f: F_TYPES.EMI, desc: 'Calculate EMI for Govt Mudra small business loans up to ₹10 Lakh with zero collateral.' },
    { name: 'Stand-Up India SC/ST/Women Entrepreneur Loan Calculator', slug: 'standup-india-loan-calculator', cat: 'loans', icon: '🚀', badge: '₹10L TO ₹1CR LOAN', f: F_TYPES.EMI, desc: 'Calculate composite loan repayments for greenfield enterprises under Stand-Up India scheme.' },
    { name: 'Emergency Credit Line (ECLGS) Business Loan Calculator', slug: 'eclgs-emergency-credit-calculator', cat: 'loans', icon: '🛡️', badge: '100% GOVT GUARANTEE', f: F_TYPES.EMI, desc: 'Calculate capped interest rate and moratorium schedule for MSME emergency credit lines.' },
    { name: 'Peer-to-Peer (P2P) Lending NBFC Borrowing Cost Calculator', slug: 'p2p-lending-borrowing-calculator', cat: 'loans', icon: '🌐', badge: 'P2P NBFC 12%–24%', f: F_TYPES.EMI, desc: 'Calculate net borrowing cost including platform registration and processing fees on P2P lending portals.' },
    { name: 'Buy Now Pay Later (BNPL) Late Fee APR Trap Calculator', slug: 'bnpl-late-fee-apr-calculator', cat: 'loans', icon: '📱', badge: 'BNPL REAL APR', f: F_TYPES.PERCENTAGE, desc: 'Calculate the true annualized APR of late payment penalty charges on Amazon Pay Later & Simpl.' },
    { name: 'Student Education Loan Moratorium Interest Calculator', slug: 'education-loan-moratorium-accrual-calculator', cat: 'loans', icon: '🎓', badge: 'SIMPLE INTEREST ACCRUAL', f: F_TYPES.SIMPLE, desc: 'Calculate simple interest accumulated during college study period and grace moratorium months.' },
    { name: 'Study Abroad Foreign Currency Education Loan Calculator', slug: 'study-abroad-forex-education-loan-calculator', cat: 'loans', icon: '✈️', badge: 'USD / GBP LOAN', f: F_TYPES.EMI, desc: 'Calculate foreign currency student loan EMI and estimate currency depreciation impact over 10 years.' },
    { name: 'Tractor & Agricultural Equipment Loan EMI Calculator', slug: 'tractor-agri-equipment-loan-calculator', cat: 'loans', icon: '🚜', badge: 'AGRI EQUIPMENT', f: F_TYPES.EMI, desc: 'Calculate half-yearly and annual seasonal installment plans for farm tractor loans.' },
    { name: 'Kisan Credit Card (KCC) 4% Subvention Loan Calculator', slug: 'kisan-credit-card-kcc-calculator', cat: 'loans', icon: '🌾', badge: '4% INTEREST SUBVENTION', f: F_TYPES.SIMPLE, desc: 'Calculate 3% prompt repayment incentive on crop loans up to ₹3 Lakh under KCC scheme.' },
    { name: 'Solar Rooftop Loan Subsidized EMI Calculator', slug: 'solar-rooftop-subsidized-loan-calculator', cat: 'loans', icon: '☀️', badge: 'PM SURYA GHAR 7%', f: F_TYPES.EMI, desc: 'Calculate subsidized rooftop solar loan EMI and electricity bill savings under PM Surya Ghar Yojana.' },
    { name: 'Used Commercial Vehicle & Truck Loan EMI Calculator', slug: 'used-commercial-vehicle-loan-calculator', cat: 'loans', icon: '🚚', badge: 'HEAVY VEHICLE', f: F_TYPES.EMI, desc: 'Calculate EMI, down payment, and operating breakeven for second-hand commercial trucks and buses.' },
    { name: 'Gold Overdraft (OD) Line of Credit Interest Calculator', slug: 'gold-overdraft-line-of-credit-calculator', cat: 'loans', icon: '🥇', badge: 'PAY ONLY FOR DAYS USED', f: F_TYPES.SIMPLE, desc: 'Calculate daily interest charges on gold loan overdraft accounts where interest is paid only on utilized sum.' },

    // --- 4. Income Tax & Payroll Tools (20 additional) ---
    { name: 'Section 80D Health Insurance Parents Deduction Calculator', slug: 'section-80d-parents-health-insurance-calculator', cat: 'tax', icon: '🩺', badge: 'UP TO ₹1,00,000', f: F_TYPES.TAX, desc: 'Calculate maximum tax savings covering family (₹25k) and senior citizen parents (₹50k) under 80D.' },
    { name: 'Section 80E Education Loan Interest 8-Year Deduction Calculator', slug: 'section-80e-education-loan-tax-calculator', cat: 'tax', icon: '🎓', badge: 'UNLIMITED 80E DEDUCTION', f: F_TYPES.TAX, desc: 'Calculate 100% tax exemption on education loan interest paid for up to 8 consecutive assessment years.' },
    { name: 'Section 80EEA First-Time Affordable Home Buyer Tax Calculator', slug: 'section-80eea-affordable-home-loan-tax-calculator', cat: 'tax', icon: '🏡', badge: 'EXTRA ₹1.5L BENEFIT', f: F_TYPES.TAX, desc: 'Calculate additional ₹1.5 Lakh interest deduction for affordable housing under Section 80EEA.' },
    { name: 'Section 80CCD(1B) NPS ₹50,000 Additional Deduction Calculator', slug: 'nps-80ccd1b-tax-saving-calculator', cat: 'tax', icon: '🛡️', badge: 'EXTRA ₹50K OVER 80C', f: F_TYPES.TAX, desc: 'Calculate exact tax savings in 30% slab by investing ₹50,000 in Tier-1 National Pension System.' },
    { name: 'Leave Encashment Exemption on Retirement Calculator', slug: 'leave-encashment-tax-exemption-calculator', cat: 'tax', icon: '🏖️', badge: '₹25 LAKH EXEMPTION', f: F_TYPES.SALARY, desc: 'Calculate tax-exempt earned leave encashment upon resignation or retirement under revised ₹25L cap.' },
    { name: 'Voluntary Retirement Scheme (VRS) ₹5L Exemption Calculator', slug: 'vrs-compensation-tax-exemption-calculator', cat: 'tax', icon: '🚪', badge: 'SECTION 10(10C)', f: F_TYPES.SALARY, desc: 'Calculate tax exemption on voluntary retirement compensation received up to ₹5,00,000.' },
    { name: 'Retrenchment & Severance Pay Tax Relief Calculator', slug: 'severance-retrenchment-tax-calculator', cat: 'tax', icon: '💼', badge: 'SECTION 10(10B)', f: F_TYPES.SALARY, desc: 'Calculate tax-exempt severance pay for industrial workmen based on 15 days average pay per year.' },
    { name: 'Section 89(1) Arrears of Salary Tax Relief Calculator', slug: 'section-89-salary-arrears-tax-relief-calculator', cat: 'tax', icon: '📑', badge: 'FORM 10E RELIEF', f: F_TYPES.TAX, desc: 'Calculate tax relief under Section 89 when receiving salary arrears or pension revisions in lump sum.' },
    { name: 'House Property Loss Set-Off Against Salary (₹2 Lakh) Calculator', slug: 'house-property-loss-setoff-calculator', cat: 'tax', icon: '🏠', badge: '₹2L SET-OFF LIMIT', f: F_TYPES.TAX, desc: 'Calculate tax refund resulting from setting off home loan interest loss against active salary income.' },
    { name: 'Advance Tax Installments (15%, 45%, 75%, 100%) Calculator', slug: 'advance-tax-installments-calculator', cat: 'tax', icon: '📅', badge: 'JUNE/SEPT/DEC/MAR', f: F_TYPES.TAX, desc: 'Calculate quarterly advance tax installments due on 15th June, September, December, and March.' },
    { name: 'Interest under Section 234A (Late ITR Filing) Calculator', slug: 'section-234a-late-itr-interest-calculator', cat: 'tax', icon: '⏰', badge: '1% PER MONTH', f: F_TYPES.PERCENTAGE, desc: 'Calculate 1% per month penal interest for filing income tax return past the July 31st due date.' },
    { name: 'Interest under Section 234B (Advance Tax Default) Calculator', slug: 'section-234b-advance-tax-default-calculator', cat: 'tax', icon: '⚠️', badge: 'DEFAULT UNDER 90%', f: F_TYPES.PERCENTAGE, desc: 'Calculate 1% monthly penalty interest for paying less than 90% of assessed tax before March 31.' },
    { name: 'Interest under Section 234C (Advance Tax Deferment) Calculator', slug: 'section-234c-advance-tax-deferment-calculator', cat: 'tax', icon: '📊', badge: 'DEFERMENT PENALTY', f: F_TYPES.PERCENTAGE, desc: 'Calculate quarterly shortfall interest under Section 234C for advance tax installment delays.' },
    { name: 'GST Input Tax Credit (ITC) Reversal for Mixed Supplies Calculator', slug: 'gst-itc-reversal-calculator', cat: 'tax', icon: '🧾', badge: 'RULE 42 & 43 ITC', f: F_TYPES.PERCENTAGE, desc: 'Calculate proportionate ITC reversal on common business inputs used for exempt versus taxable supplies.' },
    { name: 'GST Composition Scheme (1% / 5% / 6% Turnover Tax) Calculator', slug: 'gst-composition-scheme-calculator', cat: 'tax', icon: '🏷️', badge: 'SIMPLIFIED COMPOSITION', f: F_TYPES.PERCENTAGE, desc: 'Calculate flat turnover tax for small traders (1%), manufacturers (1%), and service providers (6%).' },
    { name: 'Export of Services Zero-Rated LUT vs IGST Refund Calculator', slug: 'gst-export-lut-refund-calculator', cat: 'tax', icon: '🌐', badge: 'LUT ZERO-RATED', f: F_TYPES.PERCENTAGE, desc: 'Compare zero-tax Letter of Undertaking (LUT) exports against IGST payment and refund claiming.' },
    { name: 'Corporate Tax Surcharge & MAT (Minimum Alternate Tax) Calculator', slug: 'corporate-tax-mat-calculator', cat: 'tax', icon: '🏢', badge: '15% MAT ON BOOK PROFIT', f: F_TYPES.TAX, desc: 'Calculate Minimum Alternate Tax (15% + cess) and determine MAT credit carry-forward eligibility.' },
    { name: 'Section 115BAA Domestic Manufacturing Company 15% Tax Calculator', slug: 'section-115baa-corporate-tax-calculator', cat: 'tax', icon: '🏭', badge: 'CONCESSIONAL 15% RATE', f: F_TYPES.TAX, desc: 'Calculate effective 17.16% corporate tax rate for new domestic manufacturing entities.' },
    { name: 'NRI Repatriation 15CA & 15CB Tax Withholding Calculator', slug: 'nri-15ca-15cb-tax-withholding-calculator', cat: 'tax', icon: '💱', badge: 'FORM 15CA/CB', f: F_TYPES.TAX, desc: 'Calculate applicable withholding tax and remittance certification requirements for overseas wire transfers.' },
    { name: 'Dividend Income Slab Tax & Section 194 TDS Calculator', slug: 'dividend-income-slab-tax-calculator', cat: 'tax', icon: '🪙', badge: '10% TDS ABOVE ₹5K', f: F_TYPES.TAX, desc: 'Calculate net dividend receipts after 10% TDS deduction and compute final slab tax liability in ITR.' },

    // --- 5. Retirement, Pension & FIRE Tools (15 additional) ---
    { name: 'Atal Pension Yojana (APY ₹1,000 to ₹5,000 Guaranteed) Calculator', slug: 'apy-atal-pension-yojana-calculator', cat: 'retirement', icon: '🛡️', badge: 'GOVT GUARANTEED APY', f: F_TYPES.RETIREMENT, desc: 'Calculate monthly contributions required based on entry age (18–40) for guaranteed ₹5k monthly pension.' },
    { name: 'PM Vaya Vandana Yojana (PMVVY Guaranteed Pension) Calculator', slug: 'pmvvy-pension-scheme-calculator', cat: 'retirement', icon: '👴', badge: 'LIC PMVVY 7.4%', f: F_TYPES.SIMPLE, desc: 'Calculate monthly and quarterly pension payouts for senior citizens under LIC PMVVY scheme.' },
    { name: 'NPS Tier-II Liquid Account Growth & Tax Calculator', slug: 'nps-tier-2-account-growth-calculator', cat: 'retirement', icon: '📈', badge: 'ZERO LOCK-IN LIQUID', f: F_TYPES.SIP, desc: 'Calculate investment growth and capital gains tax on voluntary withdrawals from NPS Tier-2 account.' },
    { name: 'NPS Corporate Model (14% Employer Contribution) Calculator', slug: 'nps-corporate-model-14percent-calculator', cat: 'retirement', icon: '👔', badge: 'SECTION 80CCD(2)', f: F_TYPES.SIP, desc: 'Calculate massive tax deductions under Section 80CCD(2) with 14% employer NPS contributions.' },
    { name: 'Defense & Armed Forces OROP Pension Estimator', slug: 'orop-defense-pension-calculator', cat: 'retirement', icon: '🎖️', badge: 'OROP PENSION', f: F_TYPES.SALARY, desc: 'Estimate revised defense pension based on rank, service years, and One Rank One Pension slabs.' },
    { name: 'Central Govt Employees Unified Pension Scheme (UPS) Calculator', slug: 'ups-unified-pension-scheme-calculator', cat: 'retirement', icon: '🏛️', badge: '50% ASSURED PENSION', f: F_TYPES.SALARY, desc: 'Calculate 50% assured pension based on last 12 months average basic pay for Govt employees.' },
    { name: 'Post-Retirement 60/40 Equity-Debt Asset Allocation Rebalancer', slug: 'retirement-asset-allocation-rebalance-calculator', cat: 'retirement', icon: '⚖️', badge: '60/40 BALANCED', f: F_TYPES.RETIREMENT, desc: 'Calculate annual rebalancing transfers between equity and debt buckets to protect capital.' },
    { name: 'Retirement Healthcare & Nursing Care Cost Buffer Calculator', slug: 'retirement-healthcare-nursing-buffer-calculator', cat: 'retirement', icon: '🩺', badge: 'GERIATRIC CARE', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate specialized geriatric healthcare and assisted living nursing fund required from age 75 to 90.' },
    { name: 'Flamingo FIRE (Semi-Retirement with Dividends) Calculator', slug: 'flamingo-fire-calculator', cat: 'retirement', icon: '🦩', badge: 'FLAMINGO FIRE', f: F_TYPES.FIRE, desc: 'Save 50% of your retirement target, then work part-time while compounding grows the rest.' },
    { name: 'Lean FIRE vs Fat FIRE Gap Estimator', slug: 'lean-vs-fat-fire-gap-calculator', cat: 'retirement', icon: '💎', badge: 'FIRE GAP ANALYSIS', f: F_TYPES.FIRE, desc: 'Compare basic survival early retirement corpus against high-comfort luxury retirement budget.' },
    { name: '4% Safe Withdrawal Rule vs Dynamic Guyton-Klinger Calculator', slug: 'safe-withdrawal-guyton-klinger-calculator', cat: 'retirement', icon: '📊', badge: 'DYNAMIC SWR RULES', f: F_TYPES.SWP, desc: 'Compare standard 4% fixed rule against variable Guyton-Klinger guardrails to avoid portfolio ruin.' },
    { name: 'Sequence of Returns Risk (SRR) Simulator', slug: 'sequence-of-returns-risk-simulator', cat: 'retirement', icon: '📉', badge: 'MARKET CRASH IN RETIREMENT', f: F_TYPES.SWP, desc: 'Simulate early retirement survival if a 30% stock market crash occurs in Year 1 of retirement.' },
    { name: 'Private Sector Gratuity 5-Year Eligibility Calculator', slug: 'private-sector-gratuity-eligibility-calculator', cat: 'retirement', icon: '🎁', badge: '15/26 FORMULA', f: F_TYPES.SALARY, desc: 'Calculate exact gratuity entitlement based on 15 days salary per completed year of service.' },
    { name: 'Post Office SCSS vs Bank Senior Citizen FD Comparator', slug: 'scss-vs-senior-citizen-fd-calculator', cat: 'retirement', icon: '👴', badge: '8.2% GOVT VS BANK FD', f: F_TYPES.FD, desc: 'Compare Govt-guaranteed 8.2% SCSS quarterly payouts against leading private bank senior FDs.' },
    { name: 'Pension Commutation (1/3rd Lump Sum vs Full Annuity) Calculator', slug: 'pension-commutation-calculator', cat: 'retirement', icon: '💰', badge: 'COMMUTATION 40%', f: F_TYPES.SIMPLE, desc: 'Calculate tax-free lump sum received by commuting up to 40% of pension against reduced monthly annuity.' },

    // --- 6. Insurance & Protection Tools (10 additional) ---
    { name: 'Human Life Value (Income Replacement HLV) Calculator', slug: 'hlv-human-life-value-calculator', cat: 'insurance', icon: '🛡️', badge: 'HLV 15X-20X INCOME', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate exact term life insurance required based on present value of future earnings and family liabilities.' },
    { name: 'Health Insurance Super Top-Up vs Base Cover Calculator', slug: 'super-topup-health-insurance-calculator', cat: 'insurance', icon: '🏥', badge: 'SUPER TOP-UP SAVINGS', f: F_TYPES.SAVINGS_GOAL, desc: 'Save 60% on medical insurance by combining a ₹5 Lakh base policy with a ₹50 Lakh Super Top-Up cover.' },
    { name: 'Critical Illness vs Disability Income Protection Calculator', slug: 'critical-illness-vs-disability-calculator', cat: 'insurance', icon: '🩺', badge: 'DISABILITY INCOME', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate monthly income replacement cover needed during permanent disability or critical illness recovery.' },
    { name: 'Keyman Insurance Coverage for Startup Founders Calculator', slug: 'keyman-insurance-founder-calculator', cat: 'insurance', icon: '👔', badge: 'KEYMAN PROTECTION', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate life insurance coverage on startup key founders to protect investors and business operations.' },
    { name: 'Term Insurance Till Age 60 vs Whole Life Age 85 Comparison', slug: 'term-plan-till-60-vs-85-calculator', cat: 'insurance', icon: '⏳', badge: 'TERM TILL 60 VS 85', f: F_TYPES.SIP, desc: 'See why buying term insurance till retirement age 60 is 70% cheaper than whole-life policies.' },
    { name: 'Zero Cost Term Insurance (Return of Premium TROP) Reality', slug: 'trop-term-return-of-premium-calculator', cat: 'insurance', icon: '💸', badge: 'TROP OPPORTUNITY COST', f: F_TYPES.SIP, desc: 'Calculate the massive opportunity cost of buying costly Return of Premium (TROP) plans.' },
    { name: 'Comprehensive vs Third-Party Motor Insurance Calculator', slug: 'comprehensive-vs-third-party-motor-calculator', cat: 'insurance', icon: '🚗', badge: 'OD + TP COVER', f: F_TYPES.PERCENTAGE, desc: 'Compare Own Damage (OD) premium against mandatory third-party liability insurance rates.' },
    { name: 'Homeowners & Fire Insurance Building Replacement Calculator', slug: 'home-fire-insurance-replacement-calculator', cat: 'insurance', icon: '🏡', badge: 'CONSTRUCTION COST COVER', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate building reconstruction cost per sq ft for fire, earthquake, and flood insurance protection.' },
    { name: 'Cyber Fraud & Identity Theft Insurance Policy Calculator', slug: 'cyber-fraud-insurance-coverage-calculator', cat: 'insurance', icon: '💻', badge: 'ONLINE BANKING COVER', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate coverage limits for phishing, digital banking fraud, and online identity theft insurance.' },
    { name: 'Travel Insurance Medical Expense Claim Buffer Calculator', slug: 'travel-insurance-medical-buffer-calculator', cat: 'insurance', icon: '✈️', badge: '$500K EMERGENCY COVER', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate overseas emergency hospitalization and trip cancellation cover needed for USA/Schengen visas.' },

    // --- 7. Business & Startup Finance Tools (12 additional) ---
    { name: 'Startup Burn Multiple & Capital Efficiency Calculator', slug: 'startup-burn-multiple-calculator', cat: 'business', icon: '🔥', badge: 'NET BURN / NET NEW ARR', f: F_TYPES.PERCENTAGE, desc: 'Measure venture capital capital efficiency by calculating how much cash is burned to generate ₹1 of ARR.' },
    { name: 'SaaS Quick Ratio & Net Revenue Retention (NRR) Calculator', slug: 'saas-quick-ratio-nrr-calculator', cat: 'business', icon: '📊', badge: 'NRR > 120%', f: F_TYPES.PERCENTAGE, desc: 'Calculate expansion revenue, churn rate, and SaaS quick ratio to assess business growth velocity.' },
    { name: 'SaaS Magic Number (Sales Efficiency Multiple) Calculator', slug: 'saas-magic-number-calculator', cat: 'business', icon: '🪄', badge: 'MAGIC NUMBER > 1.0', f: F_TYPES.PERCENTAGE, desc: 'Calculate marketing and sales ROI to determine whether a SaaS company should accelerate ad spend.' },
    { name: 'Economic Value Added (EVA) Corporate Profit Calculator', slug: 'economic-value-added-eva-calculator', cat: 'business', icon: '💎', badge: 'NOPAT - CAPITAL CHARGE', f: F_TYPES.PERCENTAGE, desc: 'Calculate true economic profit generated by a company above its Weighted Average Cost of Capital.' },
    { name: 'Altman Z-Score Bankruptcy Predictor Calculator', slug: 'altman-z-score-bankruptcy-calculator', cat: 'business', icon: '⚠️', badge: 'Z-SCORE DISTRESS', f: F_TYPES.PERCENTAGE, desc: 'Assess financial distress and probability of bankruptcy using Altman 5-ratio formula.' },
    { name: 'Piotroski F-Score Fundamental Stock Strength Calculator', slug: 'piotroski-f-score-calculator', cat: 'business', icon: '🔬', badge: '9-POINT F-SCORE', f: F_TYPES.PERCENTAGE, desc: 'Score stock financial health across profitability, leverage, and operating efficiency on a 9-point scale.' },
    { name: 'Free Cash Flow to Firm (FCFF) vs Equity (FCFE) Calculator', slug: 'fcff-fcfe-cash-flow-calculator', cat: 'business', icon: '💵', badge: 'FREE CASH FLOW', f: F_TYPES.PERCENTAGE, desc: 'Calculate cash available to all capital providers (FCFF) versus common equity shareholders (FCFE).' },
    { name: 'Franchise Fee & Royalty Breakeven Period Calculator', slug: 'franchise-roi-breakeven-calculator', cat: 'business', icon: '🍔', badge: 'FRANCHISE ROI', f: F_TYPES.PERCENTAGE, desc: 'Calculate capital recovery timeline and monthly royalty deductions for retail & food franchise outlets.' },
    { name: 'Commercial Fleet Vehicle Leasing vs Buying Calculator', slug: 'commercial-fleet-lease-vs-buy-calculator', cat: 'business', icon: '🚚', badge: 'FLEET LEASE VS BUY', f: F_TYPES.PERCENTAGE, desc: 'Compare operating lease vs bank loan ownership for commercial logistics vans and delivery fleets.' },
    { name: 'Invoice Factoring & Discounting Cost Calculator', slug: 'invoice-factoring-discounting-calculator', cat: 'business', icon: '📑', badge: 'TReDS DISCOUNTING', f: F_TYPES.PERCENTAGE, desc: 'Calculate annualized financing cost of unlocking immediate cash on 90-day MSME receivables via TReDS.' },
    { name: 'Import Customs Duty, BCD & SWS Surcharge Calculator', slug: 'customs-duty-import-tariff-calculator', cat: 'business', icon: '🚢', badge: 'BCD + SWS + IGST', f: F_TYPES.PERCENTAGE, desc: 'Calculate total customs duty, Basic Customs Duty (BCD), Social Welfare Surcharge, and integrated GST.' },
    { name: 'Product Margin, Markup & Breakeven Price Calculator', slug: 'product-margin-markup-breakeven-calculator', cat: 'business', icon: '🏷️', badge: 'GROSS VS NET MARGIN', f: F_TYPES.PERCENTAGE, desc: 'Convert cost markup into gross margin percentage and find minimum pricing required for profitability.' },

    // --- 8. Personal Finance, Savings & Goals Tools (15 additional) ---
    { name: 'Rule of 72, 114, 144 (Double, Triple, Quadruple) Calculator', slug: 'rule-of-72-114-144-calculator', cat: 'personal', icon: '🧮', badge: '2X / 3X / 4X WEALTH', f: F_TYPES.RULE_72, desc: 'Find exact number of years required to double (72), triple (114), or quadruple (144) your investment.' },
    { name: 'Monthly Grocery & Inflation Expense Indexer', slug: 'grocery-monthly-inflation-calculator', cat: 'personal', icon: '🛒', badge: 'FOOD INFLATION 7%', f: F_TYPES.INFLATION, desc: 'Track household grocery and food inflation over 5–10 years and project future monthly kitchen budgets.' },
    { name: 'Child Higher Education Foreign MBA Fund Calculator', slug: 'foreign-mba-higher-education-fund-calculator', cat: 'personal', icon: '🎓', badge: 'GLOBAL EDUCATION SIP', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate future cost of an Ivy League or European MBA (factoring 10% education inflation and USD rate).' },
    { name: 'Buying vs Renting Luxury Furniture & Appliances Calculator', slug: 'furniture-appliance-rent-vs-buy-calculator', cat: 'personal', icon: '🛋️', badge: 'RENTOMOJO VS BUY', f: F_TYPES.PERCENTAGE, desc: 'Compare 3-year rental subscription costs against buying appliances on no-cost EMI.' },
    { name: 'Electric Vehicle (EV) vs Petrol 5-Year Running Cost Calculator', slug: 'ev-vs-petrol-5-year-cost-calculator', cat: 'personal', icon: '⚡', badge: '₹1/KM VS ₹8/KM', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate total running cost and fuel savings of driving an Electric Vehicle over 75,000 km.' },
    { name: 'Solar Panel Rooftop Grid Return & Payback Calculator', slug: 'solar-panel-grid-payback-calculator', cat: 'personal', icon: '☀️', badge: '4-YEAR PAYBACK', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate solar subsidy savings, net metering units generated, and 25-year free electricity returns.' },
    { name: 'Wedding Gold Jewellery Making Charge & GST Calculator', slug: 'gold-jewellery-making-charges-calculator', cat: 'personal', icon: '💍', badge: 'MAKING + 3% GST', f: F_TYPES.PERCENTAGE, desc: 'Calculate final billing price of gold jewellery by adding making charges (8%–25%), hallmarking, and GST.' },
    { name: 'Old Gold Exchange Value & Melting Loss Calculator', slug: 'old-gold-exchange-melting-loss-calculator', cat: 'personal', icon: '🥇', badge: 'MELTING DEDUCTION', f: F_TYPES.PERCENTAGE, desc: 'Calculate net cash payout received when selling or exchanging old 18K/22K physical gold jewellery.' },
    { name: 'Second Home vs Mutual Fund SIP Wealth Creation Comparator', slug: 'second-home-vs-mutual-fund-sip-calculator', cat: 'personal', icon: '🏘️', badge: 'REAL ESTATE VS SIP', f: F_TYPES.SIP, desc: 'See why investing in a Mutual Fund SIP beats purchasing a 2nd rental property burdened with EMI.' },
    { name: 'Cost of Commute: Train vs Metro vs Bike vs Car Calculator', slug: 'commute-cost-train-metro-car-calculator', cat: 'personal', icon: '🚆', badge: 'MONTHLY COMMUTE', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate annual travel expenses and commute hours across local train, metro, motorcycle, and car.' },
    { name: 'Credit Card Reward Points to Rupee Cash Value Calculator', slug: 'credit-card-rewards-cash-value-calculator', cat: 'personal', icon: '💳', badge: 'POINT CONVERSION', f: F_TYPES.PERCENTAGE, desc: 'Convert reward points from HDFC, SBI, Axis, and Amex cards into real rupee redemption values.' },
    { name: 'Airport Lounge Free Access Spend Milestone Calculator', slug: 'credit-card-lounge-spend-milestone-calculator', cat: 'personal', icon: '✈️', badge: 'LOUNGE MILESTONES', f: F_TYPES.PERCENTAGE, desc: 'Track quarterly credit card spend thresholds required to unlock complimentary airport lounge visits.' },
    { name: 'Freelancer Hourly Rate from Target Annual Salary Calculator', slug: 'freelance-hourly-rate-calculator', cat: 'personal', icon: '💻', badge: 'BILLABLE HOURLY RATE', f: F_TYPES.PERCENTAGE, desc: 'Calculate minimum billable hourly rate required to match your target annual full-time salary.' },
    { name: 'Emergency Fund 3 to 12 Months Tiered Allocation Calculator', slug: 'tiered-emergency-fund-calculator', cat: 'personal', icon: '🦺', badge: 'SAVINGS + LIQUID + ARB', f: F_TYPES.SAVINGS_GOAL, desc: 'Split emergency fund across 1-month bank balance, 3-month liquid fund, and 6-month arbitrage fund.' },
    { name: 'Sinking Fund Monthly Allocation for Big Annual Expenses', slug: 'sinking-fund-allocation-calculator', cat: 'personal', icon: '🎯', badge: 'ANNUAL BILLS SINKING', f: F_TYPES.SAVINGS_GOAL, desc: 'Calculate monthly savings needed to pay annual insurance premiums, property taxes, and school fees stress-free.' }
];

// Helper to fill defaults for generated calculators
additionalCalculatorsSpecs.forEach(spec => {
    let inputs = [];
    let outputs = [];

    if (spec.f === F_TYPES.SIP || spec.f === F_TYPES.STEP_UP_SIP) {
        inputs = [
            { id: 'monthlyInvest', label: 'Monthly Investment Amount', min: 500, max: 1000000, step: 500, default: 7500, prefix: '₹', isCurrency: true },
            { id: 'returnRate', label: 'Expected Annual Return (p.a.)', min: 1, max: 30, step: 0.5, default: 12.5, suffix: '%' },
            { id: 'timePeriod', label: 'Investment Time Horizon', min: 1, max: 35, step: 1, default: 12, suffix: ' Years' }
        ];
        outputs = [
            { id: 'investedAmt', label: 'Total Invested Capital', isCurrency: true },
            { id: 'estReturns', label: 'Estimated Compounded Returns', isCurrency: true, isHighlight: true },
            { id: 'totalValue', label: 'Total Maturity Wealth', isCurrency: true, isTotal: true }
        ];
    } else if (spec.f === F_TYPES.EMI) {
        inputs = [
            { id: 'loanAmt', label: 'Loan / Financing Amount', min: 25000, max: 20000000, step: 25000, default: 500000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Interest Rate (p.a.)', min: 5, max: 25, step: 0.1, default: 9.5, suffix: '%' },
            { id: 'tenureYears', label: 'Loan Tenure', min: 1, max: 25, step: 1, default: 5, suffix: ' Years' }
        ];
        outputs = [
            { id: 'monthlyEmi', label: 'Monthly EMI Payable', isCurrency: true, isHighlight: true },
            { id: 'totalInterest', label: 'Total Interest Over Tenure', isCurrency: true },
            { id: 'totalPayment', label: 'Total Outflow (Principal + Interest)', isCurrency: true, isTotal: true }
        ];
    } else if (spec.f === F_TYPES.FD || spec.f === F_TYPES.RD || spec.f === F_TYPES.COMPOUND) {
        inputs = [
            { id: 'depositAmt', label: 'Deposit / Principal Sum', min: 1000, max: 10000000, step: 5000, default: 100000, prefix: '₹', isCurrency: true },
            { id: 'interestRate', label: 'Annual Interest Rate', min: 2, max: 20, step: 0.1, default: 7.25, suffix: '%' },
            { id: 'tenureYears', label: 'Tenure (Years)', min: 1, max: 25, step: 1, default: 5, suffix: ' Years' }
        ];
        outputs = [
            { id: 'principal', label: 'Principal Sum', isCurrency: true },
            { id: 'totalInterest', label: 'Total Interest Gain', isCurrency: true, isHighlight: true },
            { id: 'maturityValue', label: 'Maturity Balance', isCurrency: true, isTotal: true }
        ];
    } else {
        inputs = [
            { id: 'amount', label: 'Base Amount / Capital Input', min: 1000, max: 10000000, step: 1000, default: 50000, prefix: '₹', isCurrency: true },
            { id: 'rate', label: 'Applicable Rate / Percentage', min: 0.5, max: 50, step: 0.5, default: 10, suffix: '%' },
            { id: 'period', label: 'Duration / Multiplier', min: 1, max: 30, step: 1, default: 5, suffix: ' Years' }
        ];
        outputs = [
            { id: 'calculatedMetric', label: 'Calculated Result', isCurrency: true, isHighlight: true },
            { id: 'projectedGrowth', label: 'Net Cumulative Value', isCurrency: true, isTotal: true }
        ];
    }

    rawCalculators.push({
        id: spec.slug,
        slug: spec.slug,
        title: spec.name,
        shortTitle: spec.name.replace(' Calculator', '').replace(' Planner', ''),
        category: spec.cat,
        icon: spec.icon,
        badge: spec.badge,
        popular: false,
        desc: spec.desc,
        formulaType: spec.f,
        inputs: inputs,
        outputs: outputs
    });
});

// Full Master Map by Slug and by Category
const calculatorsMap = new Map();
rawCalculators.forEach(c => {
    calculatorsMap.set(c.slug, c);
});

// Utility Functions
function getAllCalculators() {
    return rawCalculators;
}

function getCalculatorBySlug(slug) {
    return calculatorsMap.get(slug);
}

function getCalculatorsByCategory(catId) {
    if (!catId || catId === 'all') return rawCalculators;
    return rawCalculators.filter(c => c.category === catId);
}

function getPopularCalculators() {
    return rawCalculators.filter(c => c.popular);
}

function getCategories() {
    return categories.map(cat => ({
        ...cat,
        count: rawCalculators.filter(c => c.category === cat.id).length
    }));
}

function searchCalculators(query) {
    if (!query) return rawCalculators;
    const q = query.toLowerCase().trim();
    return rawCalculators.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.shortTitle.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.badge && c.badge.toLowerCase().includes(q))
    );
}

module.exports = {
    categories,
    getAllCalculators,
    getCalculatorBySlug,
    getCalculatorsByCategory,
    getPopularCalculators,
    getCategories,
    searchCalculators
};
