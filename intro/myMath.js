module.exports = {
    test: function () {
        console.log("Called..!!");
        return "Test";
    },

    sum: function (num1, num2) {
        return num1 + num2;
    },

    subtract: function (num1, num2) {
        return num1 - num2;
    },

    multiply: function (num1, num2) {
        return num1 * num2;
    },

    divide: function (num1, num2) {
        //check if user tries to divide by zero
        //show an error on the console
        // return zero
        //else perform division

        if (num2 == 0) {
            console.log("Error, you should not divide by zero");
            return 0;

        } else {
            return num1 / num2;
        }
    },

    smaller: function (num1, num2) {
        if (num1 < num2) return num1;
        return num2;
    },

    greater: function (num1, num2, num3) {
        if (num1 >= num2 && num1 >= num3)
            return num1;

        if (num2 > num3) return num2;
        return num3;
    },

    isEven: function (num) {
        //return true if num is even
        //otherwise, return false
        //mod (modulus) operator %

        if (num % 2 == 0) return true;
        return false;
    }
};