const c = (el) => document.querySelector(el); // PEGANDO PRIMEIRO ELEMENTO ENCONTRADO E DENOMINADO DE EL
const cs = (el) => document.querySelectorAll(el);// PEGANDO TODOS OS ELEMENTO ENCONTRADOS E DENOMINADOS DE EL
var chave = 0;
var carrinho = [];



function addProduto() {

    total1 = produtos[chave].preco + 5;
    total2 = produtos[chave].preco + 10;
    total3 = produtos[chave].preco + 15;
    total4 = produtos[chave].preco + 20;
    total5 = produtos[chave].preco + 25;
    total6 = produtos[chave].preco + 30;
    total7 = produtos[chave].preco + 35;
    total8 = produtos[chave].preco + 40;
    total9 = produtos[chave].preco + 45;
    total10 = produtos[chave].preco + 50;

    if (pages >= 20) {
        pages = 20;
    } else
        pages++;
    c('.produtoInfo-qtd').innerHTML = pages;

    if (pages > 1) {
        if (pages >= 2) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total1.toFixed(2) + `/mês`;
            valor =  total1;
        }
        if (pages >= 4) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total2.toFixed(2) + `/mês`;
            valor = total2;
        }
        if (pages >= 6) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total3.toFixed(2) + `/mês`;
            valor = total3;
        }
        if (pages >= 8) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total4.toFixed(2) + `/mês`;
            valor = total4;
        }
        if (pages >= 10) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total5.toFixed(2) + `/mês`;
            valor = total5.toFixed(2) ;
        }
        if (pages >= 12) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total6.toFixed(2) + `/mês`;
            valor = total6;
        }
        if (pages >= 14) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total7.toFixed(2) + `/mês`;
            valor = total7;
        }
        if (pages >= 16) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total8.toFixed(2) + `/mês`;
            valor = total8;
        }
        if (pages >= 18) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total9.toFixed(2) + `/mês`;
            valor = total9;
        }
        if (pages >= 20) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total10.toFixed(2) + `/mês`;
            valor = total10;
        }
    }
}

function removeProduto() {
    if (pages > 1) {
        pages--;
        c('.produtoInfo-qtd').innerHTML = pages;
    } else {
        pages = 1;
    }

    if (pages < 2) {
        total = total1 - 5;
        c('.produtoInfo--precoAtual').innerHTML = `R$` + total.toFixed(2) + `/mês`;
        valor = total;
    } else
        if (pages < 4) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total1.toFixed(2) + `/mês`;
            valor = total1;
        } else if (pages < 6) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total2.toFixed(2) + `/mês`;
            valor = total2;
        } else if (pages < 8) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total3.toFixed(2) + `/mês`;
            valor = total3;
        } else if (pages < 10) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total4.toFixed(2) + `/mês`;
            valor = total4;
        } else if (pages < 12) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total5.toFixed(2) + `/mês`;
            valor = total5;
        } else if (pages < 14) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total6.toFixed(2) + `/mês`;
            valor = total6;
        } else if (pages < 16) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total7.toFixed(2) + `/mês`;
            valor = total7;
        } else if (pages < 18) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total8.toFixed(2) + `/mês`;
            valor = total8;
        } else if (pages < 20) {
            c('.produtoInfo--precoAtual').innerHTML = `R$` + total9.toFixed(2) + `/mês`;
            valor = total9;
        }

}
produtos.map((item, index) => {
    pages = 1;
    let produtosItem = c('.produtos .produtos-itens').cloneNode(true);

    produtosItem.setAttribute('data-key', index);
    produtosItem.querySelector(".produtos-itens--img img").src = item.img;
    produtosItem.querySelector(".produtos-itens--preco").innerHTML = `R$` + item.preco.toFixed(2) + `/mês`;
    produtosItem.querySelector(".produtos-itens--nome").innerHTML = item.nome;
    produtosItem.querySelector(".produtos-itens--descricao").innerHTML = item.descricao;



    produtosItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        // c('.produtoInfo-qtdMais').removeEventListener('click', addProduto);
        chave = e.target.closest('.produtos-itens').getAttribute('data-key');
        pages = 1;

        c('.produtoBig img').src = produtos[chave].img;
        c(".produtoInfo h1").innerHTML = produtos[chave].nome;
        c('.produtoInfo-desc').innerHTML = produtos[chave].descricao;
        c('.produtoInfo-qtd').innerHTML = pages;
        c('.produtoWindowArea').style.opacity = 0;
        c('.produtoWindowArea').style.display = 'flex';
        c('.produtoInfo-size.selected').classList.remove('selected');


        cs('.produtoInfo-size').forEach((size, sizeIndex) => {
            if (sizeIndex == 0) {
                size.classList.add('selected');
               c('.produtoInfo--precoAtual').innerHTML = `R$` + produtos[chave].preco.toFixed(2) + `/mês`;
               valor = produtos[chave].preco;
            }
            size.querySelector('span').innerHTML = produtos[chave].qtdPage[sizeIndex];
        });

        cs('.produtoInfo-size').forEach((size, sizeIndex) => {
            pages = 1;


            size.addEventListener('click', (e) => {
                pages = 1;
                c('.produtoInfo-qtd').innerHTML = pages;

                c('.produtoInfo-size.selected').classList.remove('selected');
                size.classList.add('selected');
                c('.produtoInfo--precoAtual').innerHTML = `R$` + produtos[chave].preco.toFixed(2) + ` /mês`;
                valor = produtos[chave].preco;
               
            });

        });


        c('.produtoInfo-qtdMais').addEventListener('click', addProduto)

        c('.produtoInfo-qtdMenos').addEventListener('click', removeProduto)





        setTimeout(() => {
            c('.produtoWindowArea').style.opacity = 1;
        }, 150);
    });
    c('.produtos-area').append(produtosItem);
});





