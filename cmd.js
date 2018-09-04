const { exec } = require('child_process');
exports.cmd=(CMDER_STRING)=>{
exec(CMDER_STRING, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
}
