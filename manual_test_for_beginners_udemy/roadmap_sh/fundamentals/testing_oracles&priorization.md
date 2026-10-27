## Testing Oracle
> _**A source to determine an expected result.**_
- It's used to help ensure that the actual outcome of a test matches with the expected one.
- **In my understanding, test oracle are the sources we use to define the expected result of a test case**
<br>

#### The oracle types
    - Specification: written requirement;
    - Regression: It uses a previous version of the software as benchmark;
    - Independent: It involves a totally different system that performsthe same calculation;
    - Heuristic: It relies on human judgement, intuition and common sense.

#### The core conflict about oracles
- The major problem dwells in the reality of testing simple and complex systems. If the system under test has a well defined spec it'll be easy to determine the test oracle. On the other hand in a complex system, like machine learning, the expected result may not be so clear.

#### Testing the unpredictable - _stacking oracles_
- The idea of not having an easy especific and objective expected result, it's common to stack oracles(partial) to build our oracle.

---

##  Examples


### 1. Specification Oracle

*The expected result comes from a written requirement.*

- **Discount rule:** The requirement says "members get 15% off." A $200 order must total $170.
- **Password policy:** The spec says "minimum 8 characters, at least one number." Test that `abc123` is rejected and `abcdefg1` is accepted.
- **Shipping:** The business rules say "free shipping for orders over $50." An order of $50.01 must show shipping = $0.
- **API contract:** The OpenAPI document says `POST /users` returns `201` and a body containing `id` and `email`.

```javascript
// Oracle: requirement REQ-12 "Members get 15% off"
expect(calculateDiscount(200, true)).toBe(170);
```

**Caution:** specs can be incomplete or outdated.

---

### 2. Regression Oracle

*A previous version of the software is the benchmark.*

- **Report generation:** Version 2.3 produced a monthly sales PDF/CSV. After a refactor, version 2.4 must produce the same figures for the same data.
- **Search results:** Save the results of 50 standard queries from the last release. After changing the ranking code, compare them and review every difference.
- **Snapshot test:** A UI component rendered a specific HTML output last release. A change that alters it fails the test until someone reviews and approves it.
- **Bug fix check:** A bug was fixed in 2.1. A test that reproduces it makes sure it never comes back.

```javascript
// Oracle: output saved from the previous release
const output = generateInvoice(order);
expect(output).toMatchSnapshot();
```

**Caution:** if the old version had a bug, the regression oracle will treat it as correct. It only detects *change*, not whether the change is wrong.

---

### 3. Independent Oracle

*A totally different system performs the same calculation.*

- **Tax calculation:** Compare your app's tax result with a government calculator or a trusted third-party tax service.
- **Spreadsheet check:** Compute loan installments in Excel (with the `PMT` function) and compare with your banking app's result.
- **Alternative implementation:** Test your fast custom sorting algorithm against the language's standard library sort.
- **Financial reconciliation:** The totals in your order system must match the totals reported by the payment provider.

```javascript
// Oracle: a different, trusted implementation
expect(fastSqrt(x)).toBeCloseTo(Math.sqrt(x));
```

**Caution:** the two systems must be truly independent. If both use the same library or logic, they can share the same bug.

---

### 4. Heuristic Oracle

*Relies on human judgment, intuition, and common sense.*

- **UI review:** A tester opens a page and notices the "Buy" button overlaps the price text. No spec says this is wrong, but it obviously is.
- **Plausibility check:** A fitness app shows "Calories burned: 90,000" after a 20-minute walk. That cannot be right.
- **Usability:** The error message says "Exception 0x80004005" instead of explaining what the user should do. It's technically "working," but a reasonable user would find it unacceptable.
- **Comparison with competitors:** Every similar app allows searching by name, but yours doesn't. That suggests something is missing or broken.
- **Consistency:** The date appears as `26/10/2026` on one screen and `10/26/2026` on another.

**Caution:** subjective, slow, and hard to automate.

---

### Quick Comparison

| Type | Where the expected result comes from | Strength | Weakness |
|---|---|---|---|
| **Specification** | Written requirement | Clear, traceable | Specs can be incomplete or outdated |
| **Regression** | Previous version | Cheap, easy to automate | Repeats old bugs, only detects *change* |
| **Independent** | Different system | Can catch errors the code can't see | Needs a trustworthy second system |
| **Heuristic** | Human judgment | Finds problems nobody specified | Subjective, slow, hard to automate |

---

### Combining Oracles in Practice

In real projects, these are usually combined. For example, a checkout feature might use:

- a **specification** oracle for the discount rules,
- a **regression** oracle for the invoice layout,
- an **independent** oracle to reconcile totals with the payment provider,
- **heuristic** exploratory testing to catch anything that just looks wrong.

---

## How to apply test oracles

### The basic question to guide this is: _"Where does my expected result come from?"_
- **_Is there a written requirement with a concrete answer?_** Use a specification oracle. Pick inputs at the boundaries the spec implies (for “over $50”, test $49.99, $50.00, and $50.01).
- **_Is the behavior supposed to stay the same as before?_** Use a regression oracle, typically after refactors or bug fixes. Don’t blindly approve snapshot diffs. Each difference is either an intended change or a bug, and you have to decide which.
- **_Can another trustworthy system compute the same thing?_** Use an independent oracle. First check that it really is independent. Shared libraries or copied logic mean shared bugs.
- **_Nothing written and nothing to compare, but something feels off?_** Use a heuristic oracle. This is your judgment: plausibility, consistency, “would a reasonable user accept this?”