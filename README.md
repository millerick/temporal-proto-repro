# To reproduce

Run
```
npm ci
cd packages/temporal-lib
node repro.js
```

Observe
```
common  -> /home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/index.js
proto   -> /home/michael_millerick_evenup_ai/src/temporal-proto-repro/node_modules/@temporalio/proto/node_modules/protobufjs/index.js
/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/ext/protojson.js:876
        throw TypeError("type must be a Type");
        ^

TypeError: type must be a Type
    at fromJson (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/ext/protojson.js:876:15)
    at historyFromJSON (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/@temporalio/common/lib/proto-utils.js:96:45)
    at Object.<anonymous> (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/repro.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1781:14)
    at Object..js (node:internal/modules/cjs/loader:1913:10)
    at Module.load (node:internal/modules/cjs/loader:1505:32)
    at Function._load (node:internal/modules/cjs/loader:1309:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.23.4
```

Also observer that the same failure happens with a completely clean install
```
rm -rf node_modules/ package-lock.json
npm i
cd packages/temporal-lib/
node repro.js
```
Also shows
```
common  -> /home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/index.js
proto   -> /home/michael_millerick_evenup_ai/src/temporal-proto-repro/node_modules/@temporalio/proto/node_modules/protobufjs/index.js
/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/ext/protojson.js:876
        throw TypeError("type must be a Type");
        ^

TypeError: type must be a Type
    at fromJson (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/protobufjs/ext/protojson.js:876:15)
    at historyFromJSON (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/node_modules/@temporalio/common/lib/proto-utils.js:96:45)
    at Object.<anonymous> (/home/michael_millerick_evenup_ai/src/temporal-proto-repro/packages/temporal-lib/repro.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1781:14)
    at Object..js (node:internal/modules/cjs/loader:1913:10)
    at Module.load (node:internal/modules/cjs/loader:1505:32)
    at Function._load (node:internal/modules/cjs/loader:1309:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:254:19)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.23.4
```
