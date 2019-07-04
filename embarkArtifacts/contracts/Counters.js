import EmbarkJS from '../embarkjs';
let CountersJSONConfig = {"contract_name":{"className":"Counters","args":[],"code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf0029","runtimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf0029","realRuntimeBytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","linkReferences":{},"swarmHash":"b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf","gasEstimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"current(struct Counters.Counter storage pointer)":"infinite","decrement(struct Counters.Counter storage pointer)":"infinite","increment(struct Counters.Counter storage pointer)":"infinite"}},"functionHashes":{},"abiDefinition":[],"filename":"C:\\Users\\g14m1190\\Documents\\GitHub\\shintsha\\.embark\\contracts\\Counters.sol","originalFilename":"contracts\\Counters.sol","path":"C:\\Users\\g14m1190\\Documents\\GitHub\\shintsha\\contracts\\Counters.sol","gas":"8000000","type":"file","deploy":true,"_gasLimit":6000000,"error":false,"deploymentAccount":"0xae3478f55aE21B9139652467D0B73177d6bEc204","realArgs":[],"address":"0xad968c211EAfca8eA72F57D25B59BfEb8D2558d3","deployedAddress":"0xad968c211EAfca8eA72F57D25B59BfEb8D2558d3"},"address":"0xad968c211EAfca8eA72F57D25B59BfEb8D2558d3","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf0029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf0029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","swarm_hash":"b94d1af59f1dda680d3a67b33f76df923bdc2d25cffd9ef299866281300feecf","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"current(struct Counters.Counter storage pointer)":"infinite","decrement(struct Counters.Counter storage pointer)":"infinite","increment(struct Counters.Counter storage pointer)":"infinite"}},"function_hashes":{},"abi":[]};
let Counters = new EmbarkJS.Blockchain.Contract(CountersJSONConfig);
export default Counters;
