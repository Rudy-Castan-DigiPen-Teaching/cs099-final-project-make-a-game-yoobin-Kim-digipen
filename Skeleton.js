// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021


class Skeleton
{
    constructor(_type,_defaultImage,_x,_y,_right,_left,_up,_down,_rayDown,_rightAttack = null,_leftAttack,_moveImage,_list,_effectImage,sfx)
    {

        this.type = _type;
        this.list = _list;


        this.defaultImage = _defaultImage;
        this.rightAttack = _rightAttack;
        this.leftAttack = _leftAttack;
        this.moveImage = _moveImage;
        this.effectImage = _effectImage;
        this.sfx = sfx;


        this.pos = new Vec2(_x,_y);
 
        this.gravityVel  = new Vec2(0,0);
        this.accGravity = new Vec2(0,0.5);

        this.attackVel = new Vec2(0,0);



        this.vel = new Vec2(0,0);

        this.acc = new Vec2(0,0);

        this.animState = 0;
        this.animDefaultDelta = 0;

        this.defaultCheck = 0;


        this.moveDelta = 0;
        this.moveState = 0;

        this.right = _right;
        this.left = _left;
        this.up = _up;
        this.down = _down;
        this.downRight = new Vec2(this.pos.x+_right,this.pos.y+this.up);
        this.downLeft = new Vec2(this.pos.x+_left,this.pos.y+this.up);
   
        this.upRight = new Vec2(this.pos.x+_right,this.pos.y+this.down);
        this.upLeft = new Vec2(this.pos.x+_left,this.pos.y+this.down);

        this.rayDown = _rayDown;
        this.ray = new Vec2((this.pos.x+this.right+20,this.pos.y+this.rayDown));

        this.isAttacked = 0;

        this.life = 3;


        this.isPlayer = 0;
        

        this.isAttack = 0;
        this.rightAttackDelta = 0;
        this.isCanParry = 0;
        this.stunCheck = 0;

        this.attackLeft = new Vec2(0,0);
        this.checkA = 0;

        this.stunDeltaTime = 0;

        this.leftAttackDelta = 0;



        this.behaviorCheck = 0;

        this.leftWalkDelta = 0;



        this.rightWalkDelta = 0;
        this.isBehavior = 0;
        

        this.effectDelta = 0;

        this.attackedRightDelta = 0;
        this.attackedLeftDelta = 0;





        this.attackPlayerDelta = 0;


        //PlayerShieldCheck
        this.playerShieldCheck = 0;
        this.deadDeltaTime = 0;
        this.isDead = 0;

        


    }
    
