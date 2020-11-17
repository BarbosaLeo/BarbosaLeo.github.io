var playerScore;
var myGamePiece;
var gameObstacles = [];

function startGame() {
        playerScore = new component("30px","Consolas", "white", 1200, 60, "text"); 
        myGamePiece = new component(64,64,"spf_w1.png", 900, 400, "image");
        myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1900;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[7]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', (e) => {
            if(e.code === "ArrowLeft")moveleft()
            if(e.code === "ArrowRight")moveright()
          })
          window.addEventListener('keyup', function (e) {
            clearmove()
            myGameArea.key = false;
          })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        }
        else if(this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }

        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }

    this.crashWith = function(otherobj){
        var myLeft = this.x;
        var myRight = this.x + (this.width);
        var myFront = this.y;
        var myBack = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;

        if ((myBack < othertop) ||
        (myFront > otherbottom) ||
        (myRight < otherleft) ||
        (myLeft > otherright)) {
        crash = false;
        }
        return crash;
    }
}

function everyInterval(n){
    if((myGameArea.frameNo /n) % 1 == 0){return true;}
    return false;
}


function updateGameArea() {
    var x, y;
    for (i = 0; i < gameObstacles.length; i += 1) {
        if (myGamePiece.crashWith(gameObstacles[i])) {
        myGameArea.stop();
        return;
        }
    }

    myGameArea.clear();
    myGameArea.frameNo += 1;

    if(myGameArea.frameNo == 1 || everyInterval(100)){
        xMin =64;
        xMax =1800;
        xSpawn = Math.floor(Math.random()*(xMax-xMin+1)+xMin);
        x = xSpawn;
        y = -100;
        gameObstacles.push(new component(64, 64, "sp_meteorite.png", x, y, "image"))
    }
    for (i=0; i< gameObstacles.length; i += 1){
        gameObstacles[i].y += 3;
        gameObstacles[i].update();
    }

    playerScore.text = "SCORE: " + Math.round(myGameArea.frameNo/60);
    playerScore.update();

    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -10; 
}

function moveright() {
    myGamePiece.speedX = 10; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}