import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x56DA7624b098563A0e7933960018C13f36119c90"
);

export default instance;
