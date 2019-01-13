import Registration from '../contracts/RegistrationSlim.json';
import CertToken from '../contracts/CertTokenSlim.json';

const regAddress = '419a93ad5fd20fbf3c4675e813138b0c01293a2ae4';
const certAddress = '41b015db30300ada33fbfef61919156263cbf84fb0';

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
      const account = await this.tronWeb.trx.getAccount();
      await this.regContract.register(school, info).send();
      await this.certContract.mint(account.address, info, this.tronWeb.sha3(info, false)).send();
      return true;
    },
    async getCertToken() {
      const account = await this.tronWeb.trx.getAccount();
      const tokenId = await this.certContract.addressCert(account.address).call();
      console.log(tokenId);
      const certToken = await this.certContract.certs(tokenId).call();
      const certHash = await this.certContract.certsHash(tokenId).call();
      const certArray = certToken.split(';');
      const certInfo = {
        name: certArray[0],
        userId: certArray[1],
        userType: certArray[2],
        major: certArray[3],
        certHash: certHash
      }
      return certInfo;
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
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
