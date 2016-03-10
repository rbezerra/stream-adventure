var through = require('through2');
var stream = through(write, end);

function write(buffer, enconding, next){
  var data = buffer.toString();
  this.push(data.toUpperCase());
  next();
}

function end(done){
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);


