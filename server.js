var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

app.use(express.static(path.resolve(__dirname, '.', 'build')));

app.get('/', function(req, res) {
    renderSite(res, '/build', {
        'locale' : 'es',
        'code' : 'es',
        'title' : 'Appolodoro',
        'description' : 'Appolodoro',
        'image' : '',        
        'url' : '',
        'appid' : ''
    })
})

renderSite = (res, folfer, siteData) => {
    fs.readFile(path.join(folfer , 'index.html'), 'utf-8', function(err, content) {
        var renderedHtml = ejs.render(content, siteData); 
        res.header('Content-Type', 'text/html');
        res.end(renderedHtml);
    });  
}

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('running server '+port)
});