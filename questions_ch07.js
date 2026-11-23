/* ===================================================================
   Chapter 7 — Cost Information in Decision Making (relevant costs)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e7-4", chapter: 7, code: "E7-4",
    title: "Incremental Analysis — Trade-Show Decision",
    topic: "Relevant revenue & variable costs",
    prompt: `
      <p><strong>Rustic Interiors</strong> may exhibit at the Middleton Home &amp; Garden Expo.
         Exhibit cost <strong>$15,000</strong>; estimated revenue increase <strong>$40,000</strong>.
         Last year, on revenue of $212,500, the only costs that <em>vary with revenue</em> were design
         supplies $18,000 and travel expenses $3,000 (all other costs are fixed).</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> What is the impact on profit? Should they exhibit?</li>
        <li><strong>What-if:</strong> At what exhibit cost would it become not worthwhile?</li>
      </ol>`,
    tip: `
      <p>Only amounts that <strong>change</strong> are relevant. Find the variable-cost rate on revenue
         (cost ÷ last year's revenue), apply it to the $40,000 of new revenue, then subtract those
         variable costs and the exhibit cost. Salaries, rent, depreciation don't change — ignore them.</p>`,
    checks: [
      {label: "Increase in design supplies", answer: 3388, tol: 5, fmt: "money"},
      {label: "Increase in profit", answer: 21047, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Variable rates: design supplies 18,000 ÷ 212,500 = 8.47%; travel 3,000 ÷ 212,500 = 1.41%.</p>
      <table class="soln"><tbody>
        <tr><td>Increase in revenue</td><td class="num">$40,000</td></tr>
        <tr><td>Less increase in design supplies (8.47% × 40,000)</td><td class="num">(3,388)</td></tr>
        <tr><td>Less increase in travel (1.41% × 40,000)</td><td class="num">(565)</td></tr>
        <tr><td>Less exhibit cost</td><td class="num">(15,000)</td></tr>
        <tr class="total"><td>Increase in profit</td><td class="num">$21,047</td></tr>
      </tbody></table>
      <p><strong>Yes, exhibit</strong> — profit rises ~$21,047. <strong>What-if:</strong> they could pay up to
         about <strong>$21,047 more</strong> (total incremental cost would then equal the $40,000 revenue);
         beyond that the exhibit loses money.</p>`
  },
  {
    id: "e7-5", chapter: 7, code: "E7-5",
    title: "Incremental Analysis — Outsourcing a Survey",
    topic: "Avoidable vs. unavoidable costs",
    prompt: `
      <p><strong>Knight Motors</strong> may outsource its customer survey to RBG Associates for
         <strong>$35,000</strong>. Craig Knight will accept only if it costs no more than $10,000 above
         current costs. Prior-year survey costs:</p>
      <table class="given"><tbody>
        <tr><td>Mailing</td><td class="num">$17,500</td></tr>
        <tr><td>Printing (outside shop)</td><td class="num">$6,000</td></tr>
        <tr><td>Salary of part-time employee (survey work)</td><td class="num">$2,080</td></tr>
        <tr><td>Share of computer/software depreciation</td><td class="num">$1,200</td></tr>
        <tr><td>Share of electricity/phone (by square feet)</td><td class="num">$600</td></tr>
        <tr class="total"><td>Total</td><td class="num">$27,380</td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <p>What is the incremental cost of outsourcing? Will he accept?</p>`,
    tip: `
      <p>Incremental cost = RBG's price − <strong>avoidable</strong> costs. Only costs that actually go
         away count as savings: mailing, printing, and the part-timer's salary. <em>Allocated</em>
         depreciation and the share of electricity continue whether or not the survey is outsourced,
         so they are not savings.</p>`,
    checks: [
      {label: "Avoidable cost savings", answer: 25580, tol: 5, fmt: "money"},
      {label: "Incremental cost of outsourcing", answer: 9420, tol: 5, fmt: "money"}
    ],
    solution: `
      <p>Avoidable savings = 17,500 + 6,000 + 2,080 = <strong>$25,580</strong>
         (depreciation share and utilities share are allocated and unavoidable).</p>
      <p>Incremental cost = 35,000 − 25,580 = <strong>$9,420</strong>. Since that is under $10,000,
         <strong>Craig will accept the RBG offer.</strong></p>`
  },
  {
    id: "e7-6", chapter: 7, code: "E7-6",
    title: "Incremental Analysis & Opportunity Cost",
    topic: "Special order requiring you to turn away regulars",
    prompt: `
      <p><strong>Finn's Seafood</strong> could host a New England Investments dinner (restaurant closes
         to regulars that night). Event: charge $72/person, 175 people; food $36/person, beverages
         $14/person. A typical night: 190 people, average bill $56; food $20/person, beverages
         $17/person. No extra staff needed.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Net incremental profit of accepting the event.</li>
        <li><strong>b.</strong> What was the opportunity cost of accepting?</li>
        <li><strong>What-if:</strong> For a wedding with the same food cost but $32/person beverages,
            what charge yields $15 profit per attendee?</li>
      </ol>`,
    tip: `
      <p>Two pieces: the event's own profit, <em>minus</em> the profit given up by closing (the
         <strong>opportunity cost</strong>). Closing's lost profit = lost regular revenue − food/beverage
         costs saved. For the what-if, incremental cost per head = event food+beverages + the per-head
         opportunity cost of a regular; add the desired profit.</p>`,
    checks: [
      {label: "Event profit before closing (a)", answer: 3850, tol: 10, fmt: "money"},
      {label: "Opportunity cost of closing (b)", answer: 3610, tol: 10, fmt: "money"},
      {label: "Net incremental profit (a)", answer: 240, tol: 10, fmt: "money"},
      {label: "Wedding charge per person (what-if)", answer: 102, tol: 1, fmt: "money"}
    ],
    solution: `
      <p><strong>Event:</strong> revenue 72×175 = 12,600; costs (36+14)×175 = 8,750 → profit
         <strong>$3,850</strong>.</p>
      <p><strong>Closing (opportunity cost):</strong> lost revenue 56×190 = 10,640; costs saved
         (20+17)×190 = 7,030 → lost profit <strong>$3,610</strong>.</p>
      <p><strong>a.</strong> Net = 3,850 − 3,610 = <strong>$240</strong>. <strong>b.</strong> Opportunity
         cost = <strong>$3,610</strong>.</p>
      <p><strong>What-if.</strong> Incremental cost/head = (36 + 32) + [56 − (20 + 17)] = 68 + 19 = $87.
         Add $15 profit → charge <strong>$102/person</strong>.</p>`
  },
  {
    id: "p7-4", chapter: 7, code: "P7-4",
    title: "Make-or-Buy Decision",
    topic: "Relevant cost of making vs. buying",
    prompt: `
      <p><strong>Bradley Heating &amp; Cooling</strong> can make ductwork for the Kerry Park job or buy
         it prefabricated. Costs to <em>make</em>:</p>
      <table class="given"><tbody>
        <tr><td>Materials</td><td class="num">$35,000</td></tr>
        <tr><td>Labor to form ductwork</td><td class="num">$4,000</td></tr>
        <tr><td>Labor to install</td><td class="num">$10,000</td></tr>
        <tr><td>Misc. variable</td><td class="num">$1,500</td></tr>
        <tr><td>Allocated fixed (building, office)</td><td class="num">$3,000</td></tr>
      </tbody></table>
      <p>Prefabricated ductwork costs <strong>$42,000</strong> (includes the sheet metal). Buying lets
         Bradley reassign workers and avoid <strong>5 days of late penalties at $1,200/day</strong> on
         another project.</p>
      <p class="req">Required</p>
      <p>Should Bradley make or buy?</p>`,
    tip: `
      <p>Compare only costs that differ. If bought: material is replaced by the $42,000 prefab price,
         the $4,000 forming labor is avoided, and the $6,000 of penalties is avoided. Installation,
         misc., and allocated fixed cost are the same either way.</p>`,
    checks: [
      {label: "Total relevant cost — MAKE", answer: 59500, tol: 10, fmt: "money"},
      {label: "Total relevant cost — BUY", answer: 56500, tol: 10, fmt: "money"},
      {label: "Advantage of buying", answer: 3000, tol: 10, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th></th><th class="num">Make</th><th class="num">Buy</th></tr></thead>
        <tbody>
          <tr><td>Materials / prefab</td><td class="num">$35,000</td><td class="num">$42,000</td></tr>
          <tr><td>Labor to form</td><td class="num">$4,000</td><td class="num">$0</td></tr>
          <tr><td>Labor to install</td><td class="num">$10,000</td><td class="num">$10,000</td></tr>
          <tr><td>Misc. variable</td><td class="num">$1,500</td><td class="num">$1,500</td></tr>
          <tr><td>Allocated fixed</td><td class="num">$3,000</td><td class="num">$3,000</td></tr>
          <tr><td>Penalty (5 × $1,200)</td><td class="num">$6,000</td><td class="num">$0</td></tr>
          <tr class="total"><td>Total</td><td class="num">$59,500</td><td class="num">$56,500</td></tr>
        </tbody>
      </table>
      <p><strong>Buy the prefabricated ductwork</strong> — net incremental benefit of <strong>$3,000</strong>.</p>`
  },
  {
    id: "p7-8", chapter: 7, code: "P7-8",
    title: "Additional Processing with a Constraint",
    topic: "Contribution margin per unit of the constraint",
    prompt: `
      <p><strong>Mega Chemical</strong> makes ZylexA; ZylexB is ZylexA processed further. Demand for
         both exceeds capacity, so the constraint is <strong>production time (minutes)</strong>.</p>
      <table class="given"><tbody>
        <tr><td>ZylexA: price $11; variable cost $6.75 (2 + 2.5 + 2.25); 25 min/gal</td><td></td></tr>
        <tr><td>ZylexB: sells for $17; <em>additional</em> cost $3.35 (1.75 + 0.5 + 1.1); <em>additional</em> 10 min/gal</td><td></td></tr>
      </tbody></table>
      <p class="req">Required</p>
      <p>Given the time constraint, should the company spend time converting ZylexA into ZylexB?</p>`,
    tip: `
      <p>When time is the bottleneck, rank by <strong>contribution margin per minute</strong>.
         For the upgrade, compare the <em>incremental</em> profit per <em>incremental</em> minute of
         converting A→B against A's own CM per minute.</p>`,
    checks: [
      {label: "ZylexA contribution margin per minute", answer: 0.17, tol: 0.01, fmt: "money"},
      {label: "ZylexB incremental profit per minute", answer: 0.265, tol: 0.01, fmt: "money"}
    ],
    solution: `
      <p><strong>ZylexA:</strong> CM = 11 − 6.75 = $4.25 over 25 min → <strong>$0.17/min</strong>.</p>
      <p><strong>ZylexB (the upgrade):</strong> incremental revenue = 17 − 11 = $6; incremental cost =
         $3.35 → incremental profit $2.65 over 10 extra min → <strong>$0.265/min</strong>.</p>
      <p>Since converting to ZylexB earns $0.265/min &gt; $0.17/min, <strong>produce ZylexB</strong>
         (you must make ZylexA first; the question is whether to spend the extra time upgrading it — and
         you should).</p>`
  }
  );

  B.hard.push(
  {
    id: "h7-1", chapter: 7, code: "H7-1",
    title: "Make-or-Buy — Cedar Works",
    topic: "Avoidable cost vs. purchase price",
    prompt: `
      <p><strong>Cedar Works</strong> makes 10,000 units of a part per year:</p>
      <table class="given"><tbody>
        <tr><td>Direct materials</td><td class="num">$20,000</td></tr>
        <tr><td>Direct labor</td><td class="num">$15,000</td></tr>
        <tr><td>Variable overhead</td><td class="num">$9,000</td></tr>
        <tr><td>Fixed overhead (only $4,000 avoidable if stopped)</td><td class="num">$12,000</td></tr>
      </tbody></table>
      <p>A supplier offers the part for <strong>$46,000</strong> total. Should Cedar make or buy?</p>`,
    tip: `<p>Compare the supplier price to the <strong>avoidable</strong> cost of making: all variable
       costs plus only the avoidable portion of fixed overhead. Unavoidable fixed cost continues either
       way, so ignore it.</p>`,
    checks: [
      {label: "Avoidable cost to make", answer: 48000, tol: 10, fmt: "money"},
      {label: "Advantage of buying", answer: 2000, tol: 10, fmt: "money"}
    ],
    solution: `
      <p>Avoidable make cost = 20,000 + 15,000 + 9,000 + 4,000 = <strong>$48,000</strong>.
         Buy price = $46,000. <strong>Buy</strong> — saving <strong>$2,000</strong>. The $8,000 of
         unavoidable fixed overhead is irrelevant (it remains whether you make or buy).</p>`
  },
  {
    id: "h7-2", chapter: 7, code: "H7-2",
    title: "Process-Further with a Constraint — Nova Labs",
    topic: "Incremental profit per constrained minute",
    prompt: `
      <p><strong>Nova Labs</strong> can sell product X or process it into X-Plus. Capacity (machine
         minutes) is the constraint. X: price $20, variable cost $12, 4 min/unit. Upgrading to X-Plus
         raises the price to $30, adds $4 of cost, and takes 2 more minutes.</p>
      <p class="req">Required</p>
      <p>Per constrained minute, is it better to sell X or upgrade to X-Plus?</p>`,
    tip: `<p>X's CM per minute = (price − variable) ÷ minutes. The upgrade's incremental profit per minute
       = (incremental revenue − incremental cost) ÷ incremental minutes. Pick the higher.</p>`,
    checks: [
      {label: "X contribution margin per minute", answer: 2.00, tol: 0.05, fmt: "money"},
      {label: "X-Plus incremental profit per minute", answer: 3.00, tol: 0.05, fmt: "money"}
    ],
    solution: `
      <p><strong>X:</strong> CM = 20 − 12 = $8 over 4 min → <strong>$2.00/min</strong>.</p>
      <p><strong>Upgrade:</strong> incremental revenue = 30 − 20 = $10, incremental cost = $4 →
         incremental profit $6 over 2 min → <strong>$3.00/min</strong>.</p>
      <p>$3.00/min &gt; $2.00/min, so <strong>upgrade to X-Plus</strong>.</p>`
  }
  );
})();
