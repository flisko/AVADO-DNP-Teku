export type Network = "prater" | "mainnet" | "kiln"
export type SettingsType = {
    network: Network
    ee_endpoint: string
    eth1_endpoints: string[]
    validators_graffiti: string,
    p2p_peer_lower_bound: number,
    p2p_peer_upper_bound: number,
    validators_proposer_default_fee_recipient: string,
    initial_state: string
}