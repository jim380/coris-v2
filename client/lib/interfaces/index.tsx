export interface Parts {
    total: number;
    hash: string;
}

export interface BlockId {
    hash: string;
    parts: Parts;
}

export interface Version {
    block: string;
}

export interface Parts2 {
    total: number;
    hash: string;
}

export interface LastBlockId {
    hash: string;
    parts: Parts2;
}

export interface Header {
    version: Version;
    chain_id: string;
    height: string;
    time: string;
    last_block_id: LastBlockId;
    last_commit_hash: string;
    data_hash: string;
    validators_hash: string;
    next_validators_hash: string;
    consensus_hash: string;
    app_hash: string;
    last_results_hash: string;
    evidence_hash: string;
    proposer_address: string;
}

export interface Data2 {
    txs: string[];
}

export interface Evidence {
    evidence: any[];
}

export interface Parts3 {
    total: number;
    hash: string;
}

export interface BlockId2 {
    hash: string;
    parts: Parts3;
}

export interface Signature {
    block_id_flag: number;
    validator_address: string;
    timestamp: any;
    signature: string;
}

export interface LastCommit {
    height: string;
    round: number;
    block_id: BlockId2;
    signatures: Signature[];
}

export interface Block {
    header: Header;
    data: Data2;
    evidence: Evidence;
    last_commit: LastCommit;
}

export interface Data {
    block_id: BlockId;
    block: Block;
}

export interface RootObject {
    status: string;
    endpointName: string;
    requestId: string;
    startedTimeStamp: number;
    data: Data;
    fulfilledTimeStamp: number;
    isUninitialized: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}
