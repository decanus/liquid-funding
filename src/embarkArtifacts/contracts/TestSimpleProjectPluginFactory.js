import EmbarkJS from '../embarkjs';
let TestSimpleProjectPluginFactoryJSONConfig = {"contract_name":{"className":"TestSimpleProjectPluginFactory","args":[],"code":"6060604052341561000f57600080fd5b61084d8061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d8520029","runtimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d8520029","realRuntimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820","linkReferences":{},"swarmHash":"dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d852","gasEstimates":{"creation":{"codeDepositCost":"425000","executionCost":"456","totalCost":"425456"},"external":{"deploy(address,string,string,uint64)":"infinite"}},"functionHashes":{"deploy(address,string,string,uint64)":"c5688b7c"},"abiDefinition":[{"constant":false,"inputs":[{"name":"liquidPledging","type":"address"},{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"parentProject","type":"uint64"}],"name":"deploy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding/.embark/contracts/test/TestSimpleProjectPluginFactory.sol","originalFilename":"contracts/test/TestSimpleProjectPluginFactory.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding/contracts/test/TestSimpleProjectPluginFactory.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b61084d8061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d8520029","runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d8520029","real_runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663c5688b7c8114610045575b600080fd5b341561005057600080fd5b6100ff6004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff169250610101915050565b005b600061010b6102ac565b604051809103906000f080151561012157600080fd5b90508073ffffffffffffffffffffffffffffffffffffffff16636e1c5d67868686866040517c010000000000000000000000000000000000000000000000000000000063ffffffff871602815273ffffffffffffffffffffffffffffffffffffffff85166004820190815267ffffffffffffffff831660648301526080602483019081529091604481019060840186818151815260200191508051906020019080838360005b838110156101df5780820151838201526020016101c7565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561024257808201518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b151561029157600080fd5b6102c65a03f115156102a257600080fd5b5050505050505050565b604051610565806102bd8339019056006060604052341561000f57600080fd5b32600160a060020a031633600160a060020a03161415151561003057600080fd5b60008054604060020a60ff0219166801000000000000000017905561050b8061005a6000396000f3006060604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636e1c5d67811461006657806394edc35914610122578063ad1483c314610152578063d4edf5e514610187575b600080fd5b341561007157600080fd5b6101206004803573ffffffffffffffffffffffffffffffffffffffff169060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101ce915050565b005b341561012d57600080fd5b6101356103c4565b60405167ffffffffffffffff909116815260200160405180910390f35b341561015d57600080fd5b61012067ffffffffffffffff600435811690602435811690604435811690606435166084356103d4565b341561019257600080fd5b6101bc67ffffffffffffffff60043581169060243581169060443581169060643516608435610458565b60405190815260200160405180910390f35b60005468010000000000000000900460ff1615156101eb57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166372116e92848430856000306000604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff891602815273ffffffffffffffffffffffffffffffffffffffff808616604483015267ffffffffffffffff808616606484015284166084830152821660a482015260c060048201908152908190602481019060c40189818151815260200191508051906020019080838360005b838110156102c25780820151838201526020016102aa565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b50838103825288818151815260200191508051906020019080838360005b8381101561032557808201518382015260200161030d565b50505050905090810190601f1680156103525780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b151561037657600080fd5b6102c65a03f1151561038757600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff929092169190911768ff0000000000000000191690555050505050565b60005467ffffffffffffffff1681565b60005468010000000000000000900460ff16156103f057600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805468010000000000000000900460ff161561047557600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a7230582048144732565c40dfac3bd4cd38384785798560fded306f8935adcf5e5c2712180029a165627a7a72305820","swarm_hash":"dd3b66ff5cfb6e385d92000f3da777ec52b0503b86fb103da637ffabb662d852","gas_estimates":{"creation":{"codeDepositCost":"425000","executionCost":"456","totalCost":"425456"},"external":{"deploy(address,string,string,uint64)":"infinite"}},"function_hashes":{"deploy(address,string,string,uint64)":"c5688b7c"},"abi":[{"constant":false,"inputs":[{"name":"liquidPledging","type":"address"},{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"parentProject","type":"uint64"}],"name":"deploy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let TestSimpleProjectPluginFactory = new EmbarkJS.Blockchain.Contract(TestSimpleProjectPluginFactoryJSONConfig);
export default TestSimpleProjectPluginFactory;
