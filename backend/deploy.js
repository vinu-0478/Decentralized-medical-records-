const fs = require('fs');
const Web3 = require('web3');

// const abi = JSON.parse(fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.abi"));
// const bytecode = fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.bin").toString();

const abi = JSON.parse(fs.readFileSync("./contracts/Cruds.abi"));
const bytecode = fs.readFileSync("./contracts/Cruds.bin").toString();

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

async function deploy() {
    // const w3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi);
    contract = contract.deploy({data: bytecode});

    const deployContract = await contract.send({
        from: "0xDc25087c61d206488A00BC5C1C31D5084ECb465B",
        gas: "6721975",
    })
    console.log(deployContract.options.address);
}

deploy();
