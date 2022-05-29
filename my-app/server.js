const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/hello', function (req, res) {
	res.send('Hello World, I am API');
});

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});
