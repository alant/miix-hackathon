import Registration from '../contracts/Registration.json';
import CertToken from '../contracts/CertToken.json';

const regAddress = '41f9f8557ba3d56a35ee021821fdaa097a93e2f477';
const certAddress = ''

const utils = {
    tronWeb: false,
    contract: false,
    setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.regContract = tronWeb.contract(Registration.abi, regAddress);
        this.certContract = tronWeb.contract(CertToken.abi, certAddress)
    },

    transformMessage(message) {
        return {
            tips: {
                amount: message.tips,
                count: message.tippers.toNumber()
            },
            owner: this.tronWeb.address.fromHex(message.creator),
            timestamp: message.time.toNumber(),
            message: message.message
        }
    },
    async fetchStoredData() {
        return "test";
    },
    async submitRegister(school, info) {
      await this.regContract.register(school, info).send();
      return true;
    },
    async fetchMessage(messageID, { recent = {}, featured = [] }) {
        const message = await this.contract.messages(messageID).call();
        const vulnerable = Object.keys(recent).filter(messageID => (
            !featured.includes(messageID)
        )).sort((a, b) => (
            recent[b].timestamp - recent[a].timestamp
        ));

        recent[messageID] = this.transformMessage(message);

        if(vulnerable.length > 30) {
            const removed = vulnerable.splice(0, vulnerable.length - 30);

            removed.forEach(messageID => {
                delete recent[messageID];
            });
        }

        return {
            message: recent[messageID],
            recent,
            featured
        };
    }
};

export default utils;
