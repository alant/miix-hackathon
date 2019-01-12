import SimpleStorage from '../contracts/RegistrationSlim.json';

const contractAddress = '41f9f8557ba3d56a35ee021821fdaa097a93e2f477';

const utils = {
    tronWeb: false,
    contract: false,

    setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = tronWeb.contract(SimpleStorage.abi, contractAddress);
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
    async submitRegister() {
      const _message = "Test User Info";
      await this.contract.register(_message).send();
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
