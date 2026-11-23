/* ===================================================================
   Chapter 6 — Cost Allocation (service departments, allocation bases)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e6-6", chapter: 6, code: "E6-6",
    title: "Cost Allocation Process — Copy Department",
    topic: "Fixed & variable cost pools",
    prompt: `
      <p><strong>Apex Company's</strong> Copy Department serves Sales and Administration. Budgeted
         annual costs:</p>
      <table class="given"><tbody>
        <tr><td>Salaries + benefits + depreciation + utilities (all fixed)</td><td class="num">$127,500</td></tr>
        <tr><td>Variable cost per copy (paper $0.01 + toner $0.01)</td><td class="num">$0.02</td></tr>
      </tbody></table>
      <p>Fixed costs are assigned lump-sum: <strong>40% to Sales, 60% to Administration</strong>.
         Variable costs are assigned per copy. Copies made: Sales <strong>2,500,000</strong>,
         Administration <strong>2,300,000</strong>.</p>
      <p class="req">Required</p>
      <p>Calculate the Copy Department cost allocated to Sales and to Administration.</p>`,
    tip: `
      <p>Allocate each <strong>cost pool</strong> by its own base:</p>
      <ul>
        <li><strong>Fixed pool</strong> ($127,500) splits by the lump-sum percentages (40% / 60%).</li>
        <li><strong>Variable pool</strong> follows actual usage: $0.02 × copies made for that department.</li>
      </ul>
      <p>Total to a department = its fixed share + its variable share.</p>`,
    checks: [
      {label: "Fixed allocated to Sales", answer: 51000, tol: 5, fmt: "money"},
      {label: "Variable allocated to Sales", answer: 50000, tol: 5, fmt: "money"},
      {label: "Total to Sales", answer: 101000, tol: 5, fmt: "money"},
      {label: "Total to Administration", answer: 122500, tol: 5, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th></th><th class="num">Sales</th><th class="num">Administration</th></tr></thead>
        <tbody>
          <tr><td>Fixed (40% / 60% of $127,500)</td><td class="num">$51,000</td><td class="num">$76,500</td></tr>
          <tr><td>Variable ($0.02 × copies)</td><td class="num">$50,000</td><td class="num">$46,000</td></tr>
          <tr class="total"><td>Total allocated</td><td class="num">$101,000</td><td class="num">$122,500</td></tr>
        </tbody>
      </table>`
  },
  {
    id: "e6-8", chapter: 6, code: "E6-8",
    title: "Cost Allocation — Direct Method",
    topic: "Service departments → production departments",
    prompt: `
      <p><strong>Marvin Company</strong> has three service departments (S1, S2, S3) and two production
         departments (P1, P2). Service costs are allocated by the <strong>direct method</strong> using
         number of employees.</p>
      <table class="given">
        <thead><tr><th>Dept</th><th class="num">Budgeted cost</th><th class="num">Employees</th></tr></thead>
        <tbody>
          <tr><td>S1</td><td class="num">$4,500,000</td><td class="num">90</td></tr>
          <tr><td>S2</td><td class="num">$3,000,000</td><td class="num">60</td></tr>
          <tr><td>S3</td><td class="num">$2,700,000</td><td class="num">40</td></tr>
          <tr><td>P1</td><td class="num">—</td><td class="num">200</td></tr>
          <tr><td>P2</td><td class="num">—</td><td class="num">300</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <p>Allocate the service department costs to P1 and P2 and total each.</p>`,
    tip: `
      <p>The <strong>direct method</strong> ignores service-to-service usage — allocate <em>only</em>
         to production departments. Base proportions come from P1 and P2 employees alone:
         P1 = 200 ÷ (200+300) = 40%; P2 = 60%. Apply those percentages to <em>every</em> service
         department's cost.</p>`,
    checks: [
      {label: "Total service cost to P1", answer: 4080000, tol: 50, fmt: "money"},
      {label: "Total service cost to P2", answer: 6120000, tol: 50, fmt: "money"}
    ],
    solution: `
      <p>Proportions (production employees only): P1 = 40%, P2 = 60%.</p>
      <table class="soln">
        <thead><tr><th>From</th><th class="num">Cost</th><th class="num">→ P1 (40%)</th><th class="num">→ P2 (60%)</th></tr></thead>
        <tbody>
          <tr><td>S1</td><td class="num">$4,500,000</td><td class="num">$1,800,000</td><td class="num">$2,700,000</td></tr>
          <tr><td>S2</td><td class="num">$3,000,000</td><td class="num">$1,200,000</td><td class="num">$1,800,000</td></tr>
          <tr><td>S3</td><td class="num">$2,700,000</td><td class="num">$1,080,000</td><td class="num">$1,620,000</td></tr>
          <tr class="total"><td>Total</td><td class="num">$10,200,000</td><td class="num">$4,080,000</td><td class="num">$6,120,000</td></tr>
        </tbody>
      </table>
      <p class="note">What-if: allocating S2's <em>actual</em> $2,920,000 (instead of budgeted
         $3,000,000) sends P2 only $1,752,000. Allocating <strong>budgeted</strong> costs is preferred —
         it lets receiving managers plan and does not pass service-department inefficiency on to them.</p>`
  },
  {
    id: "p6-9", chapter: 6, code: "P6-9",
    title: "Choice of Allocation Base",
    topic: "Why allocations can be arbitrary",
    prompt: `
      <p><strong>Tilden Financial Services</strong> allocates $1,500,000 of central personnel cost to
         two divisions. Two bases are proposed:</p>
      <table class="given">
        <thead><tr><th></th><th class="num">Financial Planning</th><th class="num">Business Consulting</th></tr></thead>
        <tbody>
          <tr><td>Salaries</td><td class="num">$15,000,000</td><td class="num">$5,000,000</td></tr>
          <tr><td>Headcount</td><td class="num">200</td><td class="num">50</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Allocate under each base.</li>
        <li><strong>b.</strong> Why are allocations sometimes called arbitrary?</li>
      </ol>`,
    tip: `
      <p>Allocation = amount × (division's base ÷ total base). Compute proportions for salaries
         (15M / 20M) and for headcount (200 / 250) and apply to the $1,500,000.</p>`,
    checks: [
      {label: "Financial Planning — salary base", answer: 1125000, tol: 20, fmt: "money"},
      {label: "Financial Planning — headcount base", answer: 1200000, tol: 20, fmt: "money"},
      {label: "Business Consulting — salary base", answer: 375000, tol: 20, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th>Base</th><th class="num">Financial Planning</th><th class="num">Business Consulting</th></tr></thead>
        <tbody>
          <tr><td>Salaries (75% / 25%)</td><td class="num">$1,125,000</td><td class="num">$375,000</td></tr>
          <tr><td>Headcount (80% / 20%)</td><td class="num">$1,200,000</td><td class="num">$300,000</td></tr>
        </tbody>
      </table>
      <p><strong>b.</strong> Both salary and headcount are plausible bases, yet they produce
         noticeably different allocations ($1,125,000 vs. $1,200,000 to Financial Planning). Because
         the "right" base isn't obvious and the result shifts cost between divisions, allocations are
         often considered <strong>somewhat arbitrary</strong>.</p>`
  }
  );

  B.hard.push(
  {
    id: "h6-1", chapter: 6, code: "H6-1",
    title: "Cost Allocation — Orbit IT Department",
    topic: "Fixed & variable pools",
    prompt: `
      <p><strong>Orbit Co.'s</strong> IT department has fixed costs of <strong>$90,000</strong>
         (assigned 30% to Sales, 70% to Operations) and a variable cost of <strong>$0.05 per support
         ticket</strong>. Tickets handled: Sales 20,000; Operations 30,000.</p>
      <p class="req">Required</p>
      <p>Allocate total IT cost to Sales and to Operations.</p>`,
    tip: `<p>Fixed pool splits 30% / 70%; variable pool = $0.05 × that department's tickets; add the two.</p>`,
    checks: [
      {label: "Total to Sales", answer: 28000, tol: 5, fmt: "money"},
      {label: "Total to Operations", answer: 64500, tol: 5, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th></th><th class="num">Sales</th><th class="num">Operations</th></tr></thead>
        <tbody>
          <tr><td>Fixed (30% / 70% of $90,000)</td><td class="num">$27,000</td><td class="num">$63,000</td></tr>
          <tr><td>Variable ($0.05 × tickets)</td><td class="num">$1,000</td><td class="num">$1,500</td></tr>
          <tr class="total"><td>Total</td><td class="num">$28,000</td><td class="num">$64,500</td></tr>
        </tbody>
      </table>`
  },
  {
    id: "h6-2", chapter: 6, code: "H6-2",
    title: "Direct Method — Pell Corp",
    topic: "Service → production, machine-hour base",
    prompt: `
      <p><strong>Pell Corp</strong> allocates two service departments by the direct method using machine
         hours. Service costs: SA <strong>$600,000</strong>, SB <strong>$400,000</strong>. Machine hours:
         P1 1,000; P2 3,000.</p>
      <p class="req">Required</p>
      <p>Allocate SA and SB to P1 and P2 and total each production department.</p>`,
    tip: `<p>Direct method uses production-department hours only: P1 = 1,000 ÷ 4,000 = 25%, P2 = 75%.
       Apply to each service department's cost.</p>`,
    checks: [
      {label: "Total service cost to P1", answer: 250000, tol: 20, fmt: "money"},
      {label: "Total service cost to P2", answer: 750000, tol: 20, fmt: "money"}
    ],
    solution: `
      <p>Proportions: P1 = 25%, P2 = 75%.</p>
      <table class="soln">
        <thead><tr><th>From</th><th class="num">Cost</th><th class="num">→ P1 (25%)</th><th class="num">→ P2 (75%)</th></tr></thead>
        <tbody>
          <tr><td>SA</td><td class="num">$600,000</td><td class="num">$150,000</td><td class="num">$450,000</td></tr>
          <tr><td>SB</td><td class="num">$400,000</td><td class="num">$100,000</td><td class="num">$300,000</td></tr>
          <tr class="total"><td>Total</td><td class="num">$1,000,000</td><td class="num">$250,000</td><td class="num">$750,000</td></tr>
        </tbody>
      </table>`
  }
  );
})();
