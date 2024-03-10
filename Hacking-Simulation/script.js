async function init() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Initializing Malware...")
    }, 3000);
  })
}

async function gatherData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Gathering Data...")
    }, 2000);
  })
}

async function decryptData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Decrypting Passwords...")
    }, 2500);
  })
}

async function accessFiles() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Accessing secure files...")
    }, 2500);
  })
}

async function uploadData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Uploading data...")
    }, 2500);
  })
}

async function successful() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Attack Successful...")
    }, 3500);
  })
}

async function hack() {
  console.log('Hack is being executed');

  let terminal = document.querySelector('.terminal');

  let initializing = document.createElement('p');
  initializing.innerHTML=await init();
  terminal.appendChild(initializing);

  let data = document.createElement('p');
  data.innerHTML=await gatherData();
  terminal.appendChild(data);

  let decrypt = document.createElement('p');
  decrypt.innerHTML=await decryptData();
  terminal.appendChild(decrypt);

  let access = document.createElement('p');
  access.innerHTML=await accessFiles();
  terminal.appendChild(access);

  let upload = document.createElement('p');
  upload.innerHTML=await uploadData();
  terminal.appendChild(upload);

  let success = document.createElement('p');
  success.innerHTML=await successful();
  terminal.appendChild(success);
}

document.addEventListener('DOMContentLoaded', () => {
  hack().catch(console.error);
});
