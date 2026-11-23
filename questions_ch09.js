/* ===================================================================
   Chapter 9 — Capital Budgeting (present value, NPV, IRR)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e9-3", chapter: 9, code: "E9-3",
    title: "Using Present Value Tables",
    topic: "Present value of an annuity",
    prompt: `
      <p>What is the present value of <strong>$850 per year for six years</strong> at a required return
         of <strong>11%</strong>? (6-year, 11% annuity factor = <strong>4.2305</strong>.)</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Present value of the $850 annuity.</li>
        <li><strong>What-if:</strong> Recompute if the payment is $950, and find the difference.</li>
        <li>Why isn't that difference equal to 6 × $100 = $600?</li>
      </ol>`,
    tip: `
      <p>PV of a level annuity = payment × annuity factor. The factor already bundles all six years and
         the discounting, so just multiply. The difference in PV (&lt; $600) is smaller than the extra
         $600 of payments because those extra dollars arrive in the future and are discounted.</p>`,
    checks: [
      {label: "PV of $850 annuity", answer: 3595.93, tol: 1, fmt: "money"},
      {label: "PV if payment is $950", answer: 4019.01, tol: 2, fmt: "money"},
      {label: "Difference", answer: 423, tol: 2, fmt: "money"}
    ],
    solution: `
      <p><strong>a.</strong> 850 × 4.2305 = <strong>$3,595.93</strong>.</p>
      <p><strong>What-if.</strong> 950 × 4.2305 = <strong>$4,018.98</strong> (≈ $4,019 using Excel's PV).
         Difference ≈ <strong>$423</strong>.</p>
      <p><strong>Why not $600?</strong> The six extra $100 payments total $600, but each arrives in the
         future, so its present value is less than its face amount — the discounting removes interest,
         leaving a PV difference of only ~$423.</p>`
  },
  {
    id: "e9-8", chapter: 9, code: "E9-8",
    title: "Internal Rate of Return (ignore taxes)",
    topic: "IRR of an even cash-flow project",
    prompt: `
      <p>A project costs <strong>$200,000</strong> and reduces operating costs by <strong>$35,000 per
         year for 12 years</strong>.</p>
      <p class="req">Required</p>
      <p>Find the present-value annuity factor implied by the project, estimate the IRR, and decide
         whether to invest if the required return is <strong>18%</strong>.
         (For reference, 12-year factors: 14% = 5.6603, 13% = 5.9176, 18% = 4.7932.)</p>`,
    tip: `
      <p>For an even annuity, the IRR is the rate whose factor makes PV of savings equal the cost:</p>
      <p class="formula">Factor = Initial outlay ÷ Annual cash flow</p>
      <p>Look that factor up across the 12-year row to read off the approximate rate, then compare to
         the required return.</p>`,
    checks: [
      {label: "PV annuity factor (cost ÷ savings)", answer: 5.714, tol: 0.02, fmt: "num"}
    ],
    solution: `
      <p>Factor = 200,000 ÷ 35,000 = <strong>5.714</strong>. On the 12-year row, 5.714 sits between the
         13% (5.9176) and 14% (5.6603) factors, so the IRR ≈ <strong>14%</strong>.</p>
      <p>Since the IRR (~14%) is <strong>below the 18% required return</strong>, the project
         <strong>should not be undertaken</strong>.</p>`
  },
  {
    id: "p9-1", chapter: 9, code: "P9-1",
    title: "Present Value Analysis — Two Contracts",
    topic: "Comparing cash-flow streams by PV",
    prompt: `
      <p><strong>James Hardy</strong> is weighing two contracts at a <strong>15%</strong> required return.</p>
      <p><strong>Original ($20M):</strong> $7,500,000 signing bonus now + $2,500,000 per year, years 1–5
         (5-year annuity factor = 3.3522).</p>
      <p><strong>New ($22M):</strong> Year 1 $2.5M, Y2 $2.6M, Y3 $2.7M, Y4 $2.8M, Y5 $2.9M, plus an
         $8.5M balloon at end of year 5. (Factors: 0.8696, 0.7561, 0.6575, 0.5718, 0.4972.)</p>
      <p class="req">Required</p>
      <p>Find the present value of each contract. Which is better, and does the bigger nominal number win?</p>`,
    tip: `
      <p>Discount each cash flow to today and sum. A lump sum now (the signing bonus) has factor 1.0.
         A level annuity uses the annuity factor; uneven flows use the single-sum factor for each year.
         The larger <em>nominal</em> contract can still be worth less once the time value of money is applied.</p>`,
    checks: [
      {label: "PV of original contract", answer: 15880500, tol: 2000, fmt: "money"},
      {label: "PV of new contract", answer: 13184230, tol: 2000, fmt: "money"},
      {label: "Advantage of original", answer: 2696270, tol: 3000, fmt: "money"}
    ],
    solution: `
      <p><strong>Original:</strong> 7,500,000 + (2,500,000 × 3.3522) = 7,500,000 + 8,380,500 =
         <strong>$15,880,500</strong>.</p>
      <p><strong>New:</strong> 2.5M(0.8696) + 2.6M(0.7561) + 2.7M(0.6575) + 2.8M(0.5718) + 2.9M(0.4972)
         + 8.5M(0.4972) = 2,174,000 + 1,965,860 + 1,775,250 + 1,601,040 + 1,441,880 + 4,226,200 =
         <strong>$13,184,230</strong>.</p>
      <p>The <strong>original contract is better</strong> by ≈ $2,696,270 in present value, even though
         the new one has a larger $22M face value — most of the new money arrives late and is heavily discounted.</p>`
  },
  {
    id: "p9-4", chapter: 9, code: "P9-4",
    title: "Present Value & What-If — New Ship",
    topic: "NPV at two discount rates • opportunity cost",
    prompt: `
      <p><strong>National Cruise Line</strong> may buy a ship costing <strong>$600,000,000</strong>.
         Annual cash flow for 15 years: Caribbean/Alaska <strong>$169,000,000</strong>;
         Caribbean/Eastern Canada <strong>$155,000,000</strong>.
         (15-year annuity factors: 12% = 6.8109; 16% = 5.5755.)</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> PV of each itinerary at 12% and 16%. Should they buy at either rate?</li>
        <li><strong>c.</strong> At 12%, what is the opportunity cost of choosing Eastern Canada over Alaska?</li>
      </ol>`,
    tip: `
      <p>PV = annual cash flow × annuity factor. Compare to the $600M cost — if PV &gt; cost, NPV is
         positive (buy). The opportunity cost of the lower-value itinerary is the difference in PVs.</p>`,
    checks: [
      {label: "Alaska PV at 12%", answer: 1151042100, tol: 500000, fmt: "money"},
      {label: "Eastern Canada PV at 12%", answer: 1055689500, tol: 500000, fmt: "money"},
      {label: "Opportunity cost (Alaska − E. Canada) at 12%", answer: 95352600, tol: 500000, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th></th><th class="num">12%</th><th class="num">16%</th></tr></thead>
        <tbody>
          <tr><td>Caribbean/Alaska (169M ×)</td><td class="num">$1,151,042,100</td><td class="num">$942,259,500</td></tr>
          <tr><td>Caribbean/Eastern Canada (155M ×)</td><td class="num">$1,055,689,500</td><td class="num">$864,202,500</td></tr>
        </tbody>
      </table>
      <p><strong>a.</strong> Every PV exceeds the $600M cost, so NPV is positive — <strong>buy at either rate</strong>.</p>
      <p><strong>c.</strong> Opportunity cost of Eastern Canada at 12% = 1,151,042,100 − 1,055,689,500 =
         <strong>≈ $95,352,600</strong> of forgone value.</p>`
  },
  {
    id: "p9-6", chapter: 9, code: "P9-6",
    title: "Internal Rate of Return and Taxes",
    topic: "After-tax cash flow • IRR",
    prompt: `
      <p><strong>Boston Culinary Institute</strong> remodel: cost <strong>$350,000</strong>,
         straight-line depreciation over 6 years. It adds 5 students/year at $22,000 tuition each;
         before-tax incremental cost $2,000/student; tax rate <strong>20%</strong>; required return 12%.</p>
      <p class="req">Required</p>
      <p>Compute the annual after-tax cash flow and the IRR. Should they invest?
         (6-year factor at 15% = 3.7845.)</p>`,
    tip: `
      <p>Build after-tax cash flow: Revenue − cash costs − depreciation = income before tax; subtract
         tax; <strong>add depreciation back</strong> (it's non-cash). Then factor = cost ÷ cash flow,
         and read the IRR off the 6-year row. Invest if IRR &gt; required return.</p>`,
    checks: [
      {label: "Annual after-tax cash flow", answer: 91667, tol: 20, fmt: "money"},
      {label: "PV annuity factor (cost ÷ cash flow)", answer: 3.818, tol: 0.02, fmt: "num"}
    ],
    solution: `
      <p>Depreciation = 350,000 ÷ 6 = $58,333. Revenue = 5 × 22,000 = $110,000; cash cost = 5 × 2,000 = $10,000.</p>
      <table class="soln"><tbody>
        <tr><td>Income before tax (110,000 − 10,000 − 58,333)</td><td class="num">$41,667</td></tr>
        <tr><td>Tax (20%)</td><td class="num">(8,333)</td></tr>
        <tr><td>Net income</td><td class="num">$33,333</td></tr>
        <tr><td>Add back depreciation</td><td class="num">58,333</td></tr>
        <tr class="total"><td>After-tax cash flow</td><td class="num">$91,667</td></tr>
      </tbody></table>
      <p>Factor = 350,000 ÷ 91,667 = <strong>3.818</strong> → IRR ≈ <strong>15%</strong> (Excel: 14.7%).
         Since 15% &gt; 12% required, <strong>invest in the remodel</strong>.</p>`
  }
  );

  B.hard.push(
  {
    id: "h9-1", chapter: 9, code: "H9-1",
    title: "NPV of an Annuity — Harbor Freight",
    topic: "Net present value",
    prompt: `
      <p><strong>Harbor Freight Co.</strong> can buy equipment for <strong>$80,000</strong> that saves
         <strong>$20,000 per year for 6 years</strong>. Required return 10% (6-year, 10% annuity factor
         = <strong>4.3553</strong>).</p>
      <p class="req">Required</p>
      <p>Compute the NPV and decide whether to invest.</p>`,
    tip: `<p>NPV = (annual cash flow × annuity factor) − initial cost. Invest if NPV &gt; 0.</p>`,
    checks: [
      {label: "PV of the savings", answer: 87106, tol: 20, fmt: "money"},
      {label: "NPV", answer: 7106, tol: 20, fmt: "money"}
    ],
    solution: `
      <p>PV of savings = 20,000 × 4.3553 = <strong>$87,106</strong>. NPV = 87,106 − 80,000 =
         <strong>$7,106</strong> (positive) → <strong>invest</strong>.</p>`
  },
  {
    id: "h9-2", chapter: 9, code: "H9-2",
    title: "After-Tax Cash Flow & IRR — Lakeside Clinic",
    topic: "Depreciation tax shield • IRR",
    prompt: `
      <p><strong>Lakeside Clinic</strong> buys equipment for <strong>$120,000</strong>, straight-line
         depreciated over 5 years. It adds $50,000/year of revenue and $14,000/year of cash operating
         cost; tax rate 25%; required return 10%. (5-year factors: 11% = 3.6959, 12% = 3.6048.)</p>
      <p class="req">Required</p>
      <p>Compute annual after-tax cash flow and the IRR. Invest?</p>`,
    tip: `<p>Income before tax = revenue − cash cost − depreciation; subtract 25% tax; add depreciation back.
       Factor = cost ÷ cash flow; read IRR off the 5-year row.</p>`,
    checks: [
      {label: "Annual after-tax cash flow", answer: 33000, tol: 20, fmt: "money"},
      {label: "PV annuity factor", answer: 3.636, tol: 0.02, fmt: "num"}
    ],
    solution: `
      <p>Depreciation = 120,000 ÷ 5 = $24,000. Income before tax = 50,000 − 14,000 − 24,000 = $12,000;
         tax = $3,000; net income = $9,000; + depreciation = <strong>$33,000</strong> cash flow.</p>
      <p>Factor = 120,000 ÷ 33,000 = <strong>3.636</strong>, between the 11% and 12% factors → IRR ≈
         <strong>11.7%</strong>. Since 11.7% &gt; 10%, <strong>invest</strong>.</p>`
  }
  );
})();
