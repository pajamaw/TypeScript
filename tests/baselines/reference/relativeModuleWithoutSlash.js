//// [tests/cases/compiler/relativeModuleWithoutSlash.ts] ////

//// [a.ts]

export default { a: 0 };

//// [index.ts]
export default { aIndex: 0 };

//// [test.ts]
import a from ".";
import aIndex from "./";
a.a;
aIndex.a; //aIndex.aIndex; See GH#9690

//// [test.ts]
import a from "..";
import aIndex from "../";
a.a;
aIndex.a; //aIndex.aIndex;


//// [a.js]
"use strict";
exports.__esModule = true;
exports["default"] = { a: 0 };
//// [index.js]
"use strict";
exports.__esModule = true;
exports["default"] = { aIndex: 0 };
//// [test.js]
"use strict";
var _1 = require(".");
var _2 = require("./");
_1["default"].a;
_2["default"].a; //aIndex.aIndex; See GH#9690
//// [test.js]
"use strict";
var __1 = require("..");
var _1 = require("../");
__1["default"].a;
_1["default"].a; //aIndex.aIndex;
