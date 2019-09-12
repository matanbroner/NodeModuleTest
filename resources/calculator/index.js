
module.exports = class Calculator {
    constructor(){
        this._result = 0;
    }

    result(){
        return this._result;
    }

    clear(){
        this._result = 0;
        return this;
    }

    add(number){
        if(this._isNumber(number)){
            this._result +=  number;
            return this;
        } else {
            this._throwCalculationError();
        }
    }

    subtract(number){
        if(this._isNumber(number)){
            this._result -=  number;
            return this;
        } else {
            this._throwCalculationError();
        }
    }

    multiply(number){
        if(this._isNumber(number)){
            this._result = this._result * number;
            return this;
        } else {
            this._throwCalculationError();
        }
    }

    multiply(number){
        if(this._isNumber(number) || number === 0){
            this._result = this._result / number;
            return this;
        } else {
            this._throwCalculationError();
        }
    }

    _isNumber(number){
        return typeof number === 'number';
    }

    _throwCalculationError(e){
        throw new Error(e);
    }
}