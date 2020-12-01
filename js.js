//this fuction is called when Generate Dialogue button is clicked
function generateDialogue(){
    var dialogues=document.getElementById("conversation").value; // it gets the value of textarea field
    //check if textarea is empty. If it is empty return no conversation else return conversation ui
    if(dialogues.length){
        // splitting the whole conversation into single single conversations 
        var arr = dialogues.split("\n");
        var display=""
        var left=true
        //looping through all conversations so that we can display each dialogue with their respective avatar
        for (dialogue in arr){
            var dialogArr = arr[dialogue].split(':'); // splitting our speaker name and actual dialogue i.e "teacher : hi "  it will split it in["teacher","hi"]
            //this if statement checks wheter or not we gave proper foramt i.e "person:dialogue" suppose we gave input as teacher only then it have no dialogue so it wont display that. 
            if(dialogArr.length!=1){
                var avatar = "https://i.pravatar.cc/150?u="+dialogArr[0]; // getting random avatar based on name
                var actualDialogue = dialogArr[1];
                // this if statement is used to alter the chat dialogue ui. 
                if (left){
                    // this is to intorpolate out html as per the dialogue provided
                    display += `
                        <div class="individualDialogue">
                        <img class="avatar" src=${avatar}> 
                        <p> ${actualDialogue} </p>
                        </div>`
                }else{
                    // this is to intorpolate out html as per the dialogue provided with float right
                    display += `
                        <div class="individualDialogueRight">
                        <p> ${actualDialogue} </p>
                        <img class="avatar" src=${avatar}> 
                        </div>`
                }
                left=!left
            }
        }
    }else{
        display="<p> Please provide some conversations </p>"
    }
    
    document.getElementById('dialogue').innerHTML = display;

}

