let CloseCard = function (text, cloze) {
    //checking if the cloze deletion appears in the input text
    if (!text.includes(cloze)) {
        console.log('Cloze deletion does not appears in the input text');
        return;
    } else {
        if (this instanceof CloseCard) {
            this.fullText = text;
            this.cloze = cloze;
            this.brokenCloze();
            //console.log('Successful');
        } else {
            //creating a scope-safe constructors
            return new CloseCard(text, cloze);
        }
    }
}
CloseCard.prototype.brokenCloze = function () {
    //replace the closed text with "_________"
    this.partial = this.fullText.replace(this.cloze, '___________________ ');
}
module.exports = CloseCard;