/* ===================================================================
   Chapter 4 — Cost-Volume-Profit Analysis
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e4-7", chapter: 4, code: "E4-7",
    title: "Scattergraph",
    topic: "Cost behavior • reading a scattergraph",
    prompt: `
      <p><strong>Reef Office Supplies</strong> wants to estimate the relationship between customer
         service cost and sales:</p>
      <table class="given">
        <thead><tr><th>Month</th><th class="num">Service cost</th><th class="num">Sales</th></tr></thead>
        <tbody>
          <tr><td>May</td><td class="num">$9,740</td><td class="num">$170,000</td></tr>
          <tr><td>June</td><td class="num">$10,100</td><td class="num">$210,000</td></tr>
          <tr><td>July</td><td class="num">$10,690</td><td class="num">$230,000</td></tr>
          <tr><td>August</td><td class="num">$12,750</td><td class="num">$255,000</td></tr>
          <tr><td>September</td><td class="num">$13,830</td><td class="num">$275,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <p>Plotting cost (vertical) against sales (horizontal): does the relationship look linear,
         and are any points outliers?</p>`,
    tip: `
      <p>A scattergraph is the eyeball test before any formula. Look for points roughly forming a
         straight line; a point well off that line is an <strong>outlier</strong> that would distort
         the high-low method. Check the lowest-sales month here against the trend of the others.</p>`,
    checks: [],
    solution: `
      <p>The relationship appears approximately <strong>linear between sales of $210,000 and
         $275,000</strong>. The customer-service cost at <strong>$170,000 of sales (May) appears to
         be an outlier</strong> — it sits above the line implied by the other four points, so it
         should be treated cautiously in cost estimation.</p>`
  },
  {
    id: "e4-12", chapter: 4, code: "E4-12",
    title: "CVP Analysis, Profit Equation",
    topic: "Break-even & target profit in sales dollars",
    prompt: `
      <p><strong>Lake Stevens Marina</strong> has fixed costs of <strong>$350,000 per month</strong>
         and variable cost of <strong>$0.30 per dollar of sales</strong>.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Break-even point per month in sales dollars.</li>
        <li><strong>b.</strong> Sales needed for a monthly profit of $70,000.</li>
        <li><strong>c.</strong> If July sales are $1,000,000, what is the expected profit?</li>
        <li><strong>What-if (each independent):</strong> break-even if (1) fixed costs rise to
            $365,000; (2) variable cost falls to $0.25 per sales dollar; (3) sales volume rises to $1,100,000.</li>
      </ol>`,
    tip: `
      <p>When cost is given per sales dollar, work in <strong>contribution margin ratio</strong>:</p>
      <p class="formula">CM ratio = 1 − variable cost per sales $</p>
      <p>Break-even sales = Fixed ÷ CM ratio. For a target profit, add it to fixed first:
         (Fixed + Profit) ÷ CM ratio. Expected profit = Sales × CM ratio − Fixed.
         Note: break-even does <em>not</em> depend on the volume of sales.</p>`,
    checks: [
      {label: "Break-even sales (a)", answer: 500000, tol: 50, fmt: "money"},
      {label: "Sales for $70,000 profit (b)", answer: 600000, tol: 50, fmt: "money"},
      {label: "Profit at $1,000,000 sales (c)", answer: 350000, tol: 50, fmt: "money"},
      {label: "Break-even if fixed = $365,000", answer: 521429, tol: 50, fmt: "money"},
      {label: "Break-even if variable = $0.25", answer: 466667, tol: 50, fmt: "money"}
    ],
    solution: `
      <p>CM ratio = 1 − 0.30 = <strong>0.70</strong>.</p>
      <p><strong>a.</strong> $350,000 ÷ 0.70 = <strong>$500,000</strong>.</p>
      <p><strong>b.</strong> ($350,000 + $70,000) ÷ 0.70 = $420,000 ÷ 0.70 = <strong>$600,000</strong>.</p>
      <p><strong>c.</strong> $1,000,000 × 0.70 − $350,000 = $700,000 − $350,000 = <strong>$350,000</strong>.</p>
      <p><strong>What-if.</strong> (1) $365,000 ÷ 0.70 = <strong>$521,429</strong>.
         (2) CM ratio 0.75 → $350,000 ÷ 0.75 = <strong>$466,667</strong>.
         (3) <strong>No change</strong> — $500,000. Sales volume doesn't enter the break-even formula;
         only price, variable cost, and fixed cost do.</p>`
  },
  {
    id: "p4-6", chapter: 4, code: "P4-6",
    title: "Account Analysis, High-Low, Contribution Margin",
    topic: "Separating fixed & variable costs",
    prompt: `
      <p><strong>Light House Hotel</strong> — occupancy and costs:</p>
      <table class="given">
        <thead><tr><th></th><th class="num">April</th><th class="num">May</th><th class="num">June</th></tr></thead>
        <tbody>
          <tr><td>Occupancy (rooms)</td><td class="num">1,700</td><td class="num">1,850</td><td class="num">1,950</td></tr>
          <tr><td>Day manager salary</td><td class="num">4,500</td><td class="num">4,500</td><td class="num">4,500</td></tr>
          <tr><td>Night manager salary</td><td class="num">3,900</td><td class="num">3,900</td><td class="num">3,900</td></tr>
          <tr><td>Cleaning staff</td><td class="num">15,960</td><td class="num">16,275</td><td class="num">16,590</td></tr>
          <tr><td>Depreciation</td><td class="num">12,500</td><td class="num">12,500</td><td class="num">12,500</td></tr>
          <tr><td>Complimentary breakfast</td><td class="num">5,050</td><td class="num">5,205</td><td class="num">5,225</td></tr>
          <tr class="total"><td>Total</td><td class="num">41,910</td><td class="num">42,380</td><td class="num">42,715</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Using <em>account analysis</em> on April, find fixed cost per month and variable cost per occupied room.</li>
        <li><strong>b.</strong> Using the <em>high-low</em> method, find fixed cost per month and variable cost per room.</li>
        <li><strong>c.</strong> If the average rate is $120/night, what is the contribution margin per room (use the high-low variable cost)?</li>
      </ol>`,
    tip: `
      <p><strong>Account analysis</strong> labels each line fixed or variable by its nature (salaries &
         depreciation = fixed; cleaning & breakfast = variable), then divides the variable total by units.</p>
      <p><strong>High-low</strong> uses only the highest- and lowest-activity months:</p>
      <p class="formula">Variable/unit = (High cost − Low cost) ÷ (High units − Low units)</p>
      <p>Then Fixed = Total cost − Variable/unit × units (at either point). CM/room = price − variable/room.</p>`,
    checks: [
      {label: "Account analysis — fixed/month (a)", answer: 20900, tol: 5, fmt: "money"},
      {label: "Account analysis — variable/room (a)", answer: 12.36, tol: 0.05, fmt: "money"},
      {label: "High-low — variable/room (b)", answer: 3.22, tol: 0.02, fmt: "money"},
      {label: "High-low — fixed/month (b)", answer: 36436, tol: 5, fmt: "money"},
      {label: "Contribution margin per room (c)", answer: 116.78, tol: 0.05, fmt: "money"}
    ],
    solution: `
      <p><strong>a. Account analysis (April).</strong>
         Fixed = 4,500 + 3,900 + 12,500 = <strong>$20,900</strong>.
         Variable = 15,960 + 5,050 = $21,010 → per room = 21,010 ÷ 1,700 = <strong>$12.36</strong>.</p>
      <p><strong>b. High-low</strong> (June high 1,950; April low 1,700).
         Variable/room = (42,715 − 41,910) ÷ (1,950 − 1,700) = 805 ÷ 250 = <strong>$3.22</strong>.
         Fixed = 41,910 − 3.22 × 1,700 = 41,910 − 5,474 = <strong>$36,436</strong>.</p>
      <p><strong>c.</strong> CM/room = $120 − $3.22 = <strong>$116.78</strong>.</p>
      <p class="note">Account analysis and high-low give very different variable costs here — a reminder
         that the method chosen matters.</p>`
  },
  {
    id: "p4-9", chapter: 4, code: "P4-9",
    title: "High-Low, Profit Equation",
    topic: "High-low on two cost pools • income forecast",
    prompt: `
      <p><strong>Crux, Inc.</strong> produces amplifiers selling for <strong>$900</strong> each.
         2020 monthly data (high and low months shown; full year totals 1,421 units):</p>
      <table class="given">
        <thead><tr><th>Month</th><th class="num">Units</th><th class="num">Production cost</th><th class="num">S&amp;A cost</th></tr></thead>
        <tbody>
          <tr><td>March (low)</td><td class="num">97</td><td class="num">$83,007</td><td class="num">$22,495</td></tr>
          <tr><td>September (high)</td><td class="num">138</td><td class="num">$112,978</td><td class="num">$28,030</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Use high-low to split <em>both</em> production costs and S&amp;A costs into
            variable per unit and fixed per month.</li>
        <li><strong>b.</strong> Forecast 2021 income before taxes if sales are 1,650 units.</li>
      </ol>`,
    tip: `
      <p>Run high-low separately on each cost pool. Then build the profit equation for the year —
         remember fixed costs are stated <strong>per month</strong>, so multiply by 12.</p>
      <p class="formula">Income = Sales − (Var/unit × units + Fixed×12) for each pool</p>`,
    checks: [
      {label: "Production variable per unit (a)", answer: 731, tol: 2, fmt: "money"},
      {label: "Production fixed per month (a)", answer: 12100, tol: 5, fmt: "money"},
      {label: "S&A variable per unit (a)", answer: 135, tol: 2, fmt: "money"},
      {label: "S&A fixed per month (a)", answer: 9400, tol: 5, fmt: "money"},
      {label: "2021 income before taxes (enter loss negative)", answer: -201900, tol: 50, fmt: "money"}
    ],
    solution: `
      <p><strong>a. Production:</strong> variable = (112,978 − 83,007) ÷ (138 − 97) = 29,971 ÷ 41 =
         <strong>$731</strong>. Fixed = 112,978 − 731 × 138 = 112,978 − 100,878 = <strong>$12,100/mo</strong>.</p>
      <p><strong>S&amp;A:</strong> variable = (28,030 − 22,495) ÷ 41 = 5,535 ÷ 41 = <strong>$135</strong>.
         Fixed = 28,030 − 135 × 138 = 28,030 − 18,630 = <strong>$9,400/mo</strong>.</p>
      <p><strong>b. Forecast @ 1,650 units</strong></p>
      <table class="soln"><tbody>
        <tr><td>Sales 1,650 × $900</td><td class="num">$1,485,000</td></tr>
        <tr><td>Production — variable 731 × 1,650</td><td class="num">(1,206,150)</td></tr>
        <tr><td>Production — fixed 12,100 × 12</td><td class="num">(145,200)</td></tr>
        <tr><td>S&amp;A — variable 135 × 1,650</td><td class="num">(222,750)</td></tr>
        <tr><td>S&amp;A — fixed 9,400 × 12</td><td class="num">(112,800)</td></tr>
        <tr class="total"><td>Income (loss)</td><td class="num">($201,900)</td></tr>
      </tbody></table>`
  },
  {
    id: "p4-13", chapter: 4, code: "P4-13",
    title: "Multiproduct, Contribution Margin Ratio",
    topic: "Weighted-average CM ratio • break-even",
    prompt: `
      <p><strong>ComputerGuard</strong> offers consulting, training, and repair. Last year:</p>
      <table class="given"><tbody>
        <tr><td>Total sales</td><td class="num">$1,500,000</td></tr>
        <tr><td>Total variable costs</td><td class="num">$881,900</td></tr>
        <tr><td>Total contribution margin</td><td class="num">$618,100</td></tr>
        <tr><td>Common fixed costs (rent 55k, owner salary 212k, utilities 13k, other 10k)</td><td class="num">$290,000</td></tr>
        <tr class="total"><td>Profit</td><td class="num">$328,100</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> If sales rise 15% (same mix), what is the % increase in profit? Why does profit rise faster than sales?</li>
        <li><strong>What-if:</strong> What total sales revenue is the break-even point for the company?</li>
      </ol>`,
    tip: `
      <p>With a product mix, use the <strong>weighted-average CM ratio = total CM ÷ total sales</strong>.
         A sales increase adds (increase × CM ratio) straight to profit, because fixed costs don't change —
         so profit grows at a higher percentage than sales (operating leverage). Break-even sales =
         Fixed ÷ weighted-average CM ratio.</p>`,
    checks: [
      {label: "Weighted-average CM ratio", answer: 0.4121, tol: 0.001, fmt: "num"},
      {label: "Dollar increase in profit (a)", answer: 92715, tol: 50, fmt: "money"},
      {label: "Percent increase in profit (e.g. 28.3)", answer: 28.26, tol: 0.3, fmt: "num"},
      {label: "Break-even sales revenue (what-if)", answer: 703770, tol: 200, fmt: "money"}
    ],
    solution: `
      <p>Weighted-average CM ratio = 618,100 ÷ 1,500,000 = <strong>0.4121 (41.21%)</strong>.</p>
      <p><strong>a.</strong> Sales increase = 15% × 1,500,000 = $225,000.
         Profit increase = 225,000 × 0.4121 = <strong>$92,715</strong>.
         % increase in profit = 92,715 ÷ 328,100 = <strong>28.3%</strong> — larger than 15% because
         fixed costs stay flat while contribution margin grows.</p>
      <p><strong>What-if.</strong> Break-even sales = 290,000 ÷ 0.4121 = <strong>≈ $703,770</strong>.</p>`
  }
  );

  B.hard.push(
  {
    id: "h4-1", chapter: 4, code: "H4-1",
    title: "CVP Profit Equation — Summit Gym",
    topic: "Break-even & target profit (CM ratio)",
    prompt: `
      <p><strong>Summit Gym</strong> has fixed costs of <strong>$240,000/month</strong> and variable
         cost of <strong>$0.40 per dollar of sales</strong>.</p>
      <ol class="parts">
        <li><strong>a.</strong> Monthly break-even sales.</li>
        <li><strong>b.</strong> Sales needed for a $90,000 monthly profit.</li>
        <li><strong>c.</strong> Profit at $700,000 of sales.</li>
      </ol>`,
    tip: `<p>CM ratio = 1 − 0.40. Break-even = Fixed ÷ CM ratio; target = (Fixed + Profit) ÷ CM ratio;
       Profit = Sales × CM ratio − Fixed.</p>`,
    checks: [
      {label: "Break-even sales (a)", answer: 400000, tol: 50, fmt: "money"},
      {label: "Sales for $90,000 profit (b)", answer: 550000, tol: 50, fmt: "money"},
      {label: "Profit at $700,000 sales (c)", answer: 180000, tol: 50, fmt: "money"}
    ],
    solution: `
      <p>CM ratio = 0.60.
         <strong>a.</strong> 240,000 ÷ 0.60 = <strong>$400,000</strong>.
         <strong>b.</strong> (240,000 + 90,000) ÷ 0.60 = <strong>$550,000</strong>.
         <strong>c.</strong> 700,000 × 0.60 − 240,000 = 420,000 − 240,000 = <strong>$180,000</strong>.</p>`
  },
  {
    id: "h4-2", chapter: 4, code: "H4-2",
    title: "High-Low & Break-even — Nord Logistics",
    topic: "High-low • CM per unit • break-even units",
    prompt: `
      <p><strong>Nord Logistics</strong> charges <strong>$14</strong> per delivery. Over the year its
         busiest month handled 9,000 deliveries at a total cost of $74,000; its slowest handled 5,000
         deliveries at a total cost of $50,000.</p>
      <ol class="parts">
        <li><strong>a.</strong> Use high-low to find variable cost per delivery and fixed cost per month.</li>
        <li><strong>b.</strong> Contribution margin per delivery and monthly break-even in deliveries.</li>
      </ol>`,
    tip: `<p>Variable/unit = (high cost − low cost) ÷ (high units − low units). Fixed = total − variable×units.
       CM/unit = price − variable/unit; break-even units = Fixed ÷ CM/unit.</p>`,
    checks: [
      {label: "Variable cost per delivery", answer: 6, tol: 0.05, fmt: "money"},
      {label: "Fixed cost per month", answer: 20000, tol: 5, fmt: "money"},
      {label: "Contribution margin per delivery", answer: 8, tol: 0.05, fmt: "money"},
      {label: "Break-even deliveries per month", answer: 2500, tol: 2, fmt: "num"}
    ],
    solution: `
      <p><strong>a.</strong> Variable = (74,000 − 50,000) ÷ (9,000 − 5,000) = 24,000 ÷ 4,000 =
         <strong>$6.00</strong>. Fixed = 74,000 − 6 × 9,000 = <strong>$20,000/mo</strong>.</p>
      <p><strong>b.</strong> CM/delivery = 14 − 6 = <strong>$8</strong>. Break-even = 20,000 ÷ 8 =
         <strong>2,500 deliveries</strong>.</p>`
  },
  {
    id: "h4-3", chapter: 4, code: "H4-3",
    title: "Multiproduct CM Ratio — Pinnacle Media",
    topic: "Weighted-average CM ratio • break-even & leverage",
    prompt: `
      <p><strong>Pinnacle Media</strong> had total sales of <strong>$800,000</strong>, total variable
         costs of <strong>$480,000</strong>, and common fixed costs of <strong>$240,000</strong>.</p>
      <ol class="parts">
        <li><strong>a.</strong> Weighted-average CM ratio and company break-even sales.</li>
        <li><strong>b.</strong> If sales rise 10% (same mix), the dollar and percent increase in profit.</li>
      </ol>`,
    tip: `<p>CM ratio = total CM ÷ total sales. Break-even = Fixed ÷ CM ratio. Profit increase = sales
       increase × CM ratio; compare to current profit = CM − Fixed.</p>`,
    checks: [
      {label: "Weighted-average CM ratio", answer: 0.40, tol: 0.005, fmt: "num"},
      {label: "Break-even sales (a)", answer: 600000, tol: 50, fmt: "money"},
      {label: "Dollar increase in profit (b)", answer: 32000, tol: 20, fmt: "money"},
      {label: "Percent increase in profit (e.g. 40)", answer: 40, tol: 0.5, fmt: "num"}
    ],
    solution: `
      <p>CM = 800,000 − 480,000 = 320,000 → CM ratio = 320,000 ÷ 800,000 = <strong>0.40</strong>.</p>
      <p><strong>a.</strong> Break-even = 240,000 ÷ 0.40 = <strong>$600,000</strong>.</p>
      <p><strong>b.</strong> Sales increase = 80,000 → profit increase = 80,000 × 0.40 = <strong>$32,000</strong>.
         Current profit = 320,000 − 240,000 = 80,000, so % increase = 32,000 ÷ 80,000 =
         <strong>40%</strong> (vs. 10% sales — operating leverage).</p>`
  }
  );
})();
