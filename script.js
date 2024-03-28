// ciclo for

for (let i = 1; i <= 100; i++) {
    let text;  
    if (i % 3 === 0 && i % 5 === 0) { 
        text = "FizzBuzz";
    } else if (i % 3 === 0) { 
        text = "Fizz";
    } else if (i % 5 === 0) { 
        text = "Buzz";
    } else {
        text = i;
    }


    // OUTPUT
    // dichiarazioni variabili
    const containerElem = document.querySelector(".container");
    const divElem = document.createElement("div");

    // assegnazione alla variabile div il testo che deve indicare
    divElem.innerHTML = text;

    // aggiunta al file HTML
    containerElem.append(divElem)

}