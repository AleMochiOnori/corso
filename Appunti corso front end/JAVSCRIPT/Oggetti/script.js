var calcolatrice = {

    display : 0,

    sum : function(a,b){
        this.display = a + b
        return this.display;
    },

    sub : function(a,b){
        this.display = a -b 
        return this.display
    },

    division : function(a,b){
        this.display = a/b;
        return this.display
    },
    mult:function(a,b){
        this.display = a*b;
        return this.display
    },
}


console.debug(calcolatrice.mult(2,4))







