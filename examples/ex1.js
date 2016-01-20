var reply = require('./../');

reply.confirm("Say yes or no", function(err, yes){

  if (!err && yes)
    console.log("you mean yes");
  else
    console.log("you mean no");
});
