/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RPSContract, RPSContractInterface } from "../RPSContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ChoicesDone",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "ResultsRevealed",
    type: "event",
  },
  {
    inputs: [],
    name: "None",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Paper",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Rock",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Scissors",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_choiceHash",
        type: "bytes32",
      },
    ],
    name: "commitChoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChoices",
    outputs: [
      {
        internalType: "string[2]",
        name: "",
        type: "string[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChoicesHashes",
    outputs: [
      {
        internalType: "bytes32[2]",
        name: "",
        type: "bytes32[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s",
        type: "string",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_choice",
        type: "string",
      },
      {
        internalType: "string",
        name: "_suffix",
        type: "string",
      },
    ],
    name: "revealChoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080556040518060400160405280600015151515815260200160001515151581525060019060026200003992919062000082565b5060026040516020016200004e91906200021b565b604051602081830303815290604052600890816200006d9190620004c2565b503480156200007b57600080fd5b50620005a9565b826002601f016020900481019282156200010f5791602002820160005b83821115620000de57835183826101000a81548160ff02191690831515021790555092602001926001016020816000010492830192600103026200009f565b80156200010d5782816101000a81549060ff0219169055600101602081600001049283019260010302620000de565b505b5090506200011e919062000122565b5090565b5b808211156200013d57600081600090555060010162000123565b5090565b600081905092915050565b7f4d6178696d756d20706c617965727320636f756e742028000000000000000000600082015250565b60006200018460178362000141565b915062000191826200014c565b601782019050919050565b6000819050919050565b6000819050919050565b620001c5620001bf826200019c565b620001a6565b82525050565b7f2920697320726561636865642e00000000000000000000000000000000000000600082015250565b600062000203600d8362000141565b91506200021082620001cb565b600d82019050919050565b6000620002288262000175565b9150620002368284620001b0565b6020820191506200024782620001f4565b915081905092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d457607f821691505b602082108103620002ea57620002e96200028c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000315565b62000360868362000315565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003a36200039d62000397846200019c565b62000378565b6200019c565b9050919050565b6000819050919050565b620003bf8362000382565b620003d7620003ce82620003aa565b84845462000322565b825550505050565b600090565b620003ee620003df565b620003fb818484620003b4565b505050565b5b81811015620004235762000417600082620003e4565b60018101905062000401565b5050565b601f82111562000472576200043c81620002f0565b620004478462000305565b8101602085101562000457578190505b6200046f620004668562000305565b83018262000400565b50505b505050565b600082821c905092915050565b6000620004976000198460080262000477565b1980831691505092915050565b6000620004b2838362000484565b9150826002028217905092915050565b620004cd8262000252565b67ffffffffffffffff811115620004e957620004e86200025d565b5b620004f58254620002bb565b6200050282828562000427565b600060209050601f8311600181146200053a576000841562000525578287015190505b620005318582620004a4565b865550620005a1565b601f1984166200054a86620002f0565b60005b8281101562000574578489015182556001820191506020850194506020810190506200054d565b8683101562000594578489015162000590601f89168262000484565b8355505b6001600288020188555050505b505050505050565b6118c580620005b96000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063606895571161006657806360689557146101495780638e7ea5b21461016757806398c81bbf14610185578063af769eff146101a3578063e05b10c0146101c15761009e565b806325ea269e146100a357806331234354146100c157806339c43549146100df5780635441effc146100fd5780635b6beeb914610119575b600080fd5b6100ab6101dd565b6040516100b89190610d4f565b60405180910390f35b6100c9610216565b6040516100d69190610d4f565b60405180910390f35b6100e761024f565b6040516100f49190610e26565b60405180910390f35b61011760048036038101906101129190610f8a565b61029a565b005b610133600480360381019061012e9190611002565b6104df565b604051610140919061105a565b60405180910390f35b61015161050f565b60405161015e9190610d4f565b60405180910390f35b61016f610548565b60405161017c91906110b6565b60405180910390f35b61018d6107fc565b60405161019a91906111d1565b60405180910390f35b6101ab6108c9565b6040516101b89190610d4f565b60405180910390f35b6101db60048036038101906101d6919061121f565b610902565b005b6040518060400160405280600881526020017f73636973736f727300000000000000000000000000000000000000000000000081525081565b6040518060400160405280600481526020017f6e6f6e650000000000000000000000000000000000000000000000000000000081525081565b610257610c76565b6004600280602002604051908101604052809291908260028015610290576020028201915b81548152602001906001019080831161027c575b5050505050905090565b60008054116102de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d590611298565b60405180910390fd5b60006102e933610a69565b63ffffffff16905060048160028110610305576103046112b8565b5b0154838360405160200161031a929190611323565b6040516020818303038152906040528051906020012014610370576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610367906113b9565b60405180910390fd5b8260068260028110610385576103846112b8565b5b01908161039291906115ef565b5060018082600281106103a8576103a76112b8565b5b602091828204019190066101000a81548160ff02191690831515021790555060016000600281106103dc576103db6112b8565b5b602091828204019190069054906101000a900460ff16801561042457506001806002811061040d5761040c6112b8565b5b602091828204019190069054906101000a900460ff165b156104da576000808190555060006001600060028110610447576104466112b8565b5b602091828204019190066101000a81548160ff02191690831515021790555060006001806002811061047c5761047b6112b8565b5b602091828204019190066101000a81548160ff0219169083151502179055507f5e649a9baced557935df97d73cbabaa24ecabb662ec3a0215483bb5b2fe0988f6104c4610548565b6040516104d191906110b6565b60405180910390a15b505050565b6000816040516020016104f291906116c1565b604051602081830303815290604052805190602001209050919050565b6040518060400160405280600481526020017f726f636b0000000000000000000000000000000000000000000000000000000081525081565b6000806105556000610ae7565b905060006105636001610ae7565b90506000821480156105755750600082145b156105845730925050506107f9565b600082036105cc5760026001600281106105a1576105a06112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b600081036106145760026000600281106105e9576105e86112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b6001821480156106245750600281145b1561066957600260016002811061063e5761063d6112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b6002821480156106795750600181145b156106be576002600060028110610693576106926112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b6001821480156106ce5750600381145b156107135760026000600281106106e8576106e76112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b6003821480156107235750600181145b1561076857600260016002811061073d5761073c6112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b6002821480156107785750600381145b156107bd576002600160028110610792576107916112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050506107f9565b60026000600281106107d2576107d16112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925050505b90565b610804610c98565b6006600280602002604051908101604052809291906000905b828210156108c057838201805461083390611408565b80601f016020809104026020016040519081016040528092919081815260200182805461085f90611408565b80156108ac5780601f10610881576101008083540402835291602001916108ac565b820191906000526020600020905b81548152906001019060200180831161088f57829003601f168201915b50505050508152602001906001019061081d565b50505050905090565b6040518060400160405280600581526020017f706170657200000000000000000000000000000000000000000000000000000081525081565b60026000541060089061094b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610942919061175c565b60405180910390fd5b5033600260005460028110610963576109626112b8565b5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806004600054600281106109b9576109b86112b8565b5b01819055506040518060400160405280600481526020017f6e6f6e6500000000000000000000000000000000000000000000000000000000815250600660005460028110610a0a57610a096112b8565b5b019081610a1791906115ef565b50600080815480929190610a2a906117ad565b9190505550600260005403610a66577f0fd31a983338576f5a1890faf065ba9c98f3662fc6865f0488f964dd1254567360405160405180910390a15b50565b600080600090508273ffffffffffffffffffffffffffffffffffffffff166002600160028110610a9c57610a9b6112b8565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ade57600190505b80915050919050565b60008060068360028110610afe57610afd6112b8565b5b01604051602001610b0f9190611878565b6040516020818303038152906040528051906020012090506040518060400160405280600481526020017f726f636b00000000000000000000000000000000000000000000000000000000815250604051602001610b6d91906116c1565b604051602081830303815290604052805190602001208103610b93576001915050610c71565b6040518060400160405280600581526020017f7061706572000000000000000000000000000000000000000000000000000000815250604051602001610bd991906116c1565b604051602081830303815290604052805190602001208103610bff576002915050610c71565b6040518060400160405280600881526020017f73636973736f7273000000000000000000000000000000000000000000000000815250604051602001610c4591906116c1565b604051602081830303815290604052805190602001208103610c6b576003915050610c71565b60009150505b919050565b6040518060400160405280600290602082028036833780820191505090505090565b60405180604001604052806002905b6060815260200190600190039081610ca75790505090565b600081519050919050565b600082825260208201905092915050565b60005b83811015610cf9578082015181840152602081019050610cde565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d2182610cbf565b610d2b8185610cca565b9350610d3b818560208601610cdb565b610d4481610d05565b840191505092915050565b60006020820190508181036000830152610d698184610d16565b905092915050565b600060029050919050565b600081905092915050565b6000819050919050565b6000819050919050565b610da481610d91565b82525050565b6000610db68383610d9b565b60208301905092915050565b6000602082019050919050565b610dd881610d71565b610de28184610d7c565b9250610ded82610d87565b8060005b83811015610e1e578151610e058782610daa565b9650610e1083610dc2565b925050600181019050610df1565b505050505050565b6000604082019050610e3b6000830184610dcf565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e9782610d05565b810181811067ffffffffffffffff82111715610eb657610eb5610e5f565b5b80604052505050565b6000610ec9610e41565b9050610ed58282610e8e565b919050565b600067ffffffffffffffff821115610ef557610ef4610e5f565b5b610efe82610d05565b9050602081019050919050565b82818337600083830152505050565b6000610f2d610f2884610eda565b610ebf565b905082815260208101848484011115610f4957610f48610e5a565b5b610f54848285610f0b565b509392505050565b600082601f830112610f7157610f70610e55565b5b8135610f81848260208601610f1a565b91505092915050565b60008060408385031215610fa157610fa0610e4b565b5b600083013567ffffffffffffffff811115610fbf57610fbe610e50565b5b610fcb85828601610f5c565b925050602083013567ffffffffffffffff811115610fec57610feb610e50565b5b610ff885828601610f5c565b9150509250929050565b60006020828403121561101857611017610e4b565b5b600082013567ffffffffffffffff81111561103657611035610e50565b5b61104284828501610f5c565b91505092915050565b61105481610d91565b82525050565b600060208201905061106f600083018461104b565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110a082611075565b9050919050565b6110b081611095565b82525050565b60006020820190506110cb60008301846110a7565b92915050565b600060029050919050565b600081905092915050565b6000819050919050565b600082825260208201905092915050565b600061110d82610cbf565b61111781856110f1565b9350611127818560208601610cdb565b61113081610d05565b840191505092915050565b60006111478383611102565b905092915050565b6000602082019050919050565b6000611167826110d1565b61117181856110dc565b935083602082028501611183856110e7565b8060005b858110156111bf57848403895281516111a0858261113b565b94506111ab8361114f565b925060208a01995050600181019050611187565b50829750879550505050505092915050565b600060208201905081810360008301526111eb818461115c565b905092915050565b6111fc81610d91565b811461120757600080fd5b50565b600081359050611219816111f3565b92915050565b60006020828403121561123557611234610e4b565b5b60006112438482850161120a565b91505092915050565b7f47616d65207761736e277420737461727465642e000000000000000000000000600082015250565b6000611282601483610cca565b915061128d8261124c565b602082019050919050565b600060208201905081810360008301526112b181611275565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b60006112fd82610cbf565b61130781856112e7565b9350611317818560208601610cdb565b80840191505092915050565b600061132f82856112f2565b915061133b82846112f2565b91508190509392505050565b7f43686f69636520616e642073756666697820646f6e2774206d6174636820746860008201527f6520686173682073746f7265642e000000000000000000000000000000000000602082015250565b60006113a3602e83610cca565b91506113ae82611347565b604082019050919050565b600060208201905081810360008301526113d281611396565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061142057607f821691505b602082108103611433576114326113d9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261149b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261145e565b6114a5868361145e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006114ec6114e76114e2846114bd565b6114c7565b6114bd565b9050919050565b6000819050919050565b611506836114d1565b61151a611512826114f3565b84845461146b565b825550505050565b600090565b61152f611522565b61153a8184846114fd565b505050565b5b8181101561155e57611553600082611527565b600181019050611540565b5050565b601f8211156115a35761157481611439565b61157d8461144e565b8101602085101561158c578190505b6115a06115988561144e565b83018261153f565b50505b505050565b600082821c905092915050565b60006115c6600019846008026115a8565b1980831691505092915050565b60006115df83836115b5565b9150826002028217905092915050565b6115f882610cbf565b67ffffffffffffffff81111561161157611610610e5f565b5b61161b8254611408565b611626828285611562565b600060209050601f8311600181146116595760008415611647578287015190505b61165185826115d3565b8655506116b9565b601f19841661166786611439565b60005b8281101561168f5784890151825560018201915060208501945060208101905061166a565b868310156116ac57848901516116a8601f8916826115b5565b8355505b6001600288020188555050505b505050505050565b60006116cd82846112f2565b915081905092915050565b600081546116e581611408565b6116ef8186610cca565b9450600182166000811461170a576001811461172057611753565b60ff198316865281151560200286019350611753565b61172985611439565b60005b8381101561174b5781548189015260018201915060208101905061172c565b808801955050505b50505092915050565b6000602082019050818103600083015261177681846116d8565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117b8826114bd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036117ea576117e961177e565b5b600182019050919050565b6000815461180281611408565b61180c81866112e7565b94506001821660008114611827576001811461183c5761186f565b60ff198316865281151582028601935061186f565b61184585611439565b60005b8381101561186757815481890152600182019150602081019050611848565b838801955050505b50505092915050565b600061188482846117f5565b91508190509291505056fea26469706673582212207dc5dd02ebdd3004ca324c411009fe5cd9cd8cdd9b277f628ddba5f179e46a4564736f6c63430008110033";

type RPSContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RPSContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RPSContract__factory extends ContractFactory {
  constructor(...args: RPSContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RPSContract> {
    return super.deploy(overrides || {}) as Promise<RPSContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RPSContract {
    return super.attach(address) as RPSContract;
  }
  override connect(signer: Signer): RPSContract__factory {
    return super.connect(signer) as RPSContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RPSContractInterface {
    return new utils.Interface(_abi) as RPSContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RPSContract {
    return new Contract(address, _abi, signerOrProvider) as RPSContract;
  }
}
