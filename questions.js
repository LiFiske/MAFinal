/* =========================================================================
   THE SPICE LEDGER — Question Bank
   Managerial Accounting, Chapters 1 & 2
   -------------------------------------------------------------------------
   Two pools:
     • homework  -> the exact in-class / homework problems (from the Excel
                    templates). Used by EASY and MEDIUM difficulty.
                    EASY additionally shows the "Professor's Tip" button.
     • hard      -> newly invented problems covering the same lesson plan
                    (not copied from the Excel homework), with full solutions.

   Each question object:
     id       unique string
     chapter  1 | 2
     code     short label (e.g. "P1-1")
     title    human title
     topic    concept label
     prompt   HTML string (the question, including any 'given data' tables)
     tip      HTML string (professor tip, grounded in the lecture notes)
     checks   [ {label, answer, tol, fmt} ]  optional numeric self-check fields
                answer = numeric; tol = allowed +/- difference; fmt = 'money'|'num'
     solution HTML string (full worked solution)
   ========================================================================= */

window.QUESTION_BANK = {

/* =========================================================================
   HOMEWORK POOL  (EASY + MEDIUM)
   ========================================================================= */
homework: [

/* ---------------------------------------------------------------- P1-1 */
{
  id: "p1-1",
  chapter: 1,
  code: "P1-1",
  title: "Budgets in Managerial Accounting",
  topic: "Production cost budget • variable vs. fixed costs",
  prompt: `
    <p><strong>Santiago's Salsa</strong> is preparing a production cost budget for May.
    Actual costs in April were:</p>
    <table class="given">
      <thead><tr><th>Santiago's Salsa — Production Costs (April)</th><th></th></tr></thead>
      <tbody>
        <tr><td>Production — Jars of salsa</td><td class="num">25,000</td></tr>
        <tr><td>Ingredient cost (variable)</td><td class="num">$20,000</td></tr>
        <tr><td>Labor cost (variable)</td><td class="num">$12,000</td></tr>
        <tr><td>Rent (fixed)</td><td class="num">$5,000</td></tr>
        <tr><td>Depreciation (fixed)</td><td class="num">$6,000</td></tr>
        <tr><td>Other (fixed)</td><td class="num">$1,000</td></tr>
        <tr class="total"><td>Total</td><td class="num">$44,000</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Prepare a budget for May. Assume production increases to
          <strong>30,000 jars</strong> (a new marketing campaign).</li>
      <li><strong>b.</strong> Suppose the wage rate is <strong>$20 per hour</strong>. How many
          additional labor hours are needed in May? Does the budget suggest additional
          workers are needed?</li>
      <li><strong>c.</strong> Calculate the actual cost per jar in April and the budgeted cost
          per jar in May. Explain why the cost per unit is expected to decrease.</li>
      <li><strong>What-if:</strong> If June production rises to 32,000 jars, by how much does
          total production cost increase vs. the May budget, and why does unit cost keep falling?</li>
    </ol>`,
  tip: `
    <p>Costs behave in two ways (Ch.1, LO 2):</p>
    <ul>
      <li><strong>Variable costs</strong> change <em>in proportion</em> to volume
          (ingredients, labor). <strong>Fixed costs</strong> do <em>not</em> change with
          volume (rent, depreciation, "other").</li>
      <li>To budget a new month, first find each variable cost <strong>per jar</strong> from the
          month you know (April): <code>variable cost ÷ jars</code>. Multiply that rate by the
          <em>new</em> volume. <strong>Carry the fixed costs over unchanged.</strong></li>
      <li>For part (b): labor hours = <code>labor cost ÷ wage rate</code>. Compare April vs. May.</li>
      <li>Unit cost falls as volume rises because the <em>fixed</em> pool is spread over more
          jars — "you get what you measure," and fixed cost per unit shrinks.</li>
    </ul>`,
  checks: [
    {label: "May total production cost (part a)", answer: 50400, tol: 1, fmt: "money"},
    {label: "Additional labor hours needed (part b)", answer: 120, tol: 0.5, fmt: "num"},
    {label: "April cost per jar", answer: 1.76, tol: 0.01, fmt: "money"},
    {label: "May cost per jar", answer: 1.68, tol: 0.01, fmt: "money"},
    {label: "June cost increase vs. May (what-if)", answer: 2560, tol: 1, fmt: "money"}
  ],
  solution: `
    <p><strong>Per-unit variable rates (from April):</strong><br>
       Ingredient = $20,000 ÷ 25,000 = <strong>$0.80/jar</strong><br>
       Labor = $12,000 ÷ 25,000 = <strong>$0.48/jar</strong></p>

    <p><strong>a. May budget @ 30,000 jars</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Ingredient (variable) 0.80 × 30,000</td><td class="num">$24,000</td></tr>
        <tr><td>Labor (variable) 0.48 × 30,000</td><td class="num">$14,400</td></tr>
        <tr><td>Rent (fixed)</td><td class="num">$5,000</td></tr>
        <tr><td>Depreciation (fixed)</td><td class="num">$6,000</td></tr>
        <tr><td>Other (fixed)</td><td class="num">$1,000</td></tr>
        <tr class="total"><td>Total</td><td class="num">$50,400</td></tr>
      </tbody>
    </table>

    <p><strong>b. Additional labor hours.</strong>
       April = $12,000 ÷ $20 = <strong>600 hrs</strong>; May = $14,400 ÷ $20 = <strong>720 hrs</strong>.
       Additional = <strong>120 hours</strong>. Yes — the budget flags the need. The company can hire a
       part-time worker (~30 hrs/week) or use overtime (at a higher rate). If management does not
       anticipate this by budgeting, the worker may not be hired on time.</p>

    <p><strong>c. Cost per jar.</strong>
       April = $44,000 ÷ 25,000 = <strong>$1.76</strong>; May = $50,400 ÷ 30,000 = <strong>$1.68</strong>.
       Unit cost declines because fixed costs ($12,000) are spread over more jars.</p>

    <p><strong>What-if — June @ 32,000 jars.</strong>
       Ingredient 0.80×32,000 = $25,600; Labor 0.48×32,000 = $15,360; fixed $12,000 →
       <strong>Total $52,960</strong>. Increase vs. May = $52,960 − $50,400 = <strong>$2,560</strong>.
       June unit cost = $52,960 ÷ 32,000 = <strong>$1.655</strong>, 2.5¢ below May — again because
       fixed costs are spread over still more units.</p>`
},

/* ---------------------------------------------------------------- P1-2 */
{
  id: "p1-2",
  chapter: 1,
  code: "P1-2",
  title: "Incremental Analysis",
  topic: "Incremental revenue, cost & profit",
  prompt: `
    <p>Use <strong>Santiago's Salsa</strong> production data (April):</p>
    <table class="given">
      <tbody>
        <tr><td>Production — Jars</td><td class="num">25,000</td></tr>
        <tr><td>Ingredient cost (variable)</td><td class="num">$20,000</td></tr>
        <tr><td>Labor cost (variable)</td><td class="num">$12,000</td></tr>
        <tr><td>Rent / Depreciation / Other (fixed)</td><td class="num">$12,000</td></tr>
      </tbody>
    </table>
    <p>The company currently produces and sells <strong>325,000 jars annually</strong> at
    <strong>$5.00</strong> each. It is considering lowering the price to <strong>$4.60</strong>,
    which is expected to raise sales to <strong>375,000 jars</strong>.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> What is the incremental cost of producing the extra 50,000 jars?</li>
      <li><strong>b.</strong> What is the incremental revenue associated with the $0.40 price reduction?</li>
      <li><strong>c.</strong> Should Santiago's lower the price? Explain.</li>
    </ol>`,
  tip: `
    <p>Incremental analysis (Ch.1, LO 3) looks <em>only</em> at what changes:</p>
    <p class="formula">Incremental revenue − Incremental cost = Incremental profit</p>
    <ul>
      <li>Fixed costs do <strong>not</strong> change with the extra jars, so they are irrelevant here.
          Find the <strong>variable cost per jar</strong> first:
          (ingredients + labor) ÷ current jars.</li>
      <li>Incremental cost = variable cost/jar × extra jars.</li>
      <li>Incremental revenue = new total revenue − old total revenue
          (watch the price change on <em>all</em> units, not just the new ones).</li>
      <li>Choose the alternative with the greater incremental profit.</li>
    </ul>`,
  checks: [
    {label: "Variable cost per jar", answer: 1.28, tol: 0.01, fmt: "money"},
    {label: "Incremental cost (part a)", answer: 64000, tol: 5, fmt: "money"},
    {label: "Incremental revenue (part b)", answer: 100000, tol: 5, fmt: "money"},
    {label: "Incremental profit", answer: 36000, tol: 5, fmt: "money"}
  ],
  solution: `
    <p><strong>a. Incremental cost.</strong>
       Variable cost = $20,000 + $12,000 = $32,000 for 25,000 jars →
       <strong>$1.28/jar</strong>. Extra jars = 375,000 − 325,000 = 50,000.
       Incremental cost = $1.28 × 50,000 = <strong>$64,000</strong>.</p>
    <p><strong>b. Incremental revenue.</strong>
       Original = 325,000 × $5.00 = $1,625,000. New = 375,000 × $4.60 = $1,725,000.
       Incremental revenue = <strong>$100,000</strong>.</p>
    <p><strong>c. Decision.</strong> <strong>Yes, lower the price.</strong> Incremental revenue
       ($100,000) exceeds incremental cost ($64,000), for an incremental profit of
       <strong>+$36,000</strong>.</p>`
},

/* ---------------------------------------------------------------- P1-5 */
{
  id: "p1-5",
  chapter: 1,
  code: "P1-5",
  title: "Budget Variances & Cost Behavior",
  topic: "Variable vs. fixed classification",
  prompt: `
    <p><strong>Cyril</strong> prepared a production budget and expects actual production
    next period to be <em>higher</em> than the level he budgeted.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li>Should Cyril expect some actual costs to come in <em>above</em> budget? Which ones,
          and which should stay on budget?</li>
      <li>Classify each cost below as <strong>variable</strong> or <strong>fixed</strong>:
          materials, direct labor, utilities, supervisory salaries, machine maintenance,
          depreciation of building, depreciation of equipment, janitorial.</li>
    </ol>`,
  tip: `
    <p>Ask one question of every cost (Ch.1, LO 2): <em>"If we make more units, does this
       cost rise?"</em></p>
    <ul>
      <li><strong>Yes → variable</strong> (rises with volume).</li>
      <li><strong>No → fixed</strong> (unchanged by volume, at least in the short run).</li>
    </ul>
    <p>Costs tied to each unit (materials, the labor/power that makes the unit) are variable.
       Costs of <em>having the capacity</em> (salaries, depreciation, rent) are fixed.</p>`,
  checks: [],
  solution: `
    <p>Yes — Cyril should expect some costs to exceed the budgeted amount, because
       <strong>variable production costs rise with the number of units produced</strong>,
       while <strong>fixed production costs do not</strong>.</p>
    <table class="soln">
      <thead><tr><th>Cost</th><th>Behavior</th></tr></thead>
      <tbody>
        <tr><td>Materials</td><td>Variable</td></tr>
        <tr><td>Direct labor</td><td>Variable</td></tr>
        <tr><td>Utilities</td><td>Variable</td></tr>
        <tr><td>Supervisory salaries</td><td>Fixed</td></tr>
        <tr><td>Machine maintenance</td><td>Fixed</td></tr>
        <tr><td>Depreciation of building</td><td>Fixed</td></tr>
        <tr><td>Depreciation of equipment</td><td>Fixed</td></tr>
        <tr><td>Janitorial</td><td>Fixed</td></tr>
      </tbody>
    </table>
    <p class="note">(A reasonable case can be made for other classifications — e.g., some
       maintenance or utilities as mixed — but the above is the expected answer.)</p>`
},

/* ---------------------------------------------------------------- E2-7 */
{
  id: "e2-7",
  chapter: 2,
  code: "E2-7",
  title: "Recording Material Cost in Job-Order Costing",
  topic: "Material requisitions → journal entries",
  prompt: `
    <p>Five material requisition (MR) forms were received by the materials storeroom of the
    <strong>Saint Louis Foundry</strong> in the first week of 2017:</p>
    <table class="given">
      <tbody>
        <tr><td>MR101 — direct materials, job 1501</td><td class="num">$250</td></tr>
        <tr><td>MR102 — direct materials, job 1502</td><td class="num">$350</td></tr>
        <tr><td>MR103 — <em>indirect</em> materials to the factory floor</td><td class="num">$100</td></tr>
        <tr><td>MR104 — direct materials, job 1501</td><td class="num">$400</td></tr>
        <tr><td>MR105 — direct materials, job 1503</td><td class="num">$500</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <p>Prepare summary journal entries to record the issuance of these materials.</p>`,
  tip: `
    <p>Materials flow out of storage in two directions (Ch.2, LO 4):</p>
    <ul>
      <li><strong>Direct</strong> materials (traceable to a job) → debit
          <strong>Work in Process Inventory</strong>.</li>
      <li><strong>Indirect</strong> materials (not traceable) → debit
          <strong>Manufacturing Overhead</strong>.</li>
      <li><em>Both</em> reduce <strong>Raw Materials Inventory</strong> (credit).</li>
    </ul>
    <p>So: total the direct requisitions, total the indirect, and credit the sum.</p>`,
  checks: [
    {label: "Debit to Work in Process", answer: 1500, tol: 1, fmt: "money"},
    {label: "Debit to Manufacturing Overhead", answer: 100, tol: 1, fmt: "money"}
  ],
  solution: `
    <p>Direct = 250 + 350 + 400 + 500 = <strong>$1,500</strong>. Indirect = <strong>$100</strong>.</p>
    <pre class="ledger">
Work in Process Inventory ............ 1,500
    Raw Materials Inventory ................. 1,500
  (direct materials issued to jobs)

Manufacturing Overhead ...............   100
    Raw Materials Inventory .................   100
  (indirect materials issued)</pre>`
},

/* ---------------------------------------------------------------- E2-9 */
{
  id: "e2-9",
  chapter: 2,
  code: "E2-9",
  title: "Recording Labor Cost in Job-Order Costing",
  topic: "Time tickets → labor cost & journal entry",
  prompt: `
    <p><strong>Johnson Products</strong> had these labor time tickets for February:</p>
    <table class="given">
      <thead><tr><th>Ticket</th><th>Emp.</th><th class="num">Rate</th><th class="num">Hours</th><th class="num">Job</th></tr></thead>
      <tbody>
        <tr><td>2101</td><td>011</td><td class="num">$10</td><td class="num">110</td><td class="num">201</td></tr>
        <tr><td>2102</td><td>008</td><td class="num">$21</td><td class="num">90</td><td class="num">201</td></tr>
        <tr><td>2103</td><td>011</td><td class="num">$12</td><td class="num">40</td><td class="num">201</td></tr>
        <tr><td>2104</td><td>008</td><td class="num">$20</td><td class="num">50</td><td class="num">202</td></tr>
        <tr><td>2105</td><td>008</td><td class="num">$18</td><td class="num">70</td><td class="num">203</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Calculate the direct labor cost assigned to each job.</li>
      <li><strong>b.</strong> Prepare a journal entry to record direct labor for the month.</li>
    </ol>`,
  tip: `
    <p>Each time ticket says how long a worker spent on a specific job (Ch.2, LO 4).</p>
    <ul>
      <li>Cost of a ticket = <code>hours × pay rate</code> — rates differ by worker, so compute
          ticket-by-ticket.</li>
      <li>Group tickets by <strong>Job #</strong> and total them.</li>
      <li>Direct labor increases <strong>Work in Process Inventory</strong> (debit) and
          <strong>Wages Payable</strong> (credit).</li>
    </ul>`,
  checks: [
    {label: "Job 201 labor cost", answer: 3470, tol: 1, fmt: "money"},
    {label: "Job 202 labor cost", answer: 1000, tol: 1, fmt: "money"},
    {label: "Job 203 labor cost", answer: 1260, tol: 1, fmt: "money"},
    {label: "Total direct labor (journal entry)", answer: 5730, tol: 1, fmt: "money"}
  ],
  solution: `
    <p><strong>a. By job</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Job 201: (110×$10) + (90×$21) + (40×$12) = 1,100 + 1,890 + 480</td><td class="num">$3,470</td></tr>
        <tr><td>Job 202: 50×$20</td><td class="num">$1,000</td></tr>
        <tr><td>Job 203: 70×$18</td><td class="num">$1,260</td></tr>
        <tr class="total"><td>Total direct labor</td><td class="num">$5,730</td></tr>
      </tbody>
    </table>
    <p><strong>b. Journal entry</strong></p>
    <pre class="ledger">
Work in Process Inventory ............ 5,730
    Wages Payable ........................... 5,730
  (direct labor for February)</pre>`
},

/* ---------------------------------------------------------------- E2-12 */
{
  id: "e2-12",
  chapter: 2,
  code: "E2-12",
  title: "Allocating Manufacturing Overhead to Jobs",
  topic: "Predetermined overhead rates",
  prompt: `
    <p><strong>Webber Fabricating</strong> estimated the following for the year:</p>
    <table class="given">
      <tbody>
        <tr><td>Expected direct labor hours</td><td class="num">40,000</td></tr>
        <tr><td>Expected direct labor cost</td><td class="num">$625,000</td></tr>
        <tr><td>Expected machine hours</td><td class="num">20,000</td></tr>
        <tr><td>Expected material cost</td><td class="num">$800,000</td></tr>
        <tr><td>Expected manufacturing overhead</td><td class="num">$1,000,000</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Calculate the predetermined overhead rate under each of the four
          possible allocation bases.</li>
      <li><strong>b.</strong> Determine the cost of <strong>job 253</strong> under each rate.
          Job 253: direct materials $3,000; direct labor $1,800 (150 hrs @ $12/hr);
          machine hours used 150.</li>
      <li><strong>What-if:</strong> If overhead is revised to $937,500 (using direct labor
          <em>cost</em> as the base), what is the revised cost of job 253, and the effect on profit?</li>
    </ol>`,
  tip: `
    <p>Overhead can't be traced to a job, so it is <strong>allocated</strong> with a
       <em>predetermined</em> rate (Ch.2, LO 5):</p>
    <p class="formula">Rate = Estimated total overhead ÷ Estimated total allocation base</p>
    <ul>
      <li>Compute one rate per base (per DLH, per DL$, per MH, per DM$).</li>
      <li>Apply to a job: <code>overhead = rate × the job's actual amount of that base</code>.</li>
      <li>Job cost = direct materials + direct labor + applied overhead.</li>
    </ul>`,
  checks: [
    {label: "Rate per direct labor hour", answer: 25, tol: 0.01, fmt: "money"},
    {label: "Rate per direct labor $", answer: 1.60, tol: 0.01, fmt: "money"},
    {label: "Rate per machine hour", answer: 50, tol: 0.01, fmt: "money"},
    {label: "Rate per direct material $", answer: 1.25, tol: 0.01, fmt: "money"},
    {label: "Job 253 total cost using DL cost base (b)", answer: 7680, tol: 2, fmt: "money"},
    {label: "Revised job 253 cost (what-if)", answer: 7500, tol: 2, fmt: "money"}
  ],
  solution: `
    <p><strong>a. Four predetermined rates</strong> ($1,000,000 ÷ base):</p>
    <table class="soln">
      <tbody>
        <tr><td>Direct labor hours: 1,000,000 ÷ 40,000</td><td class="num">$25.00 / DLH</td></tr>
        <tr><td>Direct labor cost: 1,000,000 ÷ 625,000</td><td class="num">$1.60 / DL$</td></tr>
        <tr><td>Machine hours: 1,000,000 ÷ 20,000</td><td class="num">$50.00 / MH</td></tr>
        <tr><td>Direct material cost: 1,000,000 ÷ 800,000</td><td class="num">$1.25 / DM$</td></tr>
      </tbody>
    </table>
    <p><strong>b. Cost of job 253 under each base</strong> (DM $3,000 + DL $1,800 + overhead):</p>
    <table class="soln">
      <thead><tr><th>Base</th><th class="num">Overhead</th><th class="num">Total job cost</th></tr></thead>
      <tbody>
        <tr><td>DLH: $25 × 150 hrs</td><td class="num">$3,750</td><td class="num">$8,550</td></tr>
        <tr><td>DL cost: $1.60 × 1,800</td><td class="num">$2,880</td><td class="num">$7,680</td></tr>
        <tr><td>Machine hrs: $50 × 150</td><td class="num">$7,500</td><td class="num">$12,300</td></tr>
        <tr><td>DM cost: $1.25 × 3,000</td><td class="num">$3,750</td><td class="num">$8,550</td></tr>
      </tbody>
    </table>
    <p><strong>What-if.</strong> Revised rate = $937,500 ÷ $625,000 = <strong>$1.50/DL$</strong>.
       Overhead = $1.50 × $1,800 = $2,700 → total = $3,000 + $1,800 + $2,700 = <strong>$7,500</strong>.
       Cost falls from $7,680 to $7,500 (−$180), so <strong>profit on job 253 rises by $180</strong>.</p>`
},

/* ---------------------------------------------------------------- P2-1 */
{
  id: "p2-1",
  chapter: 2,
  code: "P2-1",
  title: "Cost of Goods Manufactured, COGS & Income",
  topic: "COGM schedule • income statement",
  prompt: `
    <p>For <strong>Satterfield's Custom Glass</strong>, fiscal year ended December 31, 2020:</p>
    <table class="given">
      <tbody>
        <tr><td>Beginning Work in Process</td><td class="num">$210,000</td></tr>
        <tr><td>Ending Work in Process</td><td class="num">$300,000</td></tr>
        <tr><td>Beginning Finished Goods</td><td class="num">$500,000</td></tr>
        <tr><td>Ending Finished Goods</td><td class="num">$400,000</td></tr>
        <tr><td>Direct material cost</td><td class="num">$2,500,000</td></tr>
        <tr><td>Direct labor cost</td><td class="num">$3,000,000</td></tr>
        <tr><td>Manufacturing overhead</td><td class="num">$1,700,000</td></tr>
        <tr><td>Selling &amp; administrative expenses</td><td class="num">$1,350,000</td></tr>
        <tr><td>Sales</td><td class="num">$8,500,000</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Prepare a schedule of cost of goods manufactured.</li>
      <li><strong>b.</strong> Prepare an income statement for fiscal 2020 (ignore income taxes).</li>
    </ol>`,
  tip: `
    <p>Two inventory "funnels" in sequence (Ch.2, LO 2):</p>
    <p class="formula">Beg. WIP + DM + DL + MOH − End. WIP = <strong>Cost of Goods Manufactured</strong></p>
    <p class="formula">Beg. FG + COGM − End. FG = <strong>Cost of Goods Sold</strong></p>
    <ul>
      <li>COGM is what <em>finished</em> this year; it flows into finished goods.</li>
      <li>Income statement: Sales − COGS = Gross profit; then subtract selling &amp; admin
          (period) costs to get net income.</li>
    </ul>`,
  checks: [
    {label: "Cost of goods manufactured (a)", answer: 7110000, tol: 50, fmt: "money"},
    {label: "Cost of goods sold (b)", answer: 7210000, tol: 50, fmt: "money"},
    {label: "Gross profit", answer: 1290000, tol: 50, fmt: "money"},
    {label: "Net income (enter loss as negative)", answer: -60000, tol: 50, fmt: "money"}
  ],
  solution: `
    <p><strong>a. Schedule of Cost of Goods Manufactured</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Beginning work in process</td><td class="num">$210,000</td></tr>
        <tr><td>Direct materials</td><td class="num">$2,500,000</td></tr>
        <tr><td>Direct labor</td><td class="num">$3,000,000</td></tr>
        <tr><td>Manufacturing overhead</td><td class="num">$1,700,000</td></tr>
        <tr><td>Total</td><td class="num">$7,410,000</td></tr>
        <tr><td>Less ending work in process</td><td class="num">($300,000)</td></tr>
        <tr class="total"><td>Cost of goods manufactured</td><td class="num">$7,110,000</td></tr>
      </tbody>
    </table>
    <p><strong>b. Income Statement</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Sales</td><td class="num">$8,500,000</td></tr>
        <tr><td>Beginning finished goods</td><td class="num">$500,000</td></tr>
        <tr><td>+ Cost of goods manufactured</td><td class="num">$7,110,000</td></tr>
        <tr><td>Cost of goods available for sale</td><td class="num">$7,610,000</td></tr>
        <tr><td>− Ending finished goods</td><td class="num">($400,000)</td></tr>
        <tr><td>Cost of goods sold</td><td class="num">$7,210,000</td></tr>
        <tr><td>Gross profit</td><td class="num">$1,290,000</td></tr>
        <tr><td>Less selling &amp; administrative</td><td class="num">($1,350,000)</td></tr>
        <tr class="total"><td>Net income (loss)</td><td class="num">($60,000)</td></tr>
      </tbody>
    </table>
    <p class="note">The firm posts a $60,000 <strong>loss</strong>: gross profit did not cover the
       period (S&amp;A) costs.</p>`
},

/* ---------------------------------------------------------------- P2-3 */
{
  id: "p2-3",
  chapter: 2,
  code: "P2-3",
  title: "Job-Order Costing: Inventory Accounts & COGS",
  topic: "Full cost flow • journal entries",
  prompt: `
    <p><strong>Smith Die Company</strong> makes custom cutting dies. In the first week of May,
    jobs 1005–1010 were opened. Transactions:</p>
    <ul class="txn">
      <li>Purchased steel on account from Eastern City Steel — <strong>$5,500</strong>.</li>
      <li>Received and <em>paid cash</em> for supplies (indirect materials) — <strong>$2,400</strong>.</li>
      <li>Materials issued and labor recorded for the week:</li>
    </ul>
    <table class="given">
      <thead><tr><th>Job</th><th class="num">Direct Mat.</th><th class="num">Direct Labor</th></tr></thead>
      <tbody>
        <tr><td>1005</td><td class="num">$650</td><td class="num">$1,600</td></tr>
        <tr><td>1006</td><td class="num">$850</td><td class="num">$2,000</td></tr>
        <tr><td>1007</td><td class="num">$1,550</td><td class="num">$3,300</td></tr>
        <tr><td>1008</td><td class="num">$650</td><td class="num">$1,400</td></tr>
        <tr><td>1009</td><td class="num">$450</td><td class="num">$900</td></tr>
        <tr><td>1010</td><td class="num">$350</td><td class="num">$700</td></tr>
        <tr class="total"><td>Totals (direct)</td><td class="num">$4,500</td><td class="num">$9,900</td></tr>
      </tbody>
    </table>
    <p>Also: indirect materials $1,000 and indirect labor $6,500. Overhead is applied at
    <strong>180% of direct labor cost</strong>. Jobs 1005–1008 were completed and shipped,
    billed at <strong>150% of total job cost</strong>.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Calculate the total cost of each job.</li>
      <li><strong>b.</strong> Prepare the journal entries for the week.</li>
      <li><strong>What-if:</strong> What are Raw Materials, WIP, and Finished Goods balances at
          week-end?</li>
    </ol>`,
  tip: `
    <p>Costs flow through three inventory accounts in order (Ch.2, LO 2 & 4):</p>
    <p class="formula">Raw Materials → Work in Process → Finished Goods → Cost of Goods Sold</p>
    <ul>
      <li><strong>Direct</strong> materials/labor → WIP; <strong>indirect</strong> → Manufacturing Overhead.</li>
      <li>Applied overhead = <code>rate × direct labor</code> = 1.80 × DL, debited to WIP,
          credited to Manufacturing Overhead.</li>
      <li>When a job finishes, its total cost moves WIP → Finished Goods; when sold, FG → COGS,
          and record Sales = 150% of cost.</li>
      <li>Ending balance of each account = debits in − credits out.</li>
    </ul>`,
  checks: [
    {label: "Total cost, job 1007", answer: 10790, tol: 2, fmt: "money"},
    {label: "Finished Goods transferred (jobs 1005–1008)", answer: 26940, tol: 5, fmt: "money"},
    {label: "Sales (AR) billed", answer: 40410, tol: 5, fmt: "money"},
    {label: "Ending Work in Process (what-if)", answer: 5280, tol: 5, fmt: "money"},
    {label: "Ending Raw Materials (what-if)", answer: 2400, tol: 5, fmt: "money"}
  ],
  solution: `
    <p><strong>a. Total cost of each job</strong> (overhead = 1.80 × direct labor):</p>
    <table class="soln">
      <thead><tr><th>Job</th><th class="num">DM</th><th class="num">DL</th><th class="num">OH (1.8×DL)</th><th class="num">Total</th></tr></thead>
      <tbody>
        <tr><td>1005</td><td class="num">650</td><td class="num">1,600</td><td class="num">2,880</td><td class="num">$5,130</td></tr>
        <tr><td>1006</td><td class="num">850</td><td class="num">2,000</td><td class="num">3,600</td><td class="num">$6,450</td></tr>
        <tr><td>1007</td><td class="num">1,550</td><td class="num">3,300</td><td class="num">5,940</td><td class="num">$10,790</td></tr>
        <tr><td>1008</td><td class="num">650</td><td class="num">1,400</td><td class="num">2,520</td><td class="num">$4,570</td></tr>
        <tr><td>1009</td><td class="num">450</td><td class="num">900</td><td class="num">1,620</td><td class="num">$2,970</td></tr>
        <tr><td>1010</td><td class="num">350</td><td class="num">700</td><td class="num">1,260</td><td class="num">$2,310</td></tr>
      </tbody>
    </table>
    <p>Jobs 1005–1008 completed = 5,130 + 6,450 + 10,790 + 4,570 = <strong>$26,940</strong>.</p>
    <p><strong>b. Journal entries</strong></p>
    <pre class="ledger">
Raw Materials Inventory .............. 5,500
    Accounts Payable ....................... 5,500   (purchase steel)

Raw Materials Inventory .............. 2,400
    Cash ................................... 2,400   (purchase supplies)

Work in Process Inventory ............ 4,500
Manufacturing Overhead ............... 1,000
    Raw Materials Inventory ................ 5,500   (materials used)

Work in Process Inventory ............ 9,900
Manufacturing Overhead ............... 6,500
    Wages Payable .......................... 16,400  (labor)

Work in Process Inventory ............ 17,820
    Manufacturing Overhead ................. 17,820  (OH applied, 1.8 × 9,900)

Finished Goods Inventory ............. 26,940
    Work in Process Inventory .............. 26,940  (jobs completed)

Accounts Receivable .................. 40,410
Cost of Goods Sold ................... 26,940
    Finished Goods Inventory ............... 26,940
    Sales .................................. 40,410  (sale @ 150% of cost)</pre>
    <p><strong>What-if — week-end balances</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Raw Materials: 5,500 + 2,400 − 5,500</td><td class="num">$2,400</td></tr>
        <tr><td>Work in Process: 4,500 + 9,900 + 17,820 − 26,940 (jobs 1009 + 1010)</td><td class="num">$5,280</td></tr>
        <tr><td>Finished Goods: 26,940 − 26,940</td><td class="num">$0</td></tr>
        <tr class="total"><td>Total inventory</td><td class="num">$7,680</td></tr>
      </tbody>
    </table>`
}

],

/* =========================================================================
   HARD POOL  (newly invented; same lesson plan, NOT from the Excel homework)
   ========================================================================= */
hard: [

/* ---------------------------------------------------------------- H1-1 */
{
  id: "h1-1",
  chapter: 1,
  code: "H1-1",
  title: "Flexible Budget — Aurelia Coffee Roasters",
  topic: "Production budget • variable vs. fixed",
  prompt: `
    <p><strong>Aurelia Coffee Roasters</strong> reports the following <em>actual</em> costs for
    April, when it roasted <strong>20,000 bags</strong>:</p>
    <table class="given">
      <tbody>
        <tr><td>Beans (variable)</td><td class="num">$30,000</td></tr>
        <tr><td>Roasting labor (variable)</td><td class="num">$16,000</td></tr>
        <tr><td>Rent (fixed)</td><td class="num">$6,000</td></tr>
        <tr><td>Depreciation (fixed)</td><td class="num">$4,000</td></tr>
        <tr><td>Other (fixed)</td><td class="num">$2,000</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Prepare a May budget assuming production rises to <strong>25,000 bags</strong>.</li>
      <li><strong>b.</strong> If roasting labor is paid <strong>$16/hour</strong>, how many additional
          labor hours are needed in May?</li>
      <li><strong>c.</strong> Compute the April actual and May budgeted cost per bag, and explain the change.</li>
    </ol>`,
  tip: `
    <p>Same method as the Santiago's Salsa homework: find each <strong>variable cost per bag</strong>
       from April, scale it to 25,000 bags, and hold the fixed costs constant.
       Labor hours = labor $ ÷ wage rate.</p>`,
  checks: [
    {label: "Beans cost per bag", answer: 1.50, tol: 0.01, fmt: "money"},
    {label: "May total cost (a)", answer: 69500, tol: 2, fmt: "money"},
    {label: "Additional labor hours (b)", answer: 250, tol: 1, fmt: "num"},
    {label: "April cost per bag", answer: 2.90, tol: 0.01, fmt: "money"},
    {label: "May cost per bag", answer: 2.78, tol: 0.01, fmt: "money"}
  ],
  solution: `
    <p><strong>Per-bag variable rates (April):</strong> Beans $30,000 ÷ 20,000 = $1.50;
       Labor $16,000 ÷ 20,000 = $0.80.</p>
    <p><strong>a. May budget @ 25,000 bags</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Beans 1.50 × 25,000</td><td class="num">$37,500</td></tr>
        <tr><td>Roasting labor 0.80 × 25,000</td><td class="num">$20,000</td></tr>
        <tr><td>Rent + Depreciation + Other (fixed)</td><td class="num">$12,000</td></tr>
        <tr class="total"><td>Total</td><td class="num">$69,500</td></tr>
      </tbody>
    </table>
    <p><strong>b.</strong> April hrs = $16,000 ÷ $16 = 1,000; May hrs = $20,000 ÷ $16 = 1,250.
       Additional = <strong>250 hours</strong>.</p>
    <p><strong>c.</strong> April = ($30,000+$16,000+$12,000) ÷ 20,000 = $58,000 ÷ 20,000 =
       <strong>$2.90</strong>. May = $69,500 ÷ 25,000 = <strong>$2.78</strong>.
       Unit cost falls because the $12,000 of fixed cost is spread over 5,000 more bags.</p>`
},

/* ---------------------------------------------------------------- H1-2 */
{
  id: "h1-2",
  chapter: 1,
  code: "H1-2",
  title: "Incremental Analysis — Meridian Bottling",
  topic: "Incremental revenue, cost & profit",
  prompt: `
    <p><strong>Meridian Bottling</strong> currently produces and sells <strong>400,000 bottles</strong>
    per year at <strong>$3.00</strong> each. At the current level, variable costs are:
    ingredients $360,000 and labor $120,000. Management is considering dropping the price to
    <strong>$2.80</strong>, which it expects will raise sales to <strong>460,000 bottles</strong>.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> What is the incremental cost of the extra 60,000 bottles?</li>
      <li><strong>b.</strong> What is the incremental revenue from the price change?</li>
      <li><strong>c.</strong> Should Meridian cut the price? Explain.</li>
    </ol>`,
  tip: `
    <p>Find the variable cost per bottle first (total variable ÷ current bottles). Incremental
       cost = that rate × extra bottles. Incremental revenue = new total revenue − old total
       revenue. Decide by incremental profit.</p>`,
  checks: [
    {label: "Variable cost per bottle", answer: 1.20, tol: 0.01, fmt: "money"},
    {label: "Incremental cost (a)", answer: 72000, tol: 5, fmt: "money"},
    {label: "Incremental revenue (b)", answer: 88000, tol: 5, fmt: "money"},
    {label: "Incremental profit", answer: 16000, tol: 5, fmt: "money"}
  ],
  solution: `
    <p><strong>a.</strong> Variable cost = $360,000 + $120,000 = $480,000 ÷ 400,000 =
       <strong>$1.20/bottle</strong>. Extra bottles = 60,000 → incremental cost =
       1.20 × 60,000 = <strong>$72,000</strong>.</p>
    <p><strong>b.</strong> Old revenue = 400,000 × $3.00 = $1,200,000. New = 460,000 × $2.80 =
       $1,288,000. Incremental revenue = <strong>$88,000</strong>.</p>
    <p><strong>c.</strong> <strong>Yes.</strong> Incremental revenue $88,000 > incremental cost
       $72,000 → incremental profit <strong>+$16,000</strong>.</p>`
},

/* ---------------------------------------------------------------- H1-3 */
{
  id: "h1-3",
  chapter: 1,
  code: "H1-3",
  title: "Cost Concepts — Sunk & Opportunity Costs",
  topic: "Cost behavior & relevant costs",
  prompt: `
    <p><strong>Part 1 — Classify</strong> each cost of a commercial bakery as
    <strong>variable</strong> or <strong>fixed</strong>: flour, hourly baker wages, oven natural
    gas, salaried plant manager, oven depreciation, building rent, property insurance.</p>
    <p><strong>Part 2 — Relevant costs.</strong> The bakery spent <strong>$40,000</strong> last
    year developing a bread recipe it has now shelved. It currently holds <strong>$90,000</strong>
    in cash and can either (i) buy a new mixer or (ii) invest the cash in a project returning
    <strong>8%</strong> per year.</p>
    <ol class="parts">
      <li><strong>a.</strong> Is the $40,000 relevant to the mixer decision? What type of cost is it?</li>
      <li><strong>b.</strong> If the bakery buys the mixer, what is the opportunity cost?</li>
    </ol>`,
  tip: `
    <p>Variable = rises with output (flour, wages tied to production, gas to run ovens).
       Fixed = cost of capacity (salaries, depreciation, rent, insurance).
       A <strong>sunk cost</strong> is already spent and never relevant. An
       <strong>opportunity cost</strong> is the benefit given up from the next-best choice.</p>`,
  checks: [
    {label: "Opportunity cost (part 2b)", answer: 7200, tol: 1, fmt: "money"}
  ],
  solution: `
    <p><strong>Part 1 classification</strong></p>
    <table class="soln">
      <tbody>
        <tr><td>Flour</td><td>Variable</td></tr>
        <tr><td>Hourly baker wages</td><td>Variable</td></tr>
        <tr><td>Oven natural gas</td><td>Variable</td></tr>
        <tr><td>Salaried plant manager</td><td>Fixed</td></tr>
        <tr><td>Oven depreciation</td><td>Fixed</td></tr>
        <tr><td>Building rent</td><td>Fixed</td></tr>
        <tr><td>Property insurance</td><td>Fixed</td></tr>
      </tbody>
    </table>
    <p><strong>a.</strong> The $40,000 is a <strong>sunk cost</strong> — already spent and
       unrecoverable — so it is <strong>not relevant</strong> to the mixer decision.</p>
    <p><strong>b.</strong> Opportunity cost = the forgone 8% return = $90,000 × 8% =
       <strong>$7,200</strong> per year.</p>`
},

/* ---------------------------------------------------------------- H2-1 */
{
  id: "h2-1",
  chapter: 2,
  code: "H2-1",
  title: "Materials & Labor Entries — Nimbus Metalworks",
  topic: "Material requisitions & time tickets → journal entries",
  prompt: `
    <p><strong>Nimbus Metalworks</strong> recorded the following for the week.</p>
    <p><em>Material requisitions:</em> Job 301 $800 (direct); Job 302 $1,200 (direct);
    Job 303 $600 (direct); factory-floor supplies $300 (indirect).</p>
    <p><em>Labor time tickets:</em></p>
    <table class="given">
      <thead><tr><th>Assignment</th><th class="num">Hours</th><th class="num">Rate</th></tr></thead>
      <tbody>
        <tr><td>Job 301</td><td class="num">120</td><td class="num">$15</td></tr>
        <tr><td>Job 302</td><td class="num">80</td><td class="num">$20</td></tr>
        <tr><td>Job 303</td><td class="num">50</td><td class="num">$18</td></tr>
        <tr><td>Maintenance (indirect)</td><td class="num">40</td><td class="num">$15</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <p>Prepare summary journal entries to record (a) the materials issued and (b) the labor.</p>`,
  tip: `
    <p>Direct → Work in Process; indirect → Manufacturing Overhead. Materials credit Raw
       Materials; labor credits Wages Payable. Ticket cost = hours × rate.</p>`,
  checks: [
    {label: "Debit to WIP — materials", answer: 2600, tol: 2, fmt: "money"},
    {label: "Debit to MOH — materials", answer: 300, tol: 1, fmt: "money"},
    {label: "Debit to WIP — labor", answer: 4300, tol: 2, fmt: "money"},
    {label: "Debit to MOH — labor", answer: 600, tol: 1, fmt: "money"}
  ],
  solution: `
    <p><strong>Materials.</strong> Direct = 800 + 1,200 + 600 = $2,600; indirect = $300.</p>
    <pre class="ledger">
Work in Process Inventory ............ 2,600
Manufacturing Overhead ...............   300
    Raw Materials Inventory ................ 2,900</pre>
    <p><strong>Labor.</strong> Direct = (120×15) + (80×20) + (50×18) = 1,800 + 1,600 + 900 =
       $4,300. Indirect = 40 × 15 = $600.</p>
    <pre class="ledger">
Work in Process Inventory ............ 4,300
Manufacturing Overhead ...............   600
    Wages Payable .......................... 4,900</pre>`
},

/* ---------------------------------------------------------------- H2-2 */
{
  id: "h2-2",
  chapter: 2,
  code: "H2-2",
  title: "Overhead Rates — Beacon Manufacturing",
  topic: "Predetermined overhead rates",
  prompt: `
    <p><strong>Beacon Manufacturing</strong> estimates for the year: direct labor hours 50,000;
    direct labor cost $800,000; machine hours 25,000; direct material cost $600,000;
    manufacturing overhead <strong>$1,200,000</strong>.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Compute the predetermined overhead rate under each of the four bases.</li>
      <li><strong>b.</strong> Determine the cost of <strong>job 420</strong> under each rate.
          Job 420: direct materials $4,000; direct labor $2,000 (100 hrs @ $20); machine hours 120.</li>
    </ol>`,
  tip: `
    <p>Rate = estimated overhead ÷ estimated base. Apply: overhead = rate × the job's actual
       base. Job cost = DM + DL + applied overhead.</p>`,
  checks: [
    {label: "Rate per DLH", answer: 24, tol: 0.01, fmt: "money"},
    {label: "Rate per DL $", answer: 1.50, tol: 0.01, fmt: "money"},
    {label: "Rate per machine hour", answer: 48, tol: 0.01, fmt: "money"},
    {label: "Rate per DM $", answer: 2.00, tol: 0.01, fmt: "money"},
    {label: "Job 420 total using machine-hour base", answer: 11760, tol: 2, fmt: "money"}
  ],
  solution: `
    <p><strong>a. Rates</strong> ($1,200,000 ÷ base):</p>
    <table class="soln">
      <tbody>
        <tr><td>Direct labor hours: ÷ 50,000</td><td class="num">$24.00 / DLH</td></tr>
        <tr><td>Direct labor cost: ÷ 800,000</td><td class="num">$1.50 / DL$</td></tr>
        <tr><td>Machine hours: ÷ 25,000</td><td class="num">$48.00 / MH</td></tr>
        <tr><td>Direct material cost: ÷ 600,000</td><td class="num">$2.00 / DM$</td></tr>
      </tbody>
    </table>
    <p><strong>b. Job 420</strong> (DM $4,000 + DL $2,000 + overhead):</p>
    <table class="soln">
      <thead><tr><th>Base</th><th class="num">Overhead</th><th class="num">Total</th></tr></thead>
      <tbody>
        <tr><td>DLH: $24 × 100</td><td class="num">$2,400</td><td class="num">$8,400</td></tr>
        <tr><td>DL cost: $1.50 × 2,000</td><td class="num">$3,000</td><td class="num">$9,000</td></tr>
        <tr><td>Machine hrs: $48 × 120</td><td class="num">$5,760</td><td class="num">$11,760</td></tr>
        <tr><td>DM cost: $2.00 × 4,000</td><td class="num">$8,000</td><td class="num">$14,000</td></tr>
      </tbody>
    </table>`
},

/* ---------------------------------------------------------------- H2-3 */
{
  id: "h2-3",
  chapter: 2,
  code: "H2-3",
  title: "COGM, COGS & Income — Crestline Fabricators",
  topic: "COGM schedule • income statement",
  prompt: `
    <p><strong>Crestline Fabricators</strong>, fiscal year 2025:</p>
    <table class="given">
      <tbody>
        <tr><td>Beginning / Ending Work in Process</td><td class="num">$150,000 / $180,000</td></tr>
        <tr><td>Beginning / Ending Finished Goods</td><td class="num">$220,000 / $160,000</td></tr>
        <tr><td>Direct materials</td><td class="num">$1,800,000</td></tr>
        <tr><td>Direct labor</td><td class="num">$2,200,000</td></tr>
        <tr><td>Manufacturing overhead</td><td class="num">$1,300,000</td></tr>
        <tr><td>Selling &amp; administrative</td><td class="num">$900,000</td></tr>
        <tr><td>Sales</td><td class="num">$6,800,000</td></tr>
      </tbody>
    </table>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Compute cost of goods manufactured.</li>
      <li><strong>b.</strong> Compute cost of goods sold, gross profit, and net income.</li>
    </ol>`,
  tip: `
    <p>COGM = Beg WIP + DM + DL + MOH − End WIP. COGS = Beg FG + COGM − End FG.
       Net income = Sales − COGS − selling &amp; admin.</p>`,
  checks: [
    {label: "Cost of goods manufactured (a)", answer: 5270000, tol: 50, fmt: "money"},
    {label: "Cost of goods sold (b)", answer: 5330000, tol: 50, fmt: "money"},
    {label: "Gross profit", answer: 1470000, tol: 50, fmt: "money"},
    {label: "Net income", answer: 570000, tol: 50, fmt: "money"}
  ],
  solution: `
    <p><strong>a. COGM</strong> = 150,000 + (1,800,000 + 2,200,000 + 1,300,000) − 180,000
       = 150,000 + 5,300,000 − 180,000 = <strong>$5,270,000</strong>.</p>
    <p><strong>b.</strong> COGS = 220,000 + 5,270,000 − 160,000 = <strong>$5,330,000</strong>.
       Gross profit = 6,800,000 − 5,330,000 = <strong>$1,470,000</strong>.
       Net income = 1,470,000 − 900,000 = <strong>$570,000</strong>.</p>`
},

/* ---------------------------------------------------------------- H2-4 */
{
  id: "h2-4",
  chapter: 2,
  code: "H2-4",
  title: "Over/Underapplied Overhead — Harbor Tool Co.",
  topic: "Applied vs. actual overhead",
  prompt: `
    <p><strong>Harbor Tool Co.</strong> applies manufacturing overhead using a predetermined rate
    based on machine hours. At the start of the year it estimated overhead of <strong>$600,000</strong>
    and <strong>50,000 machine hours</strong>. During the year, actual overhead incurred was
    <strong>$580,000</strong> and actual machine hours were <strong>48,000</strong>.</p>
    <p class="req">Required</p>
    <ol class="parts">
      <li><strong>a.</strong> Compute the predetermined overhead rate.</li>
      <li><strong>b.</strong> Compute overhead <em>applied</em> during the year.</li>
      <li><strong>c.</strong> Is overhead over- or underapplied, and by how much?</li>
      <li><strong>d.</strong> Give the entry to close the balance to Cost of Goods Sold.</li>
    </ol>`,
  tip: `
    <p>Rate = estimated overhead ÷ estimated base. Applied = rate × <em>actual</em> base.
       Compare applied to actual incurred:</p>
    <ul>
      <li>Applied &gt; actual → <strong>overapplied</strong> (credit balance) → <em>reduce</em> COGS.</li>
      <li>Applied &lt; actual → <strong>underapplied</strong> → <em>increase</em> COGS.</li>
    </ul>`,
  checks: [
    {label: "Predetermined rate per machine hour", answer: 12, tol: 0.01, fmt: "money"},
    {label: "Overhead applied (b)", answer: 576000, tol: 50, fmt: "money"},
    {label: "Under/over amount (enter positive)", answer: 4000, tol: 50, fmt: "money"}
  ],
  solution: `
    <p><strong>a.</strong> Rate = $600,000 ÷ 50,000 = <strong>$12/machine hour</strong>.</p>
    <p><strong>b.</strong> Applied = $12 × 48,000 = <strong>$576,000</strong>.</p>
    <p><strong>c.</strong> Actual $580,000 &gt; applied $576,000 → overhead is
       <strong>underapplied by $4,000</strong> (not enough overhead was applied to jobs).</p>
    <p><strong>d.</strong> Close to COGS:</p>
    <pre class="ledger">
Cost of Goods Sold ................... 4,000
    Manufacturing Overhead ................. 4,000
  (close underapplied overhead)</pre>`
}

]
};
