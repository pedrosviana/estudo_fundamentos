# Variables in Javascript

- Variables are used to store data. It is necessary to define a label, then the content of the variable

> The keywords to define variables are:
>> var: wide, but uncommon in modern JS
>> let: more used
>> const: values that wont be updated

- To declare
>> let firstName = 'meu nome'

- To update
>> firstName - 'meu outro nome'
---
#### Convetions to name varibles
- It uses patterns(conventions) depending on the programming language used. In javascript camelCase is the most used.

##### Common Notations (Casing Conventions)
- **camelCase:** The first letter is lowercase, and the first letter of each subsequent word is capitalized (e.g., totalPrice, userProfile). Widely used in JavaScript and Java.
- **PascalCase:** Every word begins with a capital letter (e.g., TotalPrice, UserProfile). Primarily used for classes and interfaces, but also for constructors.snake_case: Words are separated by underscores (e.g., total_price, user_profile). The standard for Python, SQL, and Ruby.
- **kebab-case** Words are separated by hyphens (e.g., total-price, user-profile). Commonly used in HTML/CSS and URL routing, but not allowed in most programming languages because the hyphen is a subtraction operator.
- **Hungarian Notation:** Prefixes a variable's name with an abbreviation of its data type (e.g., strName for a string or iCount for an integer). While less common in modern high-level languages, it is still used in specific API integrations.

##### Best Practices for Clear CodeUse nouns for names: 
- Variables hold data or objects, so they should generally be nouns (e.g., use user instead of get_user).
- **Make booleans descriptive:** Prefix boolean variables (true/false) with words like is, has, or can to clarify their purpose (e.g., isLoggedIn, hasPermission).
- **Be specific:** Avoid overly generic single-letter variables like a or x. Instead, use descriptive terms like itemCount or totalUsers.
- **Include units:** If a variable stores a measurement or time, include the unit in the name (e.g., timeoutSeconds, fileSizeMB).

---

#### Concatenation vs interpolation
- How to put two variables(string) together?

**Concatenation**
``let firstName = 'Jamie' | let lastName = 'Doe' | let fullName = firstName + ' ' + lastName ``

**Interpolation**
``let firstName = 'Jamie' | let lastName = 'Doe' | let fullName = `${firstName} ${lastName}` ``

---

#### Data types in JS
- Strings
- Numbers
- Booleans
- Undefined
- Arrays
- Objects: methods(actions) and properties(characteristcs or informations)