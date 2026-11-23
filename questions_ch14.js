/* ===================================================================
   Chapter 14 — Analyzing Financial Statements
   (Student template, no answer key; ratios computed and checked.
    Turnover ratios use year-end balances, since prior-year data for a
    full average is not provided — stated in each tip.)
   Data: Great Oaks Furniture, 2021 / 2020.
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  var data = `
    <table class="given">
      <thead><tr><th></th><th class="num">2021</th><th class="num">2020</th></tr></thead>
      <tbody>
        <tr><td>Cash</td><td class="num">41,200</td><td class="num">53,000</td></tr>
        <tr><td>Accounts receivable</td><td class="num">570,000</td><td class="num">443,000</td></tr>
        <tr><td>Inventory</td><td class="num">5,586,400</td><td class="num">4,841,000</td></tr>
        <tr><td>Total current assets</td><td class="num">6,281,400</td><td class="num">5,415,000</td></tr>
        <tr><td>Total assets</td><td class="num">7,378,400</td><td class="num">6,510,000</td></tr>
        <tr><td>Total current liabilities</td><td class="num">1,496,000</td><td class="num">1,562,000</td></tr>
        <tr><td>Total liabilities</td><td class="num">3,225,000</td><td class="num">3,359,000</td></tr>
        <tr><td>Total stockholders' equity</td><td class="num">4,153,400</td><td class="num">3,151,000</td></tr>
        <tr><td>Net sales</td><td class="num">5,568,000</td><td class="num">5,253,000</td></tr>
        <tr><td>Cost of goods sold</td><td class="num">2,840,000</td><td class="num">2,627,000</td></tr>
        <tr><td>Gross margin</td><td class="num">2,728,000</td><td class="num">2,626,000</td></tr>
        <tr><td>Operating income</td><td class="num">1,392,000</td><td class="num">1,208,000</td></tr>
        <tr><td>Interest expense</td><td class="num">139,000</td><td class="num">158,000</td></tr>
        <tr><td>Net income</td><td class="num">1,002,400</td><td class="num">840,000</td></tr>
      </tbody>
    </table>`;

  B.homework.push(
  {
    id: "e14-6", chapter: 14, code: "E14-6/7",
    title: "Horizontal & Vertical Analysis",
    topic: "Trend and common-size analysis",
    prompt: `
      <p><strong>Great Oaks Furniture:</strong></p>` + data + `
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Horizontal analysis: % change 2020→2021 for accounts receivable and net income.</li>
        <li><strong>b.</strong> Vertical (common-size): cost of goods sold as a % of net sales in 2021.</li>
      </ol>`,
    tip: `
      <p><strong>Horizontal</strong> analysis measures change over time:
         (current − base) ÷ base, using the <em>earlier</em> year as the base.
         <strong>Vertical</strong> (common-size) states each item as a % of a base — total assets on the
         balance sheet, net sales on the income statement.</p>`,
    checks: [
      {label: "AR % change (e.g. 28.7)", answer: 28.7, tol: 0.3, fmt: "num"},
      {label: "Net income % change", answer: 19.3, tol: 0.3, fmt: "num"},
      {label: "COGS as % of sales, 2021", answer: 51.0, tol: 0.3, fmt: "num"}
    ],
    solution: `
      <p><strong>a.</strong> AR: (570,000 − 443,000) ÷ 443,000 = <strong>+28.7%</strong>.
         Net income: (1,002,400 − 840,000) ÷ 840,000 = <strong>+19.3%</strong>.</p>
      <p><strong>b.</strong> COGS ÷ sales = 2,840,000 ÷ 5,568,000 = <strong>51.0%</strong>
         (so gross margin is 49.0%).</p>`
  },
  {
    id: "e14-8", chapter: 14, code: "E14-8",
    title: "Profitability Ratios",
    topic: "EPS, P/E, gross margin %",
    prompt: `
      <p><strong>Great Oaks Furniture</strong> (100,000 shares outstanding; year-end price $134 in 2021,
         $110 in 2020):</p>` + data + `
      <p class="req">Required</p>
      <p>Compute, for 2021: earnings per share, the price-earnings ratio, and the gross margin percentage.
         (Also EPS for 2020.)</p>`,
    tip: `
      <p class="formula">EPS = Net income ÷ shares outstanding</p>
      <p class="formula">P/E = Market price per share ÷ EPS</p>
      <p>Gross margin % = gross margin ÷ net sales. A high P/E signals the market expects growth.</p>`,
    checks: [
      {label: "EPS 2021", answer: 10.02, tol: 0.05, fmt: "money"},
      {label: "Price-earnings ratio 2021", answer: 13.37, tol: 0.15, fmt: "num"},
      {label: "Gross margin % 2021", answer: 49.0, tol: 0.3, fmt: "num"},
      {label: "EPS 2020", answer: 8.40, tol: 0.05, fmt: "money"}
    ],
    solution: `
      <p><strong>EPS 2021</strong> = 1,002,400 ÷ 100,000 = <strong>$10.02</strong> (2020: $8.40).</p>
      <p><strong>P/E 2021</strong> = 134 ÷ 10.02 = <strong>13.37</strong>.</p>
      <p><strong>Gross margin % 2021</strong> = 2,728,000 ÷ 5,568,000 = <strong>49.0%</strong>.</p>`
  },
  {
    id: "e14-9", chapter: 14, code: "E14-9",
    title: "Turnover Ratios",
    topic: "Asset, receivable & inventory turnover",
    prompt: `
      <p><strong>Great Oaks Furniture</strong>, 2021:</p>` + data + `
      <p class="req">Required</p>
      <p>Compute (2021): asset turnover, accounts receivable turnover, days' sales in receivables, and
         inventory turnover.</p>`,
    tip: `
      <p>Turnover ratios measure how hard assets work (using year-end balances here):</p>
      <p class="formula">Asset turnover = Sales ÷ Total assets</p>
      <p class="formula">AR turnover = Sales ÷ Accounts receivable &nbsp;·&nbsp; Days' sales = 365 ÷ AR turnover</p>
      <p class="formula">Inventory turnover = Cost of goods sold ÷ Inventory</p>`,
    checks: [
      {label: "Asset turnover (e.g. 0.75)", answer: 0.75, tol: 0.02, fmt: "num"},
      {label: "AR turnover", answer: 9.77, tol: 0.1, fmt: "num"},
      {label: "Days' sales in receivables", answer: 37.4, tol: 0.5, fmt: "num"},
      {label: "Inventory turnover", answer: 0.51, tol: 0.02, fmt: "num"}
    ],
    solution: `
      <p><strong>Asset turnover</strong> = 5,568,000 ÷ 7,378,400 = <strong>0.75</strong>.</p>
      <p><strong>AR turnover</strong> = 5,568,000 ÷ 570,000 = <strong>9.77</strong> →
         <strong>days' sales in receivables</strong> = 365 ÷ 9.77 = <strong>37.4 days</strong>.</p>
      <p><strong>Inventory turnover</strong> = 2,840,000 ÷ 5,586,400 = <strong>0.51</strong> — very low;
         a furniture retailer carries a lot of slow-moving inventory (≈ 718 days' sales on hand).</p>`
  },
  {
    id: "e14-10", chapter: 14, code: "E14-10",
    title: "Debt-Related Ratios",
    topic: "Liquidity & solvency",
    prompt: `
      <p><strong>Great Oaks Furniture</strong>, 2021:</p>` + data + `
      <p class="req">Required</p>
      <p>Compute (2021): current ratio, acid-test ratio, debt-to-equity ratio, and times interest earned.</p>`,
    tip: `
      <p class="formula">Current ratio = Current assets ÷ Current liabilities</p>
      <p class="formula">Acid-test = (Cash + Receivables) ÷ Current liabilities</p>
      <p class="formula">Debt-to-equity = Total liabilities ÷ Total equity</p>
      <p class="formula">Times interest earned = Operating income ÷ Interest expense</p>
      <p>The acid-test excludes inventory — telling for an inventory-heavy retailer.</p>`,
    checks: [
      {label: "Current ratio", answer: 4.20, tol: 0.05, fmt: "num"},
      {label: "Acid-test ratio", answer: 0.41, tol: 0.02, fmt: "num"},
      {label: "Debt-to-equity ratio", answer: 0.78, tol: 0.02, fmt: "num"},
      {label: "Times interest earned", answer: 10.0, tol: 0.2, fmt: "num"}
    ],
    solution: `
      <p><strong>Current ratio</strong> = 6,281,400 ÷ 1,496,000 = <strong>4.20</strong>.</p>
      <p><strong>Acid-test</strong> = (41,200 + 570,000) ÷ 1,496,000 = <strong>0.41</strong> — strikingly
         low versus the current ratio, because almost all current assets are inventory.</p>
      <p><strong>Debt-to-equity</strong> = 3,225,000 ÷ 4,153,400 = <strong>0.78</strong>.</p>
      <p><strong>Times interest earned</strong> = 1,392,000 ÷ 139,000 = <strong>10.0</strong> — interest is
         well covered.</p>`
  }
  );

  B.hard.push(
  {
    id: "h14-1", chapter: 14, code: "H14-1",
    title: "Liquidity Ratios — Pine Co.",
    topic: "Current & acid-test ratios",
    prompt: `
      <p><strong>Pine Co.</strong> current assets: cash $50,000; accounts receivable $120,000; inventory
         $200,000; prepaid $30,000. Current liabilities $160,000.</p>
      <p class="req">Required</p>
      <p>Compute the current ratio and the acid-test (quick) ratio.</p>`,
    tip: `<p>Current ratio = all current assets ÷ current liabilities. Acid-test uses only the quick
       assets (cash + receivables), excluding inventory and prepaids.</p>`,
    checks: [
      {label: "Current ratio", answer: 2.50, tol: 0.02, fmt: "num"},
      {label: "Acid-test ratio", answer: 1.06, tol: 0.03, fmt: "num"}
    ],
    solution: `
      <p>Current ratio = 400,000 ÷ 160,000 = <strong>2.50</strong>.
         Acid-test = (50,000 + 120,000) ÷ 160,000 = 170,000 ÷ 160,000 = <strong>1.06</strong>.</p>`
  },
  {
    id: "h14-2", chapter: 14, code: "H14-2",
    title: "Profitability Ratios — Birch Inc.",
    topic: "EPS, P/E, margin, ROE",
    prompt: `
      <p><strong>Birch Inc.:</strong> net income $480,000; 120,000 shares; price $48; net sales
         $4,000,000; gross margin $1,200,000; total stockholders' equity $2,400,000.</p>
      <p class="req">Required</p>
      <p>Compute EPS, the price-earnings ratio, gross margin %, and return on equity.</p>`,
    tip: `<p>EPS = NI ÷ shares; P/E = price ÷ EPS; gross margin % = gross margin ÷ sales;
       ROE = net income ÷ equity.</p>`,
    checks: [
      {label: "EPS", answer: 4.00, tol: 0.02, fmt: "money"},
      {label: "Price-earnings ratio", answer: 12.0, tol: 0.1, fmt: "num"},
      {label: "Gross margin %", answer: 30, tol: 0.3, fmt: "num"},
      {label: "Return on equity %", answer: 20, tol: 0.3, fmt: "num"}
    ],
    solution: `
      <p>EPS = 480,000 ÷ 120,000 = <strong>$4.00</strong>. P/E = 48 ÷ 4 = <strong>12.0</strong>.
         Gross margin % = 1,200,000 ÷ 4,000,000 = <strong>30%</strong>.
         ROE = 480,000 ÷ 2,400,000 = <strong>20%</strong>.</p>`
  }
  );
})();
