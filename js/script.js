// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.Stampare a schermo la bici con peso minore.

var gruppoBici = [
    {
     nome: 'graziella',
     peso : 6.5
    },

    {
     nome: 'pippo',
    peso : 3
    },
    
    {
     nome: 'bmx',
     peso : 4.5
    },
    
];

var pesoMinimo = gruppoBici[0];

for (var i = 1; i< gruppoBici.length; i++){
    
    if (gruppoBici[i].peso < pesoMinimo.peso){
        pesoMinimo = gruppoBici[i];
    }
}
console.log(pesoMinimo);

// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var cestoZucchine = [
    {
        varieta : 'verde',
        peso : 12,
        lunghezza : 25
    },  
    {
        varieta : 'verde',
        peso : 16,
        lunghezza : 12
    },  
    {
        varieta : 'marrone',
        peso : 18,
        lunghezza : 22
    },  
    {
        varieta : 'verde',
        peso : 10,
        lunghezza : 26
    },  
    {
        varieta : 'ciano',
        peso : 15,
        lunghezza : 11
    },  
    {
        varieta : 'viola',
        peso : 8,
        lunghezza : 10
    },  
    {
        varieta : 'blu',
        peso : 18,
        lunghezza : 20
    },  
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    }, 
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    }, 
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    },  
];

var pesoTot = 0;
for(var i = 0; i < cestoZucchine.length; i++){

    pesoTot += cestoZucchine[i].peso;
   
};
console.log(pesoTot);

// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var cestoZucchine = [
    {
        varieta : 'verde',
        peso : 12,
        lunghezza : 25
    },  
    {
        varieta : 'verde',
        peso : 16,
        lunghezza : 12
    },  
    {
        varieta : 'marrone',
        peso : 18,
        lunghezza : 22
    },  
    {
        varieta : 'verde',
        peso : 10,
        lunghezza : 26
    },  
    {
        varieta : 'ciano',
        peso : 15,
        lunghezza : 11
    },  
    {
        varieta : 'viola',
        peso : 8,
        lunghezza : 10
    },  
    {
        varieta : 'blu',
        peso : 18,
        lunghezza : 20
    },  
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    }, 
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    }, 
    {
        varieta : 'gialla',
        peso : 16,
        lunghezza : 27
    },  
];

var meno15 = [];
var piu15= [];

for(var i = 0; i < cestoZucchine.length; i++){
    if(cestoZucchine[i].lunghezza <15){
        meno15.push(cestoZucchine[i]);
    }else{
        piu15.push(cestoZucchine[i]);
    }
   
};
console.log(meno15);
console.log(piu15);

var pesoTotMeno15 = 0;
for(var i = 0; i < meno15.length; i++){

pesoTotMeno15 += meno15[i].peso;
   
};
console.log(pesoTotMeno15);

var pesoTotPiù15 = 0;
for(var i = 0; i < piu15.length; i++){

pesoTotPiù15 += piu15[i].peso;
   
};
console.log(pesoTotPiù15)