const express = require('express');
const app = express();
const devport = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static("public"))

app.get("/", (req, res) => {
	res.render('index');
})

app.listen(process.env.PORT || '3000', () => {
	console.log("Listening on 3000")
});
