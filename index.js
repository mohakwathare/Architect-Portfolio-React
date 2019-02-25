//Express.js file for setting up the backend, REST API calls and DB connection.
// Importing required packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var sl = require('split-lines');

var app = express();
// Implementing type in request body as json.
app.use(bodyParser.json());
app.use(cors());

app.listen(2000, () => {
	console.log('CORS-enabled web server listening on port 2000');
});

app.get('/getAboutMeSection', (req, res) => {
	fs.readFile('./react-webapp/src/components/datafiles/aboutme/aboutme.txt', function (err, data) {
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
	var poem = {
		name : '',
		date : '',
		content : '',
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
			result.push(res.poem);

		} else {
			if (file.indexOf('img') > -1) {
				poem.image = file;
			} else if (file.slice(-4) === '.txt'){
				poem.name = file.slice(0, -4);
				var firstLine = true;
				var data = fs.readFileSync(path);
				splitData = sl(data.toString(),{preserveNewlines : true});
				splitData.forEach(i => {
					if (firstLine) {
						poem.date = i.slice(0, -1);
						firstLine = false;
					} else {
						poem.content = poem.content + i;
					}
				})

			}
		}
	});
	return {poem : poem, result : result};
}

app.get('/getBlogDetails', (req, res) => {
	var result = [];
	var resu = retrieveFileDetails('./react-webapp/src/components/datafiles/blog/', result);
	result = resu.result;
	return res.send(result);
});

app.get('/getSkillsDetails', (req, res) => {
	var skills = [];
	fs.readFile('./react-webapp/src/components/datafiles/skills/skills.txt', function (err, data) {
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