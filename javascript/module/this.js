


function CallExample(){
    function Greet(greeting, punctuation){
        console.log('${greeting}, my name is ${this.name}${punctuation}');
    };
    const Person={name: "Allice"};
    Greet.apply(Person,["Hello","."]);
}


function ApplyExample(){
    function Greet(greeting, punctuation){
        console.log('${greeting}, my name is ${this.name}${punctuation}');
    };
    const Person ={name: "Bob"};
    Greet.apply(Person, ["Hello", "."]);

}

function BindExample(){
    function Greet(greeting, punctuation){
        console.log('${greeting}, my name is ${this.name}${punctuation}');
    };
    const person={name: "Charlie"};
    const boundGreet=Greet.bind(personalbar, "Hey");
    // boundGreet("! !");
}
CallExample();
ApplyExample();
BindExample();