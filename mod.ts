import initSqlJs from "./wasm/worker.sql-wasm.js";

export const WASM_URL = new URL("./wasm/sql-wasm.wasm", import.meta.url);

export const init = initSqlJs;

export default async ({ wasmURL = WASM_URL } = {}) =>
  await fetch(wasmURL)
    .then((r) => r.arrayBuffer())
    .then((wasmBinary) => initSqlJs({ wasmBinary }));
