class Episode3{
    constructor(){}
    display(){
        var intro3 = createElement("h2");
        intro3.html("Season1:Episode3:Online Shopping Account Hacked!");
        intro3.position(500, 400);
        
        var description3 = createElement("h3");
        description3.html("description about Episode3");
        description3.position(500, 430);
        
        var beginbutton3 = createButton("Begin>");
        beginbutton3.position(displayWidth/2, displayHeight/2-95)

        beginbutton3.mousePressed(() => {
            
            intro3.hide();
            description3.hide();
            beginbutton3.hide();
            var situationE2 = createElement("h2");
            // 1
                    situationE2.html("Situation");

                    var OptionAE2 = createButton("Option A");
                    OptionAE2.position(displayWidth/2-100,displayHeight/2-200);

                    var OptionBE2 = createButton("Option B");
                    OptionBE2.position(displayWidth/2-200,displayHeight/2-100);

                    var OptionCE2 = createButton("Option C");
                    OptionCE2.position(displayWidth/2+100,displayHeight/2-200);

                    

                    OptionAE2.mousePressed(() => {
                        score = score+10
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var AdcE2 = createElement("h2");
                        AdcE2.html("It is correct! Looking at your account history ,you will be able to track down unusual activities.")
                        AdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         AdcE2.hide();
                         Alright.hide();
                    });})

                    OptionBE2.mousePressed(() => {
                        score = score-10
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var BdcE2 = createElement("h2");
                        BdcE2.html("Well, looking at your search history won’t help!")
                        BdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         BdcE2.hide();
                         Alright.hide();
                    });})

                    OptionCE2.mousePressed(() => {
                        score = score-10

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        

                        var CdcE2 = createElement("h2");
                        CdcE2.html("Logging in again won’t help you either!")
                        CdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         CdcE2.hide();
                         Alright.hide();
                    });})
// 2

            var nextbutton = createButton("Next>");
            nextbutton.position(displayWidth/2+50, displayHeight/2-50);
            nextbutton.mousePressed(()=>{
                nextbutton.hide();
                situationE2.hide();

            var situationE3 = createElement("h2");
            situationE3.html("Situation2");
            
            var OptionAE3 = createButton("Option A");
            OptionAE3.position(displayWidth/2-100,displayHeight/2-200);
            
            var OptionBE3 = createButton("Option B");
            OptionBE3.position(displayWidth/2-200,displayHeight/2-100);
            
            var OptionCE3 = createButton("Option C");
            OptionCE3.position(displayWidth/2+100,displayHeight/2-200);
            
            
            
            OptionAE3.mousePressed(() => {
                score = score+10

                OptionAE3.hide();
                 OptionBE3.hide();
                 OptionCE3.hide();
                        

                var AdcE3 = createElement("h2");
                AdcE3.html("It would be most advisable to do so as they can assist you further and track down and block some unexpected activities")
                AdcE3.position(500, 500);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.mousePressed(()=>{
                 AdcE3.hide();
                 Alright.hide();
            })
            });
            
            OptionBE3.mousePressed(() => {
                score = score-10

                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                var BdcE3 = createElement("h2");
                BdcE3.html("That will not help you at the moment when your information is already leaked. ")
               
                BdcE3.position(500, 500);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.mousePressed(()=>{
                 BdcE3.hide();
                 Alright.hide();
            })
            });
            
            OptionCE3.mousePressed(() => {
                score = score-10;
                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                var CdcE3 = createElement("h2");
                CdcE3.html("logging out won’t help you rather you will not be able to log in again as till then the hackers would have already changed your password.")
                
                CdcE3.position(500, 500);
                var Alright = createButton("Alright!")
                Alright.position(displayWidth/2+50, displayHeight/2-95);
                Alright.mousePressed(()=>{
                 CdcE3.hide();
                 Alright.hide();
            })
            });
            
            
            
            var Next1E3 = createButton("Go!")
            Next1E3.position(displayWidth/2+50, displayHeight/2-50);
            Next1E3.mousePressed(() => {
                OptionAE3.hide();
                OptionBE3.hide();
                OptionCE3.hide();
                
                situationE3.hide();
                Next1E3.hide();

                episode4 = new Episode4();
                episode4.display();

    })
    }
        )}
        )}
}
