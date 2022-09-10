import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xf5331894a39Ba588330be10235E645f6Ac880FD9"
);

export default instance;