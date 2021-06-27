// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

class PlatForm
{
    constructor(_x,_y,_width,_height,_base,_type,_vertical = 0 , _thisImage = 0)
    {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this._height = _height;
        this.image = _thisImage;
        this.base = _base;
        this.type = _type;
        this.vertical = _vertical;
        this.platform = 0;

    }


    colPlayer(player)
    {
        if(this.type == 0)
        {

        
        if((player.downRight.x> this.x && player.downRight.x < this.x+this.width) && ((player.downRight.y >= this.y-3) && (player.downRight.y <=this.y+100)))
        {
            
            // player.shieldCheck = 0;
            // if(player.gravityVel.y > 0 && !this.base && player.downCheck == false)
            if(!this.base && player.downCheck == false && player.doJump == false)
            {
                
                player.isJump = false;
                player.downCheck = false;

                // player.gravityVel.addTo(player.gravityVel.reactionY());
                // player.pos.addTo(player.gravityVel.reactionY());
                
                
                // player.gravityVel.x = 0;
                // player.gravityVel.y = 0;
                player.jumpTime = 0;
                
                
                player.jumpDeltaTime = 0 ;
                player.gravityForce = 0;
                this.platform = this.y;
                if(player.downRight.y >= this.y)
                {
                    
                    player.pos.y = this.y -100;
                    
                    
                }
                








            }else if(this.base)
            {
                player.isJump = false;
                player.downCheck = false;

                player.jumpTime = 0;
                
                
                player.jumpDeltaTime = 0 ;
                player.gravityForce = 0;
                this.platform = this.y;
                if(player.downRight.y >= this.y)
                {                  
                    player.pos.y = this.y-100;
                    
                }
                
            }
            
        }
        }else
        {




            if(this.checkRange(player.downRight.x,player.downRight.x,this.x,this.x+this.width) && this.checkRange(player.downRight.y,player.downRight.y+10,this.y,this.y+this._height))
            {


                
                player.moveVel.x = 0;
                player.pos.x = this.x - 70;
                this.platform = this.y;
                
                // player.gravityVel.x = 0;
                

            }

            

            


        }
    }

    colMonster(monster)
    {
        // if(monster.attackVel.y < 0)
        // {
            
        //     monster.accGravity.set(0,0.5);
        // }
        if(this.type == 0)
        {

        
            if((monster.downRight.x> this.x && monster.downRight.x < this.x+this.width+monster.right) && ((monster.downRight.y >= this.y-10) && (monster.downRight.y <=this.y+100)))
            {
                
                // console.log("add");
                // monster.pos.addTo(monster.gravityVel.reactionY());
                
                
                monster.pos.addTo(monster.gravityVel.reactionY());
                monster.gravityVel.x = 0;
                monster.gravityVel.y = 0;
                if(monster.downRight.y >= this.y)
                {
                    monster.pos.y = this.y-50;
                }
                
                
                
                
                monster.attackVel.set(0,0);
                monster.platformY = this.y;
                
                if(!monster.animState == 2)
                monster.animState = 0;
                
                // monster.attackVel.set(0,0);
                // if(monster.gravityVel.y == 0)
                // {
                //     console.log("Add");
                //     monster.isAttacked = 0;
                // }
                
                
                
                
                



            }
        }
        
        
    }




    draw()
    {
        if(this.type == 0)
        {
            
            image(this.image,this.x,this.y-4,this.width,this._height+4);
        }else{
            image(this.vertical,this.x,this.y-4,this.width,this._height+4)
        }
        
    }



    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }








    
}