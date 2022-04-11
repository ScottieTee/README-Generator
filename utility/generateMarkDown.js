//Generate MarkDown for the README
function licenseBadge(data){
    const licenseType = data.license[0];
    let licenseString = " "
if (licenseType === "MIT") {
    licenseString = `![License: MIT]
    (https://img.sheild.io/badge/License-MIT-red.svg)`
};
if (licenseType === "GPL") {
    licenseString = `![License: GPL]
    (https://img.shields.io/badge/License-GPLv3-blue.svg)`
};
if (licenseType === "Apache") {
    licenseString = `![License: Apache]
    (https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
};
return licenseString
};