function fecharDiv() {
    setTimeout(() => {
        c('.produtoWindowArea').style.display = 'none';
    }, 400);
    c('.produtoWindowArea').style.opacity = 0;

}

c('.produtoInfo-addButton').addEventListener('click', (e) => {

    let size = parseInt(c('.produtoInfo-size.selected').getAttribute('data-key'));
    let identificacao = produtos[chave].id + '@' + size;
    let localID = carrinho.findIndex((item => item.identificacao == identificacao));

    if (localID > -1) {
        carrinho[localID] += pages;
    } else {
        carrinho.push({
            id: produtos[chave].id,
            nome: produtos[chave].nome,
            resolucao: size,
            páginas: pages,
            preço: valor,
            identificacao,
        })

    }
    
    fecharDiv();
    openCarrinho();
});

c('.menu-open').addEventListener('click', () => {
    openCarrinho();
});

c('.menu-close').addEventListener('click', () => {

    c('aside').classList.remove('show');
});

function openCarrinho() {
    if (carrinho.length > 0) {

        c('aside').classList.add('show');
        c('.carrinho').innerHTML = '';
        let subtotal = 0;
        carrinho.map((itemCar, index) => {
            let prodItem = produtos.find((itemDB) => itemDB.id == itemCar.id);
            
            subtotal += itemCar.preço 
            desconto = (subtotal * 5) / 100
            const total = (subtotal - desconto)

            let carItem = c('.produtos .carrinho-itens').cloneNode(true);

            c('.menu-open span').innerHTML = carrinho.length;
            carItem.querySelector('img').src = prodItem.img;
            carItem.querySelector('.carrinho-itens--nome').innerHTML = prodItem.nome;
            carItem.querySelector('.carrinho-itens--tipo').innerHTML = `${prodItem.qtdPage[itemCar.resolucao]}`;
            carItem.querySelector('.carrinho-itens--valor').innerHTML = itemCar.páginas;
           
            c('.carrinho').append(carItem);
      
        c('.carrinho-subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}/mês`;
        c('.carrinho-desconto span:last-child').innerHTML = `-R$ ${desconto.toFixed(2)}`;
        c('.carrinho-total span:last-child').innerHTML = `R$ ${total.toFixed(2)}/mês`;
    
        c(".carrinho-finalizar").addEventListener('click', ()=>{

                window.location.href = `../php/index.php?valor_enviado=${total}&nome_enviado=${prodItem.nome}`;
            });
      
        });
    } else {
        c('aside').classList.remove('show');
    }
   
}

