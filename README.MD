1. run `yarn && yarn dev`
2. run server `yarn start`
3. cancel `yarn dev`
4. re-run `yarn dev` running from cache
5. see error in console

```
index.cjs.js:1494 Uncaught Error: Invalid loadShareSync function call from runtime #RUNTIME-006
args: {"hostName":"app","sharedPkgName":"react"}
https://module-federation.io/guide/troubleshooting/runtime/RUNTIME-006
    at n (runtime.js:1:125)
    at n (runtime.js:1:125)
    at n (runtime.js:1:125)
    at 914 (main.js:1:112)

```
