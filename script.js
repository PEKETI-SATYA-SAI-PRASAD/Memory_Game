const sourcelinks=[{source:"https://i.pinimg.com/736x/9c/a2/b1/9ca2b152dc720165de710a0ba7f0dc09.jpg",no:1}
    ,{source:"https://e1.pxfuel.com/desktop-wallpaper/382/641/desktop-wallpaper-chennai-super-kings-csk-logo-thumbnail.jpg",no:2},
    {source:"https://e1.pxfuel.com/desktop-wallpaper/382/641/desktop-wallpaper-chennai-super-kings-csk-logo-thumbnail.jpg",no:3},
    {source:"https://i.pinimg.com/736x/9c/a2/b1/9ca2b152dc720165de710a0ba7f0dc09.jpg",no:4},
    {source:"https://static.india.com/wp-content/uploads/2017/03/mumbai.jpg?impolicy=Medium_Resize&w=1200&h=800",no:5},
    {source:"https://static.india.com/wp-content/uploads/2017/03/mumbai.jpg?impolicy=Medium_Resize&w=1200&h=800",no:6},
    {source:"https://media.assettype.com/bloombergquint/2023-03/45b17c41-aa92-4da0-b95d-43ac481a0076/wp4298363_kkr_ipl_wallpapers.jpg?w=1200&h=675",no:7},
    {source:"https://media.assettype.com/bloombergquint/2023-03/45b17c41-aa92-4da0-b95d-43ac481a0076/wp4298363_kkr_ipl_wallpapers.jpg?w=1200&h=675",no:8},
    {source:"https://www.rajasthanroyals.com/static-assets/images/cssimages/static/rr-new.png?v=5.32",no:9},
    {source:"https://www.rajasthanroyals.com/static-assets/images/cssimages/static/rr-new.png?v=5.32",no:10},
    {source:"https://static.toiimg.com/thumb/msid-72902421,width-400,resizemode-4/72902421.jpg",no:11},
    {source:"https://static.toiimg.com/thumb/msid-72902421,width-400,resizemode-4/72902421.jpg",no:12},
    ]
    
    let arrays=[];
    let open=0;
    let prevsrc="";
    let count=0;
    let player1=0;
    let player2=0;
    let points=0;
    let prevbox=null;
    let click=true;
    let chances=1;
     function disableclick(){
        click=false;
     }
     function enableclick(){
        click=true;
     }
    
    function shuffleArray(array) {
        arrays=[...array]
        //console.log(arrays)
        for (let i = arrays.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
        }
        //console.log(arrays)
      }
    
      shuffleArray(sourcelinks);
    
      for(let i=0;i<arrays.length;i++){
        let box=document.createElement("img");
        box.className="box";
        box.src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-text-box-pentagon-geometry-quote-purple-gradient-abstract-png-image_6672755.jpg";
        box.alt=i;
    
        document.querySelector(".cardswrapper").appendChild(box)
    
        box.onclick=function pass(){
            if(click===false) return;
            if(box.classList.contains(".box-first")){
                return;
            }
            
            box.classList.add(".box-first");
            
            box.src=arrays[box.alt].source;
            
    
    handleBoxClick(box.alt,box)
        }
      }
    
      function handleBoxClick(src,box) {
        
        if(count===0 ){
            count++;
            //console.log("Clicked box's src:", src);
            prevbox=box;
            prevno=src;
        prevlink=arrays[src].source;
        //console.log(prevlink)
        }
        else if(count===1){
    
             if(arrays[src].source===prevlink){
                //console.log("one point for you");
                points++;
                count=0;
                prevlink="";
                //console.log(points)
                prevbox=null;
                open=open+2;
                if(chances%2==0){
                    player2++;
                    document.getElementById("p2s").innerText=player2;
                    document.getElementById("turn").innerText="Turn for player2"
    
                }
                else{
                    player1++;
                    document.getElementById("p1s").innerText=player1;
                    document.getElementById("turn").innerText="Turn for player1"

                }
                if(open===12){
                  //  console.log(player1,player2);
                    if(player1>player2){
                        //console.log("player 1 is greater")
                        document.getElementById("turn").innerText="player1 wins"

                    }
                    else if(player2>player1){
                        //console.log("player 2 is greater")

                        document.getElementById("turn").innerText="player2 wins"

                    }
                    else if(player1===player2){
                        //console.log("tie")

                        document.getElementById("turn").innerText="Tie"
  
                    }
                   setTimeout(()=>{
                    window.location.reload()},1000);
                }
               
                //console.log(player1,player2)
                
                
             }
             else{
                prevbox.classList.remove(".box-first");
            box.classList.remove(".box-first");


            count=0;
            prevlink="";
            //console.log(points)
            //console.log("no point");
            chances++;
            //console.log("i am inside");
            if( document.getElementById("turn").innerText==="Turn for player1"){
                setTimeout(()=>{document.getElementById("turn").innerText="Turn for player2"},1000);
            }
            else{
                setTimeout(()=>{document.getElementById("turn").innerText="Turn for player1"},1000);

            }
            disableclick()
            setTimeout(()=>{
                if(prevbox!==null){
                    
                prevbox.alt=prevno;
                prevbox.src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-text-box-pentagon-geometry-quote-purple-gradient-abstract-png-image_6672755.jpg";
    
               //console.log(src)
                box.alt=src;
        box.src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-text-box-pentagon-geometry-quote-purple-gradient-abstract-png-image_6672755.jpg";

                prevbox=null;
            
            }
            enableclick();
    
            },1000)
           
          
            
    
             }
        }
        
        // Perform any actions with the src value
    }
    function func(){
     window.location.reload()
    }