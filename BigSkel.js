// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

class BigSkel
{
    constructor(_type,_defaultImage,_x,_y,_right,_left,_up,_down,_rayDown,_rightAttack = null,_leftAttack,_moveImage,_effectImage,sfx)
    {

        this.type = _type;
        this.sfx = sfx;


        this.magicImage = _defaultImage;
        this.rightAttack = _rightAttack;
        this.leftAttack = _leftAttack;
        this.moveImage = _moveImage;
        this.effectImage = _effectImage;


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

        this.life = 5;


        this.isPlayer = 0;
        

        this.isAttack = 0;
      
        this.rightAttackDelta = 0;
    
        this.isParried = 0;
       
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







    
        this.attackPlayerDelta = 0;

        this.magicCheck = 0;
        this.magicDeltaTime = 0;

        
        this.playerPosCheck = 0;
        this.playerPos_x = 0;
        this.playerPos_y = 0;
        this.platformY = 0;

        this.isMagic = 0;

        this.whereMagic = 0;
        this.rightAttackRange = 0;


    

        
        
        this.platformCheckY = 0;
        this.musicCheck = 0;

        this.deadDeltaTime  = 0;
        this.isDead = 0;

        


    }
    
    animUpdate()
    {
        push();
        imageMode(CENTER);
        if(this.type == 3 && this.isDead == 0)
        {
            
            
     
            if(this.animState == 0)
            {
                // this.animDefaultDelta += deltaTime/1000;
                // if(this.animDefaultDelta > 0.8 && this.animDefaultDelta < 1.2)
                // {
                //     image(this.defaultImage[2],this.pos.x,this.pos.y-10,300,300);
                //     this.defaultCheck = 1;
                // }else if(this.animDefaultDelta > 0.4 && this.animDefaultDelta < 0.8)
                // {
                //     image(this.defaultImage[1],this.pos.x,this.pos.y-10,300,300);
                // }else{
                //     image(this.defaultImage[0],this.pos.x,this.pos.y-10,300,300);
                //     if(this.defaultCheck == 1)
                //     {
                //         this.animDefaultDelta = 0;
                //         this.defaultCheck = 0;
                //     }
                // }
                image(this.moveImage[0],this.pos.x,this.pos.y-5,400,400);
       
            }else if(this.animState == 1)
            {
                    this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[5],this.pos.x,this.pos.y-5,400,400);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[4],this.pos.x,this.pos.y-5,400,400);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[3],this.pos.x,this.pos.y-5,400,400);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[2],this.pos.x,this.pos.y-5,400,400);
                }else
                {
                    image(this.moveImage[1],this.pos.x,this.pos.y-5,400,400);
                }
           
            }else if(this.animState == 2)
            {

                this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[11],this.pos.x,this.pos.y-5,400,400);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[10],this.pos.x,this.pos.y-5,400,400);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[9],this.pos.x,this.pos.y-5,400,400);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[8],this.pos.x,this.pos.y-5,400,400);
                }else
                {
                    image(this.moveImage[7],this.pos.x,this.pos.y-5,400,400);
                }
                // this.rightAttackDelta += deltaTime/1000;

                // if(this.rightAttackDelta > 1.6)
                // {
                //     console.log("add2");
                //     this.isCanParry = 0;
                //     this.isAttack = 0;
                    
                //     this.animState = 0;
                //     this.behaviorCheck = 0;
                //     this.rightAttackDelta = 0
                // }else if(this.rightAttackDelta > 1.3 && this.rightAttackDelta < 1.4)
                // {
                //     this.isCanParry = 0;
                //     image(this.rightAttack[2],this.pos.x,this.pos.y-10,400,400);
                //     this.isAttack = 0;
                    
                    
                // }else if(this.rightAttackDelta > 1.0 && this.rightAttackDelta<1.3)
                // {
                    
                //     this.isCanParry = 1;
                //     this.isAttack = 1;
                //     image(this.rightAttack[1],this.pos.x,this.pos.y-10,400,400);
                // }else
                // {
                //     this.isCanParry = 0;
                //     this.isAttack = 0;
                //     image(this.rightAttack[0],this.pos.x,this.pos.y-10,400,400);
                // }

        
            }else if(this.animState == 3)
            {

                // this.stunDeltaTime += deltaTime/1000;
                // if(this.stunDeltaTime > 1.5)
                // {
                //     this.behaviorCheck = 0;
                //     this.stunCheck = 0;
                //     this.animState = 0;
                //     this.isCanParry = 0;
                //     this.isAttack = 0;
                //     this.stunDeltaTime = 0;
                // }else if(this.stunDeltaTime >0.4)
                // {
                //     image(this.leftAttack[5],this.pos.x,this.pos.y-10,400,400);
                // }else if(this.stunDeltaTime >0.2 && this.stunDeltaTime<0.4)
                // {
                //     image(this.leftAttack[4],this.pos.x,this.pos.y-10,400,400);
                // }else
                // {
                //     image(this.leftAttack[3],this.pos.x,this.pos.y-10,400,400);
                // }
                this.rightAttackDelta += deltaTime/1000;
                if(this.rightAttackDelta > 1.6)
                {
                    console.log("add2");
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    image(this.rightAttack[2],this.pos.x,this.pos.y-5,400,400);
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.rightAttackDelta = 0
                    
                }else if(this.rightAttackDelta > 1.3 && this.rightAttackDelta < 1.4)
                {
                    this.isCanParry = 0;
                    image(this.rightAttack[2],this.pos.x,this.pos.y-5,400,400);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    if(this.magicCheck == 0)
                    {
                        this.playerPosCheck = 1;
                    }else{
                        this.playerPosCheck = 0;
                    }
                    this.magicCheck = 1;
                    this.whereMagic = 1;
                    
                }else if(this.rightAttackDelta > 1.0 && this.rightAttackDelta<1.3)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.rightAttack[1],this.pos.x,this.pos.y-5,400,400);
                }else
                {
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    image(this.rightAttack[0],this.pos.x,this.pos.y-5,400,400);
                    
                    
                }





                


            }else if(this.animState == 4)
            {
                this.leftAttackDelta += deltaTime/1000;
                
                
                if(this.leftAttackDelta > 1.6)
                {
                    console.log("add2");
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    image(this.leftAttack[2],this.pos.x,this.pos.y-5,400,400);
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.leftAttackDelta = 0
                    
                    
                }else if(this.leftAttackDelta > 1.3 && this.leftAttackDelta < 1.4)
                {
                    
                    this.isCanParry = 0;
                    image(this.leftAttack[2],this.pos.x,this.pos.y-5,400,400);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    if(this.magicCheck == 0)
                    {
                        this.playerPosCheck = 1;
                    }else{
                        this.playerPosCheck = 0;
                    }
                    this.magicCheck = 1;
                    this.whereMagic = 2;
                    
                    
                }else if(this.leftAttackDelta > 1.0 && this.leftAttackDelta<1.3)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.leftAttack[1],this.pos.x,this.pos.y-5,400,400);
                }else
                {
                    this.isCanParry = 0;
                    image(this.leftAttack[0],this.pos.x,this.pos.y-5,400,400);
                    this.isAttack = 0;
                    

                }
                
            }
            // else if(this.animState == 5)
            // {
            //     this.rightWalkDelta += deltaTime/1000;
            //     if(this.rightWalkDelta > 0.8)
            //     {
                    
            //         image(this.moveImage[3],this.pos.x,this.pos.y-10,300,300);
            //         this.rightWalkDelta = 0;
            //     }else if(this.rightWalkDelta >0.6)
            //     {
            //         image(this.moveImage[3],this.pos.x,this.pos.y-10,300,300);
            //     }else if(this.rightWalkDelta >0.4)
            //     {
            //         image(this.moveImage[2],this.pos.x,this.pos.y-10,300,300);
            //     }else if(this.rightWalkDelta >0.2)
            //     {
            //         image(this.moveImage[1],this.pos.x,this.pos.y-10,300,300);
            //     }else
            //     {
            //         image(this.moveImage[0],this.pos.x,this.pos.y-10,300,300);
            //     }
            // //왼쪽으로 걷기.
            // }else if(this.animState == 6)
            // {
            //     this.leftWalkDelta += deltaTime/1000;
            //     if(this.leftWalkDelta > 0.8)
            //     {
                    
            //         image(this.moveImage[7],this.pos.x,this.pos.y-10,300,300);
            //         this.leftWalkDelta = 0;
            //     }else if(this.leftWalkDelta >0.6)
            //     {
            //         image(this.moveImage[7],this.pos.x,this.pos.y-10,300,300);
            //     }else if(this.leftWalkDelta >0.4)
            //     {
            //         image(this.moveImage[6],this.pos.x,this.pos.y-10,300,300);
            //     }else if(this.leftWalkDelta >0.2)
            //     {
            //         image(this.moveImage[5],this.pos.x,this.pos.y-10,300,300);
            //     }else
            //     {
            //         image(this.moveImage[4],this.pos.x,this.pos.y-10,300,300);
            //     }
            //왼쪽 피격 모션.    
            
        }

        //this.behaviorCheck = 1;
        // this.animState = 1;
        // this.acc.x = 0;
        // this.checkA = 1;
        // this.leftWalkDelta = 0;
        // this.rightWalkDelta = 0;




        // if(this.isAttacked == 1 && this.effectDelta < 0.15)
        // {
        //     this.effectDelta += deltaTime/1000;
        //     image(effectImage,this.pos.x,this.pos.y);
        // }else if(this.isAttacked == 0){
        //     this.effectDelta = 0
        // }
        if(this.isAttacked == 1)
        {
            image(effectImage,this.pos.x,this.pos.y);
        }else if(this.isAttacked == 0){
            
        }
        pop();



        
        
    }

    specialAttack(player)
    {
        // circle(this.attackLeft.x,this.attackLeft.y,30);
        if(this.playerPosCheck == 1)
        {
            this.playerPos_x = this.attackLeft.x;
            this.playerPos_y = this.attackLeft.y;
           
        }
       if(this.magicCheck == 1)
       {
           
           this.magicDeltaTime += deltaTime/1000;
           if(this.whereMagic == 1)
           {
               if(this.magicDeltaTime > 0.77)
               {
                //12
                image(this.magicImage[23],this.playerPos_x,this.playerPos_y-120,300,300);
                this.magicDeltaTime = 0;
                this.magicCheck = 0;
                this.isMagic = 0;
                this.whereMagic = 0;
                this.musicCheck = 0;
               }else if(this.magicDeltaTime >0.70 && this.magicDeltaTime <0.77)
               {
                //11
                image(this.magicImage[22],this.playerPos_x,this.playerPos_y-120,300,300);
               }else if(this.magicDeltaTime >0.63 && this.magicDeltaTime <0.70)
               {
                //10
                image(this.magicImage[21],this.playerPos_x,this.playerPos_y-120,300,300);
                
               }else if(this.magicDeltaTime >0.56 && this.magicDeltaTime <0.63)
               {
                //9
                image(this.magicImage[20],this.playerPos_x,this.playerPos_y-120,300,300);
               }else if(this.magicDeltaTime >0.49 && this.magicDeltaTime <0.56)
               {
                //8
                image(this.magicImage[19],this.playerPos_x,this.playerPos_y-120,300,300);
               }else if(this.magicDeltaTime >0.42 && this.magicDeltaTime <0.49)
               {
                //7
                image(this.magicImage[18],this.playerPos_x,this.playerPos_y-120,300,300);
                this.rightAttackRange = 180;
               }else if(this.magicDeltaTime >0.35 && this.magicDeltaTime <0.42)
               {
                //6
                image(this.magicImage[17],this.playerPos_x,this.playerPos_y-120,300,300);
                
               }else if(this.magicDeltaTime >0.28 && this.magicDeltaTime <0.35)
               {
                //5
                image(this.magicImage[16],this.playerPos_x,this.playerPos_y-120,300,300);
                this.rightAttackRange = 120;
               }else if(this.magicDeltaTime >0.21 && this.magicDeltaTime <0.28)
               {
                //4
                image(this.magicImage[15],this.playerPos_x,this.playerPos_y-120,300,300);
               }else if(this.magicDeltaTime >0.14 && this.magicDeltaTime <0.21)
               {
                //3
                image(this.magicImage[14],this.playerPos_x,this.playerPos_y-120,300,300);
                this.isMagic = 1;
                this.rightAttackRange = 60;
               }else if(this.magicDeltaTime >0.07 && this.magicDeltaTime <0.14)
               {
                //2
                image(this.magicImage[13],this.playerPos_x,this.playerPos_y-120,300,300);
                
               }else if(this.magicDeltaTime > 0){
                
                //1
                image(this.magicImage[12],this.playerPos_x,this.playerPos_y-120,300,300);
                if(this.musicCheck == 0)
                {
                    this.sfx[0].play();
                    this.musicCheck = 1;
                }
               }
           }else if(this.whereMagic == 2){
         
            if(this.magicDeltaTime > 0.77)
            {
                //12
             image(this.magicImage[11],this.playerPos_x-200,this.playerPos_y-120,300,300);
             this.magicDeltaTime = 0;
             this.magicCheck = 0;
             this.isMagic = 0;
             this.whereMagic = 0;
             this.musicCheck = 0;
            }else if(this.magicDeltaTime >0.70 && this.magicDeltaTime <0.77)
            {
                //11
             image(this.magicImage[10],this.playerPos_x-200,this.playerPos_y-120,300,300);
            }else if(this.magicDeltaTime >0.63 && this.magicDeltaTime <0.70)
            {
                //10
             image(this.magicImage[9],this.playerPos_x-200,this.playerPos_y-120,300,300);
            }else if(this.magicDeltaTime >0.56 && this.magicDeltaTime <0.63)
            {
                //9
             image(this.magicImage[8],this.playerPos_x-200,this.playerPos_y-120,300,300);
            }else if(this.magicDeltaTime >0.49 && this.magicDeltaTime <0.56)
            {
                //8
             image(this.magicImage[7],this.playerPos_x-200,this.playerPos_y-120,300,300);
            }else if(this.magicDeltaTime >0.42 && this.magicDeltaTime <0.49)
            {
                //7
             image(this.magicImage[6],this.playerPos_x-200,this.playerPos_y-120,300,300);
             this.rightAttackRange = 180;
            }else if(this.magicDeltaTime >0.35 && this.magicDeltaTime <0.42)
            {
                //6
             image(this.magicImage[5],this.playerPos_x-200,this.playerPos_y-120,300,300);
            }else if(this.magicDeltaTime >0.28 && this.magicDeltaTime <0.35)
            {
                //5
             image(this.magicImage[4],this.playerPos_x-200,this.playerPos_y-120,300,300);
             this.rightAttackRange = 120;
            }else if(this.magicDeltaTime >0.21 && this.magicDeltaTime <0.28)
            {
                //4
             image(this.magicImage[3],this.playerPos_x-200,this.playerPos_y-120,300,300);
             
            }else if(this.magicDeltaTime >0.14 && this.magicDeltaTime <0.21)
            {
                //3
             image(this.magicImage[2],this.playerPos_x-200,this.playerPos_y-120,300,300);
             this.rightAttackRange = 60;
             this.isMagic = 1;
            }else if(this.magicDeltaTime >0.07 && this.magicDeltaTime <0.14)
            {
            //2
             image(this.magicImage[1],this.playerPos_x-200,this.playerPos_y-120,300,300);
             
            }else if(this.magicDeltaTime > 0){
             //1
             image(this.magicImage[0],this.playerPos_x-200,this.playerPos_y-120,300,300);
             if(this.musicCheck == 0)
                {
                    this.sfx[0].play();
                    this.musicCheck = 1;
                }
            }
           }
       }else{

       }
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
                this.animState = 1;
                // this.vel.x = -(this.pos.x-player.pos.x)
                this.vel.x = -350;
                this.checkA = 1;
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 300  && (this.pos.y > player.pos.y-50 &&this.pos.y<player.pos.y+100))
                    {
                        this.behaviorCheck = 1;
                        this.animState = 4;
                        this.acc.x = 0;
                        this.checkA = 1;
                        this.leftWalkDelta = 0;
                        this.rightWalkDelta = 0;
                        this.vel.x = 0;
                    }
                
            }else if(player.pos.x > this.pos.x && this.behaviorCheck == 0 && this.isAttack == 0 && this.isAttacked == 0){
                // this.vel.x = 0;
                this.animState = 2;
                // this.vel.x = (player.pos.x-this.pos.x)
                this.vel.x = 350 + random(-50,50);
                
                this.checkA = 0;
                
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 260 && (this.pos.y > player.pos.y-50 &&this.pos.y<player.pos.y+100))
                    {
                        
                        this.behaviorCheck = 1;
                        this.animState = 3;
                        this.acc.x = 0;
                        this.checkA = 0;
                        this.rightWalkDelta = 0;
                        this.leftWalkDelta = 0;
                        this.vel.x = 0;
                    }
                
            }
        }else if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) > 400 && !(this.animState == 3 || this.animState == 4))
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
                    this.animState = 1;
                }else if(this.moveState == 2)
                {
                    // this.acc.set(1,0);
                    this.vel.x = 300;
                    this.animState = 2;
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
                    this.animState = 1;
                }else if(this.vel.x <0){
                    this.animState = 2;
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

    
    




    checkAttack(player)
    {
        
        // rect(this.playerPos_x+this.rightAttackRange,this.playerPos_y,this.rightAttackRange+100,50);
        // rect(this.playerPos_x-(this.rightAttackRange*2),this.playerPos_y,200,50);
        // rect(this.attackLeft.x-20,this.attackLeft.y,70,50);
        // circle(this.attackLeft.x,this.attackLeft.y,30);
        if(this.isAttack == 1 && player.attackedCheck == 0 && player.checkRoll == 0)
        {  

            if(player.life >0)
            {   
                
                if(this.checkA == 0)
                {
                    
                    if(this.checkRange(this.attackLeft.x,this.attackLeft.x+100,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        
                        
                        if(this.checkA == 0 )
                        {
                            if(player.attackedCheck == 0)
                            {
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
                }else{
                    
                    if(this.checkRange(this.attackLeft.x-20,this.attackLeft.x+60,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        
                        
                        if(this.checkA == 0 )
                        {
                            if(player.attackedCheck == 0)
                            {
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
                
                
                }
            }else if(this.isMagic == 1 && player.attackedCheck == 0 && player.checkRoll == 0)
            {
                
                if(player.life >0)
                {   
                    
                    if(this.whereMagic == 1)
                    {
                       
                        if(this.checkRange(this.playerPos_x+90,this.playerPos_x+90+this.rightAttackRange,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                        {
    
                            
                            
                          
                            if(this.checkA == 0 )
                            {
                                if(player.attackedCheck == 0)
                                {
                                    this.sfx[1].play();
                                    player.life -= 1;
                                }
    
                                player.attackedCheck = 1;
                                
                                
                                player.attackedVel.x = 300;
                                
                                
                            }
                            
                            
                        }else{
    
                        }
                    }else if(this.whereMagic == 2){
                        
                        if(this.checkRange(this.playerPos_x-this.rightAttackRange,this.playerPos_x-180+200,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                        {
    
                            
                          
                            //오른쪽 네모
                            
                                
                            
                                if(player.attackedCheck == 0)
                                {
                                    this.sfx[1].play();
                                    player.life -=1;
                                }
                                player.attackedCheck = 1;
                              
                                // player.gravityVel.addTo(new Vec2(-2,-2));
                                // player.pos.x += -100;
                                player.attackedVel.x = -300;
                                
                                
                            
                            
                        }else{
    
                        }
                    }
                    
                    
                    }
            }
        }

    dead()
    {
        push();
        imageMode(CENTER);
        if(this.deadDeltaTime < 0.61)
        {
            this.deadDeltaTime += deltaTime/1000;
        }
        
        if(this.deadDeltaTime >= 0.6)
        {
            image(this.moveImage[14],this.pos.x,this.pos.y-5,400,400);
            
        }else if(this.deadDeltaTime >= 0.4 && this.deadDeltaTime <= 0.6)
        {
            image(this.moveImage[14],this.pos.x,this.pos.y-5,400,400);
        }else if(this.deadDeltaTime >= 0.2 && this.deadDeltaTime <= 0.4)
        {
            image(this.moveImage[13],this.pos.x,this.pos.y-5,400,400);
        }else if(this.deadDeltaTime >= 0){
            image(this.moveImage[12],this.pos.x,this.pos.y-5,400,400);
            this.isDead = 1;
        }
        pop();
    }


}