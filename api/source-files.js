var sourcesIndex = JSON.parse('{\
"clif_json":["",[],["clif-json.rs"]],\
"clif_util":["",[],["bugpoint.rs","cat.rs","clif-util.rs","compile.rs","disasm.rs","interpret.rs","print_cfg.rs","run.rs","souper_harvest.rs","utils.rs","wasm.rs"]],\
"component_fuzz_util":["",[],["lib.rs"]],\
"component_macro_test":["",[],["lib.rs"]],\
"component_macro_test_helpers":["",[],["lib.rs"]],\
"component_test_util":["",[],["lib.rs"]],\
"cranelift":["",[],["lib.rs"]],\
"cranelift_bforest":["",[],["lib.rs","map.rs","node.rs","path.rs","pool.rs","set.rs"]],\
"cranelift_codegen":["",[["binemit",[],["mod.rs","stack_map.rs"]],["egraph",[],["cost.rs","domtree.rs","elaborate.rs"]],["ir",[],["atomic_rmw_op.rs","builder.rs","condcodes.rs","constant.rs","dfg.rs","dynamic_type.rs","entities.rs","extfunc.rs","extname.rs","function.rs","globalvalue.rs","immediates.rs","instructions.rs","jumptable.rs","known_symbol.rs","layout.rs","libcall.rs","memflags.rs","mod.rs","progpoint.rs","sourceloc.rs","stackslot.rs","table.rs","trapcode.rs","types.rs"]],["isa",[["aarch64",[["inst",[["unwind",[],["systemv.rs"]]],["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]],["lower",[["isle",[],["generated_code.rs"]]],["isle.rs"]]],["abi.rs","lower.rs","mod.rs","settings.rs"]],["riscv64",[["inst",[["unwind",[],["systemv.rs"]]],["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]],["lower",[["isle",[],["generated_code.rs"]]],["isle.rs"]]],["abi.rs","lower.rs","mod.rs","settings.rs"]],["s390x",[["inst",[["unwind",[],["systemv.rs"]]],["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]],["lower",[["isle",[],["generated_code.rs"]]],["isle.rs"]]],["abi.rs","lower.rs","mod.rs","settings.rs"]],["unwind",[],["systemv.rs","winx64.rs"]],["x64",[["encoding",[],["evex.rs","mod.rs","rex.rs","vex.rs"]],["inst",[["unwind",[],["systemv.rs","winx64.rs"]]],["args.rs","emit.rs","mod.rs","regs.rs","unwind.rs"]],["lower",[["isle",[],["generated_code.rs"]]],["isle.rs"]]],["abi.rs","lower.rs","mod.rs","settings.rs"]]],["call_conv.rs","mod.rs","unwind.rs"]],["legalizer",[],["globalvalue.rs","mod.rs","table.rs"]],["machinst",[],["abi.rs","blockorder.rs","buffer.rs","compile.rs","helpers.rs","inst_common.rs","isle.rs","lower.rs","mod.rs","reg.rs","valueregs.rs","vcode.rs"]],["opts",[],["generated_code.rs"]],["verifier",[],["mod.rs"]]],["alias_analysis.rs","bitset.rs","cfg_printer.rs","constant_hash.rs","context.rs","ctxhash.rs","cursor.rs","data_value.rs","dbg.rs","dce.rs","divconst_magic_numbers.rs","dominator_tree.rs","egraph.rs","flowgraph.rs","fx.rs","incremental_cache.rs","inst_predicates.rs","isle_prelude.rs","iterators.rs","lib.rs","licm.rs","loop_analysis.rs","nan_canonicalization.rs","opts.rs","print_errors.rs","remove_constant_phis.rs","result.rs","scoped_hash_map.rs","settings.rs","simple_gvn.rs","simple_preopt.rs","souper_harvest.rs","timing.rs","unionfind.rs","unreachable_code.rs","value_label.rs","write.rs"]],\
"cranelift_codegen_meta":["",[["cdsl",[],["formats.rs","instructions.rs","isa.rs","mod.rs","operands.rs","settings.rs","types.rs","typevar.rs"]],["isa",[],["arm64.rs","mod.rs","riscv64.rs","s390x.rs","x86.rs"]],["shared",[],["entities.rs","formats.rs","immediates.rs","instructions.rs","mod.rs","settings.rs","types.rs"]]],["constant_hash.rs","error.rs","gen_inst.rs","gen_settings.rs","gen_types.rs","lib.rs","srcgen.rs","unique_table.rs"]],\
"cranelift_codegen_shared":["",[],["constant_hash.rs","constants.rs","lib.rs"]],\
"cranelift_entity":["",[],["boxed_slice.rs","iter.rs","keys.rs","lib.rs","list.rs","map.rs","packed_option.rs","primary.rs","set.rs","sparse.rs"]],\
"cranelift_filetests":["",[["test_wasm",[],["config.rs","env.rs"]]],["concurrent.rs","function_runner.rs","lib.rs","match_directive.rs","runner.rs","runone.rs","subtest.rs","test_alias_analysis.rs","test_cat.rs","test_compile.rs","test_dce.rs","test_domtree.rs","test_interpret.rs","test_legalizer.rs","test_licm.rs","test_optimize.rs","test_preopt.rs","test_print_cfg.rs","test_run.rs","test_safepoint.rs","test_simple_gvn.rs","test_simple_preopt.rs","test_unwind.rs","test_verifier.rs","test_wasm.rs"]],\
"cranelift_frontend":["",[],["frontend.rs","lib.rs","ssa.rs","switch.rs","variable.rs"]],\
"cranelift_fuzzgen":["",[["passes",[],["fcvt.rs","int_divz.rs","mod.rs"]]],["config.rs","function_generator.rs","lib.rs"]],\
"cranelift_interpreter":["",[],["address.rs","environment.rs","frame.rs","instruction.rs","interpreter.rs","lib.rs","state.rs","step.rs","value.rs"]],\
"cranelift_isle":["",[],["ast.rs","codegen.rs","compile.rs","error.rs","ir.rs","lexer.rs","lib.rs","log.rs","overlap.rs","parser.rs","sema.rs","trie.rs","trie_again.rs"]],\
"cranelift_jit":["",[],["backend.rs","compiled_blob.rs","lib.rs","memory.rs"]],\
"cranelift_module":["",[],["data_context.rs","lib.rs","module.rs","traps.rs"]],\
"cranelift_native":["",[],["lib.rs"]],\
"cranelift_object":["",[],["backend.rs","lib.rs"]],\
"cranelift_preopt":["",[],["constant_folding.rs","lib.rs"]],\
"cranelift_reader":["",[],["error.rs","isaspec.rs","lexer.rs","lib.rs","parser.rs","run_command.rs","sourcemap.rs","testcommand.rs","testfile.rs"]],\
"cranelift_wasm":["",[["code_translator",[],["bounds_checks.rs"]],["environ",[],["dummy.rs","mod.rs","spec.rs"]]],["code_translator.rs","func_translator.rs","heap.rs","lib.rs","module_translator.rs","sections_translator.rs","state.rs","translation_utils.rs"]],\
"fib":["",[],["fib.rs"]],\
"islec":["",[],["main.rs"]],\
"tokio_wasi":["",[],["tokio-wasi.rs"]],\
"wasi":["",[],["wasi.rs"]],\
"wasi_cap_std_sync":["",[["sched",[],["unix.rs"]]],["clocks.rs","dir.rs","file.rs","lib.rs","net.rs","sched.rs","stdio.rs"]],\
"wasi_common":["",[["sched",[],["subscription.rs"]],["snapshots",[["preview_1",[],["error.rs"]]],["mod.rs","preview_0.rs","preview_1.rs"]]],["clocks.rs","ctx.rs","dir.rs","error.rs","file.rs","lib.rs","pipe.rs","random.rs","sched.rs","string_array.rs","table.rs"]],\
"wasi_crypto":["",[["asymmetric_common",[],["keypair.rs","managed_keypair.rs","mod.rs","publickey.rs","secretkey.rs"]],["key_exchange",[["dh",[],["mod.rs","x25519.rs"]],["kem",[],["kyber.rs","mod.rs"]]],["keypair.rs","mod.rs","publickey.rs","secretkey.rs"]],["signatures",[],["ecdsa.rs","eddsa.rs","keypair.rs","mod.rs","publickey.rs","rsa.rs","secretkey.rs","signature.rs"]],["symmetric",[],["aes_gcm.rs","chacha_poly.rs","hkdf.rs","hmac_sha2.rs","key.rs","managed_key.rs","mod.rs","sha2.rs","state.rs","tag.rs","xoodyak.rs"]]],["array_output.rs","error.rs","handles.rs","lib.rs","options.rs","rand.rs","secrets_manager.rs","version.rs"]],\
"wasi_tokio":["",[["sched",[],["unix.rs"]]],["dir.rs","file.rs","lib.rs","net.rs","sched.rs","stdio.rs"]],\
"wasm_spec_interpreter":["",[],["lib.rs","without_library.rs"]],\
"wasmtime":["",[["component",[["func",[],["host.rs","options.rs","typed.rs"]]],["component.rs","func.rs","instance.rs","linker.rs","matching.rs","mod.rs","storage.rs","store.rs","types.rs","values.rs"]],["engine",[],["serialization.rs"]],["func",[],["typed.rs"]],["module",[],["registry.rs"]],["store",[],["context.rs","data.rs"]],["trampoline",[],["func.rs","global.rs","memory.rs","table.rs"]],["types",[],["matching.rs"]]],["code.rs","config.rs","engine.rs","externals.rs","func.rs","instance.rs","lib.rs","limits.rs","linker.rs","memory.rs","module.rs","ref.rs","signatures.rs","store.rs","trampoline.rs","trap.rs","types.rs","unix.rs","values.rs"]],\
"wasmtime_asm_macros":["",[],["lib.rs"]],\
"wasmtime_bench_api":["",[],["lib.rs","unsafe_send_sync.rs"]],\
"wasmtime_c_api_macros":["",[],["lib.rs"]],\
"wasmtime_cache":["",[],["config.rs","lib.rs","worker.rs"]],\
"wasmtime_cli_flags":["",[],["lib.rs"]],\
"wasmtime_component_macro":["",[],["bindgen.rs","component.rs","lib.rs"]],\
"wasmtime_component_util":["",[],["lib.rs"]],\
"wasmtime_cranelift":["",[["compiler",[],["component.rs"]],["debug",[["transform",[],["address_transform.rs","attr.rs","expression.rs","line_program.rs","mod.rs","range_info_builder.rs","refs.rs","simulate.rs","unit.rs","utils.rs"]]],["gc.rs","write_debuginfo.rs"]]],["builder.rs","compiler.rs","debug.rs","func_environ.rs","lib.rs","obj.rs"]],\
"wasmtime_environ":["",[["component",[["translate",[],["adapt.rs","inline.rs"]]],["compiler.rs","dfg.rs","info.rs","translate.rs","types.rs","vmcomponent_offsets.rs"]],["fact",[],["core_types.rs","signature.rs","trampoline.rs","transcode.rs","traps.rs"]]],["address_map.rs","builtin.rs","compilation.rs","component.rs","fact.rs","lib.rs","module.rs","module_environ.rs","module_types.rs","obj.rs","ref_bits.rs","scopevec.rs","stack_map.rs","trap_encoding.rs","tunables.rs","vmoffsets.rs"]],\
"wasmtime_fiber":["",[["unix",[],["x86_64.rs"]]],["lib.rs","unix.rs"]],\
"wasmtime_fuzzing":["",[["generators",[],["api.rs","codegen_settings.rs","component_types.rs","config.rs","instance_allocation_strategy.rs","memory.rs","module.rs","pooling_config.rs","single_inst_module.rs","spec_test.rs","stacks.rs","table_ops.rs","value.rs"]],["oracles",[],["diff_spec.rs","diff_v8.rs","diff_wasmi.rs","diff_wasmtime.rs","dummy.rs","engine.rs","stacks.rs"]]],["generators.rs","lib.rs","mutators.rs","oracles.rs"]],\
"wasmtime_jit":["",[["profiling",[],["jitdump_linux.rs","vtune.rs"]],["unwind",[],["systemv.rs"]]],["code_memory.rs","debug.rs","demangling.rs","instantiate.rs","lib.rs","profiling.rs","unwind.rs"]],\
"wasmtime_jit_debug":["",[],["gdb_jit_int.rs","lib.rs","perf_jitdump.rs"]],\
"wasmtime_jit_icache_coherence":["",[],["lib.rs","libc.rs"]],\
"wasmtime_runtime":["",[["component",[],["transcode.rs"]],["instance",[["allocator",[["pooling",[],["index_allocator.rs","unix.rs"]]],["pooling.rs"]]],["allocator.rs"]],["trampolines",[],["x86_64.rs"]],["traphandlers",[["backtrace",[],["x86_64.rs"]]],["backtrace.rs","unix.rs"]],["vmcontext",[],["vm_host_func_context.rs"]]],["component.rs","cow.rs","debug_builtins.rs","export.rs","externref.rs","imports.rs","instance.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","mmap_vec.rs","module_id.rs","parking_spot.rs","table.rs","trampolines.rs","traphandlers.rs","vmcontext.rs"]],\
"wasmtime_types":["",[],["error.rs","lib.rs"]],\
"wasmtime_wasi":["",[],["lib.rs"]],\
"wasmtime_wasi_crypto":["",[["wiggle_interfaces",[],["asymmetric_common.rs","common.rs","error.rs","key_exchange.rs","mod.rs","signatures.rs","symmetric.rs"]]],["lib.rs"]],\
"wasmtime_wasi_nn":["",[],["api.rs","ctx.rs","impl.rs","lib.rs","openvino.rs","witx.rs"]],\
"wasmtime_wast":["",[],["core.rs","lib.rs","spectest.rs","wast.rs"]],\
"wasmtime_winch":["",[],["builder.rs","compiler.rs","lib.rs"]],\
"wasmtime_wit_bindgen":["",[],["lib.rs","rust.rs","source.rs","types.rs"]],\
"wiggle":["",[],["borrow.rs","error.rs","guest_type.rs","lib.rs","region.rs","wasmtime.rs"]],\
"wiggle_generate":["",[["types",[],["error.rs","flags.rs","handle.rs","mod.rs","record.rs","variant.rs"]]],["codegen_settings.rs","config.rs","funcs.rs","lib.rs","lifetimes.rs","module_trait.rs","names.rs","wasmtime.rs"]],\
"wiggle_macro":["",[],["lib.rs"]],\
"wiggle_test":["",[],["lib.rs"]],\
"winch_codegen":["",[["abi",[],["addressing_mode.rs","local.rs","mod.rs"]],["frame",[],["mod.rs"]],["isa",[["aarch64",[],["abi.rs","masm.rs","mod.rs","regs.rs"]],["x64",[],["abi.rs","masm.rs","mod.rs","regs.rs"]]],["mod.rs","reg.rs"]]],["codegen.rs","lib.rs","masm.rs","regalloc.rs","regset.rs","stack.rs","visitor.rs"]],\
"winch_tools":["",[],["main.rs"]],\
"witx":["",[["docs",[],["ast.rs","md.rs","mod.rs"]]],["abi.rs","ast.rs","io.rs","layout.rs","lib.rs","parser.rs","phases.rs","polyfill.rs","render.rs","representation.rs","toplevel.rs","validate.rs"]]\
}');
createSourceSidebar();
