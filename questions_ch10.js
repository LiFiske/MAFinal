/* ===================================================================
   Chapter 10 — Budgetary Planning and Control
   (No Excel homework file for this chapter — these problems are built
    to the master-budget formulas from the lecture deck.)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "q10-1", chapter: 10, code: "Q10-1",
    title: "Production Budget",
    topic: "Required production from sales & inventory",
    prompt: `
      <p><strong>Brightwave Co.</strong> budgets unit sales of: Q1 10,000; Q2 12,000; Q3 14,000.
         Desired ending inventory each quarter = <strong>20% of next quarter's sales</strong>.
         Beginning inventory for Q1 is <strong>2,000</strong> units.</p>
      <p class="req">Required</p>
      <p>Compute required production for Q1 and Q2.</p>`,
    tip: `
      <p>The production budget flows from the sales budget:</p>
      <p class="formula">Required production = Sales + Desired ending inventory − Beginning inventory</p>
      <p>Each quarter's desired ending inventory becomes the <em>next</em> quarter's beginning inventory,
         so work the quarters in order.</p>`,
    checks: [
      {label: "Q1 required production", answer: 10400, tol: 2, fmt: "num"},
      {label: "Q2 required production", answer: 12400, tol: 2, fmt: "num"}
    ],
    solution: `
      <p><strong>Q1:</strong> ending = 20% × 12,000 = 2,400. Production = 10,000 + 2,400 − 2,000 =
         <strong>10,400</strong>.</p>
      <p><strong>Q2:</strong> beginning = 2,400; ending = 20% × 14,000 = 2,800. Production =
         12,000 + 2,800 − 2,400 = <strong>12,400</strong>.</p>`
  },
  {
    id: "q10-2", chapter: 10, code: "Q10-2",
    title: "Direct Materials Purchases Budget",
    topic: "Purchases from production needs",
    prompt: `
      <p><strong>Brightwave Co.</strong> (continuing): each unit needs <strong>3 lbs</strong> of material
         at <strong>$2/lb</strong>. Planned production: Q1 10,400 units; Q2 12,400 units. Desired ending
         materials inventory each quarter = <strong>10% of next quarter's production needs</strong>.
         Beginning materials for Q1 = <strong>3,120 lbs</strong>.</p>
      <p class="req">Required</p>
      <p>Compute Q1 pounds required for production, pounds to purchase, and the cost of Q1 purchases.</p>`,
    tip: `
      <p>Material needed for production = units × pounds per unit. Then:</p>
      <p class="formula">Purchases = Needed for production + Desired ending materials − Beginning materials</p>
      <p>Multiply pounds purchased by the price per pound for the dollar budget.</p>`,
    checks: [
      {label: "Q1 pounds needed for production", answer: 31200, tol: 5, fmt: "num"},
      {label: "Q1 pounds to purchase", answer: 31800, tol: 5, fmt: "num"},
      {label: "Q1 cost of purchases", answer: 63600, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Needed for production = 10,400 × 3 = <strong>31,200 lbs</strong>.
         Q2 needs = 12,400 × 3 = 37,200 lbs → desired ending = 10% × 37,200 = 3,720 lbs.</p>
      <p>Purchases = 31,200 + 3,720 − 3,120 = <strong>31,800 lbs</strong>.
         Cost = 31,800 × $2 = <strong>$63,600</strong>.</p>`
  },
  {
    id: "q10-3", chapter: 10, code: "Q10-3",
    title: "Cash Collections Budget",
    topic: "Timing of collections on credit sales",
    prompt: `
      <p><strong>Marlowe Inc.</strong> collects <strong>60%</strong> of credit sales in the month of
         sale and <strong>40%</strong> in the following month. Sales: April $100,000; May $120,000;
         June $150,000.</p>
      <p class="req">Required</p>
      <p>Compute cash collected in May and in June.</p>`,
    tip: `
      <p>Each month's collections combine two cohorts: part of <em>this</em> month's sales plus the
         remainder of <em>last</em> month's sales. Apply each percentage to the month it belongs to.
         (Depreciation and other non-cash items never appear in a cash budget.)</p>`,
    checks: [
      {label: "May collections", answer: 112000, tol: 10, fmt: "money"},
      {label: "June collections", answer: 138000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p><strong>May:</strong> 60% × 120,000 + 40% × 100,000 = 72,000 + 40,000 = <strong>$112,000</strong>.</p>
      <p><strong>June:</strong> 60% × 150,000 + 40% × 120,000 = 90,000 + 48,000 = <strong>$138,000</strong>.</p>`
  },
  {
    id: "q10-4", chapter: 10, code: "Q10-4",
    title: "Flexible Budget & Variances",
    topic: "Static vs. flexible budget",
    prompt: `
      <p><strong>Delta Mfg.</strong> static budget (10,000 units): variable cost $6/unit; fixed cost
         $40,000. <strong>Actual:</strong> 11,000 units produced; variable cost $69,300; fixed cost
         $41,000.</p>
      <p class="req">Required</p>
      <p>Build the flexible budget at actual volume and compute the variable and fixed cost variances.
         Favorable or unfavorable?</p>`,
    tip: `
      <p>Never compare actual results to the <em>static</em> budget when volume changed. Flex the budget
         to <strong>actual volume</strong>: variable cost = rate × actual units; fixed cost stays the same.
         A cost variance is <strong>unfavorable</strong> when actual &gt; flexible budget.</p>`,
    checks: [
      {label: "Flexible-budget variable cost", answer: 66000, tol: 10, fmt: "money"},
      {label: "Variable cost variance (enter amount)", answer: 3300, tol: 10, fmt: "money"},
      {label: "Fixed cost variance (enter amount)", answer: 1000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Flexible budget: variable = $6 × 11,000 = <strong>$66,000</strong>; fixed = $40,000.</p>
      <p><strong>Variable variance</strong> = 69,300 − 66,000 = <strong>$3,300 Unfavorable</strong>.</p>
      <p><strong>Fixed variance</strong> = 41,000 − 40,000 = <strong>$1,000 Unfavorable</strong>.</p>
      <p class="note">Against the static budget the variable "variance" would look like $69,300 − $60,000
         = $9,300 — misleading, because $6,000 of that is simply the cost of making 1,000 more units.</p>`
  }
  );

  B.hard.push(
  {
    id: "h10-1", chapter: 10, code: "H10-1",
    title: "Production Budget — Nimbus",
    topic: "Multi-quarter production budget",
    prompt: `
      <p><strong>Nimbus</strong> budgets unit sales: Q1 8,000; Q2 9,000; Q3 10,000. Desired ending
         inventory = <strong>25% of next quarter's sales</strong>; Q1 beginning inventory = 2,000 units.</p>
      <p class="req">Required</p>
      <p>Required production for Q1 and Q2.</p>`,
    tip: `<p>Production = Sales + desired ending − beginning; each quarter's ending is the next quarter's beginning.</p>`,
    checks: [
      {label: "Q1 production", answer: 8250, tol: 2, fmt: "num"},
      {label: "Q2 production", answer: 9250, tol: 2, fmt: "num"}
    ],
    solution: `
      <p><strong>Q1:</strong> ending = 25% × 9,000 = 2,250 → 8,000 + 2,250 − 2,000 = <strong>8,250</strong>.</p>
      <p><strong>Q2:</strong> beginning 2,250; ending = 25% × 10,000 = 2,500 → 9,000 + 2,500 − 2,250 =
         <strong>9,250</strong>.</p>`
  },
  {
    id: "h10-2", chapter: 10, code: "H10-2",
    title: "Cash Collections (3-month pattern) — Orion",
    topic: "Collections across three months",
    prompt: `
      <p><strong>Orion</strong> collects <strong>50%</strong> of sales in the month of sale,
         <strong>30%</strong> in the next month, and <strong>20%</strong> two months after.
         Sales: Jan $80,000; Feb $100,000; Mar $120,000.</p>
      <p class="req">Required</p>
      <p>Compute total cash collected in March.</p>`,
    tip: `<p>March collections draw from three cohorts: 50% of March, 30% of February, 20% of January.</p>`,
    checks: [{label: "March collections", answer: 106000, tol: 10, fmt: "money"}],
    solution: `
      <p>March = 50% × 120,000 + 30% × 100,000 + 20% × 80,000 = 60,000 + 30,000 + 16,000 =
         <strong>$106,000</strong>.</p>`
  }
  );
})();
