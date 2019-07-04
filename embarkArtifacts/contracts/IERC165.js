import EmbarkJS from '../embarkjs';
let IERC165JSONConfig = {"contract_name":{"className":"IERC165","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"supportsInterface(bytes4)":"01ffc9a7"},"abiDefinition":[{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],"filename":"C:\\Users\\g14m1190\\Documents\\GitHub\\shintsha\\.embark\\contracts\\IERC165.sol","originalFilename":"contracts\\IERC165.sol","path":"C:\\Users\\g14m1190\\Documents\\GitHub\\shintsha\\contracts\\IERC165.sol","gas":"8000000","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"supportsInterface(bytes4)":"01ffc9a7"},"abi":[{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]};
let IERC165 = new EmbarkJS.Blockchain.Contract(IERC165JSONConfig);
export default IERC165;
