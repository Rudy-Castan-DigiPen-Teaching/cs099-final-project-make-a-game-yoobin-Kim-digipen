// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021



class Item{
    constructor(_image,_x,_y,type)
    {
        this.image = _image;
        this.x = _x;
        this.y = _y;
        this.isRemove = 0;
        this.type = type;

    }

    draw()
    {
       
        image(this.image,this.x,this.y);
        if(this.y < 440)
        {
            this.y += 200 * deltaTime/1000;
        }
    }

    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    checkPlayer(player,door)
    {
        if(this.type == 0)
        {
            if(this.checkRange(player.upLeft.x,player.upRight.x,this.x,this.x+64) && this.checkRange(player.upLeft.y,player.downRight.y,this.y,this.y+64))
            {
               
                door.isOpen = 1;
                
                this.isRemove = 1;
                
            }
        }else{
            if(this.checkRange(player.upLeft.x,player.upRight.x,this.x,this.x+64) && this.checkRange(player.upLeft.y,player.downRight.y,this.y,this.y+64))
            {
               
                
                this.isRemove = 1;
            }
        }
        
    }
    



}