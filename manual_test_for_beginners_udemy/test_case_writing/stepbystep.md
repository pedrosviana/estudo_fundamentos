### Test case writing
>***NOTES***
>##### What I know about test cases:
>-- It's the way we describe how we test a certain task(It must contains title, pre conditions, steps, expected results, actual results and status;)
>-- It's widely used in old methologies of development, but are still useful in agile, but not very used.

---
##### Course content
- Test cases are a set of preconditions, inputs, actions(where applicable), expected results and postconditions, developed based on test conditions. [*based on ISO 29119-1*](https://www.iso.org/obp/ui/en/#iso:std:iso-iec-ieee:29119:-1:ed-2:v1:en) 

> ***EXAMPLE***
- ***TITLE:***  Verify login with a valid username & password
- ***PRECONDITION:*** User is already registered using valid credentials
- ***STEPS:*** 1-Enter a valid username, 2- Enter a valid password, 3- Click on sign in
- ***EXPECTED RESULT:*** User is logged in succesfully and redirected to (XYZ) page
- ***TEST SCENARIO(TEST SUITE)*** **I see as optional**: Login  
- ***TEST ENVIRONMENT:*** windows11 - Chrome - Wi-fi samsung |  Samsung note 20 - Android 13 4g network |  Iphone 15 pro, - IOS 16.1 - 5G Network (decided on test planning)
- ***ACTUAL RESULT:*** The result of the test execution
- ***STATUS:*** New | pass | fail | blocked | skipped

| Title | Login with a valid username & password |
| :--- | :--- |
| Precondition | User is already registered using valid credentials |
| Test steps | 1-Enter a valid username, 2- Enter a valid password, 3- Click on sign in | 
| Expected result | User is logged in succesfully and redirected to (XYZ) page | 
| Test suite | Login |
| Test environment | Samsung Galaxy note 10 android 10 - 4g network |
| Actual result | Same as expected |
| Status | Pass |