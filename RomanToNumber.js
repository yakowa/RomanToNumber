/**
 * Roman To Number
 * ! Made by JacobEM.com
 * * 24/04/2022
 * * This took longer than I care to admit.
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const permittedCharacters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var buildingNumber = 0;

    function convertSymbolToValue(s) {
        switch (s.toUpperCase()) {
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
        }
    }

    for (let i = 0; i < s.length; i++) {
        let value = s[i];
        let nextValue = s[i+1];

        // Special Cases
        if (s[i] == "I" && s[i+1] == "V") { buildingNumber += 4; i++; }
        else if (s[i] == "I" && s[i+1] == "X") { buildingNumber += 9; i++; }
        else if (s[i] == "X" && s[i+1] == "L") { buildingNumber += 40; i++; }
        else if (s[i] == "X" && s[i+1] == "C") { buildingNumber += 90; i++; }
        else if (s[i] == "C" && s[i+1] == "D") { buildingNumber += 400; i++; }
        else if (s[i] == "C" && s[i+1] == "M") { buildingNumber += 900; i++; }
        // Normal Case
        else {
            buildingNumber += convertSymbolToValue(s[i]);
        }
    }

    return buildingNumber;
}

test = romanToInt("III");
console.log(test);
console.log(test == 3);

test = romanToInt("\n\n");

test = romanToInt("LVIII");
console.log(test);
console.log(test == 58);

test = romanToInt("\n\n");

test = romanToInt("MCMXCIV");
console.log(test);
console.log(test == 1994);