    animUpdate()
    {
        
        
        // quad(this.upLeft.x,this.upLeft.y,this.upRight.x,this.upRight.y,this.downRight.x,this.downRight.y,this.downLeft.x,this.downRight.y);
        push();
        imageMode(CENTER);
        if(this.rightAttackDelta > 1.0 && this.rightAttackDelta < 1.3)
        {
            fill('red');
            rect(this.pos.x-20,this.pos.y-65,this.rightAttackDelta*30,10);
        }else{
            fill(255);
            rect(this.pos.x-20,this.pos.y-65,this.rightAttackDelta*30,10);
        }

        if(this.leftAttackDelta > 1.0 && this.leftAttackDelta < 1.3)
        {
            fill('red');
            rect(this.pos.x-20,this.pos.y-65,this.leftAttackDelta*30,10);
        }else{
            fill(255);
            rect(this.pos.x-20,this.pos.y-65,this.leftAttackDelta*30,10);
        }

        



        if(this.type == 1 && this.isDead == 0)
        {
            
            if(this.animState == 0)
            {
                this.animDefaultDelta += deltaTime/1000;
                if(this.animDefaultDelta > 0.8 && this.animDefaultDelta < 1.2)
                {
                    image(this.defaultImage[2],this.pos.x,this.pos.y-10,300,300);
                    this.defaultCheck = 1;
                }else if(this.animDefaultDelta > 0.4 && this.animDefaultDelta < 0.8)
                {
                    image(this.defaultImage[1],this.pos.x,this.pos.y-10,300,300);
                }else{
                    image(this.defaultImage[0],this.pos.x,this.pos.y-10,300,300);
                    if(this.defaultCheck == 1)
                    {
                        this.animDefaultDelta = 0;
                        this.defaultCheck = 0;
                    }
                }
            }else if(this.animState == 1)
            {
                this.leftAttackDelta += deltaTime/1000;
                
                
                if(this.leftAttackDelta > 1.6)
                {
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.leftAttackDelta = 0
                }else if(this.leftAttackDelta > 1.3 && this.leftAttackDelta < 1.4)
                {
                    
                    this.isCanParry = 0;
                    image(this.leftAttack[2],this.pos.x,this.pos.y-10,300,300);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    
                    
                }else if(this.leftAttackDelta > 1.0 && this.leftAttackDelta<1.3)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.leftAttack[1],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    this.isCanParry = 0;
                    image(this.leftAttack[0],this.pos.x,this.pos.y-10,300,300);
                    this.isAttack = 0;
                }
            }else if(this.animState == 2)
            {

                this.rightAttackDelta += deltaTime/1000;

                if(this.rightAttackDelta > 1.6)
                {
                    console.log("add2");
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.rightAttackDelta = 0
                }else if(this.rightAttackDelta > 1.3 && this.rightAttackDelta < 1.4)
                {
                    this.isCanParry = 0;
                    image(this.rightAttack[2],this.pos.x,this.pos.y-10,300,300);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    
                }else if(this.rightAttackDelta > 1.0 && this.rightAttackDelta<1.3)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.rightAttack[1],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    image(this.rightAttack[0],this.pos.x,this.pos.y-10,300,300);
                }

            }else if(this.animState == 3)
            {

                this.stunDeltaTime += deltaTime/1000;
                if(this.stunDeltaTime > 1.5)
                {
                    this.behaviorCheck = 0;
                    this.stunCheck = 0;
                    this.animState = 0;
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    this.stunDeltaTime = 0;
                }else if(this.stunDeltaTime >0.4)
                {
                    image(this.leftAttack[5],this.pos.x,this.pos.y-10,300,300);
                }else if(this.stunDeltaTime >0.2 && this.stunDeltaTime<0.4)
                {
                    image(this.leftAttack[4],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    image(this.leftAttack[3],this.pos.x,this.pos.y-10,300,300);
                }

            }else if(this.animState == 4)
            {
                this.stunDeltaTime += deltaTime/1000;
                if(this.stunDeltaTime > 1.5)
                {
                    this.behaviorCheck = 0;
                    this.stunCheck = 0;
                    
                    this.animState = 0;
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    this.stunDeltaTime = 0;
                }else if(this.stunDeltaTime >0.4)
                {
                    image(this.rightAttack[5],this.pos.x,this.pos.y-10,300,300);
                }else if(this.stunDeltaTime >0.2 && this.stunDeltaTime<0.4)
                {
                    image(this.rightAttack[4],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    image(this.rightAttack[3],this.pos.x,this.pos.y-10,300,300);
                }

            }else if(this.animState == 5)
            {
                this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[3],this.pos.x,this.pos.y-10,300,300);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[3],this.pos.x,this.pos.y-10,300,300);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[2],this.pos.x,this.pos.y-10,300,300);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[1],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    image(this.moveImage[0],this.pos.x,this.pos.y-10,300,300);
                }
            }else if(this.animState == 6)
            {
                this.leftWalkDelta += deltaTime/1000;
                if(this.leftWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[7],this.pos.x,this.pos.y-10,300,300);
                    this.leftWalkDelta = 0;
                }else if(this.leftWalkDelta >0.6)
                {
                    image(this.moveImage[7],this.pos.x,this.pos.y-10,300,300);
                }else if(this.leftWalkDelta >0.4)
                {
                    image(this.moveImage[6],this.pos.x,this.pos.y-10,300,300);
                }else if(this.leftWalkDelta >0.2)
                {
                    image(this.moveImage[5],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    image(this.moveImage[4],this.pos.x,this.pos.y-10,300,300);
                } 
            }else if(this.animState == 7)
            {
                this.attackedLeftDelta += deltaTime/1000;
                
                if(this.attackedLeftDelta > 0.5)
                {
                    
                    image(this.defaultImage[4],this.pos.x,this.pos.y-10,300,300);
                    this.attackedLeftDelta = 0;
                    this.isAttacked = 0;
                    this.leftAttackDelta = 0;
                    this.rightAttackDelta = 0;

                    this.isPlayer = 0;
                    this.animState = 0;
                    this.isAttack = 0;
                    this.stunCheck = 0;

                }else{
                    image(this.defaultImage[4],this.pos.x,this.pos.y-10,300,300);
                    this.behaviorCheck = 0;
                    this.acc.x = 0;
                    this.vel.x = 0;
                }

            }else if(this.animState == 8)
            {
                this.attackedRightDelta += deltaTime/1000;
                
                
                if(this.attackedRightDelta > 0.5)
                {
                    
                    image(this.defaultImage[3],this.pos.x,this.pos.y-10,300,300);
                    this.attackedRightDelta = 0;
                    this.isAttacked = 0;
                    this.rightAttackDelta = 0;
                    this.leftAttackDelta = 0;

                    this.isPlayer = 0;
                    this.animState = 0;
                    this.isAttack = 0;
                    this.stunCheck = 0;

                }else{
                    image(this.defaultImage[3],this.pos.x,this.pos.y-10,300,300);
                    this.behaviorCheck = 0;
                    this.acc.x = 0;
                    this.vel.x = 0;
                }
            }
        }



        
        if(this.isAttacked == 1)
        {
            image(effectImage,this.pos.x,this.pos.y);
        }else if(this.isAttacked == 0){
            
        }
        pop();
        
    }



    behavior(player,platform)
    {

        // circle(this.pos.x,this.pos.y+30,10);
        // circle(this.pos.x,this.pos.y-30,10);
        if((this.downRight.x> platform.x && this.downRight.x < platform.x+platform.width+this.right) && ((this.downRight.y >= platform.y-10) && (this.downRight.y <=platform.y+15)))
        {

        
        if(this.checkRange(platform.x,platform.x+platform.width,player.downLeft.x,player.downRight.x) && this.checkRange(player.downRight.y,player.upLeft.y,platform.y,platform.y-40))
        {
            
            this.isBehavior =1;
            this.isPlayer = 1;
            if(player.pos.x < this.pos.x && this.behaviorCheck == 0 && this.isAttack == 0  && this.isAttacked == 0)
            {
                // this.vel.x = 0;
                this.animState = 6;
                // this.vel.x = -(this.pos.x-player.pos.x)
                this.vel.x = -350 + random(-20,20);
                
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 140 +random(-20,20) && (this.pos.y > player.pos.y-50 &&this.pos.y<player.pos.y+100))
                    {
                        this.behaviorCheck = 1;
                        this.animState = 1;
                        this.acc.x = 0;
                        this.checkA = 1;
                        this.leftWalkDelta = 0;
                        this.rightWalkDelta = 0;
                        this.vel.x = 0;
                    }
                
            }else if(player.pos.x > this.pos.x && this.behaviorCheck == 0 && this.isAttack == 0 && this.isAttacked == 0){
                // this.vel.x = 0;
                this.animState = 5;
                // this.vel.x = (player.pos.x-this.pos.x)
                this.vel.x = 350;
                
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 80 +random(-20,20) && (this.pos.y > player.pos.y-50 &&this.pos.y<player.pos.y+100))
                    {
                        this.behaviorCheck = 1;
                        this.animState = 2;
                        this.acc.x = 0;
                        this.checkA = 0;
                        this.rightWalkDelta = 0;
                        this.leftWalkDelta = 0;
                        this.vel.x = 0;
                    }
                
            }
        }else if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) > 400 && !(this.animState == 1 || this.animState == 2 || this.animState == 3 || this.animState == 4))
        {
            this.isPlayer = 0;
            this.isBehavior = 0;
        }

    }

    }



    update()
    {
        this.gravityVel.addTo(this.accGravity);
        this.gravityVel.limit(15);
        // this.vel.addTo(this.acc);
        
        this.pos.addTo(this.gravityVel);
        
        // this.pos.addTo(this.vel);
        this.pos.addToTimeDelta(this.vel);
        
        
        
        
        if(this.vel.x > 0)
        {
            this.ray.set(this.pos.x+this.right+20,this.pos.y+this.rayDown)
        }else if(this.vel.x < 0)
        {
            this.ray.set(this.pos.x-(this.right+20),this.pos.y+this.rayDown)
        }else{
            this.ray.set(this.pos.x+this.right+20,this.pos.y+this.rayDown)
        }
        //this.downRight = new Vec2(this.pos.x+_right,this.pos.y+27.5);
        this.downRight.set(this.pos.x+this.right,this.pos.y+this.up);
        this.downLeft.set(this.pos.x+this.left,this.pos.y+this.up)
        //this.upRight = new Vec2(this.pos.x+_right,this.pos.y-27.5);
        // this.upLeft = new Vec2(this.pos.x+_left,this.pos.y-27.5);
        this.upRight.set(this.pos.x+this.right,this.pos.y+this.down);
        this.upLeft.set(this.pos.x+this.left,this.pos.y+this.down);

        


        if(this.checkA == 1)
        {
            this.attackLeft.set(this.pos.x-90,this.pos.y-30);
        }else{
            this.attackLeft.set(this.pos.x+30,this.pos.y-30);
        }

    





        

    }

    moveUpdate()
    {
        if(this.isPlayer == 0)
        {
            this.moveDelta += deltaTime/1000;
            if(this.moveDelta > 4)
            {
                this.moveState = floor(random(0,4));
                this.moveDelta = 0;
                if(this.moveState == 1)
                {
                    
                    // this.acc.set(-1,0);
                    this.vel.x = -300;
                    this.animState = 6;
                }else if(this.moveState == 2)
                {
                    // this.acc.set(1,0);
                    this.vel.x = 300;
                    this.animState = 5;
                }
            }
            if(this.moveState == 0)
            {
                this.acc.set(0,0);
                this.vel.set(0,0);
                this.animState = 0;
            }
        }
        // this.vel.limit(2);

    }

    platformCheck(platform)
    {
        
        if(platform.type == 0)
        {

            
        if(this.isAttacked == 0)
        {
            if((this.downRight.x> platform.x && this.downRight.x < platform.x+platform.width+this.right) && ((this.downRight.y >= platform.y-10) && (this.downRight.y <=platform.y+15)))
            {

            
            //!(((this.ray.x> platform.x && this.ray.x+10 < platform.x+platform.width) && (this.ray.y >= platform.y-3)) && ((this.ray.y+50 <=platform.y+platform._height)))     
            // if(!(this.checkRange(this.ray.x,this.ray.x+10,platform.x,platform.x+platform.width) && this.checkRange(this.ray.y,this.ray.y+50,platform.y-3,platform.y+platform._height)) && this.isBehavior == 1)
            // {
                
            //     console.log(platform);
            //     this.animState = 0;
            //     this.acc.x = 0;
            //     this.vel.x = 0;
            //     this.gravityVel.x = 0;

            // }else 
            if(!(this.checkRange(this.ray.x,this.ray.x+10,platform.x,platform.x+platform.width) && this.checkRange(this.ray.y,this.ray.y+50,platform.y-3,platform.y+platform._height)))
            {
                if(this.vel.x > 0)
                {
                    this.animState = 6;
                }else if(this.vel.x <0){
                    this.animState = 5;
                }
                this.vel.x *= -1;
            }
        }
        }

        }
    }



    



    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    checkParry(player)
    {
        //this.attackLeft.set(this.pos.x+30,this.pos.y-30);
        // quad(this.attackLeft.x,this.attackLeft.y,this.attackLeft.x+60,this.attackLeft.y,this.attackLeft.x+60,this.attackLeft.y+50,this.attackLeft.x,this.attackLeft.y+50);
        // if(player.checkA == 0)
        // {
        //     quad(player.attackLeft.x,player.attackLeft.y,player.attackLeft.x+20,player.attackLeft.y,player.attackLeft.x+20,player.attackLeft.y+50,player.attackLeft.x,player.attackLeft.y+50);
        // }else{
        //     quad(player.attackLeft.x+40,player.attackLeft.y,player.attackLeft.x+60,player.attackLeft.y,player.attackLeft.x+60,player.attackLeft.y+50,player.attackLeft.x+40,player.attackLeft.y+50);
        // }

        if(player.checkA == 0)
        {
            if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,player.attackLeft.x,player.attackLeft.x+20) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.attackLeft.y,player.attackLeft.y+50))
        {
            
            
            if(this.isCanParry == 1 && player.isParrying == 1)
            {
                if(this.stunCheck == 0)
                {
                        console.log("여기");
                        this.animState = 3;
                        this.stunCheck = 1;
                        this.leftAttackDelta = 0;
                        this.rightAttackDelta = 0;
                        
                        if(player.life < 5)
                        {
                            player.life += 1;
                        }
                        
                    
                }
            }
            this.isCanParry = 0;
            player.isParrying = 0;

        }
        }else{
            if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,player.attackLeft.x+40,player.attackLeft.x+60) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.attackLeft.y,player.attackLeft.y+50))
        {
            
            
            if(this.isCanParry == 1 && player.isParrying == 1)
            {
                if(this.stunCheck == 0)
                {
                    
                        this.animState = 4;
                        this.stunCheck = 1;
                        this.leftAttackDelta = 0;
                        this.rightAttackDelta = 0;
                        
                        if(player.life < 5)
                        {
                            player.life += 1;
                        }
                    
                }
            }
            this.isCanParry = 0;
            player.isParrying = 0;

        }
        }
        
    }


    checkAttack(player)
    {

        // rect(this.attackLeft.x,this.attackLeft.y,60,50);
        if(this.isAttack == 1 && player.isGuard == 0 && this.stunCheck == 0 && player.attackedCheck == 0 && player.checkRoll == 0)
        {  

            if(player.life >0)
            {   
                
                
                if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        
                        
                        if(this.checkA == 0 )
                        {
                            if(player.attackedCheck == 0)
                            {
                                console.log(player.attackedCheck);
                                this.sfx[1].setVolume(0.5);
                                
                                    console.log("addd");
                                    this.sfx[1].play();
                                
                                
                                player.life -= 1;
                            }

                            player.attackedCheck = 1;
                            
                            
                            // player.gravityVel.addTo(new Vec2(2,-2));
                            // player.pos.x += 100;
                            player.attackedVel.x = 300;
                            
                            
                        }else{
                        
                            if(player.attackedCheck == 0)
                            {
                                console.log(player.attackedCheck);
                                this.sfx[1].setVolume(0.5);
                                
                                    console.log("addd");
                                    this.sfx[1].play();
                                
                                player.life -=1;
                            }
                            player.attackedCheck = 1;
                          
                            // player.gravityVel.addTo(new Vec2(-2,-2));
                            // player.pos.x += -100;
                            player.attackedVel.x = -300;
                            
                            
                        }
                        
                        
                    }else{

                    }
                
                }
            }else if(this.isAttack == 1 && player.isGuard == 1  && this.stunCheck == 0)
            {
                if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        if(this.checkA == 0 && player.checkA == 1)
                        {
                            
                            // player.gravityVel.addTo(new Vec2(1,-1));
                            player.shieldVel.x = 300;
                            if(this.playerShieldCheck == 0)
                            {
                                player.shieldCount -= 1;
                                this.sfx[0].setVolume(0.3);
                                this.sfx[0].play();
                            }
                            this.playerShieldCheck = 1;
                            
                            
                            
                        }else if(this.checkA == 1 && player.checkA == 0){
                            
                            // player.gravityVel.addTo(new Vec2(-1,-1));
                            player.shieldVel.x = -300;
                            if(this.playerShieldCheck == 0 )
                            {
                                this.sfx[0].setVolume(0.3);
                                this.sfx[0].play();
                                player.shieldCount -= 1;
                            }
                            this.playerShieldCheck = 1;
                            
                        }else{
                            if(player.attackedCheck == 0)
                            {
                                if(this.checkA == 0)
                                {
                                    player.attackedVel.x = 300;
                                }else{
                                    player.attackedVel.x = -300;
                                }
                                
                                console.log(player.attackedCheck);
                                this.sfx[1].setVolume(0.5);
                                
                                    this.sfx[1].play();
                                
                                player.life -=1;
                            }
                            player.attackedCheck = 1;
                        }
                        
                        
                    }
            }

    }

    dead()
    {
        push();
        imageMode(CENTER);
        if(this.deadDeltaTime <= 0.61)
        {
            this.deadDeltaTime += deltaTime/1000;
        }
        if(this.deadDeltaTime >= 0.6)
        {
            image(this.moveImage[10],this.pos.x,this.pos.y-5,200,200);
            
            
        }else if(this.deadDeltaTime >= 0.4 && this.deadDeltaTime <= 0.6)
        {
            image(this.moveImage[10],this.pos.x,this.pos.y-5,200,200);
        }else if(this.deadDeltaTime >= 0.2 && this.deadDeltaTime <= 0.4)
        {
            image(this.moveImage[9],this.pos.x,this.pos.y-5,200,200);
        }else if(this.deadDeltaTime >= 0){
            image(this.moveImage[8],this.pos.x,this.pos.y-5,200,200);
            this.isDead = 1;
        }
        pop();
    }














    
}