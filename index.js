const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(parser.json());

const postController = require('./controllers/posts');
app.use('/breaddit', postController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
