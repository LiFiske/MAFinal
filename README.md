# Managerial Accounting Practice

A one-question-at-a-time practice site for a **Managerial Accounting** final — built from
the in-class homework, **Chapters 1–14**. Dark colour scheme, sans-serif, phone-friendly.

Chapters: 1 Intro · 2 Job-Order Costing · 3 Process Costing · 4 CVP · 5 Variable Costing ·
6 Cost Allocation · 7 Decision Making · 8 Pricing · 9 Capital Budgeting · 10 Budgeting ·
11 Standard Costs & Variances · 12 Decentralization (ROI/EVA) · 13 Statement of Cash Flows ·
14 Financial Statement Analysis.

> Notes on sources: Chapter 6 has no lecture deck (tips written from the concepts). Chapter 10
> has no Excel homework, so its problems are built to the lecture's master-budget formulas.
> Chapters 13–14 came as blank student templates (no answer key), so those solutions were
> computed and checked by hand.

## Difficulty levels

| Level | What you get | Source |
|------|--------------|--------|
| **Easy** | The homework question **+ a "Professor's Tip"** button that points you in the right direction | Excel homework, tips grounded in the lecture PowerPoints |
| **Medium** | The same homework questions, **no tips** | Excel homework |
| **Hard** | **New, invented problems** on the same lesson plan (different companies & numbers) with full solutions | Written to mirror the homework concepts |
| **Concepts** | **Multiple-choice** questions that test *understanding* (what a ratio measures, when a variance is favorable, etc.) with instant right/wrong + an explanation | Written per chapter; auto-grades into the Cheat-Sheet Report |

The **Cheat-Sheet Report** button turns your Got-it / Review-again marks (from every mode,
including Concepts) into a strengths-and-weaknesses breakdown by chapter and topic — so you can
decide what belongs on your one-page cheat sheet. It has a Print view.

Every question has a **Reveal Solution** button with the full worked answer, optional
**numeric self-check** fields (type a number → ✓ / ✗), and a **self-grade** tally
(stored in your browser).

## Files

```
index.html          the page
styles.css          the colour scheme & layout
app.js              the logic (chapter chips are generated automatically)
questions.js        the question bank for Chapters 1–2
questions_ch03.js   Chapter 3   ← one file per chapter; copy one to add more
   …                   …
questions_ch14.js   Chapter 14
```

Each `questions_chNN.js` just pushes its questions onto `window.QUESTION_BANK` (`.homework`
for Easy/Medium, `.hard` for Hard). To add a chapter, copy an existing file, change the
`chapter` numbers and content, and add one `<script>` tag for it in `index.html`. The chapter
filter buttons build themselves from whatever chapters are present.

It is a **static site** — no server, no build step. Double-click `index.html` to run it
locally, or publish it on the web for free with GitHub Pages.

## Publish on GitHub Pages

1. Create a repository on GitHub (e.g. `accounting-final-practice`) and upload these files
   (they must sit at the **root** of the repo, with `index.html` at the top level).

   From this folder you can also do it by command line:

   ```powershell
   git init
   git add .
   git commit -m "Managerial accounting practice site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment**.
   Set **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.

3. Wait ~1 minute. Your site goes live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

   Open that link on your laptop or phone, and share it with classmates.

## Adding more chapters / questions

Open `questions.js`. There are two lists:

- `homework` — the in-class problems (used by **Easy** and **Medium**). Give each a `tip`.
- `hard` — your invented practice problems.

Copy any existing question object, change the fields, and set `chapter: 3` (etc.). The
chapter filter and navigation pick it up automatically — no other code changes needed.

Each `checks` entry is an optional auto-graded numeric field:
`{ label, answer, tol, fmt }` where `tol` is the allowed ± difference and `fmt` is
`"money"` or `"num"`.
