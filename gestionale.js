var persona=[]; 

 do { 
     
    switch (require("readline-sync").questionInt("Scegli la tua opzione:\n")) {  
    case 1: 
     Inserimento(); 
     break; 
      
     case 2: 
     Modifica(); 
     break;  
      
     case 3: 
     Cancella(); 
     break; 
      
     case 4: 
     Trova(); 
     break; 
      
     case 5: 
     Visualizza(); 
     break;  
     
    default: 
    console.log("Errore");
    } var risposta=require("readline-sync").question("Vuoi uscire?:\n"); 
} 
while(risposta=="no");  


function Inserimento() { 
var id=0;  
 
var quantitaPersone=require("readline-sync").questionInt("Quante persone vuoi aggiungere?:\n"); 
for(var i=0; i<quantitaPersone; i++){ 
    id=id+1; 

var id=require("readline-sync").questionInt("Inserisci id:\n");
var nome=require("readline-sync").question("Inserisci nome:\n"); 
var cognome=require("readline-sync").question("Inserisci cognome:\n"); 
var luogoDiNascita=require("readline-sync").question("Inserisci luogo di nascita:\n"); 
var dataDiNascita=require("readline-sync").question("Inserisci data di nascita:\n"); 
var sesso=require("readline-sync").question("Inserisci sesso:\n"); 
var codiceFiscale=require("readline-sync").question("Inserisci codice fiscale:\n"); 
 
 persona.push(id+","+nome+","+cognome+","+luogoDiNascita+","+dataDiNascita+","+sesso+","+codiceFiscale);
 }    
 
 for(i=0; i<quantitaPersone; i++){ 
     console.log(persona[i]);
 }
}
 
function Modifica() {  
    var c=["id","nome","cognome","luogoDiNascita","dataDiNascita","sesso","codiceFiscale"];
    var modifica=require("readline-sync").questionInt("Scegli id da modificare:\n"); 
    for(i=0; i<persona.length; i++){   
        var cerca=persona[i].split(",");
        if (modifica==cerca[0]) { 
        var cosa=require("readline-sync").question("Cosa vuoi modificare?:\n"); 
        for(index=0; index<c.length; index++) {  
            if(cosa==c[index]){ 
                cerca[index]=require("readline-sync").question("Inserisci cosa vuoi sovrascrivere:\n");  
                var id= cerca[0]; 
                var nome= cerca[1]; 
                var cognome= cerca [2]; 
                var luogoDiNascita= cerca[3]; 
                var dataDiNascita= cerca[4]; 
                var sesso= cerca[5]; 
                var codiceFiscale=cerca[6];  
                persona=id+","+nome+","+cognome+","+luogoDiNascita+","+dataDiNascita+","+sesso+","+codiceFiscale; 
                persona[i]=persona;   
                console.log(persona);
            }
        }
    }
  } 
} 
 
function Cancella () {    
    var cancella=require("readline-sync").questionInt("Scegli id da cancella:\n");  
    for(i=0; i<persona.length; i++) {  
        var cerca=persona[i].split(","); 
        if(cancella==cerca[0]) { 
           persona.splice(i,1);
        } 
        console.log(persona);

    }

} 
 
function Trova() {  
    var trova=require("readline-sync").questionInt("Trova id:\n");    
    for(i=0; i<persona.length; i++) {  
        var cerca=persona[i].split(","); 
        if(trova==cerca[0]) {   
            console.log("Trovato!:\n",persona[i]);
        }
    }
} 
 
function Visualizza() { 
    var visualizza=require("readline-sync").question("Visualizza persone:s/n\n"); 
    for(i=0; i<persona.length; i++){  
        console.log(persona[i]);
    } 
}
