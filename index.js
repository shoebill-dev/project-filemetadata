const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
require('dotenv').config();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
  console.log(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), ((req, res) => {
  try {
    const type = req.file.mimetype;
    const name = req.file.originalname;
    const size = req.file.size;


    res.status(200).json({name, type, size});
  } catch (error) {
    res.status(400).send({error});
  }
}));


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port);
});
``;
