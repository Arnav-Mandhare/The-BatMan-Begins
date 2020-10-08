class Umbrella
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
        this.image = loadImage("walking_8.png");
	}
	display()
	{
			
					

			push()
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
            image(this.image,200,320,300,300);
			pop()
			
	}

}