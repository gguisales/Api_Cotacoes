const cotX = document.querySelector('#cotX');


const convertReal = document.querySelector('#bt1');
const opcoes = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
convertOne.addEventListener('click', ()=>{
            
    cotX.innerHTML = 'USD-BRL';
     fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes)
    .then(
         response => {response.json()
        .then(coin => {
        document.querySelector('#compra').textContent = coin.USDBRL.bid;
        document.querySelector('#venda').textContent = coin.USDBRL.ask;
        document.querySelector('#variacao').textContent = coin.USDBRL.varBid;
        document.querySelector('#max').textContent = coin.USDBRL.high;
        document.querySelector('#min').textContent = coin.USDBRL.low;
        })  
            })          
        });


