class Episode2{
    constructor(){}
    display(){
        var intro2 = createElement("h2");
                intro2.html("Season2:Episode2:Twitter and FB Hacked!");
                intro2.position(500, 400);
                
                var description2 = createElement("h3");
                description2.html("description about Episode2");
                description2.position(500, 430);
                
                var beginbutton2 = createButton("Begin>");
                beginbutton2.position(displayWidth/2, displayHeight/2-95)
                    beginbutton2.mousePressed(() => {
                    intro2.hide();
                    description2.hide();
                    beginbutton2.hide();

                    var situationE2 = createElement("h2");
                    situationE2.html("Situation");

                    var OptionAE2 = createButton("Option A");
                    OptionAE2.position(displayWidth/2-100,displayHeight/2-200);

                    var OptionBE2 = createButton("Option B");
                    OptionBE2.position(displayWidth/2-200,displayHeight/2-100);

                    var OptionCE2 = createButton("Option C");
                    OptionCE2.position(displayWidth/2+100,displayHeight/2-200);

                    var OptionDE2 = createButton("Option D");
                    OptionDE2.position(displayWidth/2+150,displayHeight/2-100);

                    OptionAE2.mousePressed(() => {
                        score = score+10;

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var AdcE2 = createElement("h2");
                        AdcE2.html("It is correct! Looking at your account history ,you will be able to track down unusual activities.")
                        AdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         AdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    OptionBE2.mousePressed(() => {
                        score = score-10;

                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var BdcE2 = createElement("h2");
                        BdcE2.html("Well, looking at your search history won’t help!                        ")
                        BdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         BdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    OptionCE2.mousePressed(() => {
                        score = score-10;
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var CdcE2 = createElement("h2");
                        CdcE2.html("Logging in again won’t help you either!                        ")
                        CdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         CdcE2.hide();
                         Alright.hide();
                         
                        })
                    });

                    OptionDE2.mousePressed(() => {
                        score = score-10
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();

                        var DdcE2 = createElement("h2");
                        DdcE2.html("Des. on answerD")
                        DdcE2.position(500, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         DdcE2.hide();
                         Alright.hide();
                         
                        })

                    });

                    var Next1E2 = createButton("What's Next")
                    Next1E2.position(displayWidth/2+50, displayHeight/2-50);
                    Next1E2.mousePressed(() => {
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();
                        situationE2.hide();
                        Next1E2.hide();

                         var situation2E2 = createElement("h2");
                        situation2E2.html("Reset your Password.");
                        var password2 = createInput("")
                        password2.position(displayWidth/2, displayHeight/2-95);
                        
                        var reset2= createButton("RESET")
                        reset2.position(displayWidth/2,displayHeight/2)
                        reset2.mousePressed(()=>{
                            
                            situation2E2.hide();
                            password2.hide();
                            reset2.hide();
                             
                            var message = createElement("h2");
                            message.html("Your password has been reset successfully.")

                            var nextEpisode = createButton("Go!");
                            nextEpisode.position(displayWidth/2+50, displayHeight/2-50)
                            nextEpisode.mousePressed(()=>{
                                message.hide();
                                nextEpisode.hide();
                                episode3 = new Episode3();
                                episode3.display();
                            })

                        })
    }
                    )}
                    )}
                }