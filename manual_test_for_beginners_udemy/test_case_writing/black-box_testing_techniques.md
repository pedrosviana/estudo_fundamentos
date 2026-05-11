***Testinng techniques are used to help us design the test cases(the path we will follow to validate that feature)***

---

> ## Black box: 
***The ideia of testing from a external perspective. We provide input and wait for the output while having no access to the internal structure of the software.***
- Black box are most apllied in system testing and acceptance testing;
- Main techniques:
-- Equivalence Partitioning
-- Boundary Value Analysis
-- Decision Table Testing
-- State Transition Testing
-- Pairwase Testing 

---

> ## Equivalence Partitioning
>>- It's most used with numbers, but It can also be used with "status", It must always have inputs and outputs
>>- The ideia behind this technique is to identify which inputs will have the same result(this is a partition)
>>- Example: 
>>> - Core Concept
>>> In Equivalence Partitioning, you group inputs that are expected to be processed by the software in the same way. 
>>> If one condition in a partition works, it is assumed all conditions in that partition work.
>>> If one condition in a partition fails, it is assumed all conditions in that partition fail.
>>> ### Valid vs. Invalid Partitions
>>> **Valid Partitions:** Values that the software should accept (Expected behavior).
 **Invalid Partitions:** Values that the software should reject or handle with error messages (Unexpected/Negative behavior).
>>> ### 2. Step-by-Step Example
>>> **Scenario:** A "Quantity" field in an e-commerce application that accepts integers from **1 to 100**.
>>> #### Step 1: Identify the Partitions
>>> **Based on the requirement, we can identify three distinct ranges:**

| Partition Type | Range | Expected Result |
| :--- | :--- | :--- |
| **Invalid (Too Low)** | Below 1 (e.g., 0, -5) | Error Message |
| **Valid** | 1 to 100 | Accepted / Added to Cart |
| **Invalid (Too High)** | Above 100 (e.g., 101, 500) | Error Message |

>>> #### Step 2: Select Test Data
>>> You only need to pick **one** value from each partition to represent the entire group.
>>> 1. **Test Case 1 (Invalid):** Input `0`. 
>>> 2. **Test Case 2 (Valid):** Input `45`.
>>> 3. **Test Case 3 (Invalid):** Input `105`.

---

### Boundary-Value Analysis
>- It's used combined with equivalence partitioning
>- It's a more complex technique and you must evaluate if it's worth to use in your tests
>- The ideia is to test the immediate value before and after the edges of the partition. Most of the time these values result in a failute when executed.

***NOTES:***
- A value only belongs to one partition at a time;
- Both of techniques listed above can be applied in input or output values
- We always must consider valid and invalid partitions
- Calculating coverage(equivalence partitioning): number of partitions covered by test cases divided by the total number of partitions
- Calculating coverage(boudary-value analysis coverage):Number of boundaries covered by test cases divided by total number of boundaries.
- Testing two values from the same partition doesn't increase coverage