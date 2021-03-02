class Circle {
    num;
    element;

    constructor(circleNum, element) {
        this.num = circleNum;
        this.element = element;
    }

    gridclicked(num){
        if(this.num === num){
            this.element.css("background-color", "lightgrey");
            this.setData();
        }else{
            this.element.css("background-color", "transparent");
        }
    }

    setData(){
        $('#north-text').html("To the North: " + this.getAbove());
        $('#east-text').html("To the East: " + this.getRight());
        $('#south-text').html("To the South: " + this.getBelow());
        $('#west-text').html("To the West: " + this.getLeft());
    }

    //who needs to be dry anyways
    getAbove() {
        let current = this.num - 4;
        let above = []
        while(current > 0){
            above.push(current);
            current -= 4;
        }
        return above;
    }

    getBelow() {
        let current = this.num + 4;
        let below = []
        while(current <= 16){
            below.push(current);
            current += 4;
        }
        return below;
    }

    getLeft() {
        let current = this.num - 1;
        let least = (this.num - 3) - (this.num - 3) % 4;
        let left = [];
        while(current > least){
            left.push(current);
            current--;
        }
        return left;
    }

    getRight() {
        let current = this.num + 1;
        let most = this.num + 3 - (this.num + 3) % 4;
        let right = []
        while(current <= most) {
            right.push(current);
            current++;
        }
        return right;
    }
}

var grid = [];

function user_clicked(val){
    for(let i = 0; i < grid.length; i++){
        grid[i].gridclicked(val);
    }
}

$(document).ready(() => {
    for(let i = 0; i < 4; i++){
        let row = $('<div class="row"></div>').appendTo(".grid");
        for(let j = 1; j <= 4; j++){
            let val = 4 * i + j;
            let circleq = $('<div class="circle" onclick="user_clicked('+val+')">'+val+'</div>').appendTo(row);
            grid.push(new Circle(val, circleq));
        }
    }
});