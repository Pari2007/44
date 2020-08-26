class Episode1{
    constructor(){
   }
    display(){
  
               var intro = createElement("h2");
                intro.html("Season1:Episode1:Gmail Hacked!");
                intro.position(displayWidth/2-120, displayHeight-700);

                var description = createElement("h3");
                description.html("Your Gmail account gets hacked by some fraudsters recover & Secure it!");
                description.position(displayWidth/2, displayHeight/2-150);

                var beginbutton = createButton("Begin>");
                beginbutton.position(displayWidth/2, displayHeight/2-95)
                beginbutton.style("backgroundColor","yellow");
                    beginbutton.style("fontSize","20px");
                beginbutton.mousePressed(() => {
                    intro.hide();
                    description.hide();
                    beginbutton.hide();

                    var Scene1 = createElement("h2");
                    Scene1.html("Someone has breached into your gmail account,What will you do?");
                Scene1.position(displayWidth/2-120, displayHeight-700);
                    
                    var OptionA = createButton("Call 911");
                    OptionA.position(displayWidth/2-100,displayHeight/2-200);
                    OptionA.style("backgroundColor","pink");
                    OptionA.style("fontSize","20px");
                    
                    
                    var OptionB = createButton("Go to Account Recovery page");
                    OptionB.position(displayWidth/2-200,displayHeight/2-100);

                    OptionB.style("backgroundColor","pink");
                    OptionB.style("fontSize","20px");
                    
                    var OptionC = createButton("Ask for assistance");
                    OptionC.position(displayWidth/2+100,displayHeight/2-200);

                    OptionC.style("backgroundColor","pink");
                    OptionC.style("fontSize","20px");
                    
                    var OptionD = createButton("Reset your phone");
                    OptionD.position(displayWidth/2+150,displayHeight/2-100);

                    OptionD.style("backgroundColor","pink");
                    OptionD.style("fontSize","20px");

                    OptionA.mousePressed(() => {
                        score = score-5;
                        OptionB.hide();
                         OptionC.hide();
                         OptionD.hide();
                         OptionA.hide();
                        var Adc = createElement("h2");
                        Adc.html("Your report has been successfully registered under the cyber crime law, but it isn’t the correct thing to do at the moment")
                        Adc.position(100, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);
                        Alright.mousePressed(()=>{
                         Adc.hide();
                         Alright.hide();
                         
                        })
                    });
                    
                    OptionB.mousePressed(() => {
                        score = score+10
                        OptionB.hide();
                         OptionC.hide();
                         OptionD.hide();
                         OptionA.hide();

                         score=+10;

                        var Bdc = createElement("h2");
                        Bdc.html("You have recoverd your account successfully.You are on the right track…keep going!")
                        Bdc.position(200, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Bdc.hide();
                         Alright.hide();
                         
                         
                        })
                    });
                    
                    OptionC.mousePressed(() => {
                        score = score-5;

                        OptionB.hide();
                         OptionC.hide();
                         OptionD.hide();
                         OptionA.hide();
                        var Cdc = createElement("h2");
                        Cdc.html("You took assistance from a Cyber Security Personnel and he has told you to recover your email. ")
                        Cdc.position(300, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Cdc.hide();
                         Alright.hide();
                         
                        })
                    });
                    
                    OptionD.mousePressed(() => {
                        score = score-5;

                        OptionB.hide();
                         OptionC.hide();
                         OptionD.hide();
                         OptionA.hide();
                        var Ddc = createElement("h2");
                        Ddc.html("Resetting your phone doesn’t have any connection with your Gmail getting hacked!")
                        Ddc.position(400, 500);
                        var Alright = createButton("Alright!")
                        Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Ddc.hide();
                         Alright.hide();
                         
                        })

                    });
                    var Next1 = createButton("What's Next")
                    Next1.position(displayWidth/2+50, displayHeight/2-50);
                    Next1.mousePressed(() => {
                        
                        Scene1.hide();
                        Next1.hide();

                        var situation2 = createElement("h2");
                        situation2.html("How will you secure?");

                        var OptionA2 = createButton("2 factor verification");
                        OptionA2.position(displayWidth/2-100,displayHeight/2-200);
                        var OptionB2 = createButton("Reset your phone.");
                        OptionB2.position(displayWidth/2-200,displayHeight/2-100);
                        var OptionC2 = createButton("clear cookies and cache");
                        OptionC2.position(displayWidth/2+100,displayHeight/2-200);
                        OptionA2.mousePressed(() => {
                            OptionB2.hide();
                            OptionC2.hide();
                           
                            OptionA2.hide();
                            var Adc2 = createElement("h2");
                            Adc2.html("Now, your email account is partly secured")
                            Adc2.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Adc2.hide();
                         Alright.hide();
                         
                        })
                        });
                        OptionB2.mousePressed(() => {
                        score = score-5;

                            OptionB2.hide();
                            OptionC2.hide();
                            
                            OptionA2.hide();
                            var Bdc2 = createElement("h2");
                            Bdc2.html("That will not help you in securing your email account.")
                            Bdc2.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Bdc2.hide();
                         Alright.hide();
                         
                        })
                        });
                        OptionC2.mousePressed(() => {
                            OptionB2.hide();
                        score = score-5;

                            OptionC2.hide();
                            
                            OptionA2.hide();
                            var Cdc2 = createElement("h2");
                            Cdc2.html("Clearing cookies and cache will promise you smooth functioning but if will not help you in securing your Email account.");
                            Cdc2.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Cdc2.hide();
                         Alright.hide();
                         
                        })
                        });
                    var Next2 = createButton("Next>")
                    Next2.position(displayWidth/2+50, displayHeight/2-50);
                    Next2.mousePressed(() => {
                       
                        situation2.hide();  
                        Next2.hide();

                        var situation3 = createElement("h2");
                        situation3.html("Which device do you suspect?Eliminate it.");

                        var OptionA3 = createButton("Tablet");
                        OptionA3.position(displayWidth/2-100,displayHeight/2-200);
                        
                        var OptionB3 = createButton("Phone");
                        OptionB3.position(displayWidth/2-200,displayHeight/2-100);
                        
                        var OptionC3 = createButton("PC");
                        OptionC3.position(displayWidth/2+100,displayHeight/2-200);
                        
                        var OptionD3 = createButton("Laptop");
                        OptionD3.position(displayWidth/2+150,displayHeight/2-100);
                        
                        OptionA3.mousePressed(() => {
                            OptionB3.hide();
                            OptionC3.hide();
                            OptionD3.hide();
                            OptionA3.hide();
                            var Adc3 = createElement("h2");
                            Adc3.html("You have successfully eliminated the unknown device logged in into your email  ")
                            Adc3.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Adc3.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                        OptionB3.mousePressed(() => {
                        score = score-5;

                            OptionB3.hide();
                            OptionC3.hide();
                            OptionD3.hide();
                            OptionA3.hide();
                            var Bdc3 = createElement("h2");
                            Bdc3.html("Oops! That was your own device . That will not help you in securing your email account.")
                            Bdc3.position(500, 500);
                            var Alright = createButton("Alright!")
                        Alright.position(300,500);
                        Alright.mousePressed(()=>{
                         Bdc3.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                        OptionC3.mousePressed(() => {
                        score = score-5;

                            OptionB3.hide();
                            OptionC3.hide();
                            OptionD3.hide();
                            OptionA3.hide();
                            var Cdc3 = createElement("h2");
                            Cdc3.html("Oops! That was your own device . That will not help you in securing your email account.")
                            Cdc3.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Cdc3.hide();
                         Alright.hide();
                         
                        })
                        });
                        
                        OptionD3.mousePressed(() => {
                        score = score-5;

                            OptionB3.hide();
                            OptionC3.hide();
                            OptionD3.hide();
                            OptionA3.hide();
                            var Ddc3 = createElement("h2");
                            Ddc3.html("Oops! That was your own device . That will not help you in securing your email account.")
                            Ddc3.position(500, 500);
                            var Alright = createButton("Alright!")
                            Alright.position(displayWidth/2+50, displayHeight/2-95);

                        Alright.mousePressed(()=>{
                         Ddc3.hide();
                         Alright.hide();
                         
                        })

                        });

                    var Next3 = createButton("Next>")
                    Next3.position(displayWidth/2+50, displayHeight/2-50);
                    Next3.mousePressed(() => {
                        situation3.hide();  
                        Next3.hide();
                        
                        var situation4 = createElement("h2");
                        situation4.html("Reset your Password.");
                        situation4.position(displayWidth/2-120, displayHeight-700)                        
                        var password1 = createInput("");
                        password1.position(displayWidth/2, displayHeight/2-95);
                        

                        var Reset = createButton("RESET");
                        Reset.position(displayWidth/2,displayHeight/2)
                        Reset.mousePressed(()=>{
                            
                            situation4.hide();
                            password1.hide();
                            Reset.hide();
                             
                            var message = createElement("h2");
                            message.html("Your password has been reset successfully.")

                            var nextEpisode = createButton("Go!");
                            nextEpisode.position(displayWidth/2+50, displayHeight/2-50);
                            nextEpisode.mousePressed(()=>{
                                message.hide();
                                nextEpisode.hide();
                                episode2 = new Episode2();
                                episode2.display();
                            })

                        })

                         

                 });
                

                 })



}
)}
)}
}
    