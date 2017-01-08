// 이곳에 D3로 개발을 시작해 보세요.


// 점수판을 만든다.
	// 하이스코어와 현재 스코어 두 가지가 있다.
	// 플레이어가 적들과 충돌이 나면 표시한다.
	   // 게임 중에 플레이어가 충돌하지 않고 움직이면 현재 스코어를 초당 20 점을 현재 스코어에 더한다.
	   // 현재 스코어가 하이스코어 보다 크면 하이스코어를 현재 스코어로 업데이트한다.
	   // 현재 스코어를 0으로 설정한다.

// 게임 참가자를 만든다.
	// 플레이어 : 마우스로 움직일수있다.

   	// 적들 : 무작위로 움직인다.

// 게임 룰을 정한다.
  // 만약에 플레이어가 적들과 충돌하면 점수판을 초기화한다.
  // 게임을 다시 시작한다.
  // 플레이어의 초기 위치는 항상 화면에 중앙으로 설정한다.


/* globals d3, window */
var solution = function(){
	var h = window.innerHeight;
	var w =  window.innerWidth;

	var randomX = function(){return Math.random()* w;}
	var randomY = function(){return Math.random()* h;}

	var container = d3
			.select('body')
			.append('svg')
			.attr({
				width: w,
				height : h
			});


	var enemyRadius = 15;

	var enemies = container
			.selectAll('circle')
			.data(d3.range(30)) // [0, .... ,30]
			.enter()
			.append('circle')
			.attr({
				cx :  randomX,  // function
				cy :	randomY,
				r : enemyRadius,
				fill : '#e7969c'
			});

											// D3 select === D3 object
	var move = function(element){
		element //d3 object
			.transition()
			.duration(1000)
			.attr({
				cx : randomX,
				cy : randomY
			})
			.each('end', function(){
				move(d3.select(this));
			});
	};
	move(enemies);

	var playerRadious = 20;
	var player = container
		.append('circle')
		.attr({
			cx : h / 2,
			cy : w / 2,
			r : playerRadious,
			fill : '#ff7f0e'
		})
		.call(d3.behavior.drag()
			.on('drag', function(){
				d3.select(this)
					.attr({
						cx : d3.event.x,
						cy : d3.event.y
					});
			}));


	var previouCollisionState = false;
	var currentScore = 0;
	var collisionCount = 0;

	var detectCollision = function(){
		var collision = false;
		enemies.each(function(){ //enemy 하나하나 마다 check!
			var enemy = d3.select(this);	 // here this is enemies의 하나하나 circle
			var x = enemy.attr('cx') - player.attr('cx'); //현재 position의 x 거리와  y거리
			var y = enemy.attr('cy') - player.attr('cy');
			var distance = Math.sqrt(( x * x ) + ( y * y )) //두개 사이에 거리 피타고라스 정의
			if(distance <= enemyRadius + playerRadious){ // 겹쳤다는 것.
				collision = true;
			}
		});

		if(collision){
			currentScore = 0;
			if(previouCollisionState !== collision){
				collisionCount++
			}
		}
		previouCollisionState = collision; // 여기는 무조건 돌아간다.
	};
	d3.timer(detectCollision)

	var currentScore = 0;
	var hiScore = 0;

	var updateScore = function(){
		currentScore++
		hiScore = Math.max(hiScore, currentScore); // 현재 hiScore가 currentScore커지면 업데이트
		d3.select('.current span').text(currentScore);
		d3.select('.highscore span').text(hiScore);
		d3.select('.collisions span').text(collisionCount);

	}
	setInterval(updateScore, 100)
};

solution()
