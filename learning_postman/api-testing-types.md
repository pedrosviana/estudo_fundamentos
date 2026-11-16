# Types of API Testing

There are several types of API tests, each answering a different question.

## Functional testing

Checks that each endpoint does what the spec says: correct status codes, response bodies, and data changes. This is the most common type and includes both positive cases (valid input) and negative cases (invalid input).

## Validation testing

Confirms the API meets business requirements and returns the right data, not just a technically valid response. For example, does an order total actually equal the sum of its items?

## Contract testing

Verifies the response structure (field names, types, required fields) matches the agreed contract, usually an OpenAPI/Swagger spec or JSON schema. It catches breaking changes between provider and consumer, and tools like Pact are built for this.

## Integration testing

Checks that the API works correctly with other components: databases, third-party services, message queues, and other microservices. A typical check is that a POST actually creates a record you can then GET.

## End-to-end (workflow) testing

Chains several calls to simulate a real user flow, such as register, log in, create an order, pay, and check order status.

## Security testing

Looks for vulnerabilities:

- Authentication and authorization (401/403 handling, role-based access)
- Broken object-level authorization (can user A read user B's data?)
- Injection (SQL, NoSQL, command)
- Sensitive data exposure, missing HTTPS, weak token handling
- Rate limiting and input sanitization

The OWASP API Security Top 10 is a good checklist.

## Performance testing

Measures speed and stability:

- **Load testing:** behavior under expected traffic
- **Stress testing:** behavior beyond limits, to find the breaking point
- **Spike testing:** sudden surges in traffic
- **Soak (endurance) testing:** long runs to find memory leaks or degradation

Tools include JMeter, k6, and Gatling (Postman only gives basic response-time checks).

## Reliability and error-handling testing

Checks how the API behaves when things go wrong: timeouts, malformed payloads, unavailable dependencies, retries, and whether error messages are consistent and don't leak internals.

## Regression testing

Re-runs existing tests after every change to make sure nothing that worked before has broken. This is where automation with Newman and CI/CD pays off.

## Compatibility and versioning testing

Ensures different API versions (v1, v2) keep working, and that clients on different platforms or with different headers get the expected behavior.

## Where Postman fits

| Test type | Postman suitability |
|---|---|
| Functional, validation | Excellent |
| Contract/schema | Good (with schema validation) |
| Integration, end-to-end | Good (request chaining) |
| Regression | Excellent (Newman + CI) |
| Basic security checks | Fair |
| Load/performance | Limited (use k6 or JMeter) |

If you're just starting, focus on functional, negative, and regression tests first, then add contract and security checks as the API matures.
