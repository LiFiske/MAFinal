/* ===================================================================
   Chapter 13 — Statement of Cash Flows
   (Excel file is a blank student template with no answer key; solutions
    below were computed and checked against the statement-of-cash-flows rules.)
   =================================================================== */
(function () {
  var B = window.QUESTION_BANK;

  B.homework.push(
  {
    id: "e13-6", chapter: 13, code: "E13-6",
    title: "Cash Flow from Investing Activities",
    topic: "Classifying investing cash flows",
    prompt: `
      <p><strong>Damon Company</strong>, 2020 transactions:</p>
      <ul class="txn">
        <li>Purchased 10-year bonds of Gallant, Inc. — $200,000</li>
        <li>Purchased common stock of Morceau (long-term investment) — $60,000</li>
        <li>Acquired land in exchange for one of Damon's warehouses — $200,000</li>
        <li>Sold equipment for cash — $35,000 (original cost $70,000; accumulated depreciation $40,000)</li>
        <li>Purchased new equipment — $60,000</li>
      </ul>
      <p class="req">Required</p>
      <p>Prepare the investing section and compute net cash used in investing.</p>`,
    tip: `
      <p>Investing = buying/selling long-term assets and investments, for <strong>cash</strong>.
         A land-for-warehouse swap is a <strong>non-cash</strong> exchange — disclose it separately, not
         in the cash section. For the equipment sale, the cash flow is the <strong>$35,000 proceeds</strong>
         (the gain/loss is an income-statement item, not a separate investing flow).</p>`,
    checks: [
      {label: "Proceeds from equipment sale (inflow)", answer: 35000, tol: 10, fmt: "money"},
      {label: "Net cash used in investing (enter negative)", answer: -285000, tol: 100, fmt: "money"}
    ],
    solution: `
      <table class="soln"><tbody>
        <tr><td>Purchase of Gallant bonds</td><td class="num">($200,000)</td></tr>
        <tr><td>Purchase of Morceau stock</td><td class="num">($60,000)</td></tr>
        <tr><td>Sale of equipment</td><td class="num">$35,000</td></tr>
        <tr><td>Purchase of new equipment</td><td class="num">($60,000)</td></tr>
        <tr class="total"><td>Net cash used in investing</td><td class="num">($285,000)</td></tr>
      </tbody></table>
      <p class="note">The land-for-warehouse exchange ($200,000) is a non-cash transaction — reported in a
         separate schedule, not in the investing cash flows.</p>`
  },
  {
    id: "e13-7", chapter: 13, code: "E13-7",
    title: "Cash Flows from Financing Activities",
    topic: "Classifying financing cash flows",
    prompt: `
      <p><strong>Molten Company</strong>, 2021:</p>
      <ul class="txn">
        <li>Issued preferred stock — $125,000</li>
        <li>Repurchased its own stock — $70,000</li>
        <li>Borrowed from a bank (five-year note) — $150,000</li>
        <li>Retired bonds by paying cash — $45,000</li>
        <li>Declared dividends payable (not yet paid) — $135,000</li>
      </ul>
      <p class="req">Required</p>
      <p>Prepare the financing section and compute net cash from financing.</p>`,
    tip: `
      <p>Financing = cash from/to owners and lenders. Issuing stock or borrowing brings cash in;
         repurchasing stock, repaying debt, and paying dividends send cash out. A dividend only
         <strong>declared</strong> (not yet paid) involves <strong>no cash</strong> this period.</p>`,
    checks: [
      {label: "Net cash from financing", answer: 160000, tol: 100, fmt: "money"}
    ],
    solution: `
      <table class="soln"><tbody>
        <tr><td>Issue preferred stock</td><td class="num">$125,000</td></tr>
        <tr><td>Repurchase own stock</td><td class="num">($70,000)</td></tr>
        <tr><td>Borrow on note</td><td class="num">$150,000</td></tr>
        <tr><td>Retire bonds</td><td class="num">($45,000)</td></tr>
        <tr class="total"><td>Net cash from financing</td><td class="num">$160,000</td></tr>
      </tbody></table>
      <p class="note">The $135,000 dividend was only declared (payable), so it is excluded until paid.</p>`
  },
  {
    id: "e13-11", chapter: 13, code: "E13-11",
    title: "Operating Cash Flows (Indirect Method)",
    topic: "Net income → operating cash flow",
    prompt: `
      <p><strong>Weinberg Chemical Supply</strong>, 2021: net income <strong>$169,325</strong>.
         Included in the income statement: depreciation $65,000; amortization of patent $6,500.
         Changes: accounts receivable <em>decreased</em> $13,000; accounts payable <em>increased</em>
         $6,500; wages payable rose from $0 to $4,300; prepaid insurance <em>increased</em> $7,500.</p>
      <p class="req">Required</p>
      <ol class="parts">
        <li><strong>a.</strong> Net cash from operating activities (indirect method).</li>
        <li><strong>What-if:</strong> Correct it for an omitted $2,500 gain on equipment and $3,100 loss on land.</li>
      </ol>`,
    tip: `
      <p>Start at net income. <strong>Add back non-cash expenses</strong> (depreciation, amortization).
         Then adjust for current-account changes: an asset <em>decrease</em> or a liability <em>increase</em>
         adds cash; an asset increase (prepaid) subtracts. Gains on asset sales are <em>subtracted</em>
         (they belong in investing); losses are <em>added back</em>.</p>`,
    checks: [
      {label: "Net cash from operating activities (a)", answer: 257125, tol: 50, fmt: "money"},
      {label: "Corrected operating cash flow (what-if)", answer: 257725, tol: 50, fmt: "money"}
    ],
    solution: `
      <table class="soln"><tbody>
        <tr><td>Net income</td><td class="num">$169,325</td></tr>
        <tr><td>+ Depreciation</td><td class="num">65,000</td></tr>
        <tr><td>+ Amortization of patent</td><td class="num">6,500</td></tr>
        <tr><td>+ Decrease in accounts receivable</td><td class="num">13,000</td></tr>
        <tr><td>+ Increase in accounts payable</td><td class="num">6,500</td></tr>
        <tr><td>+ Increase in wages payable</td><td class="num">4,300</td></tr>
        <tr><td>− Increase in prepaid insurance</td><td class="num">(7,500)</td></tr>
        <tr class="total"><td>Net cash from operating activities</td><td class="num">$257,125</td></tr>
      </tbody></table>
      <p><strong>What-if:</strong> remove the $2,500 gain (−) and add back the $3,100 loss (+):
         257,125 − 2,500 + 3,100 = <strong>$257,725</strong>.</p>`
  }
  );

  B.hard.push(
  {
    id: "h13-1", chapter: 13, code: "H13-1",
    title: "Operating Cash Flow — Quill Co.",
    topic: "Indirect method",
    prompt: `
      <p><strong>Quill Co.:</strong> net income $90,000; depreciation $15,000; accounts receivable
         <em>increased</em> $8,000; inventory <em>decreased</em> $5,000; accounts payable
         <em>increased</em> $3,000.</p>
      <p class="req">Required</p>
      <p>Compute net cash provided by operating activities (indirect method).</p>`,
    tip: `<p>Net income + depreciation, then: asset increase subtracts, asset decrease adds, liability
       increase adds.</p>`,
    checks: [{label: "Net cash from operations", answer: 105000, tol: 50, fmt: "money"}],
    solution: `
      <p>90,000 + 15,000 − 8,000 (AR up) + 5,000 (inventory down) + 3,000 (AP up) =
         <strong>$105,000</strong>.</p>`
  },
  {
    id: "h13-2", chapter: 13, code: "H13-2",
    title: "Financing Cash Flow — Reed Inc.",
    topic: "Classifying financing flows",
    prompt: `
      <p><strong>Reed Inc.</strong>: issued bonds $200,000; paid cash dividends $40,000; repurchased its
         stock $30,000; issued common stock $80,000.</p>
      <p class="req">Required</p>
      <p>Compute net cash from financing activities.</p>`,
    tip: `<p>Inflows: issuing bonds and stock. Outflows: dividends <em>paid</em> and stock repurchases.</p>`,
    checks: [{label: "Net cash from financing", answer: 210000, tol: 50, fmt: "money"}],
    solution: `
      <p>200,000 − 40,000 − 30,000 + 80,000 = <strong>$210,000</strong>.</p>`
  }
  );
})();
