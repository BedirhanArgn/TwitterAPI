var Twitter=require('twitter');
var fs = require("fs");
var client= new Twitter({
    consumer_key: 'rBnnrzL2gu4AVXCmqwgUuxGCM',
    consumer_secret: 'CBQpV0dqECxRrAyxxKP08N5ZfVGOZ2LrLKHKdDms0pt9JrxFVj',
    access_token_key: '328155878-VDZ8k4nTQgHioTwBjqxaTrjZ1QiyH8noiSA3akBs',
    access_token_secret: 'AadZHKrivmPQ72LQQRnO66vVDKFFViV2LqadlH7geY7UL'
});
var params = {screen_name: 'BedirhanArgnn'};

//timeline yi çeker
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
//favorileri çekiyor.
client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites.
//çekilen twitleri txt'ye yazar.
    fs.writeFile("tweet.txt", JSON.stringify(tweets), function(err) {
        if(err) {
            //return console.log(err);
        }
    
        //console.log("The file was saved!");
    }); 

   // console.log(response);  // Raw response object.
  });
//Durum güncellemesi yapar ve tweet atar...
  client.post('statuses/update',{status:'Node Js Deneme Tweeti'},function(error,tweet,response){
    console.log(tweet);  // Tweet body.
    console.log(response); 


  });