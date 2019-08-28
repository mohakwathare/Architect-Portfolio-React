//Express.js file for setting up the backend, REST API calls and DB connection.
// Importing required packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var sl = require('split-lines');
var nodemailer = require('nodemailer');
var path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
// Implementing type in request body as json.
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'webapp/build')))

app.get('/api/getAboutMeSection', (req, res) => {
	fs.readFile('./webapp/src/datafiles/aboutme/aboutme.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		return res.send(data.toString());
	});
});

var checkFileTypeDir = (path) => {
	try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        return 2;
    }
}

var retrieveFileDetails = (dirPath, result) => {
	var poemOrArtwork = {
		name : '',
		date : '',
		content : [],
		image : ''
	};
	var files = fs.readdirSync(dirPath);
	files.forEach(function (file) {
		if (dirPath.slice(-1) === '/') {
			var path = dirPath + file;
		} else {
			path = dirPath + '/' + file;
		}
		var fileTypeDir = checkFileTypeDir(path);
		if (fileTypeDir === 2) {
			return "Error with field";
		} else if (fileTypeDir) {
			var res = retrieveFileDetails(path, result);
			result = res.result;
			result.push(res.poemOrArtwork);

		} else {
			if (file.indexOf('img') > -1) {
				poemOrArtwork.image = file;
			} else if (file.slice(-4) === '.txt'){
				poemOrArtwork.name = file.slice(0, -4);
				var firstLine = true;
				var data = fs.readFileSync(path);
				splitData = sl(data.toString(),{preserveNewlines : true});
				splitData.forEach(line => {
					if (firstLine) {
						poemOrArtwork.date = line.slice(0, -1);
						firstLine = false;
					} else {
						poemOrArtwork.content.push(line);
					}
				})
			}
		}
	});
	return {poemOrArtwork : poemOrArtwork, result : result};
}

var sendEmailToOwner = (req) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
		service:'gmail',
        auth: {
            user: "watharemohak@gmail.com", // generated ethereal user
            pass: "fernandotorres" // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: req.body.senderEmail, // sender address
        to: 'watharemohak@gmail.com', // list of receivers
        subject: 'Hello. '+ req.body.name +' wants to contact you!!', // Subject line
        html: '<div><h2>Email:'+req.body.senderEmail+'<h2></div>'+'<div><p>'+req.body.message+'<p></div>', // plain text body
    });

    console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
	
	return info.messageId;
}

app.get('/api/getBlogDetails', (req, res) => {
	var result = [];
	var resu = retrieveFileDetails('./webapp/src/Components/Blog/blog/', result);
	result = resu.result;
	return res.send(result);
});

app.get('/api/getSkillsDetails', (req, res) => {
	var skills = [];
	fs.readFile('./webapp/src/datafiles/skills/skills.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		splitData = sl(data.toString(),{preserveNewlines : true});
		splitData.forEach(line => {
			const stringElements = line.split(',');
			const skill = {
				name : stringElements[0],
				percentage : stringElements[1]
			};
			skills.push(skill);

		})
		return res.send(skills);
	});
});


app.get('/api/getArtworks', (req, res) => {
	var result = [];
	var resu = retrieveFileDetails('./webapp/src/Components/Art/artworks/', result);
	result = resu.result;
	return res.send(result);
});

app.post('/api/sendEmail', (req, res) => {
	var result = sendEmailToOwner(req);
	return res.send(result);
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/webapp/build/index.html'))
})

app.listen(PORT, () => {
	console.log('Server is running amazingly on port 5000');
});