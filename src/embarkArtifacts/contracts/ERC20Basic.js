import EmbarkJS from '../embarkjs';
let ERC20BasicJSONConfig = {"contract_name":{"className":"ERC20Basic","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb"},"abiDefinition":[{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/lib/zeppelin/token/ERC20Basic.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/lib/zeppelin/token/ERC20Basic.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/lib/zeppelin/token/ERC20Basic.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb"},"abi":[{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]};
let ERC20Basic = new EmbarkJS.Blockchain.Contract(ERC20BasicJSONConfig);
export default ERC20Basic;
