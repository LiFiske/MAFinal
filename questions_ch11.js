/* ===================================================================
   Chapter 11 — Standard Costs and Variance Analysis
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e11-6", chapter: 11, code: "E11-6",
    title: "Calculating Material Variances",
    topic: "Material price & quantity variances",
    prompt: `
      <p><strong>Crown Jewelry</strong> produced <strong>1,500 gold rings</strong> in March.
         Standard: <strong>0.5 oz</strong> of gold per ring at <strong>$1,000/oz</strong>. Gold
         purchased and used cost <strong>$788,480</strong> at <strong>$1,024/oz</strong>.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Material price variance and material quantity variance (favorable or unfavorable?).</li>
        <li><strong>What-if:</strong> If only 740 oz had been used (purchases unchanged), recompute both.</li>
      </ol>`,
    tip: `
      <p>Actual ounces = cost ÷ price per ounce. Standard ounces allowed = rings × 0.5.</p>
      <p class="formula">Price variance = (Actual price − Std price) × Actual quantity</p>
      <p class="formula">Quantity variance = (Actual qty − Std qty) × Std price</p>
      <p>For costs, actual &gt; standard is <strong>unfavorable</strong>. The price variance is based on
         the quantity <em>purchased</em>, so changing <em>usage</em> leaves it unchanged.</p>`,
    checks: [
      {label: "Actual ounces used", answer: 770, tol: 1, fmt: "num"},
      {label: "Material price variance (amount)", answer: 18480, tol: 10, fmt: "money"},
      {label: "Material quantity variance (amount)", answer: 20000, tol: 10, fmt: "money"},
      {label: "What-if quantity variance (amount)", answer: 10000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Actual oz = 788,480 ÷ 1,024 = <strong>770 oz</strong>. Standard allowed = 1,500 × 0.5 = 750 oz.</p>
      <p><strong>Price variance</strong> = (1,024 − 1,000) × 770 = <strong>$18,480 Unfavorable</strong>.</p>
      <p><strong>Quantity variance</strong> = (770 − 750) × 1,000 = <strong>$20,000 Unfavorable</strong>.</p>
      <p><strong>What-if:</strong> price variance stays <strong>$18,480 U</strong> (it's based on purchases).
         Quantity variance = (740 − 750) × 1,000 = <strong>$10,000 Favorable</strong> — improved, because
         usage is now below the standard allowed.</p>`
  },
  {
    id: "p11-5", chapter: 11, code: "P11-5",
    title: "Comprehensive Variance Problem",
    topic: "Material, labor & overhead variances",
    prompt: `
      <p><strong>Hayes Chemical</strong> uses standard costs for its 0.5-gallon cans.</p>
      <table class="given"><tbody>
        <tr><td>Std: material 1.2 gal @ $6; labor 1.5 hr @ $9</td><td></td></tr>
        <tr><td>Variable OH $5/can; fixed OH $55,000/yr; expected production 20,000 cans</td><td></td></tr>
        <tr><td>OH application rate</td><td class="num">$7.75/can</td></tr>
      </tbody></table>
      <table class="given"><tbody>
        <tr><td>Actual cans produced</td><td class="num">23,000</td></tr>
        <tr><td>Material purchased / used</td><td class="num">35,000 / 30,000 gal</td></tr>
        <tr><td>Cost of material purchased</td><td class="num">$250,000</td></tr>
        <tr><td>Direct labor cost / avg wage</td><td class="num">$290,000 / $8.25 hr</td></tr>
        <tr><td>Actual overhead</td><td class="num">$220,000</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Standard cost per can.</li>
        <li><strong>b.</strong> Material price &amp; quantity, labor rate &amp; efficiency, and overhead
            controllable &amp; volume variances.</li>
      </ol>`,
    tip: `
      <p>Actual material price = 250,000 ÷ 35,000; actual labor hours = 290,000 ÷ 8.25. Standard
         quantities "allowed" scale to the 23,000 cans actually produced (gal = 23,000 × 1.2; hours =
         23,000 × 1.5). Overhead: <strong>controllable</strong> = actual OH − budgeted OH
         (fixed + variable×cans); <strong>volume</strong> = budgeted OH − applied OH ($7.75 × cans).</p>`,
    checks: [
      {label: "Standard cost per can (a)", answer: 28.45, tol: 0.05, fmt: "money"},
      {label: "Material price variance (amount)", answer: 40000, tol: 50, fmt: "money"},
      {label: "Material quantity variance (amount)", answer: 14400, tol: 20, fmt: "money"},
      {label: "Labor rate variance (amount)", answer: 26364, tol: 50, fmt: "money"},
      {label: "Overhead controllable variance (amount)", answer: 50000, tol: 50, fmt: "money"},
      {label: "Overhead volume variance (amount)", answer: 8250, tol: 50, fmt: "money"}
    ],
    solution: `
      <p><strong>a. Standard cost/can</strong> = material (6×1.2=7.20) + labor (9×1.5=13.50) + variable OH
         5 + fixed OH (55,000÷20,000=2.75) = <strong>$28.45</strong>.</p>
      <p><strong>b. Variances</strong> (allowed: 23,000×1.2 = 27,600 gal; 23,000×1.5 = 34,500 hr;
         actual price 250,000÷35,000 = $7.143; actual hours 290,000÷8.25 = 35,152):</p>
      <table class="soln"><tbody>
        <tr><td>Material price (7.143 − 6)×35,000</td><td class="num">$40,000 U</td></tr>
        <tr><td>Material quantity (30,000 − 27,600)×6</td><td class="num">$14,400 U</td></tr>
        <tr><td>Labor rate (9 − 8.25)×35,152</td><td class="num">$26,364 F</td></tr>
        <tr><td>Labor efficiency (35,152 − 34,500)×9</td><td class="num">$5,864 U</td></tr>
        <tr><td>OH controllable: 220,000 − (55,000 + 5×23,000=170,000)</td><td class="num">$50,000 U</td></tr>
        <tr><td>OH volume: 170,000 − (7.75×23,000=178,250)</td><td class="num">$8,250 F</td></tr>
      </tbody></table>`
  }
  );

  B.hard.push(
  {
    id: "h11-1", chapter: 11, code: "H11-1",
    title: "Material & Labor Variances — Forge Co.",
    topic: "Four variances",
    prompt: `
      <p><strong>Forge Co.</strong> standard per widget: material <strong>2 lb @ $5</strong>;
         labor <strong>0.5 hr @ $20</strong>. It produced <strong>4,000 widgets</strong>. Actual:
         material purchased &amp; used 8,400 lb at $5.20/lb; labor 2,100 hr at $19.50/hr.</p>
      <p class="req">Required</p>
      <p>Compute the material price, material quantity, labor rate, and labor efficiency variances.</p>`,
    tip: `<p>Standard allowed: material 4,000×2; hours 4,000×0.5. Price/rate variances use actual quantity;
       quantity/efficiency variances use the standard price/rate.</p>`,
    checks: [
      {label: "Material price variance (amount)", answer: 1680, tol: 5, fmt: "money"},
      {label: "Material quantity variance (amount)", answer: 2000, tol: 5, fmt: "money"},
      {label: "Labor rate variance (amount)", answer: 1050, tol: 5, fmt: "money"},
      {label: "Labor efficiency variance (amount)", answer: 2000, tol: 5, fmt: "money"}
    ],
    solution: `
      <p>Std allowed: 8,000 lb; 2,000 hr.</p>
      <p><strong>Material price</strong> = (5.20 − 5.00)×8,400 = <strong>$1,680 U</strong>.
         <strong>Material quantity</strong> = (8,400 − 8,000)×5 = <strong>$2,000 U</strong>.</p>
      <p><strong>Labor rate</strong> = (20 − 19.50)×2,100 = <strong>$1,050 F</strong>.
         <strong>Labor efficiency</strong> = (2,100 − 2,000)×20 = <strong>$2,000 U</strong>.</p>`
  },
  {
    id: "h11-2", chapter: 11, code: "H11-2",
    title: "Overhead Variances — Acme",
    topic: "Controllable & volume variances",
    prompt: `
      <p><strong>Acme</strong> budgets fixed overhead of <strong>$30,000</strong> and a variable
         overhead rate of <strong>$4/unit</strong> at expected production of 10,000 units (so the OH
         application rate is $7/unit). Actual production was <strong>11,000 units</strong> and actual
         total overhead was <strong>$78,000</strong>.</p>
      <p class="req">Required</p>
      <p>Compute the overhead controllable variance and the overhead volume variance.</p>`,
    tip: `<p>Budgeted OH at actual output = fixed + variable×units. Controllable = actual − budgeted.
       Applied OH = $7 × units. Volume = budgeted − applied.</p>`,
    checks: [
      {label: "Overhead controllable variance (amount)", answer: 4000, tol: 10, fmt: "money"},
      {label: "Overhead volume variance (amount)", answer: 3000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Budgeted OH = 30,000 + 4×11,000 = $74,000. Applied OH = 7×11,000 = $77,000.</p>
      <p><strong>Controllable</strong> = 78,000 − 74,000 = <strong>$4,000 Unfavorable</strong>.</p>
      <p><strong>Volume</strong> = 74,000 − 77,000 = <strong>$3,000 Favorable</strong> (output exceeded
         the level used to set the fixed-OH rate, so more was applied than budgeted).</p>`
  }
  );
})();
