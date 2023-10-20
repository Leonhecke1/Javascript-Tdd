const {
  additionCalculator,
  subCalculator,
  divCalculator,
} = require("./calculator");

const readline = require("readline");

function calculation() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("1:", "addition");
  console.log("2:", "subtraktion");
  console.log("3:", "division");
  console.log("4:", "abort mission");

  rl.question("Welche Rechenart möchtest du nutzen?: ", (calculatorOption) => {
    switch (calculatorOption) {
        case "1":
            rl.question("Gib ersten Wert ein: ", (addInput1) => {
                if (!isNaN(addInput1)) {
                    rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                        if (!isNaN(addInput2)) {
                            console.log("Ergebnis: " + additionCalculator(Number(addInput1), Number(addInput2)));
                        } else {
                            console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                        }
                        rl.close();
                    });
                } else {
                    console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                    rl.close();
                }
            });
            break;

      case "addition":
        rl.question("Gib ersten Wert ein: ", (addInput1) => {
            if (!isNaN(addInput1)) {
                rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                    if (!isNaN(addInput2)) {
                        console.log("Ergebnis: " + additionCalculator(Number(addInput1), Number(addInput2)));
                    } else {
                        console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                rl.close();
            }
        });
        break;
      case "2":
        rl.question("Gib ersten Wert ein: ", (addInput1) => {
            if (!isNaN(addInput1)) {
                rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                    if (!isNaN(addInput2)) {
                        console.log("Ergebnis: " + subCalculator(Number(addInput1), Number(addInput2)));
                    } else {
                        console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                rl.close();
            }
        });
        break;

      case "subtraktion":
        rl.question("Gib ersten Wert ein: ", (addInput1) => {
            if (!isNaN(addInput1)) {
                rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                    if (!isNaN(addInput2)) {
                        console.log("Ergebnis: " + subCalculator(Number(addInput1), Number(addInput2)));
                    } else {
                        console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                rl.close();
            }
        });
        break;

      case "3":
        rl.question("Gib ersten Wert ein: ", (addInput1) => {
            if (!isNaN(addInput1)) {
                rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                    if (!isNaN(addInput2)) {
                        console.log("Ergebnis: " + divCalculator(Number(addInput1), Number(addInput2)));
                    } else {
                        console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                rl.close();
            }
        });
        break;
      case "divison":
        rl.question("Gib ersten Wert ein: ", (addInput1) => {
            if (!isNaN(addInput1)) {
                rl.question("Gib zweiten Wert ein: ", (addInput2) => {
                    if (!isNaN(addInput2)) {
                        console.log("Ergebnis: " + divCalculator(Number(addInput1), Number(addInput2)));
                    } else {
                        console.log("Ungültige Eingabe. Der zweite Wert ist keine Nummer.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ungültige Eingabe. Der erste Wert ist keine Nummer.");
                rl.close();
            }
        });
        break;

      case "4":
        console.log("breche mission ab");
        rl.close();
        break;
      default:
        console.log("Ungültige Auswahl");
        rl.close();
        calculation();
    }
  });
}

calculation();
