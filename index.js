


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
        k.style.border="";
      
       
        for(j=0;j<g.length;j++){
            g[j].style.color="";
            g[j].style.backgroundColor="";


        }
        for(m=0;m<l.length;m++){
            l[m].style.backgroundColor="";
        }


        
        for(i=0;i<b.length;i++){
            b[i].style.backgroundColor="";
            b[i].style.color=""
            b[i].style.border="";


        }
       
        


        a.setAttribute("onclick","darkmode(0)");
    }
    

    }

function recent(flag){
    let roc=document.getElementById("recent");
    let rec = document.getElementById("side");
   let click= document.getElementById("imgh");
   let inp = document.getElementById("inp1");

   if(flag == 0){
   click.style.display="none";

   
   roc.innerHTML="HOME";
   inp.style.display="none"
   
   
   rec.style.display="block";
    rec.style.width="400px";
    roc.setAttribute("onclick","recent(1)")
    }
    else if(flag ==1){
        click.style.display="block";
        rec.style.display="none";
        roc.setAttribute("onclick","recent(0)");
        roc.innerHTML="RECENT";
    }
}
function search(){
    let ut = document.getElementById("search");
    let rot = document.getElementById("sidec");
    let ror = document.getElementById("side");
    let ck= document.getElementById("imgh");
    let ino = document.getElementById("inp1");
    ck.style.display="none";
    rot.style.display="block";
    ut.style.display="none";
    ror.style.display="block";
    rot.style.display="none";
    
    ino.style.display="block";
        
       

    
}
function home(){
    document.location.reload(true)

}

 async function change(){
     var news=["Axar Patel and Ravichandran Ashwin added another significant chapter to India's lower-order fightbacks as their priceless 114-run eighth-wicket partnership put the hosts on an even keel against Australia on an engrossing second day of the second Test here on Saturday. Thanks to Axar's invaluable 74 off 115 balls and Ashwin's 37 off 71 balls, India, who were in complete mess at 139/7, recovered well to end their first innings at 262 in 83.3 overs, just one run behind Australia's 263.<br><a href=''>[Read More...]</a>",
"The high-voltage contest between Roman Reigns and Sami Zayn in 2023 WWE Elimination Chamber match will soon get underway on Saturday in Montreal, Canada. Fans are eagerly waiting to see if the former Honorary UCE can halt the juggernaut of Reigns who recently completed 900 days since becoming the WWE Universal Champion in 2020.<br><a href=''>[Read More...]</a>",
"New Delhi: North India's first nuclear power plant will come up in Haryana in the village of Gorakhpur in Fatehabad district, 150 km north of the national capital, Union Minister of State for Science and Technology Jitendra Singh has said.<br><br>Announcing it in New Delhi on Saturday, Union Minister of State for Science and Technology, and Earth Sciences Jitendra Singh said that during Prime Minister Narendra Modi's regime, one of the major achievements would be the installation of nuclear/atomic energy plants in other parts of the country, which were earlier confined mostly to south Indian states like Tamil Nadu and Andhra Pradesh or in the west in Maharashtra, according to a statement from the Department of Atomic Energy.<br><a href=''>[Read More...]</a>",
"Finance minister Nirmala Sitharaman on Saturday announced that the central government will clear the entire dues of the pending balance of the GST compensation, as decided at the 49th GST Council meeting. `As of May 31, we cleared all the dues. There was something left in the name of dues for June. Even that is getting cleared,` Nirmala Sitharaman said announcing the clearance of all GST dues to the tune of ₹16,982 crore. <br><br>The amount is not available in the compensation fund as of today, but it will be released from the government's own resources. The same amount will be recouped from the future compensation cess collection, Sitharaman said. <br><br> `With this, the centre would clear the entire provisionally admissable compensation cess, dues for 5 years as envisaged in the GST compensation to states Act 2017,` the finance minister announced.<br><a href=''>[Read More...]</a>"]
var at;
var newws = document.getElementsByClassName("newws");

for (at=0;at<newws.length;at++){
    newws[at].innerHTML=news[at]
}

var headline = ["India vs Australia, 2nd Test: Nathan Lyon, Travis Head Put Australia In Control vs India",
"‘Roman Reigns, listen to me closely…’: Sami Zayn's blunt warning before epic clash in 2023 WWE Elimination Chamber match",
"North India's 1st Nuclear Power Plant To Come Up In Haryana: Minister",
"Entire GST compensation cess dues will be cleared, announces Nirmala Sitharaman"]

var ah;
var title=document.getElementsByClassName("title");
for(ah=0;ah<title.length;ah++){
    title[ah].innerHTML=headline[ah]
}

var bulletnews=["‘Roman Reigns, listen to me closely…’: Sami Zayn's blunt warning before clash",
"Newly-discovered virus possess the ability to destroy resistant bacteria: Study",
"Does exercise make your veins stick out? Ways gymgoers can avoid varicose veins",
"‘Virat Kohli will say…’: Lyon's stunning take on umpire's controversial call",
"To make educational campuses more democratic, address systemic caste bias",
"Entire GST compensation cess dues will be cleared, announces Nirmala Sitharaman",
"Swara Bhasker responds to Kangana Ranaut after she wished her on her engagement",
"A year later, the Ukraine war changes the world",
"Vivo launches Y56 5G smartphone at ₹20,000. Check features & specifications",
"Violence in Kashmir, Maoist-hit areas reduce by 80% under Modi govt: Amit Shah",
"New revelations on the long history of our nation",
"UKPSC Junior Assistant Admit Card 2022 out at ukpsc.net.in, download link here"]

var bullet = document.getElementsByClassName("bullet");
var ab;

for(ab=0;ab<bullet.length;ab++){
    bullet[ab].innerHTML=bulletnews[ab]

}
    
    let img=document.getElementsByClassName("fox1");
   

    for(j=0;j<1000;j++){

        for (i=0;i<img.length;i++){

           
           
         
     
        img[i].style.display="block";
     
     
         
        await delay(5000)
        img[i].style.display="none";

    }
            
     }

    }








const delay = async (ms) => new Promise(resolve => setTimeout(resolve, ms))
