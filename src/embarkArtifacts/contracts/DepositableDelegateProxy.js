import EmbarkJS from '../embarkjs';
let DepositableDelegateProxyJSONConfig = {"contract_name":{"className":"DepositableDelegateProxy","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"FORWARDING()":"2b2584f6","FWD_GAS_LIMIT()":"0ceafa2a","UPGRADEABLE()":"7e84a4ff","implementation()":"5c60da1b","proxyType()":"4555d5c9"},"abiDefinition":[{"constant":true,"inputs":[],"name":"FWD_GAS_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FORWARDING","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proxyType","outputs":[{"name":"proxyTypeId","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"codeAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UPGRADEABLE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ProxyDeposit","type":"event"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/common/DepositableDelegateProxy.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/common/DepositableDelegateProxy.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/common/DepositableDelegateProxy.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"FORWARDING()":"2b2584f6","FWD_GAS_LIMIT()":"0ceafa2a","UPGRADEABLE()":"7e84a4ff","implementation()":"5c60da1b","proxyType()":"4555d5c9"},"abi":[{"constant":true,"inputs":[],"name":"FWD_GAS_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FORWARDING","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proxyType","outputs":[{"name":"proxyTypeId","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"codeAddr","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UPGRADEABLE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ProxyDeposit","type":"event"}]};
let DepositableDelegateProxy = new EmbarkJS.Blockchain.Contract(DepositableDelegateProxyJSONConfig);
export default DepositableDelegateProxy;