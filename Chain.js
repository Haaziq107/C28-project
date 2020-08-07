class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }
    display(){
        push();
        if (this.chain.bodyA){
            var pA=this.chain.bodyA.position;
            var pB=this.pointB;
            strokeWeight(4);
            line(pA.x,pA.y,pB.x,pB.y);
                }
        pop();
    }
    }
    
