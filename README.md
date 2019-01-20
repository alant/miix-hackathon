## [slides 中文](https://pan.baidu.com/s/1de2v3TmlywiOcHm_ghkVYw)

## build steps
Make sure save your private key in .env file: PK=be821xxxxxx
1. migrate the contract
```bash
tronbox migrate --network shasta
```
2. link contract build directory to react client

```bash
# For MacOS and Linux
cd client/src
ln -s ../../build/contracts contracts
```

3. Run / build the react client
```bash
# the folling commands run in client dir

# run the client
npm start
# build the client
npm build
```
