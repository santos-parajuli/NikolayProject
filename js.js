
function generateDialogue(){
    var dialogues=document.getElementById("conversation").value;
    if(dialogues.length){
        var arr = dialogues.split("\n");
        var display=""
        var left=true
        for (dialogue in arr){
            var dialogArr = arr[dialogue].split(':');
            if(dialogArr.length!=1){
                var avatar = "https://i.pravatar.cc/150?u="+dialogArr[0];
                var actualDialogue = dialogArr[1];
                if (left){
                    display += `
                        <div class="individualDialogue">
                        <img class="avatar" src=${avatar}> 
                        <p> ${actualDialogue} </p>
                        </div>`
                }else{
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

