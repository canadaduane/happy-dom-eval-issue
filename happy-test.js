import { Window } from "happy-dom";

const window = new Window({
  url: "http://localhost:3000",
  width: 1920,
  height: 1080,
  console,
  settings: {
    // Just return `console.log('hello')` on any fetch
    fetch: {
      interceptor: {
        beforeAsyncRequest: async () => {
          return new window.Response("console.log('hello world')");
        },
      },
    },
  },
});

window.document.write(String.raw`
  <!doctype html>
  <html lang="en">
    <body><script type="module" src="/client.js"></script></body>
  </html>
`);

await window.happyDOM.waitUntilComplete();

// should print 'hello world'
