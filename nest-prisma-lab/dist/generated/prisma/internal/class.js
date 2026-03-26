"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.1",
    "engineVersion": "55ae170b1ced7fc6ed07a15f110549408c501bb3",
    "activeProvider": "mysql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n}\n\nmodel rooms {\n  id              Int       @id @default(autoincrement())\n  name            String    @db.VarChar(100)\n  description     String?   @db.Text\n  capacity        Int\n  price_per_night Decimal   @db.Decimal(10, 2)\n  image_url       String?   @db.VarChar(255)\n  is_active       Boolean?  @default(true)\n  created_at      DateTime? @default(now()) @db.DateTime(0)\n  updated_at      DateTime? @default(now()) @db.DateTime(0)\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel users {\n  username String? @db.VarChar(888)\n  password String? @db.VarChar(888)\n\n  @@ignore\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"rooms\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"capacity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price_per_night\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"image_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"is_active\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"rooms.findUnique\",\"rooms.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"rooms.findFirst\",\"rooms.findFirstOrThrow\",\"rooms.findMany\",\"data\",\"rooms.createOne\",\"rooms.createMany\",\"rooms.updateOne\",\"rooms.updateMany\",\"create\",\"update\",\"rooms.upsertOne\",\"rooms.deleteOne\",\"rooms.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"rooms.groupBy\",\"rooms.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"description\",\"capacity\",\"price_per_night\",\"image_url\",\"is_active\",\"created_at\",\"updated_at\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"search\",\"_relevance\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map