// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";


export { MsgDeletePoll, MsgUpdateVote, MsgCreatePoll, MsgCreateVote, MsgDeleteVote, MsgUpdatePoll };

type sendMsgDeletePollParams = {
  value: MsgDeletePoll,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateVoteParams = {
  value: MsgUpdateVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreatePollParams = {
  value: MsgCreatePoll,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateVoteParams = {
  value: MsgCreateVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteVoteParams = {
  value: MsgDeleteVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdatePollParams = {
  value: MsgUpdatePoll,
  fee?: StdFee,
  memo?: string
};


type msgDeletePollParams = {
  value: MsgDeletePoll,
};

type msgUpdateVoteParams = {
  value: MsgUpdateVote,
};

type msgCreatePollParams = {
  value: MsgCreatePoll,
};

type msgCreateVoteParams = {
  value: MsgCreateVote,
};

type msgDeleteVoteParams = {
  value: MsgDeleteVote,
};

type msgUpdatePollParams = {
  value: MsgUpdatePoll,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgDeletePoll({ value, fee, memo }: sendMsgDeletePollParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeletePoll: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeletePoll({ value: MsgDeletePoll.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeletePoll: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateVote({ value, fee, memo }: sendMsgUpdateVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateVote({ value: MsgUpdateVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreatePoll({ value, fee, memo }: sendMsgCreatePollParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePoll: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePoll({ value: MsgCreatePoll.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePoll: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateVote({ value, fee, memo }: sendMsgCreateVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateVote({ value: MsgCreateVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteVote({ value, fee, memo }: sendMsgDeleteVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteVote({ value: MsgDeleteVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdatePoll({ value, fee, memo }: sendMsgUpdatePollParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdatePoll: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdatePoll({ value: MsgUpdatePoll.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdatePoll: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgDeletePoll({ value }: msgDeletePollParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgDeletePoll", value: MsgDeletePoll.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeletePoll: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateVote({ value }: msgUpdateVoteParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgUpdateVote", value: MsgUpdateVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateVote: Could not create message: ' + e.message)
			}
		},
		
		msgCreatePoll({ value }: msgCreatePollParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgCreatePoll", value: MsgCreatePoll.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePoll: Could not create message: ' + e.message)
			}
		},
		
		msgCreateVote({ value }: msgCreateVoteParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgCreateVote", value: MsgCreateVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateVote: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteVote({ value }: msgDeleteVoteParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgDeleteVote", value: MsgDeleteVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteVote: Could not create message: ' + e.message)
			}
		},
		
		msgUpdatePoll({ value }: msgUpdatePollParams): EncodeObject {
			try {
				return { typeUrl: "/voter.voter.MsgUpdatePoll", value: MsgUpdatePoll.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdatePoll: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			VoterVoter: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;