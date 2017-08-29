let BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    } else {
        //creating a scope-safe constructors
        return new BasicCard(front, back);
    }

}
module.exports = BasicCard;