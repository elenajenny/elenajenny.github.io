declare var Artyom: any;



window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void { /* das sternchen ist gleich die wildcard*/
            console.log ("works");
            array.text.push(wildcard);
            array.checked.push(wildcard);
            drawListToDOM();
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});