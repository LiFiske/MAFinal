/* ===================================================================
   Chapter 8 — Pricing & Customer Profitability Analysis
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e8-16", chapter: 8, code: "E8-16",
    title: "Customer Profitability Analysis",
    topic: "Activity costs by customer",
    prompt: `
      <p><strong>Triumph Corporation</strong> activity costs: order processing $9/order; rush handling
         adds $11/order; technical support $13/call; relationship management $1,800/customer/year;
         product costs are 80% of sales.</p>
      <p>Last year with <strong>Julius Company</strong>: sales $22,000; 170 orders; 80% of orders rush;
         90 support calls.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Is the Julius account profitable?</li>
        <li><strong>What-if:</strong> A 5% discount cuts Julius's orders to 52/year. Now profitable?</li>
      </ol>`,
    tip: `
      <p>Build the customer's income statement bottom-up: Sales − product cost (80% of sales) − each
         activity cost (rate × that customer's activity) − the annual relationship cost. Rush handling
         applies only to the rush fraction of orders (170 × 80%).</p>`,
    checks: [
      {label: "Cost of goods sold", answer: 17600, tol: 5, fmt: "money"},
      {label: "Rush handling cost", answer: 1496, tol: 5, fmt: "money"},
      {label: "Account profit (enter loss negative)", answer: -1596, tol: 10, fmt: "money"},
      {label: "Account profit WITH discount (what-if)", answer: -596, tol: 10, fmt: "money"}
    ],
    solution: `
      <table class="soln"><tbody>
        <tr><td>Sales</td><td class="num">$22,000</td></tr>
        <tr><td>Cost of goods sold (80%)</td><td class="num">(17,600)</td></tr>
        <tr><td>Order processing ($9 × 170)</td><td class="num">(1,530)</td></tr>
        <tr><td>Rush handling ($11 × 136)</td><td class="num">(1,496)</td></tr>
        <tr><td>Technical support ($13 × 90)</td><td class="num">(1,170)</td></tr>
        <tr><td>Relationship management</td><td class="num">(1,800)</td></tr>
        <tr class="total"><td>Account profit (loss)</td><td class="num">($1,596)</td></tr>
      </tbody></table>
      <p><strong>What-if.</strong> Net sales = 22,000 − 5% = 20,900; COGS still 17,600; order processing
         9×52 = 468; rush 11×(52×80%=41.6) = 457.60; support 1,170; relationship 1,800 → total $21,495.60.
         Profit = 20,900 − 21,495.60 = <strong>−$596</strong>. The loss shrinks sharply — fewer orders cut
         the order-driven costs — but the account is still slightly unprofitable.</p>`
  },
  {
    id: "p8-1", chapter: 8, code: "P8-1",
    title: "Determining the Profit-Maximizing Price",
    topic: "Price / quantity / contribution margin",
    prompt: `
      <p><strong>Spencer Electronics</strong> will sell an electronic calendar via a cable channel.
         Cable fee = <strong>20% of revenue</strong>; fixed cost $160,000/run; variable production
         $28/unit; shipping $5/unit. Estimated demand:</p>
      <table class="given">
        <thead><tr><th class="num">Price</th><th class="num">Quantity</th></tr></thead>
        <tbody>
          <tr><td class="num">$85</td><td class="num">15,000</td></tr>
          <tr><td class="num">$75</td><td class="num">20,000</td></tr>
          <tr><td class="num">$65</td><td class="num">30,000</td></tr>
          <tr><td class="num">$55</td><td class="num">45,000</td></tr>
          <tr><td class="num">$45</td><td class="num">65,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <p>Compute expected profit at each price and identify the profit-maximizing price.</p>`,
    tip: `
      <p>The cable fee is a <em>percentage of price</em>, so variable cost per unit =
         $28 + $5 + 0.20 × price. CM/unit = price − variable cost. Profit = CM/unit × quantity − $160,000.
         Compute for each row and pick the largest — the highest price rarely wins.</p>`,
    checks: [
      {label: "Profit at $85", answer: 365000, tol: 50, fmt: "money"},
      {label: "Profit at $65", answer: 410000, tol: 50, fmt: "money"},
      {label: "Profit-maximizing price", answer: 65, tol: 0.5, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th class="num">Price</th><th class="num">Var cost</th><th class="num">CM/unit</th><th class="num">Qty</th><th class="num">Profit</th></tr></thead>
        <tbody>
          <tr><td class="num">$85</td><td class="num">$50</td><td class="num">$35</td><td class="num">15,000</td><td class="num">$365,000</td></tr>
          <tr><td class="num">$75</td><td class="num">$48</td><td class="num">$27</td><td class="num">20,000</td><td class="num">$380,000</td></tr>
          <tr class="total"><td class="num">$65</td><td class="num">$46</td><td class="num">$19</td><td class="num">30,000</td><td class="num">$410,000</td></tr>
          <tr><td class="num">$55</td><td class="num">$44</td><td class="num">$11</td><td class="num">45,000</td><td class="num">$335,000</td></tr>
          <tr><td class="num">$45</td><td class="num">$42</td><td class="num">$3</td><td class="num">65,000</td><td class="num">$35,000</td></tr>
        </tbody>
      </table>
      <p>(Variable cost = 33 + 0.20 × price; fixed $160,000 subtracted from each total CM.)
         The <strong>profit-maximizing price is $65</strong>, giving <strong>$410,000</strong>.</p>`
  }
  );

  B.hard.push(
  {
    id: "h8-1", chapter: 8, code: "H8-1",
    title: "Customer Profitability — Apex Supply",
    topic: "Activity-based customer income",
    prompt: `
      <p><strong>Apex Supply</strong> activity costs: order processing $8/order; rush adds $10/order;
         tech support $12/call; relationship $1,500/customer/year; product costs 75% of sales.</p>
      <p>Customer <strong>Delta</strong>: sales $30,000; 100 orders; 60% rush; 50 support calls.</p>
      <p class="req">Required</p>
      <p>Is the Delta account profitable, and by how much?</p>`,
    tip: `<p>Sales − 75% product cost − order processing − rush (on 60% of orders) − support − relationship.</p>`,
    checks: [
      {label: "Cost of goods sold", answer: 22500, tol: 5, fmt: "money"},
      {label: "Account profit", answer: 4000, tol: 10, fmt: "money"}
    ],
    solution: `
      <table class="soln"><tbody>
        <tr><td>Sales</td><td class="num">$30,000</td></tr>
        <tr><td>Product cost (75%)</td><td class="num">(22,500)</td></tr>
        <tr><td>Order processing ($8 × 100)</td><td class="num">(800)</td></tr>
        <tr><td>Rush ($10 × 60)</td><td class="num">(600)</td></tr>
        <tr><td>Support ($12 × 50)</td><td class="num">(600)</td></tr>
        <tr><td>Relationship</td><td class="num">(1,500)</td></tr>
        <tr class="total"><td>Account profit</td><td class="num">$4,000</td></tr>
      </tbody></table>`
  },
  {
    id: "h8-2", chapter: 8, code: "H8-2",
    title: "Profit-Maximizing Price — Brightline",
    topic: "CM with a percentage-of-price fee",
    prompt: `
      <p><strong>Brightline</strong> pays a marketplace fee of <strong>10% of price</strong>, has
         variable production cost of $20/unit, and fixed cost of $50,000. Demand:</p>
      <table class="given">
        <thead><tr><th class="num">Price</th><th class="num">Quantity</th></tr></thead>
        <tbody>
          <tr><td class="num">$60</td><td class="num">3,000</td></tr>
          <tr><td class="num">$50</td><td class="num">5,000</td></tr>
          <tr><td class="num">$40</td><td class="num">8,000</td></tr>
          <tr><td class="num">$30</td><td class="num">12,000</td></tr>
        </tbody>
      </table>
      <p class="req">Required</p>
      <p>Find the profit-maximizing price.</p>`,
    tip: `<p>Variable cost/unit = $20 + 0.10 × price. Profit = (price − variable) × quantity − $50,000.</p>`,
    checks: [
      {label: "Profit at $40", answer: 78000, tol: 50, fmt: "money"},
      {label: "Profit-maximizing price", answer: 40, tol: 0.5, fmt: "money"}
    ],
    solution: `
      <table class="soln">
        <thead><tr><th class="num">Price</th><th class="num">Var cost</th><th class="num">CM/unit</th><th class="num">Qty</th><th class="num">Profit</th></tr></thead>
        <tbody>
          <tr><td class="num">$60</td><td class="num">$26</td><td class="num">$34</td><td class="num">3,000</td><td class="num">$52,000</td></tr>
          <tr><td class="num">$50</td><td class="num">$25</td><td class="num">$25</td><td class="num">5,000</td><td class="num">$75,000</td></tr>
          <tr class="total"><td class="num">$40</td><td class="num">$24</td><td class="num">$16</td><td class="num">8,000</td><td class="num">$78,000</td></tr>
          <tr><td class="num">$30</td><td class="num">$23</td><td class="num">$7</td><td class="num">12,000</td><td class="num">$34,000</td></tr>
        </tbody>
      </table>
      <p>The <strong>profit-maximizing price is $40</strong>, giving <strong>$78,000</strong>.</p>`
  }
  );
})();
