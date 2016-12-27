/* globals $, streams */
var $body = $('body');


// 이름을 클릭했을 때, function돌리기
function clickUser(){
var user = $(this).attr('class').split(' ')[1];
//var user = $(this).text().split(':')[0].replace('@', '');
// ['@marcus', 'messagea212ad'] ----> '@marcus'
  $('body').html(`<header><h1>${user}</h1></header>`);
  clearInterval(timeid)

  var lastIndex = 0;
  function showclickuserTwitt(){
      var initialIndex = streams.home.length - 1;
    while(initialIndex >= lastIndex){
      if(user === streams.home[initialIndex].user){
        var tweet = streams.home[initialIndex];
        var time = moment(tweet.created_at).startOf('hour').fromNow();
        var $tweet = $('<section id="cd-timeline" class="cd-container"></section>');
        $tweet.html(`
        <div class="cd-timeline-block">
            <div class="cd-timeline-img ${streams.home[initialIndex].user}">
				<img src="img/${streams.home[initialIndex].user}.png">
			</div> <!-- cd-timeline-img -->
            
            <div class="cd-timeline-content">
                <h2>${tweet.user}</h2>
                <p>${tweet.message}</p>
                <a onclick="clickUser.bind(this)()" class="cd-read-more ${streams.home[initialIndex].user}">Read more</a>
                <span class="cd-date">${time}</span>
            </div>
        </div>`);
        $tweet.appendTo($body);
      }
    initialIndex--;
  }
  lastIndex = streams.home.length - 1;
  }
  setInterval(showclickuserTwitt, 3000);
}

// Main 화면
var lastIndex = 0;
function showTwitt() {
  var initialIndex = streams.home.length - 1;
  while(initialIndex >= lastIndex){
    var tweet = streams.home[initialIndex];
    var time = moment(tweet.created_at).startOf('hour').fromNow();
    var $tweet = $('<div class="cd-timeline-block '+streams.home[initialIndex].user+'"></div>');//.on('click', clickUser);
      
    $tweet.html(`
                <div class="cd-timeline-img ${streams.home[initialIndex].user}">
				<img src="img/${streams.home[initialIndex].user}.png">
                </div> <!-- cd-timeline-img -->
                <div class="cd-timeline-content">
                    <h2>${tweet.user}</h2>
                    <p>${tweet.message}</p>
                    <a onclick="clickUser.bind(this)()" class="cd-read-more ${streams.home[initialIndex].user}">Read more</a>
                    <span class="cd-date">${time}</span>
                </div>`);
    $tweet.appendTo("#cd-timeline");
    initialIndex--;
  }
  lastIndex = streams.home.length - 1;
}



var timeid = setInterval(function(){
  showTwitt();
}, 2000);
// setInterval에 best code는
// setInterval (function(){
// ..... updateTweets()
// },1000)



// 트윗추가하기 
 $('#submit').on('click', addmessage)
function addmessage(){
    
}

