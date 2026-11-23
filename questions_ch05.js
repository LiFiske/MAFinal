/* ===================================================================
   Chapter 5 — Variable (Direct) vs. Full (Absorption) Costing
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e5-xenoc", chapter: 5, code: "E5-4→10",
    title: "Full vs. Variable Costing — Xenoc Speakers",
    topic: "Ending inventory, COGS, net income both ways",
    prompt: `
      <p><strong>Xenoc, Inc.</strong> produces stereo speakers (no beginning inventory).</p>
      <table class="given"><tbody>
        <tr><td>Selling price per pair</td><td class="num">$1,800</td></tr>
        <tr><td>Variable manufacturing cost per unit (DM 150 + DL 200 + VOH 100)</td><td class="num">$450</td></tr>
        <tr><td>Fixed manufacturing overhead per year</td><td class="num">$600,000</td></tr>
        <tr><td>Fixed selling + administrative per year</td><td class="num">$210,000 + $110,000</td></tr>
        <tr><td>Produced / Sold</td><td class="num">1,500 / 1,200</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Ending inventory under full costing and under variable costing.</li>
        <li><strong>b.</strong> COGS under full costing and variable cost of goods sold.</li>
        <li><strong>c.</strong> Net income under full costing and under variable costing.</li>
        <li><strong>d.</strong> Fixed overhead in ending inventory — compare to the net-income difference.</li>
      </ol>`,
    tip: `
      <p>The <em>only</em> difference between the two methods is fixed manufacturing overhead:</p>
      <ul>
        <li><strong>Full (absorption):</strong> FMOH is a product cost. FMOH per unit = FMOH ÷ units
            <em>produced</em>. Full unit cost = variable cost + FMOH/unit.</li>
        <li><strong>Variable:</strong> FMOH is a period cost — expensed in full; unit cost = variable only.</li>
        <li>When production &gt; sales, full-costing income is higher by exactly
            <strong>FMOH/unit × units in ending inventory</strong>.</li>
      </ul>`,
    checks: [
      {label: "Ending inventory — full costing", answer: 255000, tol: 5, fmt: "money"},
      {label: "Ending inventory — variable costing", answer: 135000, tol: 5, fmt: "money"},
      {label: "COGS — full costing", answer: 1020000, tol: 5, fmt: "money"},
      {label: "Net income — full costing", answer: 820000, tol: 10, fmt: "money"},
      {label: "Net income — variable costing", answer: 700000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>FMOH/unit = 600,000 ÷ 1,500 = $400. Full unit cost = 450 + 400 = $850. Ending units = 300.</p>
      <p><strong>a.</strong> Full = 300 × 850 = <strong>$255,000</strong>; Variable = 300 × 450 = <strong>$135,000</strong>.</p>
      <p><strong>b.</strong> Full COGS = 1,200 × 850 = <strong>$1,020,000</strong>; Variable COGS = 1,200 × 450 = <strong>$540,000</strong>.</p>
      <p><strong>c. Full costing:</strong> Sales 2,160,000 − 1,020,000 = GM 1,140,000 − 210,000 − 110,000 = <strong>$820,000</strong>.<br>
         <strong>Variable costing:</strong> Sales 2,160,000 − 540,000 = CM 1,620,000 − 600,000 − 210,000 − 110,000 = <strong>$700,000</strong>.</p>
      <p><strong>d.</strong> FMOH in ending inventory = 400 × 300 = <strong>$120,000</strong> = the income
         difference ($820,000 − $700,000). ✓</p>`
  },
  {
    id: "e5-summit", chapter: 5, code: "E5-11→18",
    title: "Full vs. Variable Costing — Summit Snow Shovels",
    topic: "The FMOH-in-inventory difference",
    prompt: `
      <p><strong>Summit Manufacturing</strong> produces snow shovels (no beginning inventory).</p>
      <table class="given"><tbody>
        <tr><td>Selling price</td><td class="num">$30</td></tr>
        <tr><td>Variable manufacturing cost per unit (5 + 4 + 3)</td><td class="num">$12</td></tr>
        <tr><td>Fixed manufacturing overhead per year</td><td class="num">$180,000</td></tr>
        <tr><td>Fixed selling + administrative per year</td><td class="num">$160,000</td></tr>
        <tr><td>Produced / Sold</td><td class="num">50,000 / 45,000</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Ending inventory under full and variable costing.</li>
        <li><strong>b.</strong> The difference in net income between the two methods — without preparing either statement.</li>
        <li><strong>c.</strong> Net income under full costing and under variable costing.</li>
      </ol>`,
    tip: `
      <p>Shortcut for (b): difference in income = FMOH/unit × units added to inventory
         (units produced − units sold). You don't need full statements to get it.</p>`,
    checks: [
      {label: "Ending inventory — full", answer: 78000, tol: 5, fmt: "money"},
      {label: "Ending inventory — variable", answer: 60000, tol: 5, fmt: "money"},
      {label: "Difference in net income (b)", answer: 18000, tol: 5, fmt: "money"},
      {label: "Net income — full costing", answer: 488000, tol: 10, fmt: "money"},
      {label: "Net income — variable costing", answer: 470000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>FMOH/unit = 180,000 ÷ 50,000 = $3.60. Full unit cost = 12 + 3.60 = $15.60. Ending units = 5,000.</p>
      <p><strong>a.</strong> Full = 5,000 × 15.60 = <strong>$78,000</strong>; Variable = 5,000 × 12 = <strong>$60,000</strong>.</p>
      <p><strong>b.</strong> 5,000 × $3.60 = <strong>$18,000</strong> (full higher — production exceeded sales).</p>
      <p><strong>c. Full:</strong> Sales 1,350,000 − COGS 702,000 = GM 648,000 − 160,000 = <strong>$488,000</strong>.<br>
         <strong>Variable:</strong> Sales 1,350,000 − var COGS 540,000 = CM 810,000 − 180,000 − 160,000 = <strong>$470,000</strong>.</p>`
  },
  {
    id: "p5-1", chapter: 5, code: "P5-1",
    title: "Sales Constant but Production Fluctuates — Spencer",
    topic: "Why full-costing profit swings",
    prompt: `
      <p><strong>Spencer Electronics</strong> — first three years (sales constant at 20,000 units/yr,
         price $250, variable production $150/unit, fixed production $750,000/yr, fixed S&amp;A $220,000/yr):</p>
      <table class="given">
        <thead><tr><th></th><th class="num">2020</th><th class="num">2021</th><th class="num">2022</th></tr></thead>
        <tbody>
          <tr><td>Units sold</td><td class="num">20,000</td><td class="num">20,000</td><td class="num">20,000</td></tr>
          <tr><td>Units produced</td><td class="num">20,000</td><td class="num">25,000</td><td class="num">15,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Full-costing net income for each year.</li>
        <li><strong>b.</strong> Variable-costing net income for each year.</li>
        <li><strong>c.</strong> Explain why full-costing profit fluctuates but variable-costing profit does not.</li>
      </ol>`,
    tip: `
      <p>Full unit cost changes each year because FMOH/unit = 750,000 ÷ units <em>produced</em>.
         When production &gt; sales (2021) income is boosted (FMOH parked in inventory); when
         production &lt; sales (2022) income is dragged down (prior FMOH released). Variable costing
         expenses all FMOH every year, so with constant sales its income is flat.</p>`,
    checks: [
      {label: "Full-costing net income 2021", answer: 1180000, tol: 20, fmt: "money"},
      {label: "Full-costing net income 2022", answer: 880000, tol: 20, fmt: "money"},
      {label: "Variable-costing net income (any year)", answer: 1030000, tol: 20, fmt: "money"},
      {label: "Ending inventory 2021 — full costing", answer: 900000, tol: 20, fmt: "money"}
    ],
    solution: `
      <p>Full unit cost = 150 + (750,000 ÷ produced): 2020 = $187.50; 2021 = $180; 2022 = $200.</p>
      <table class="soln">
        <thead><tr><th></th><th class="num">2020</th><th class="num">2021</th><th class="num">2022</th></tr></thead>
        <tbody>
          <tr><td>Full-costing net income</td><td class="num">$1,030,000</td><td class="num">$1,180,000</td><td class="num">$880,000</td></tr>
          <tr><td>Variable-costing net income</td><td class="num">$1,030,000</td><td class="num">$1,030,000</td><td class="num">$1,030,000</td></tr>
        </tbody>
      </table>
      <p>2021 ending inventory (5,000 units) under full costing = 5,000 × $180 = <strong>$900,000</strong>.</p>
      <p><strong>c.</strong> Full-costing income moves with the FMOH shifted into or out of inventory as
         production differs from sales; variable costing treats FMOH as a period cost, so with constant
         sales its income is constant.</p>`
  },
  {
    id: "p5-2", chapter: 5, code: "P5-2",
    title: "Sales & Production Fluctuate — Hamilton",
    topic: "Full vs. variable across three years",
    prompt: `
      <p><strong>Hamilton Stage Supplies</strong> — first three years (price $225, variable production
         $75/unit, fixed production $50,000/yr, fixed S&amp;A $5,000/yr):</p>
      <table class="given">
        <thead><tr><th></th><th class="num">2020</th><th class="num">2021</th><th class="num">2022</th></tr></thead>
        <tbody>
          <tr><td>Units sold</td><td class="num">5,000</td><td class="num">5,000</td><td class="num">5,000</td></tr>
          <tr><td>Units produced</td><td class="num">5,000</td><td class="num">6,000</td><td class="num">4,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Full-costing net income each year.</li>
        <li><strong>b.</strong> Variable-costing net income each year.</li>
        <li><strong>c.</strong> Why is full-costing income lowest in 2022?</li>
      </ol>`,
    tip: `
      <p>Same idea as Spencer: full unit cost = 75 + (50,000 ÷ produced). In 2022 the firm sells more
         than it makes, so FMOH that sat in 2021's ending inventory is released into 2022 COGS,
         pushing income down.</p>`,
    checks: [
      {label: "Full-costing net income 2021", answer: 703333, tol: 50, fmt: "money"},
      {label: "Full-costing net income 2022", answer: 686667, tol: 50, fmt: "money"},
      {label: "Variable-costing net income (any year)", answer: 695000, tol: 20, fmt: "money"}
    ],
    solution: `
      <p>Full unit cost = 75 + (50,000 ÷ produced): 2020 = $85.00; 2021 ≈ $83.33; 2022 = $87.50.</p>
      <table class="soln">
        <thead><tr><th></th><th class="num">2020</th><th class="num">2021</th><th class="num">2022</th></tr></thead>
        <tbody>
          <tr><td>Full-costing net income</td><td class="num">$695,000</td><td class="num">≈$703,333</td><td class="num">≈$686,667</td></tr>
          <tr><td>Variable-costing net income</td><td class="num">$695,000</td><td class="num">$695,000</td><td class="num">$695,000</td></tr>
        </tbody>
      </table>
      <p><strong>c.</strong> In 2021 production (6,000) exceeded sales, so some FMOH was deferred in
         inventory (higher income). In 2022 sales exceeded production (4,000): that deferred FMOH flows
         into COGS, so full-costing income is the lowest of the three years.
         <span class="note">(Cents differ slightly from rounding the per-unit fixed cost.)</span></p>`
  }
  );

  B.hard.push(
  {
    id: "h5-1", chapter: 5, code: "H5-1",
    title: "Full vs. Variable Costing — Arc Audio",
    topic: "Both income statements in one year",
    prompt: `
      <p><strong>Arc Audio</strong> (no beginning inventory): price $500; variable manufacturing cost
         $180/unit; fixed manufacturing overhead $300,000/yr; fixed S&amp;A $120,000/yr.
         Produced 10,000; sold 8,000.</p>
      <ol class="parts">
        <li><strong>a.</strong> Ending inventory under full and variable costing.</li>
        <li><strong>b.</strong> Net income under full and variable costing.</li>
      </ol>`,
    tip: `<p>FMOH/unit = 300,000 ÷ produced. Full unit cost = variable + FMOH/unit. Income difference =
       FMOH/unit × units added to inventory.</p>`,
    checks: [
      {label: "Ending inventory — full", answer: 420000, tol: 10, fmt: "money"},
      {label: "Ending inventory — variable", answer: 360000, tol: 10, fmt: "money"},
      {label: "Net income — full costing", answer: 2200000, tol: 20, fmt: "money"},
      {label: "Net income — variable costing", answer: 2140000, tol: 20, fmt: "money"}
    ],
    solution: `
      <p>FMOH/unit = 300,000 ÷ 10,000 = $30. Full unit cost = 180 + 30 = $210. Ending units = 2,000.</p>
      <p><strong>a.</strong> Full = 2,000 × 210 = <strong>$420,000</strong>; Variable = 2,000 × 180 = <strong>$360,000</strong>.</p>
      <p><strong>b. Full:</strong> Sales 4,000,000 − COGS (8,000×210=1,680,000) = GM 2,320,000 − 120,000 = <strong>$2,200,000</strong>.<br>
         <strong>Variable:</strong> 4,000,000 − (8,000×180=1,440,000) = CM 2,560,000 − 300,000 − 120,000 = <strong>$2,140,000</strong>.
         Difference $60,000 = $30 × 2,000. ✓</p>`
  },
  {
    id: "h5-2", chapter: 5, code: "H5-2",
    title: "Income Difference Shortcut — Delta Tools",
    topic: "FMOH in inventory",
    prompt: `
      <p><strong>Delta Tools</strong> produced 40,000 units and sold 36,000 (no beginning inventory).
         Fixed manufacturing overhead was $200,000.</p>
      <p class="req">Required</p>
      <p>Without preparing income statements, by how much do full-costing and variable-costing net
         income differ, and which is higher?</p>`,
    tip: `<p>Difference = FMOH per unit × change in inventory units. Full costing is higher when
       production exceeds sales.</p>`,
    checks: [{label: "Difference in net income", answer: 20000, tol: 5, fmt: "money"}],
    solution: `
      <p>FMOH/unit = 200,000 ÷ 40,000 = $5. Units added to inventory = 40,000 − 36,000 = 4,000.
         Difference = 4,000 × $5 = <strong>$20,000</strong>, with <strong>full costing higher</strong>
         (production exceeded sales, so $20,000 of FMOH is deferred in inventory).</p>`
  }
  );
})();
