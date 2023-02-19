function darkmode(flag){
    let a=document.getElementById("darkmode");
    let b= document.getElementsByClassName("navbtn");
    let c=document.getElementById("logo");
    let d=document.getElementById("h1");
    let e=document.getElementById("nav");
    let f=document.getElementById("nav1");
    let g=document.getElementsByClassName("story");
    let h=document.getElementById("side");
    let k=document.getElementById("inp");
    let l=document.getElementsByClassName("light");
    let p=document.getElementById("darkmode");

    if(flag==0){
        document.body.style.backgroundColor="black";
        document.body.style.border="1px solid rgb(66, 65, 65)"

        p.style.backgroundColor="white";
        p.style.color="black";
        c.style.backgroundColor="black";
        c.style.border="1px solid rgb(66, 65, 65)"
        d.style.color="white";
        e.style.backgroundColor="#181818";
        f.style.backgroundColor="#181818";
        h.style.backgroundColor="black";
        h.style.color="#555";
        k.style.backgroundColor="#555";
        k.style.border="none";
        for(m=0;m<l.length;m++){
            l[m].style.backgroundColor="rgb(66, 65, 65)"
        }
      
       
        for(j=0;j<g.length;j++){
            g[j].style.color="#555";
            g[j].style.backgroundColor="#181818";


        }


        
        for(i=0;i<b.length;i++){
            b[i].style.backgroundColor="#181818";
            b[i].style.color="white"
            b[i].style.border="1px solid rgb(66, 65, 65)";


        }
       
        


        a.setAttribute("onclick","darkmode(1)");
    }
    else if (flag==1){
        document.body.style.backgroundColor="";
        document.body.style.border="";
       
        c.style.backgroundColor="";
        c.style.border="";
        d.style.color="";
        e.style.backgroundColor="";
        f.style.backgroundColor="";
        h.style.backgroundColor="";
        h.style.color="";
        k.style.backgroundColor="";
        p.style.backgroundColor="";
        p.style.color="";
      
       
        for(j=0;j<g.length;j++){
            g[j].style.color="";
            g[j].style.backgroundColor="";


        }


        
        for(i=0;i<b.length;i++){
            b[i].style.backgroundColor="";
            b[i].style.color=""
            b[i].style.border="";


        }
       
        


        a.setAttribute("onclick","darkmode(0)");
    }
    

    }

    
