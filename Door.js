// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021


class Door{
    constructor(_doorImage,_x,_y,_width,_height,sfx)
    {
        this.doorImage = _doorImage;
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.sfx = sfx;

        //animDelta
        this.animDelta = 0;
        

        this.isOpen = 0;
        this.musicCheck = 0;



    }



    colPlayer(player)
    {
        if(this.checkRange(player.downRight.x,player.downRight.x,this.x,this.x+this.width*4) && this.checkRange(player.downRight.y,player.downRight.y+10,this.y,this.y+this.height) && player.startPlay == 1)
            {



                player.pos.x = this.x - 70;
                

            }
    }




    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    animUpdate()
    {
        if(this.isOpen == 1)
        {
            this.animDelta += deltaTime/1000;
            if(this.animDelta > 1)
            {
                this.width = 0;
                this.height = 0;
            }else if(this.animDelta > 0.6)
            {
                image(this.doorImage[2],this.x,this.y,this.width,this.height);
            }else if(this.animDelta > 0.3){
                image(this.doorImage[1],this.x,this.y,this.width,this.height);
            }else{
                image(this.doorImage[0],this.x,this.y,this.width,this.height);
                if(this.musicCheck == 0)
                {
                    this.sfx.play();
                    this.musicCheck = 1;
                }
            }




        }else{
            image(this.doorImage[0],this.x,this.y,this.width,this.height);
        }
        
    }


}