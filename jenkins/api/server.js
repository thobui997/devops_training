const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/hello', function (req, res) {
	res.send('Hello World, I am API with Jenkins , ABCSKCASK');
});

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
