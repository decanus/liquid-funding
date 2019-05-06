import EmbarkJS from '../embarkjs';
let AragonAppJSONConfig = {"contract_name":{"className":"AragonApp","args":[],"code":"6060604052341561000f57600080fd5b6107f58061001e6000396000f3006060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd50029","runtimeBytecode":"6060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd50029","realRuntimeBytecode":"6060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820","linkReferences":{},"swarmHash":"bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd5","gasEstimates":{"creation":{"codeDepositCost":"407400","executionCost":"438","totalCost":"407838"},"external":{"APP_ADDR_NAMESPACE()":"236","ETH()":"424","EVMSCRIPT_REGISTRY_APP()":"390","EVMSCRIPT_REGISTRY_APP_ID()":"280","allowRecoverability(address)":"391","appId()":"524","canPerform(address,bytes32,uint256[])":"infinite","getExecutor(bytes)":"infinite","getInitializationBlock()":"568","getRecoveryVault()":"infinite","kernel()":"809","transferToVault(address)":"infinite"}},"functionHashes":{"APP_ADDR_NAMESPACE()":"178e6079","ETH()":"8322fff2","EVMSCRIPT_REGISTRY_APP()":"9b3fdf4c","EVMSCRIPT_REGISTRY_APP_ID()":"60b1e057","allowRecoverability(address)":"7e7db6e1","appId()":"80afdea8","canPerform(address,bytes32,uint256[])":"a1658fad","getExecutor(bytes)":"f92a79ff","getInitializationBlock()":"8b3dd749","getRecoveryVault()":"32f0a3b5","kernel()":"d4aae0c4","transferToVault(address)":"9d4941d8"},"abiDefinition":[{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EVMSCRIPT_REGISTRY_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EVMSCRIPT_REGISTRY_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/apps/AragonApp.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/liquid-funding/.embark/node_modules/@aragon/os/contracts/apps/AragonApp.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/apps/AragonApp.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b6107f58061001e6000396000f3006060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd50029","runtime_bytecode":"6060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd50029","real_runtime_bytecode":"6060604052600436106100a05763ffffffff60e060020a600035041663178e607981146100a557806332f0a3b5146100ca57806360b1e057146100f95780637e7db6e11461010c57806380afdea81461013f5780638322fff2146101525780638b3dd749146101655780639b3fdf4c146101785780639d4941d81461018b578063a1658fad146101ac578063d4aae0c41461020f578063f92a79ff14610222575b600080fd5b34156100b057600080fd5b6100b8610273565b60405190815260200160405180910390f35b34156100d557600080fd5b6100dd610297565b604051600160a060020a03909116815260200160405180910390f35b341561010457600080fd5b6100b8610317565b341561011757600080fd5b61012b600160a060020a036004351661033b565b604051901515815260200160405180910390f35b341561014a57600080fd5b6100b8610341565b341561015d57600080fd5b6100dd610347565b341561017057600080fd5b6100b861034c565b341561018357600080fd5b6100b8610352565b341561019657600080fd5b6101aa600160a060020a0360043516610376565b005b34156101b757600080fd5b61012b60048035600160a060020a03169060248035919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437509496506104ee95505050505050565b341561021a57600080fd5b6100dd61062c565b341561022d57600080fd5b6100dd60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061063b95505050505050565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b60008054600160a060020a031615156102af57600080fd5b60008054600160a060020a0316906332f0a3b590604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156102f857600080fd5b6102c65a03f1151561030957600080fd5b505050604051805191505090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6181565b50600190565b60015481565b600081565b60035490565b7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d38287181565b6000806103828361033b565b151561038d57600080fd5b610395610297565b91506103a082610717565b15156103ab57600080fd5b600160a060020a03831615156103fd5781600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f1935050505015156103f857600080fd5b6104e9565b82600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561045457600080fd5b6102c65a03f1151561046557600080fd5b5050506040518051915050600160a060020a03831663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cd57600080fd5b6102c65a03f115156104de57600080fd5b505050604051805150505b505050565b60006104f86107b7565b6000808451111561051157835160200290508391508082525b600054600160a060020a03161580610622575060008054600160a060020a03169063fdef91069088903090899087906040516020015260405160e060020a63ffffffff8716028152600160a060020a0380861660048301908152908516602483015260448201849052608060648301908152909160840183818151815260200191508051906020019080838360005b838110156105b85780820151838201526020016105a0565b50505050905090810190601f1680156105e55780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b151561060657600080fd5b6102c65a03f1151561061757600080fd5b505050604051805190505b9695505050505050565b600054600160a060020a031681565b6000610645610744565b600160a060020a03166304bf2a7f836000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106ac578082015183820152602001610694565b50505050905090810190601f1680156106d95780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106f757600080fd5b6102c65a03f1151561070857600080fd5b50505060405180519392505050565b600080600160a060020a0383161515610733576000915061073e565b823b90506000811191505b50919050565b600080548190600160a060020a03166342c71f1d7f34f01c17e9be6ddbf2c61f37b5b1fb9f1a090a975006581ad19bda1c4d382871836040516020015260405160e060020a63ffffffff84160281526004810191909152602401602060405180830381600087803b15156106f757600080fd5b602060405190810160405260008152905600a165627a7a72305820","swarm_hash":"bb51213eb71127b304afe31e331bd9680e63b3d856fd89aec8f2b844c4ee2fd5","gas_estimates":{"creation":{"codeDepositCost":"407400","executionCost":"438","totalCost":"407838"},"external":{"APP_ADDR_NAMESPACE()":"236","ETH()":"424","EVMSCRIPT_REGISTRY_APP()":"390","EVMSCRIPT_REGISTRY_APP_ID()":"280","allowRecoverability(address)":"391","appId()":"524","canPerform(address,bytes32,uint256[])":"infinite","getExecutor(bytes)":"infinite","getInitializationBlock()":"568","getRecoveryVault()":"infinite","kernel()":"809","transferToVault(address)":"infinite"}},"function_hashes":{"APP_ADDR_NAMESPACE()":"178e6079","ETH()":"8322fff2","EVMSCRIPT_REGISTRY_APP()":"9b3fdf4c","EVMSCRIPT_REGISTRY_APP_ID()":"60b1e057","allowRecoverability(address)":"7e7db6e1","appId()":"80afdea8","canPerform(address,bytes32,uint256[])":"a1658fad","getExecutor(bytes)":"f92a79ff","getInitializationBlock()":"8b3dd749","getRecoveryVault()":"32f0a3b5","kernel()":"d4aae0c4","transferToVault(address)":"9d4941d8"},"abi":[{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EVMSCRIPT_REGISTRY_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EVMSCRIPT_REGISTRY_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]};
let AragonApp = new EmbarkJS.Blockchain.Contract(AragonAppJSONConfig);
export default AragonApp;