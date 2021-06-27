// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021


const MAIN = 0;
const RIGHT = 1;
const LEFT = 2;
const LEFTATTACK = 3;
const RIGHTATTACK = 4;
const LEFTGUARD = 5;
const RIGHTGUARD = 6;
const RIGHTROLL = 7;
const LEFTROLL = 8;
const LEFTSKILL = 9;
const RIGHTSKILL = 10;




class Player
{
    constructor(_defaultImage,_rightImage,_leftImage,_leftAttackImage,_rightAttackImage,_guardRight,_guardLeft,_uiImage,RollImage,sfx)
    {

        this.pos = new Vec2(100,500);
        this.moveVel = new Vec2(0,0);
        this.vel = new Vec2(0,0);
        this.attackedVel = new Vec2(0,0);
        this.shieldVel = new Vec2(0,0);
        

        this.sfx = sfx;

        this.animState = 0;
        //defualtImage
        this.animDefaultDelta = 0;

        //RightMotion
        this.RightDeltaTime = 0;
        
        //LeftButton
        this.LeftDeltaTime = 0;

        //LeftAttack
        this.LeftAttackDeltaTime = 0;

        //RightAttack
        this.RightAttackDeltaTime = 0;

        //attackCheck
        this.attackCheck = 0;
        //heatBox
        this.downRight = new Vec2(this.pos.x+62,this.pos.y+100);

       
        this.downLeft = new Vec2(this.pos.x+37,this.pos.y+100);

      
        this.upLeft = new Vec2(this.pos.x+30,this.pos.y+20);
       
        this.upRight = new Vec2(this.pos.x+62,this.pos.y+20);

        //downcheck
        this.downCheck = false;
        this.downCheckDelta = 0;
        this.downCheck_2 = false;

        

        


        this.defaultImage = _defaultImage;
        this.rightImage = _rightImage;
        this.leftImage = _leftImage;
        this.leftAttackImage = _leftAttackImage;
        this.rightAttackImage = _rightAttackImage;
        this.guardRightImage = _guardRight;
        this.guardLeftImage = _guardLeft;
        this.RollImage = RollImage;



        this.defaultCheck = 0;


        //Player Collision


        //jump about
        this.isJump = false;
        
        // this.checkCameraX = 600;
        // this.checkCameraX_L = 500;
        this.attackLeft = new Vec2(0,0);

        //left or right
        this.checkA = 0;
        this.isAttack = 0;


        //use for only one attack
        this.attOne = 0;

       // use for attacked only once time
        this.attackedCheck = 0;
        
        this.attackedDelta = 0;





        this.isGuard = 0;
        this.isParrying = 0;
        this.guardRightDeltaTime = 0;
        this.guardLeftDeltaTime = 0;
        this.guardRefillDelta = 0;



        // HP
        this.life = 5;
        //shield count
        this.shieldCount = 3;
        //shield restrict
        this.shieldCheck = 0;

        //uiImage
        this.uiImage = _uiImage;

        //lcombo about
        this.lComboState = 0;
        this.lComboDelta = 0;
        //rCombo about.
        this.rComboState = 0;
        this.rComboDelta = 0;


        //
        this.jumpDeltaTime = 0;
        this.jumpForce = 1600;
        this.doJump = false;


        // Gravity Force.
        this.gravityForce = 900;
        //jumpHeight





        //checkCamera
        this.checkMoveCamera = 0;
        //checkCamera




        //roll check
        this.checkRoll = 0;
        //roll vel
        this.rollVec = new Vec2(0,0);
        //roll deltaTime.
        this.rollDeltaTime = 0;

        //Start alram.
        this.startPlay = 0;
        //Roll
        this.rollCount = 3;
        this.rollCountDeltaTime = 0;

        //skill about.
        this.isSkill = 0;
        //RightSkillDelta;
        this.skillDeltaTime = 0;
        this.skillMoveCheck = 0;
        this.skillMovePos = new Vec2(0,0);
        this.isSkillAttack = 0;
        this.skillCount = 1;
        this.skillCountDelta = 0;

        this.musicCheck = 0;

    }

