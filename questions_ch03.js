/* ===================================================================
   Chapter 3 — Process Costing (weighted average)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e3-5", chapter: 3, code: "E3-5",
    title: "Unit Reconciliation",
    topic: "Process costing • units to account for",
    prompt: `
      <p><strong>Panama Paint Company</strong> manufactured cans of paint during August:</p>
      <table class="given"><tbody>
        <tr><td>Cans completed</td><td class="num">90,000</td></tr>
        <tr><td>Cans in process, Aug 1 (75% material, 50% conversion)</td><td class="num">850</td></tr>
        <tr><td>Cans started during August</td><td class="num">95,000</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> How many units were in Work in Process at the <em>end</em> of August?</li>
        <li><strong>What-if:</strong> If 98,000 units were actually started (not 95,000), what is ending WIP?</li>
      </ol>`,
    tip: `
      <p>Unit reconciliation is pure counting — completion percentages don't matter here:</p>
      <p class="formula">Beginning WIP + Started = Completed + Ending WIP</p>
      <p>So <strong>Units to account for = beginning + started</strong>, and
         <strong>Ending WIP = units to account for − units completed</strong>. The 75% / 50%
         figures are a distraction for this part.</p>`,
    checks: [
      {label: "Ending Work in Process (part a)", answer: 5850, tol: 1, fmt: "num"},
      {label: "Ending WIP if 98,000 started (what-if)", answer: 8850, tol: 1, fmt: "num"}
    ],
    solution: `
      <p><strong>a.</strong> Units to account for = 850 + 95,000 = 95,850.
         Ending WIP = 95,850 − 90,000 = <strong>5,850 units</strong>.</p>
      <p><strong>What-if.</strong> Units to account for = 850 + 98,000 = 98,850.
         Ending WIP = 98,850 − 90,000 = <strong>8,850 units</strong> — 3,000 more. Cost per unit
         will be lower, but total cost assigned to ending WIP will be larger.</p>`
  },
  {
    id: "e3-8", chapter: 3, code: "E3-8",
    title: "Cost Reconciliation",
    topic: "Equivalent units • working backward to beginning WIP",
    prompt: `
      <p><strong>Western Solvent</strong> produced containers of solvent during December:</p>
      <table class="given"><tbody>
        <tr><td>Units completed</td><td class="num">40,000</td></tr>
        <tr><td>Units in ending WIP (100% material, 30% labor &amp; overhead)</td><td class="num">10,000</td></tr>
        <tr><td>Material cost incurred in December</td><td class="num">$260,000</td></tr>
        <tr><td>Labor cost incurred</td><td class="num">$120,000</td></tr>
        <tr><td>Overhead cost incurred</td><td class="num">$161,000</td></tr>
        <tr><td>Cost per equivalent unit — Material / Labor / Overhead</td><td class="num">$6 / $3 / $4</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <p>Calculate the material, labor, and overhead cost that was in <strong>beginning</strong>
         Work in Process inventory.</p>`,
    tip: `
      <p>Under weighted average: <code>cost per EU = (beginning WIP cost + cost added) ÷ equivalent units</code>.
         You're given the cost per EU, so solve backward:</p>
      <ul>
        <li>Equivalent units: material = 40,000 + 10,000×100%; labor &amp; overhead = 40,000 + 10,000×30%.</li>
        <li>Total cost for a category = cost/EU × equivalent units.</li>
        <li><strong>Beginning WIP cost = total cost − cost added this month.</strong></li>
      </ul>`,
    checks: [
      {label: "Material in beginning WIP", answer: 40000, tol: 5, fmt: "money"},
      {label: "Labor in beginning WIP", answer: 9000, tol: 5, fmt: "money"},
      {label: "Overhead in beginning WIP", answer: 11000, tol: 5, fmt: "money"}
    ],
    solution: `
      <p><strong>Material:</strong> EU = 40,000 + 10,000(100%) = 50,000.
         Total = $6 × 50,000 = $300,000. Beginning WIP = 300,000 − 260,000 = <strong>$40,000</strong>.</p>
      <p><strong>Labor:</strong> EU = 40,000 + 10,000(30%) = 43,000.
         Total = $3 × 43,000 = $129,000. Beginning WIP = 129,000 − 120,000 = <strong>$9,000</strong>.</p>
      <p><strong>Overhead:</strong> EU = 43,000. Total = $4 × 43,000 = $172,000.
         Beginning WIP = 172,000 − 161,000 = <strong>$11,000</strong>.</p>`
  },
  {
    id: "p3-1", chapter: 3, code: "P3-1",
    title: "Comprehensive Problem, One Department",
    topic: "Equivalent units • cost per EU • cost assignment",
    prompt: `
      <p><strong>Regal Polish</strong> makes a single product in one department (process costing). May activity:</p>
      <table class="given"><tbody>
        <tr><td>Units in process, May 1 (100% material, 60% conversion)</td><td class="num">11,000</td></tr>
        <tr><td>Units started in May</td><td class="num">105,000</td></tr>
        <tr><td>Units in process, May 31 (100% material, 70% conversion)</td><td class="num">5,100</td></tr>
      </tbody></table>
      <table class="given">
        <thead><tr><th>Costs</th><th class="num">Beginning WIP</th><th class="num">Added in May</th></tr></thead>
        <tbody>
          <tr><td>Direct material</td><td class="num">$4,000</td><td class="num">$76,040.00</td></tr>
          <tr><td>Direct labor</td><td class="num">$200</td><td class="num">$8,957.60</td></tr>
          <tr><td>Overhead</td><td class="num">$300</td><td class="num">$10,002.30</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Cost per equivalent unit for each cost item and in total.</li>
        <li><strong>b.</strong> Cost of units completed and cost of ending WIP.</li>
        <li><strong>c.</strong> Reconcile to total cost to account for.</li>
      </ol>`,
    tip: `
      <p>Work the four standard steps (weighted average):</p>
      <ol>
        <li><strong>Units:</strong> to account for = 11,000 + 105,000. Completed = that − 5,100 ending.</li>
        <li><strong>Equivalent units</strong> per category = completed + ending×completion%. Material is 100% so its EU differ from conversion.</li>
        <li><strong>Cost/EU</strong> = (beginning + added) ÷ EU, summed for a total.</li>
        <li><strong>Assign:</strong> completed = units × total cost/EU; ending WIP = (ending EU × cost/EU) per category.</li>
      </ol>`,
    checks: [
      {label: "Total cost per equivalent unit (a)", answer: 0.86, tol: 0.01, fmt: "money"},
      {label: "Cost of units completed (b)", answer: 95374, tol: 5, fmt: "money"},
      {label: "Cost of ending WIP (b)", answer: 4125.90, tol: 2, fmt: "money"}
    ],
    solution: `
      <p><strong>Units:</strong> to account for = 116,000; completed = 116,000 − 5,100 = 110,900.</p>
      <p><strong>a. Equivalent units & cost/EU</strong></p>
      <table class="soln">
        <thead><tr><th>Cost</th><th class="num">Total cost</th><th class="num">Equiv. units</th><th class="num">Cost/EU</th></tr></thead>
        <tbody>
          <tr><td>Material (EU: 110,900 + 5,100)</td><td class="num">$80,040</td><td class="num">116,000</td><td class="num">$0.69</td></tr>
          <tr><td>Labor (EU: 110,900 + 3,570)</td><td class="num">$9,157.60</td><td class="num">114,470</td><td class="num">$0.08</td></tr>
          <tr><td>Overhead (EU: 110,900 + 3,570)</td><td class="num">$10,302.30</td><td class="num">114,470</td><td class="num">$0.09</td></tr>
          <tr class="total"><td>Total</td><td class="num">$99,499.90</td><td></td><td class="num">$0.86</td></tr>
        </tbody>
      </table>
      <p><strong>b. Assign costs.</strong> Completed = 110,900 × $0.86 = <strong>$95,374</strong>.
         Ending WIP = (5,100 × $0.69) + (3,570 × $0.08) + (3,570 × $0.09)
         = $3,519 + $285.60 + $321.30 = <strong>$4,125.90</strong>.</p>
      <p><strong>c. Reconcile.</strong> $95,374 + $4,125.90 = $99,499.90 = $4,500 beginning + $94,999.90 added. ✓
         <span class="note">(Cents may differ by $0.01 from rounding the per-unit costs.)</span></p>`
  },
  {
    id: "p3-7", chapter: 3, code: "P3-7",
    title: "Production Cost Report, Missing Data",
    topic: "Filling a production cost report",
    prompt: `
      <p><strong>Classic 50s Flooring</strong> — partial production cost report, Mixing Department, June
         (a unit = a gallon of linoleum cement):</p>
      <table class="given"><tbody>
        <tr><td>Units in beginning WIP</td><td class="num">700</td></tr>
        <tr><td>Units started</td><td class="num">2,700</td></tr>
        <tr><td>Units completed</td><td class="num">2,300</td></tr>
        <tr><td>Units in ending WIP — Material 100%, Conversion 70%</td><td class="num">(a)</td></tr>
      </tbody></table>
      <table class="given">
        <thead><tr><th>Total cost</th><th class="num">Material</th><th class="num">Labor</th><th class="num">Overhead</th></tr></thead>
        <tbody>
          <tr><td>Beginning WIP + incurred in June</td><td class="num">$4,600</td><td class="num">$12,810</td><td class="num">$26,230</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <p>Find the missing data: (a) ending WIP units, and the cost per equivalent unit for
         material, labor, and overhead.</p>`,
    tip: `
      <p>Reconcile units first: ending WIP = (beginning + started) − completed. Then equivalent
         units differ by category — material is 100% complete, conversion (labor &amp; overhead) is 70%.
         Cost per EU = total cost ÷ equivalent units.</p>`,
    checks: [
      {label: "(a) Ending WIP units", answer: 1100, tol: 1, fmt: "num"},
      {label: "Material cost per EU", answer: 1.35, tol: 0.02, fmt: "money"},
      {label: "Labor cost per EU", answer: 4.17, tol: 0.02, fmt: "money"},
      {label: "Overhead cost per EU", answer: 8.54, tol: 0.02, fmt: "money"}
    ],
    solution: `
      <p><strong>(a)</strong> Ending WIP = (700 + 2,700) − 2,300 = <strong>1,100 units</strong>;
         units accounted for = 3,400.</p>
      <p><strong>Equivalent units:</strong> Material = 2,300 + 1,100(100%) = 3,400;
         Conversion = 2,300 + 1,100(70% = 770) = 3,070.</p>
      <table class="soln">
        <thead><tr><th>Cost</th><th class="num">Total</th><th class="num">EU</th><th class="num">Cost/EU</th></tr></thead>
        <tbody>
          <tr><td>Material</td><td class="num">$4,600</td><td class="num">3,400</td><td class="num">$1.35</td></tr>
          <tr><td>Labor</td><td class="num">$12,810</td><td class="num">3,070</td><td class="num">$4.17</td></tr>
          <tr><td>Overhead</td><td class="num">$26,230</td><td class="num">3,070</td><td class="num">$8.54</td></tr>
          <tr class="total"><td>Total</td><td class="num">$43,640</td><td></td><td class="num">$14.07</td></tr>
        </tbody>
      </table>`
  }
  );

  B.hard.push(
  {
    id: "h3-1", chapter: 3, code: "H3-1",
    title: "Unit Reconciliation — Cobalt Chemicals",
    topic: "Process costing • units to account for",
    prompt: `
      <p><strong>Cobalt Chemicals</strong> reports for March: units completed 60,000; units in
         beginning WIP 1,200; units started 64,000.</p>
      <p class="req">Required</p>
      <p>How many units are in ending Work in Process?</p>`,
    tip: `<p>Ending WIP = (beginning + started) − completed. Completion percentages are not needed.</p>`,
    checks: [{label: "Ending WIP units", answer: 5200, tol: 1, fmt: "num"}],
    solution: `<p>Units to account for = 1,200 + 64,000 = 65,200. Ending WIP = 65,200 − 60,000 =
       <strong>5,200 units</strong>.</p>`
  },
  {
    id: "h3-2", chapter: 3, code: "H3-2",
    title: "Equivalent Units & Cost Assignment — Verdant Mills",
    topic: "Cost per EU • completed & ending WIP",
    prompt: `
      <p><strong>Verdant Mills</strong> uses weighted-average process costing in one department.
         This period: 20,000 units completed; 5,000 units in ending WIP (100% material, 40% conversion).
         Total costs (beginning WIP + added): material <strong>$100,000</strong>,
         conversion <strong>$66,000</strong>.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Cost per equivalent unit for material and conversion.</li>
        <li><strong>b.</strong> Cost of units completed and cost of ending WIP.</li>
      </ol>`,
    tip: `<p>EU material = completed + ending(100%); EU conversion = completed + ending(40%).
       Cost/EU = total cost ÷ EU. Completed = units × total cost/EU; ending WIP = ending EU × cost/EU per category.</p>`,
    checks: [
      {label: "Material cost per EU", answer: 4.00, tol: 0.01, fmt: "money"},
      {label: "Conversion cost per EU", answer: 3.00, tol: 0.01, fmt: "money"},
      {label: "Cost of units completed", answer: 140000, tol: 5, fmt: "money"},
      {label: "Cost of ending WIP", answer: 26000, tol: 5, fmt: "money"}
    ],
    solution: `
      <p><strong>Equivalent units:</strong> Material = 20,000 + 5,000 = 25,000;
         Conversion = 20,000 + (5,000×40% = 2,000) = 22,000.</p>
      <p><strong>a.</strong> Material = $100,000 ÷ 25,000 = <strong>$4.00</strong>;
         Conversion = $66,000 ÷ 22,000 = <strong>$3.00</strong>. Total = $7.00.</p>
      <p><strong>b.</strong> Completed = 20,000 × $7.00 = <strong>$140,000</strong>.
         Ending WIP = (5,000 × $4.00) + (2,000 × $3.00) = $20,000 + $6,000 = <strong>$26,000</strong>.
         Check: $140,000 + $26,000 = $166,000 = $100,000 + $66,000. ✓</p>`
  }
  );
})();
