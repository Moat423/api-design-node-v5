when getting a new project or new branch or after pulling
ALWAYS  do
npm install

    "dev": "node --watch src/index.ts",
does reloads every time you change the files
its in scrips, which is like a makefile, you just call dev, or whatever its called.
=> npm run dev


## Error responses

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

Informational responses (100 – 199) 
Successful responses (200 – 299) it worked
Redirection messages (300 – 399) it worked but
Client error responses (400 – 499) you messed up
Server error responses (500 – 599) server messed up (client might try resending, if it is an idempotent request)


## Responses

if no route is set up: just fails
```
Cannot GET /cake
```
if route is set up, but no response specified: endless loading->timeout