    update()
    {
        this.pos.y +=  this.gravityForce * deltaTime/1000;

        if(this.isJump && this.jumpForce > 0)
        {
            this.gravityForce = 900;
            this.jumpDeltaTime += deltaTime / 1000;
            this.pos.y -= this.jumpForce * deltaTime/1000;
            this.jumpForce -= this.gravityForce * deltaTime / 1000;
            
            if(this.jumpForce > this.gravityForce)
            {
                this.doJump = true;
            }else{
                this.doJump = false;
            }
            
        }else{
            this.jumpForce = 1600;
            this.isJump = false;
            this.gravityForce = 900;
        }
        
        
        
        this.pos.addToTimeDelta(this.moveVel);
        this.pos.addToTimeDelta(this.rollVec);
        if(this.attackedDelta <0.2 && this.attackedDelta > 0)
        {
            
            this.pos.addToTimeDelta(this.attackedVel);
        }

        if(this.shieldCheck == 1 )
        {
            this.pos.addToTimeDelta(this.shieldVel);
        }
        if(this.checkA == 1)
        {
            this.attackLeft.set(this.pos.x-30,this.pos.y+40);
        }else{
            this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        }
        
    }



    updateAnim()
    {
        this.animDefaultDelta += deltaTime;
        if(this.shieldCount < 3)
        {
            this.guardRefillDelta += deltaTime/1000;
            if(this.guardRefillDelta > 5)
            {
                this.guardRefillDelta = 0;
                if(this.shieldCount == -1)
                {
                    this.shieldCount = 1;
                }else{
                    this.shieldCount++;
                }
                
            }
        }

        if(this.rollCount < 3)
        {
            this.rollCountDeltaTime += deltaTime/1000;
            if(this.rollCountDeltaTime > 3.0)
            {
                this.rollCount += 1;
                this.rollCountDeltaTime = 0;
            }
        }
        if(this.skillCount < 1)
        {
            this.skillCountDelta += deltaTime/1000;
            if(this.skillCountDelta > 5)
            {
                this.skillCount += 1;
                this.skillCountDelta = 0;
            }
        }
        


        if(this.attackedDelta > 1.8)
        {
            this.attackedCheck = 0;
            this.attackedDelta = 0;
        }

        if(this.attackedCheck == 1)
        {
            
            
            this.attackedDelta += deltaTime/1000;
            if(this.isSkill != 1)
            {
                tint(255, 128);
            }
            
            
        }
        if(this.guardLeftDeltaTime >0.3 && this.guardLeftDeltaTime < 0.5)
        {
            fill('red');
            rect(this.pos.x+30,this.pos.y,this.guardLeftDeltaTime*30,10);
        }else{
            rect(this.pos.x+30,this.pos.y,this.guardLeftDeltaTime*30,10);
        }

        if(this.guardRightDeltaTime >0.3 && this.guardRightDeltaTime < 0.5)
        {
            fill('red');
            rect(this.pos.x+30,this.pos.y,this.guardRightDeltaTime*30,10);
        }else{
            rect(this.pos.x+30,this.pos.y,this.guardRightDeltaTime*30,10);
        }


        

        if(this.animState == MAIN)
        {
            if(this.animDefaultDelta < 1000 && this.animDefaultDelta >600 )
            {
                image(this.defaultImage[1],this.pos.x,this.pos.y,100,100);
                this.defaultCheck = 1;
            }else
            {
                image(this.defaultImage[0],this.pos.x,this.pos.y,100,100);
                if(this.defaultCheck == 1)
                {
                    this.animDefaultDelta = 0;
                    this.defaultCheck = 0;
                }
                this.RightDeltaTime = 0;
                this.LeftDeltaTime = 0;
                this.LeftAttackDeltaTime = 0;
                this.RightAttackDeltaTime = 0;
                this.guardRightDeltaTime = 0;
                this.guardLeftDeltaTime = 0;
                this.rollDeltaTime = 0;
                this.skillDeltaTime = 0;
                if(this.sfx[2].isPlaying())
                {
                    this.sfx[2].stop();
                }

            }

        }else if(this.animState == RIGHT && this.animState != RIGHTROLL)
        {
            
            if(!this.sfx[2].isPlaying() && !this.isJump)
                {
                    this.sfx[2].play();
                }
            if(this.isJump)
            {
                this.sfx[2].stop();
            }
            this.RightDeltaTime += deltaTime/1000;
            if(this.RightDeltaTime > 0.75)
            {
                
                this.RightDeltaTime = 0;
                image(this.rightImage[4],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.6)
            {
                image(this.rightImage[4],this.pos.x-10,this.pos.y,130,130);
                
            }else if(this.RightDeltaTime > 0.45)
            {
                
                image(this.rightImage[3],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.3)
            {
                
                image(this.rightImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.05)
            {
                
                image(this.rightImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.rightImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFT && this.animState != RIGHTROLL)
        {
            
            if(!this.sfx[2].isPlaying()&& !this.isJump)
                {
                    this.sfx[2].play();
                }
            if(this.isJump)
            {
                this.sfx[2].stop();
            }
            this.LeftDeltaTime += deltaTime/1000;
            if(this.LeftDeltaTime > 0.75)
            {
                
                this.LeftDeltaTime = 0;
                image(this.leftImage[4],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.6)
            {
                image(this.leftImage[4],this.pos.x-10,this.pos.y,130,130);
                
            }else if(this.LeftDeltaTime > 0.45)
            {
                
                image(this.leftImage[3],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.3)
            {
                
                image(this.leftImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.05)
            {
                
                image(this.leftImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.leftImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFTATTACK && this.lComboState == 0)
        {
            
            this.LeftAttackDeltaTime += deltaTime/1000;
            if(this.LeftAttackDeltaTime > 0.43)
            {
                image(this.leftAttackImage[6],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.LeftAttackDeltaTime = 0;
                this.lComboState = 1;
                this.attOne = 0;
                this.musicCheck = 0;
                this.isAttack = 0;
                
            }else if(this.LeftAttackDeltaTime > 0.40)
            {
                
                image(this.leftAttackImage[5],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
            }else if(this.LeftAttackDeltaTime > 0.32)
            {
                image(this.leftAttackImage[4],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
            }else if(this.LeftAttackDeltaTime > 0.24)
            {
                image(this.leftAttackImage[3],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
            }else if(this.LeftAttackDeltaTime > 0.16)
            {
                image(this.leftAttackImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
            }else if(this.LeftAttackDeltaTime > 0.08)
            {
                image(this.leftAttackImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
            }else{
                image(this.leftAttackImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
            }


        }else if(this.animState == LEFTATTACK && this.lComboState == 1)
        {
            this.LeftAttackDeltaTime += deltaTime/1000;
            if(this.LeftAttackDeltaTime > 0.37)
            {
                image(this.leftAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.LeftAttackDeltaTime = 0;
                this.lComboState = 0;
                this.lComboDelta = 0;
                this.attOne = 0;
                this.musicCheck = 0;
                this.isAttack = 0;
            }else if(this.LeftAttackDeltaTime > 0.25 && this.LeftAttackDeltaTime < 0.35)
            {
                image(this.leftAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.pos.addToTimeDelta(new Vec2(-150,0));
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
            }else if(this.LeftAttackDeltaTime > 0.15 && this.LeftAttackDeltaTime < 0.25)
            {
                image(this.leftAttackImage[8],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
                
            }else{
                
                image(this.leftAttackImage[7],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
            }
        }else if(this.animState == RIGHTATTACK && this.rComboState == 0)
        {
            
            this.RightAttackDeltaTime += deltaTime/1000;
            
            if(this.RightAttackDeltaTime > 0.41)
            {
                image(this.rightAttackImage[6],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.RightAttackDeltaTime = 0;
                this.rComboState = 1;
                this.attOne = 0;
                this.musicCheck = 0;
                this.isAttack = 0;
            }else if(this.RightAttackDeltaTime > 0.40)
            {
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
                image(this.rightAttackImage[5],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightAttackDeltaTime > 0.32)
            {
                image(this.rightAttackImage[4],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
            }else if(this.RightAttackDeltaTime > 0.24)
            {
                image(this.rightAttackImage[3],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
                
                
            }else if(this.RightAttackDeltaTime > 0.16)
            {
                image(this.rightAttackImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
            }else if(this.RightAttackDeltaTime > 0.08)
            {
                image(this.rightAttackImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
            }else{
                image(this.rightAttackImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
            }


        }else if(this.animState == RIGHTATTACK && this.rComboState == 1)
        {
            this.RightAttackDeltaTime += deltaTime/1000;
            if(this.RightAttackDeltaTime > 0.37)
            {
                image(this.rightAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.RightAttackDeltaTime = 0;
                this.rComboState = 0;
                this.rComboDelta = 0;
                this.isAttack = 0;
                this.attOne = 0;
                this.musicCheck = 0;
                this.isAttack = 0;
            }else if(this.RightAttackDeltaTime > 0.25)
            {
                image(this.rightAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.pos.addToTimeDelta(new Vec2(150,0));
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }

            }else if(this.RightAttackDeltaTime > 0.15)
            {
                
                image(this.rightAttackImage[8],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 1)
                {
                    this.isAttack = 0;
                }else{
                    this.isAttack = 1;
                }
                
            }else{
                
                image(this.rightAttackImage[7],this.pos.x-10,this.pos.y,130,130);
                this.isAttack = 0;
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
            }


        }else if(this.animState == RIGHTGUARD)
        {
            this.guardRightDeltaTime += deltaTime/1000;
            if(this.guardLeftDeltaTime > 0.5)
            {
                image(this.guardRightImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
            else if(this.guardRightDeltaTime >0.5 && this.isGuard == 1)
            {
                image(this.guardRightImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
                
            }else if (this.guardRightDeltaTime >0.4)
            {
                image(this.guardRightImage[4],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardRightDeltaTime >0.3)
            {
                image(this.guardRightImage[3],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardRightDeltaTime >0.2)
            {
                image(this.guardRightImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else if (this.guardRightDeltaTime >0.1)
            {
                image(this.guardRightImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else{
                image(this.guardRightImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
        }else if(this.animState == LEFTGUARD)
        {
            this.guardLeftDeltaTime += deltaTime/1000;
            if(this.guardRightDeltaTime > 0.5)
            {
                image(this.guardLeftImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
            else if(this.guardLeftDeltaTime >0.5 && this.isGuard == 1)
            {
                image(this.guardLeftImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
                console.log(this.guardLeftDeltaTime);
            }else if (this.guardLeftDeltaTime >0.4)
            {
                image(this.guardLeftImage[4],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardLeftDeltaTime >0.3)
            {
                image(this.guardLeftImage[3],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardLeftDeltaTime >0.2)
            {
                image(this.guardLeftImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else if (this.guardLeftDeltaTime >0.1)
            {
                image(this.guardLeftImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else{
                image(this.guardLeftImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
        //
        }else if(this.animState == RIGHTROLL)
        {
            
            this.rollDeltaTime += deltaTime/1000;
            if(this.rollDeltaTime > 0.4)
            {
                image(this.RollImage[2],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.rollDeltaTime = 0;
                this.checkRoll = 0;
                this.rollVec.x = 0;
                this.moveVel.x = 0;
                

            }else if(this.rollDeltaTime > 0.2)
            {
                image(this.RollImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.rollDeltaTime > 0.1)
            {
                image(this.RollImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.RollImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFTROLL)
        {
            this.rollDeltaTime += deltaTime/1000;
            if(this.rollDeltaTime > 0.4)
            {
                image(this.RollImage[5],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.rollDeltaTime = 0;
                this.checkRoll = 0;
                this.rollVec.x = 0;
                this.moveVel.x = 0;
                

            }else if(this.rollDeltaTime > 0.2)
            {
                image(this.RollImage[5],this.pos.x-10,this.pos.y,130,130);
            }else if(this.rollDeltaTime > 0.1)
            {
                image(this.RollImage[4],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.RollImage[3],this.pos.x-10,this.pos.y,130,130);
            }


        }else if(this.animState == RIGHTSKILL)
        {
            this.skillDeltaTime += deltaTime/1000;
            if(this.skillDeltaTime > 0.7)
            {
                image(this.rightAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                image(this.uiImage[7],this.pos.x-260,this.skillMovePos.y+20);
                this.animState = 0;
                this.isSkill = 0;
                this.skillDeltaTime = 0;
                this.attackedCheck = 0;
                this.attackedDelta = 0;
                this.skillMoveCheck = 0;
                this.isSkillAttack = 0;
                this.musicCheck = 0;
            }else if(this.skillDeltaTime > 0.6 && this.skillDeltaTime < 0.7)
            {
                image(this.rightAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                image(this.uiImage[7],this.pos.x-260,this.skillMovePos.y+20);
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
                
            }else if(this.skillDeltaTime >0.5 && this.skillDeltaTime < 0.6)
            {
                
                image(this.rightAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                if(this.skillMoveCheck == 0)
                {
                    this.pos.x += 300;
                    this.skillMoveCheck = 1;
                    this.isSkillAttack = 1;
                    
                }
                
                
                
                
            }else{
                image(this.rightAttackImage[10],this.pos.x-10,this.pos.y,130,130);
                this.attackedCheck = 1;
                this.skillMovePos.y = this.pos.y+20;
                this.skillMovePos.x = this.pos.x+20;
                this.skillMoveCheck = 0;
                circle(this.skillMovePos,this.pos.y,30);
            }
        }else if(this.animState == LEFTSKILL)
        {
            this.skillDeltaTime += deltaTime/1000;
            if(this.skillDeltaTime > 0.7)
            {
                image(this.leftAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                image(this.uiImage[7],this.pos.x+70,this.skillMovePos.y+20);
                this.animState = 0;
                this.isSkill = 0;
                this.skillDeltaTime = 0;
                this.attackedCheck = 0;
                this.attackedDelta = 0;
                this.skillMoveCheck = 0;
                this.isSkillAttack = 0;
                this.musicCheck = 0; 
            }else if(this.skillDeltaTime > 0.6 && this.skillDeltaTime < 0.7)
            {
                image(this.leftAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                if(this.musicCheck == 0)
                {
                    push();
                    this.sfx[0].setVolume(1.0);
                    this.sfx[0].play();
                    this.musicCheck = 1;
                    pop();
                }
                image(this.uiImage[7],this.pos.x+70,this.skillMovePos.y+20);
                
            }else if(this.skillDeltaTime >0.5 && this.skillDeltaTime < 0.6)
            {
                
                image(this.leftAttackImage[11],this.pos.x-10,this.pos.y,130,130);
                if(this.skillMoveCheck == 0)
                {
                    this.pos.x -= 300;
                    this.skillMoveCheck = 1;
                    this.isSkillAttack = 1;
                    
                }
                
                
                
                
            }else{
                image(this.leftAttackImage[10],this.pos.x-10,this.pos.y,130,130);
                this.attackedCheck = 1;
                this.skillMovePos.y = this.pos.y+20;
                this.skillMovePos.x = this.pos.x-230;
                circle(this.skillMovePos,this.pos.y,30);
                this.skillMoveCheck = 0;
            }
        }
        
        if(this.isGuard == 0)
        {
                
                this.guardRightDeltaTime = 0;
                this.guardLeftDeltaTime = 0;

        }

        if(this.rComboState > 0 && this.animState != RIGHTATTACK)
        {
            this.rComboDelta += deltaTime/1000;
        }
        if(this.rComboDelta > 2 && this.animState != RIGHTATTACK)
        {
            this.rComboState = 0;
            this.rComboDelta = 0;
        }

        if(this.lComboState > 0 && this.animState != LEFTATTACK)
        {
            this.lComboDelta += deltaTime/1000;
        }
        if(this.lComboDelta > 2 && this.animState != LEFTATTACK)
        {
            this.lComboState = 0;
            this.lComboDelta = 0;
        }

        
        
    }

    checkKeyboard()
    {
        

        
        if(!keyIsPressed && this.attackCheck == 0 && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.animState = 0;
            this.moveVel.x = 0;
            
            this.isGuard = 0;
            
            
        }

        if(keyIsDown(39) && this.attackCheck == 0 && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.animDefaultDelta = 0;
            this.moveVel.x = 500;
            
            if(this.pos.x>600)
            {
                this.checkMoveCamera += 500 * deltaTime/1000;
            }else{
                this.checkMoveCamera=0
            }
            
            // if(this.pos.x > this.checkCameraX)
            // {
            //     this.cameraR = true;
            // }
            this.checkA = 0;
            this.startPlay = 1;
            

            

                       
            // if(this.checkRoll == 0)
            // {
                this.animState = 1;
            // }else{
            //     this.animState = RIGHTROLL;
            // }
            
            // this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        }
        if(keyIsDown(37) && this.attackCheck == 0 && this.checkRoll == 0 && this.isSkill == 0)
        {
            this.animDefaultDelta = 0;
            this.animState = 2;
            this.moveVel.x = -500;
            
            if(this.pos.x>600)
            {
                this.checkMoveCamera -= 500 * deltaTime/1000;
            }else{
                this.checkMoveCamera=0
            }
                
            
            // if(this.pos.x < this.checkCameraX_L)
            // {  
            //     this.cameraL = true;
                
            // }
            // this.attackLeft.set(this.pos.x-30,this.pos.y+40);
            this.checkA = 1;
            this.startPlay = 1;
            

        }
        if(keyIsDown(65) && this.attackCheck == 0 && (keyIsDown(37)  || this.checkA == 1) && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.animState = 3
            this.attackCheck = 1;
            this.moveVel.x = 0;
            this.isGuard = 0;
            this.checkA = 1;
            this.startPlay = 1;
        }
        
        if(keyIsDown(65) && this.attackCheck == 0 && (keyIsDown(39)  || this.checkA == 0) && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.animState = 4
            this.attackCheck = 1;
            this.moveVel.x = 0;
            this.isGuard = 0;
            
            this.checkA = 0;
            this.startPlay = 1;
        }

        if(keyIsDown(32) && this.isJump == false && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.isJump = true;
            this.sfx[3].play();
            this.checkA = 0;
            this.startPlay = 1;
        }

        if(keyIsDown(40) && this.checkRoll == 0 && this.isSkill == 0)
        {
            this.downCheck = true;
            this.downCheck_2 = true;
            this.startPlay = 1;
        }else if(this.downCheckDelta > 0.3){
            this.downCheck = false;
            this.downCheck_2 = false;
            this.downCheckDelta = 0;
        }

        if(this.downCheck_2)
        {
            this.downCheckDelta += deltaTime/1000;
        }

        if(keyIsDown(68) && (keyIsDown(37) || this.checkA == 1)&& this.attackCheck == 0 && this.shieldCount >-1 && this.checkRoll == 0 && this.isSkill == 0)
        {
            this.checkA = 1;
            this.isGuard = 1;
            this.animState = LEFTGUARD;
            this.moveVel.x = 0;
            this.startPlay = 1;
        }else{
            this.isGuard = 0;
        }

        if(keyIsDown(68) && (keyIsDown(39) || this.checkA == 0)&& this.attackCheck == 0 && this.shieldCount > -1 && this.checkRoll == 0 && this.isSkill == 0)
        {
            
            this.checkA = 0;
            this.isGuard = 1;
            this.animState = RIGHTGUARD;
            this.moveVel.x = 0;
            this.startPlay = 1;

        }else{
            this.isGuard = 0;
        }
        if(keyIsDown(68) && this.shieldCount > -1)
        {
            this.isGuard = 1;
        }


        if(keyIsDown(68) && this.shieldCount < -1)
        {
            this.isGuard = 0;
        }


        if(!keyIsDown(68))
        {
            
            this.isGuard = 0;

        }


        if(keyIsDown(83) && (keyIsDown(39) || this.checkA == 0) && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0 && this.rollCount > 0 && this.isSkill == 0)
        {
           
            this.animState = RIGHTROLL;
            this.checkRoll = 1;
            
            this.startPlay = 1;
            this.rollCount--;
            
        }

        if(keyIsDown(83) && (keyIsDown(37) || this.checkA == 1) && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0 && this.rollCount > 0 && this.isSkill == 0)
        {
            this.animState = LEFTROLL;
            this.checkRoll = 1;
            this.startPlay = 1;
            this.rollCount--;
        }
        
        if(this.checkRoll == 1)
        {
            if(this.checkA == 0)
            {
                this.moveVel.x = 0;
                this.rollVec.x = 800;
            }else{
                this.moveVel.x = 0;
                this.rollVec.x = -800;
            }
        }






        if(keyIsDown(87) && keyIsDown(39) && this.isSkill == 0 && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0 && this.skillCount > 0)
        {
            
            this.moveVel.x = 0;
            this.isSkill = 1;
            this.animState = RIGHTSKILL;
            this.attackedVel.x = 0;
            this.skillCount -= 1;
            

        }

        if(keyIsDown(87) && keyIsDown(37) && this.isSkill == 0 && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0 && this.skillCount > 0)
        {
            
            this.moveVel.x = 0;
            this.isSkill = 1;
            this.animState = LEFTSKILL;
            this.attackedVel.x = 0;
            this.skillCount -= 1;
            

        }
        if(this.isGuard == 0 && this.isParrying == 1)
        {
            this.isParrying = 0;
        }






        
    }




    addGravity()
    {
        
        this.downLeft.setX(this.pos.x+30);
        this.downLeft.setY(this.pos.y+100);
        this.downRight.setX(this.pos.x+69);
        this.downRight.setY(this.pos.y+100);
        this.upLeft.set(this.pos.x+30,this.pos.y+20);
        this.upRight.set(this.pos.x+69,this.pos.y+20);
        
        
    }
    

    
    checkAttack(monster)
    {
        
                
        
        

        if(this.attackCheck == 1)
        {

        
        if(this.isAttack == 1)
        {  

            for(var a = 0; a<monster.length;a++)
            {
                
                if(this.checkRange(this.attackLeft.x-10,this.attackLeft.x+70,monster[a].upLeft.x,monster[a].upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster[a].upLeft.y,monster[a].downRight.y))
                    {

                        if(monster[a].life >0)
                        {  
                        
                        
                        monster[a].life -= 1;
                        sfx[1].play();
                        
                        if(this.checkA == 0 )
                        {
                            
                            
                            if(monster[a].type != 3 && monster[a].type != 5 )
                            {
                               
                                monster[a].animState = 7;
                                monster[a].isAttacked = 1;
                            }
                            
                            monster[a].pos.addTo(new Vec2(15,0));
                            
                        }else{
                            if(monster[a].type != 3 && monster[a].type != 5)
                            {
                                
                                monster[a].animState = 8;
                                monster[a].isAttacked = 1;
                            }
                            monster[a].pos.addTo(new Vec2(-15,0));
                            
                        }
                        
                        this.attOne = 1;
                        }
                        
                        
                    }

                    

                }
            
        }
        
        
        
    }
    if(this.isSkillAttack == 1)
        {
            
            let is = false;
            for(var a = 0; a<monster.length;a++)
            {
                if(this.checkRange(this.skillMovePos.x,this.skillMovePos.x+300,monster[a].upLeft.x,monster[a].upRight.x) && this.checkRange(this.skillMovePos.y,this.skillMovePos.y+50,monster[a].upLeft.y,monster[a].downRight.y))
                    {

                        if(monster[a].life >0)
                        {  
                        
                        monster[a].life -= 2;
                        is = true;
                        sfx[1].play();
                        
                        
                        if(this.checkA == 0 )
                        {
                            
                            if(monster[a].type != 3 && monster[a].type != 5)
                            {
                                
                                monster[a].animState = 7;
                                monster[a].isAttacked = 1;
                            }
                            
                            
                            
                        }else{
                            
                            if(monster[a].type != 3 && monster[a].type != 5)
                            {
                                monster[a].animState = 8;
                                monster[a].isAttacked = 1;
                            }
                            
                        }
                        
                        
                        }
                    
                        
                    }

                    

            }
            if(is)
            {
                this.isSkillAttack = 0;
            }
            
        }
        
        


        
    }
    

    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    


    seeUIImage(x)
    {
        if(this.life == 5)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
            image(this.uiImage[0],x+120,10,25,25);
            image(this.uiImage[0],x+150,10,25,25);

        }else if(this.life == 4)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
            image(this.uiImage[0],x+120,10,25,25);
        }
        else if(this.life == 3)
        {

            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
        }else if(this.life == 2)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
        }else if(this.life == 1)
        {
            image(this.uiImage[0],x+30,10,25,25);
        }else
        {
            
        }
        // image(uiImage)
        if(this.shieldCount == 3)
        {
            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[1],x+1100-100,10,100,100);
            image(this.uiImage[1],x+1100-200,10,100,100);

        }else if(this.shieldCount == 2)
        {

            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[1],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
        }else if(this.shieldCount == 1)
        {
            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[2],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
        }else if(this.shieldCount <= 0)
        {
            image(this.uiImage[2],x+1100,10,100,100);
            image(this.uiImage[2],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
            if(this.shieldCount < -1)
            {
                this.shieldCount = 0;
            }
        }
        if(this.rollCount == 3)
        {
            image(this.uiImage[6],x+200,0);
        }else if(this.rollCount == 2)
        {
            image(this.uiImage[5],x+200,0);
        }else if(this.rollCount == 1)
        {
            image(this.uiImage[4],x+200,0);
        }else{
            image(this.uiImage[3],x+200,0);
        }
        image(this.uiImage[8],x+300,0);

        push();
        fill(0,125);
        rect(x+200,64,64,-64 * this.rollCountDeltaTime/3);
        rect(x+300,64,64,-64 * this.skillCountDelta/5);
        pop();
        rect(x+1020,120,100/10*this.guardRefillDelta,10);
        rect(x+1120,120,0,10);


    }

    checkLeft(state)
    {
        if(this.pos.x < -25)
        {
            this.pos.x = -25;
        }
        if(state == 5)
        {
            if(this.pos.x > 1110)
            {
                this.pos.x = 1110;
            } 
        }
    }






















}