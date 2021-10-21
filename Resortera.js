class Resortera{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.resortera1 = loadImage("Sprites/resortera1.png");
        this.resortera2 = loadImage("Sprites/resortera2.png");
        this.resortera3 = loadImage("Sprites/resortera3.png");
        this.pointB = pointB;
        this.resortera = Constraint.create(options);
        World.add(world, this.resortera);
    }

    fly(){
        this.resortera.bodyA = null;
    }

    display(){
        image(this.resortera1,200,20);
        image(this.resortera2,170,20);
        if(this.resortera.bodyA){

        var pointA = this.resortera.bodyA.position;
        var pointB = this.pointB;
        push();
        if(pointA.x < 220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.resortera3,pontA.x-30,pointA.y-10,15,30);
        }else{
            strokeWeight(3);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.resortera3,pontA.x-30,pointA.y-10,15,30);
        }
        pop();
        
        }
    }
    
}