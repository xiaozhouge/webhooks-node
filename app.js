let  express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let {cmd}=require('./cmd')

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

app.post('/api/git',function(req,res){
	console.log(`${req.body.commits.timestamp}：${req.body.commits.author.name} 提交了代码`);
	//新开一个子进程，服务器从github拉取代码
    cmd('git clone example@github.com')
    //新开一个子进程，发送邮箱
    cmd('node mail.js')
	res.send('ok')
})
let server = app.listen(3000, function (req,res) {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
