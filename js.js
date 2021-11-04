let calculator={
    a: 0,
    b: 0,
    read:function(){
        this.a=prompt("Vvedite znachenie",0);
        this.b=prompt("Vvedite znachenie",0);
    },
    sum:function(){
        let sum;
        sum=this.a+this.b;
        return sum;
    },
    mul:function(){
        let mul;
        mul=this.a*this.b;
        return mul;
    }
}



let ladder={
    step: 0,
    up:function(){
        this.step=this.step+1;
        return step;
    },
    down:function(){
        this.step=this.step-1;
        return step;
    },
    showStep:function(){
        alert("Step="+this.step);
        console.log("Step="+this.step);
    }
}