var mapx=[20,50,80,110,140,170,200,230,260,290,320];
var mapy=[20,50,80,110,140,170,200,230,260,290,320,350,380];

var playerList = {};
function playerPos(num,name,x,y){
	var nplayer = {
		num:num,
		name:name,
		x:x,
		y:y		
	};
	playerList[num] = nplayer;
}

socket.on('newPositions', function(data){
	playerList = {};
	var counter = 0;
	for(var i = 0; i < data.length; i++){		
		playerPos(++counter,data[i].name,data[i].x,data[i].y);
	}
	player.x = playerList[player.num].x;
	player.y = playerList[player.num].y;
});  
	
function drawPlayersPosition(){
		
	//player
	for(var i in playerList){				
		ctx.textAlign = "center";
		var color = 'white';
		if(i == player.num){
			color = '#00e6e6';
		}
		ctx.fillStyle = color;
		ctx.font = 'bold 13px Arial';			
		ctx.fillText(playerList[i].name,playerList[i].x,playerList[i].y-20);
		ctx.drawImage(playerImg,playerList[i].x-15,playerList[i].y-15,30,30);	
	
	}	
	
	//over-player
		ctx.drawImage(ghostImg,20-15,230-15,30,30);
		/*for(var i = 3; i <= 10; i++){
			ctx.drawImage(wallImg,mapx[7]-15,mapy[i]-15,30,30);
		}
		ctx.drawImage(wallImg,mapx[8]-15,mapy[3]-15,30,30);
		ctx.drawImage(wallImg,mapx[9]-15,mapy[3]-15,30,30);
		ctx.drawImage(wallImg,mapx[10]-15,mapy[3]-15,30,30);
		
		ctx.drawImage(wallImg,mapx[3]-15,mapy[5]-15,30,30);*/
		
}