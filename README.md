
# Wasmtime for MemS-Wasm
## Get source code and Build
```
git clone -b wasmtime-memswasm https://github.com/huangh-git/wasmtime.git
cd wasmtime
git submodule update --init
cargo build
```
## Usage
There are two new options available when running MemS-Wasm files
```
/path/to/wasmtime/target/debug/wasmtime test.mems-wasm --store-check-only
/path/to/wasmtime/target/debug/wasmtime test.mems-wasm --upper-check-only

```