### Postman testing structure
- always begin with `pm.test`
- after tha name of the test, which is a string and the function opening; `pm.test('The response status code is 200', function(){})`
- then, the test assertion, which is defined for postman `pm.test('The response status code is 200', function(){pm.responde.to.have.status(200)})`

### Learning how to assess any value of the response to test
- If we want to check a value inside of the response, it's necessary to use expect. In this example we have a json attribute 'status' and it's value must be 'UP': `pm.test('The response status is UP', function(){pm.expect(pm.response.json().status.eql('UP'))})`