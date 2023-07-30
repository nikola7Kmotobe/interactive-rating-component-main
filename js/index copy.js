function nota(acao){
    let notas = [1,2,3,4,5];
    notas[0] = document.getElementById("um").value;
    if(acao===1){
        console.log(`A nota dada foi ${notas[0]}`);
        document.getElementById('container_1').remove('container_1');
        document.getElementById('container_3').style.display='flex';
        window.document.getElementById('text_p').innerHTML=`You selecte ${notas[0]} out of 5`;
        return false;
    }
    notas[1] = document.getElementById("dois").value;
    if( acao=== 2){
        console.log(`A nota dada foi ${notas[1]}`);
        document.getElementById('container_1').remove('container_1');
        document.getElementById('container_3').style.display='flex';
        window.document.getElementById('text_p').innerHTML=`You selecte ${notas[1]} out of 5`;
        return false;
    }

    notas[2] = document.getElementById("tres").value;
    if( acao=== 3){
    console.log(`A nota dada foi ${notas[2]}`);
    document.getElementById('container_1').remove('container_1');
    document.getElementById('container_3').style.display='flex';
    window.document.getElementById('text_p').innerHTML=`You selecte ${notas[2]} out of 5`;
    return false;
    }

    notas[3] = document.getElementById("quatro").value;
    if( acao===4){
    console.log(`A nota dada foi ${notas[3]}`);
    document.getElementById('container_1').remove('container_1');
    document.getElementById('container_3').style.display='flex';
    window.document.getElementById('text_p').innerHTML=`You selecte ${notas[3]} out of 5`;
    return false;
    }

    notas[4] = document.getElementById("cinco").value;
    if( acao===5){
    console.log(`A nota dada foi ${notas[4]}`);
    document.getElementById('container_1').remove('container_1');
    document.getElementById('container_3').style.display='flex';
    window.document.getElementById('text_p').innerHTML=`You selecte ${notas[4]} out of 5`;
    return false;
    }    
}





