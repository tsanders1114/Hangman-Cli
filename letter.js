function LetterConstructor(letter){
    this.letter=letter
    this.guessed=false
    this.displayLetter = () => {
        if(this.guessed===false){
            return " _ ";
        }else if(this.guessed===true){
            return this.letter;
        }else if (this.letter==" "){
            this.guessed = true;
            return " ";
        }
    };
};
module.exports = LetterConstructor
