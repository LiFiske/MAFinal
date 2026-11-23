/* ===================================================================
   Chapter 12 — Decentralization & Performance Evaluation (ROI, EVA)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e12-8", chapter: 12, code: "E12-8",
    title: "Calculating ROI",
    topic: "NOPAT, invested capital, ROI",
    prompt: `
      <p><strong>LaundryMate Products</strong>, 2020:</p>
      <table class="given"><tbody>
        <tr><td>Net income</td><td class="num">$7,920,000</td></tr>
        <tr><td>Interest expense</td><td class="num">$1,000,000</td></tr>
        <tr><td>Income before taxes / income taxes</td><td class="num">$9,900,000 / $1,980,000</td></tr>
        <tr><td>Total assets</td><td class="num">$97,000,000</td></tr>
        <tr><td>Noninterest-bearing current liabilities</td><td class="num">$3,200,000</td></tr>
        <tr><td>Required return on invested capital</td><td class="num">10%</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> NOPAT, invested capital, and ROI. Comment on profitability.</li>
        <li><strong>What-if:</strong> If $11,000,000 of fully depreciated equipment is disposed of, what is ROI?</li>
      </ol>`,
    tip: `
      <p>Three definitions:</p>
      <p class="formula">Tax rate = taxes ÷ income before taxes</p>
      <p class="formula">NOPAT = Net income + Interest × (1 − tax rate)</p>
      <p class="formula">Invested capital = Total assets − Noninterest-bearing current liabilities</p>
      <p>ROI = NOPAT ÷ invested capital. Disposing of assets shrinks the denominator — which <em>raises</em>
         ROI, a classic incentive problem.</p>`,
    checks: [
      {label: "NOPAT", answer: 8720000, tol: 1000, fmt: "money"},
      {label: "Invested capital", answer: 93800000, tol: 1000, fmt: "money"},
      {label: "ROI (e.g. 9.3 for 9.3%)", answer: 9.30, tol: 0.1, fmt: "num"},
      {label: "New ROI after disposal (%)", answer: 10.53, tol: 0.1, fmt: "num"}
    ],
    solution: `
      <p>Tax rate = 1,980,000 ÷ 9,900,000 = 20%.</p>
      <p><strong>NOPAT</strong> = 7,920,000 + 1,000,000 × 0.80 = <strong>$8,720,000</strong>.</p>
      <p><strong>Invested capital</strong> = 97,000,000 − 3,200,000 = <strong>$93,800,000</strong>.</p>
      <p><strong>ROI</strong> = 8,720,000 ÷ 93,800,000 = <strong>9.30%</strong> — below the 10% required
         return, so the company is <strong>underperforming</strong>.</p>
      <p><strong>What-if:</strong> invested capital = (97,000,000 − 11,000,000) − 3,200,000 = 82,800,000.
         New ROI = 8,720,000 ÷ 82,800,000 = <strong>10.53%</strong> — now above 10%, purely from shrinking
         assets. Managers evaluated on ROI may under-invest or keep old equipment to keep assets low.</p>`
  },
  {
    id: "p12-6", chapter: 12, code: "P12-6",
    title: "ROI, Profit Margin & Investment Turnover",
    topic: "DuPont breakdown of ROI",
    prompt: `
      <p><strong>HandyCraft Stores</strong> (tax rate 20% both years):</p>
      <table class="given">
        <thead><tr><th></th><th class="num">2020</th><th class="num">2021</th></tr></thead>
        <tbody>
          <tr><td>Total assets</td><td class="num">$59,500,000</td><td class="num">$56,430,000</td></tr>
          <tr><td>Noninterest-bearing CL</td><td class="num">$4,400,000</td><td class="num">$4,950,000</td></tr>
          <tr><td>Net income</td><td class="num">$3,650,000</td><td class="num">$4,950,000</td></tr>
          <tr><td>Interest expense</td><td class="num">$2,420,000</td><td class="num">$2,975,000</td></tr>
          <tr><td>Sales</td><td class="num">$66,000,000</td><td class="num">$96,250,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> ROI for each year.</li>
        <li><strong>b.</strong> Break ROI into profit margin × investment turnover.</li>
        <li><strong>c.</strong> Comment on the change.</li>
      </ol>`,
    tip: `
      <p>ROI = NOPAT ÷ invested capital, and it also factors as:</p>
      <p class="formula">ROI = (NOPAT ÷ Sales) × (Sales ÷ Invested capital)</p>
      <p>i.e. profit margin × investment turnover. A firm can lift ROI by selling more per dollar of
         assets (turnover) even if margin slips.</p>`,
    checks: [
      {label: "2020 ROI (%)", answer: 10.14, tol: 0.1, fmt: "num"},
      {label: "2021 ROI (%)", answer: 14.24, tol: 0.1, fmt: "num"},
      {label: "2021 investment turnover (e.g. 1.87)", answer: 1.87, tol: 0.03, fmt: "num"}
    ],
    solution: `
      <p><strong>2020:</strong> NOPAT = 3,650,000 + 2,420,000×0.8 = 5,586,000; invested = 59,500,000 −
         4,400,000 = 55,100,000 → ROI = <strong>10.14%</strong>.</p>
      <p><strong>2021:</strong> NOPAT = 4,950,000 + 2,975,000×0.8 = 7,330,000; invested = 56,430,000 −
         4,950,000 = 51,480,000 → ROI = <strong>14.24%</strong>.</p>
      <p><strong>b.</strong> 2020: margin 8.46% × turnover 1.198 = 10.14%. 2021: margin 7.62% ×
         turnover 1.870 = 14.24%.</p>
      <p><strong>c.</strong> ROI rose because <strong>investment turnover</strong> jumped (1.20 → 1.87),
         more than offsetting a slight decline in profit margin.</p>`
  },
  {
    id: "p12-7", chapter: 12, code: "P12-7",
    title: "ROI and EVA",
    topic: "Residual income / economic value added",
    prompt: `
      <p><strong>ELN Waste Management</strong> has two subsidiaries (tax rate 20%):</p>
      <table class="given">
        <thead><tr><th></th><th class="num">Hazardous</th><th class="num">Residential</th></tr></thead>
        <tbody>
          <tr><td>Total assets</td><td class="num">$15,300,000</td><td class="num">$87,000,000</td></tr>
          <tr><td>Noninterest-bearing CL</td><td class="num">$3,300,000</td><td class="num">$13,200,000</td></tr>
          <tr><td>Net income</td><td class="num">$1,870,000</td><td class="num">$6,600,000</td></tr>
          <tr><td>Interest expense</td><td class="num">$1,375,000</td><td class="num">$8,030,000</td></tr>
          <tr><td>Required return</td><td class="num">10%</td><td class="num">13%</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> ROI for each subsidiary.</li>
        <li><strong>b.</strong> EVA (= residual income here) for each.</li>
        <li><strong>c./d.</strong> Which added the most shareholder value? Which is the best expansion candidate?</li>
      </ol>`,
    tip: `
      <p>EVA (residual income) rewards earning <em>above</em> the cost of capital:</p>
      <p class="formula">EVA = NOPAT − (Required return × Invested capital)</p>
      <p>Highest EVA = most value created this year. Highest <em>ROI</em> flags where an extra dollar of
         assets is likely to earn the most — the expansion candidate.</p>`,
    checks: [
      {label: "Hazardous ROI (%)", answer: 24.75, tol: 0.1, fmt: "num"},
      {label: "Residential ROI (%)", answer: 17.65, tol: 0.1, fmt: "num"},
      {label: "Hazardous EVA", answer: 1770000, tol: 2000, fmt: "money"},
      {label: "Residential EVA", answer: 3430000, tol: 2000, fmt: "money"}
    ],
    solution: `
      <p><strong>Hazardous:</strong> NOPAT = 1,870,000 + 1,375,000×0.8 = 2,970,000; invested = 12,000,000
         → ROI = <strong>24.75%</strong>. EVA = 2,970,000 − 0.10×12,000,000 = <strong>$1,770,000</strong>.</p>
      <p><strong>Residential:</strong> NOPAT = 6,600,000 + 8,030,000×0.8 = 13,024,000; invested = 73,800,000
         → ROI = <strong>17.65%</strong>. EVA = 13,024,000 − 0.13×73,800,000 = <strong>$3,430,000</strong>.</p>
      <p><strong>c.</strong> <strong>Residential</strong> created the most value (higher EVA).
         <strong>d.</strong> <strong>Hazardous</strong> is the better expansion candidate — its far higher
         ROI suggests added assets would earn a strong return.</p>`
  }
  );

  B.hard.push(
  {
    id: "h12-1", chapter: 12, code: "H12-1",
    title: "ROI — Vertex Division",
    topic: "NOPAT, invested capital, ROI",
    prompt: `
      <p><strong>Vertex Division:</strong> net income $2,400,000; interest expense $500,000; income
         before taxes $3,000,000; income taxes $600,000; total assets $25,000,000; noninterest-bearing
         current liabilities $1,000,000; required return 12%.</p>
      <p class="req">Required</p>
      <p>Compute NOPAT, invested capital, and ROI. Is the division meeting its required return?</p>`,
    tip: `<p>Tax rate = taxes ÷ pretax income. NOPAT = NI + interest×(1−tax). Invested = assets − NIBCL.
       ROI = NOPAT ÷ invested.</p>`,
    checks: [
      {label: "NOPAT", answer: 2800000, tol: 1000, fmt: "money"},
      {label: "Invested capital", answer: 24000000, tol: 1000, fmt: "money"},
      {label: "ROI (%)", answer: 11.67, tol: 0.1, fmt: "num"}
    ],
    solution: `
      <p>Tax rate = 600,000 ÷ 3,000,000 = 20%. NOPAT = 2,400,000 + 500,000×0.8 = <strong>$2,800,000</strong>.
         Invested = 25,000,000 − 1,000,000 = <strong>$24,000,000</strong>. ROI = 2,800,000 ÷ 24,000,000 =
         <strong>11.67%</strong> — just below the 12% required return.</p>`
  },
  {
    id: "h12-2", chapter: 12, code: "H12-2",
    title: "ROI and EVA — Crest Division",
    topic: "Residual income",
    prompt: `
      <p><strong>Crest Division:</strong> net income $1,500,000; interest expense $625,000; tax rate 20%;
         total assets $18,000,000; noninterest-bearing current liabilities $2,000,000; required return 10%.</p>
      <p class="req">Required</p>
      <p>Compute ROI and EVA.</p>`,
    tip: `<p>NOPAT = NI + interest×(1−tax); invested = assets − NIBCL; ROI = NOPAT ÷ invested;
       EVA = NOPAT − required×invested.</p>`,
    checks: [
      {label: "NOPAT", answer: 2000000, tol: 1000, fmt: "money"},
      {label: "ROI (%)", answer: 12.5, tol: 0.1, fmt: "num"},
      {label: "EVA", answer: 400000, tol: 1000, fmt: "money"}
    ],
    solution: `
      <p>NOPAT = 1,500,000 + 625,000×0.8 = <strong>$2,000,000</strong>. Invested = 18,000,000 − 2,000,000
         = $16,000,000. ROI = 2,000,000 ÷ 16,000,000 = <strong>12.5%</strong>.
         EVA = 2,000,000 − 0.10×16,000,000 = <strong>$400,000</strong> (value created above the 10% charge).</p>`
  }
  );
})();
