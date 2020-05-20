const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/reference/data.json`))
const crate = process.env.CRATE_NAME;
const version = process.env.GITHUB_REF.replace('refs/heads/', '').replace('refs/tags/', '');

if (!Array.isArray(data[crate])) {
  data[crate] = [];
}

if (!data[crate].find(x => x === version)) {
  data[crate].push(version);
}

if (process.env.GITHUB_REF.includes('tags')) {
  if (!data[crate].find(x => x === 'latest')) {
    data[crate].push('latest');
  }
}

fs.writeFileSync(`${__dirname}/reference/data.json`, JSON.stringify(data));
