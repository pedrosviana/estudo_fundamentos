- The type of request used to send information. On the grocery store API it will be used to place an order for example.
- Why do we use JSON? It's a language used to transfer data in a standard format:

>[!note]
> Each type of value has its own way to be used in JSON.

>- "key": "value"
>- {
     "firstName": "John", **string**
     "age": 22, **number**
     "isMarried": true, **boolean**
     "hobbies": ["netflix", "mountain biking"] **array**
    }

---

### Using random data
- When sending requests it's possible to use random data from postman
- The syntax is used in the body by: {{$random...}}. When you type this postman will give the suggestions available to use