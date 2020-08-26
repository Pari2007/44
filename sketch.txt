
var form, database;

function setup() {
    console.log("abcd")
    database = firebase.database();
    var canvas = createCanvas(1200, 400);
    form = new Form();


}
function draw() {
    form.display();

}

