This repo demonstrates that `eval` does not work on Window in Bun 1.1.43, but does work on Node 23.2.0.

Using node:
```
rm -rf node_modules
pnpm i
node happy-test.js
# "hello world"
```

Using bun:
```
rm -rf node_modules
bun i
bun happy-test.js

274 |             if (browserSettings.disableErrorCapturing ||
275 |                 browserSettings.errorCapture !== BrowserErrorCaptureEnum.tryAndCatch) {
276 |                 this[PropertySymbol.window].eval(code);
277 |             }
278 |             else {
279 |                 WindowErrorUtility.captureError(this[PropertySymbol.window], () => this[PropertySymbol.window].eval(code));
                                                                                                                     ^
TypeError: this[PropertySymbol.window].eval is not a function. (In 'this[PropertySymbol.window].eval(code)', 'this[PropertySymbol.window].eval' is undefined)
      at <anonymous> (/home/duane/Projects/elsync/node_modules/.pnpm/happy-dom@16.5.3/node_modules/happy-dom/lib/nodes/html-script-element/HTMLScriptElement.js:279:112)
      at captureError (/home/duane/Projects/elsync/node_modules/.pnpm/happy-dom@16.5.3/node_modules/happy-dom/lib/window/WindowErrorUtility.js:21:22)
      at <anonymous> (/home/duane/Projects/elsync/node_modules/.pnpm/happy-dom@16.5.3/node_modules/happy-dom/lib/nodes/html-script-element/HTMLScriptElement.js:279:36)
```
