// ciclo for

for (let i = 1; i <= 100; i++) {
    let text;
    let color; 
    if (i % 3 === 0 && i % 5 === 0) { 
        text = "FizzBuzz";
        color = "fizzbuzz";
    } else if (i % 3 === 0) { 
        text = "Fizz";
        color = "fizz";
    } else if (i % 5 === 0) { 
        text = "Buzz";
        color = "buzz";
    } else {
        text = i;
        color = "default";
    }


    // OUTPUT
    // dichiarazioni variabili
    const containerElem = document.querySelector(".container");
    const divElem = document.createElement("div");

    // assegnazione alla variabile div il testo che deve indicare
    divElem.innerHTML = text;

    // aggiunta delle classi nel div
    divElem.classList.add("squareContainer");
    divElem.classList.add(color);
    // aggiunta al file HTML
    containerElem.append(divElem);

}