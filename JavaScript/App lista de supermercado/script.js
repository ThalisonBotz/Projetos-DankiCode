var items = [],
    btnCad = document.querySelector('input[value=cadastrar]'),
    BtnLimpar = document.querySelector('button[name=limpar]');

    btnCad.addEventListener('click',() => {
        const nomeProduto = document.querySelector('input[name=nome_produto]'),
            precoProduto = document.querySelector('input[name=valor_produto]');
        alert('Produto Cadastrado');
        console.log('Nome: ', nomeProduto,' Valor: ', precoProduto);

        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        // Mockup
        // <div class="lista__produto">
        //     <h3>Nome do produto</h3>
        //     <h3 class="produto__preço"><span>R$00,00</span></h3>
        // </div>

        let listaPordutos = document.querySelector('.lista__produtos'),
            ElementoSoma = document.querySelector('#total'),
            soma = 0;

        listaPordutos.innerHTML="";
        items.map(function(val){
            soma+=parseFloat(val.valor);  
            listaPordutos.innerHTML+=`
                <div class="lista__produto">
                    <h3>`+val.nome +`</h3>
                    <h3 class="produto__preço"><span>R$`+val.valor+`</span></h3>
                </div>
            `;
        });  
        soma = soma.toFixed(2);
        nomeProduto.value="";
        precoProduto.value=""; 
        ElementoSoma.innerHTML = soma; 

    }); 

    BtnLimpar.addEventListener('click',()=>{
        items = [];
        document.querySelector('.lista__produtos').innerHTML = "";
        document.querySelector('#total').innerHTML = "00,00";
        
    });