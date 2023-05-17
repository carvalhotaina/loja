function mudaImagem(cor)//a função pega a cor  e muda sua imagem usando if e else onde busca a imagem nos arquivos de midia 
 {
    var camisaImagem = document.getElementById("camisa-imagem");// pega o elemento pelo seu id marcado no form no caso foi a imagem da camiseta

    if (cor === "red") {
        camisaImagem.src = "midia/red-shirt.png";//pega o link da imagem da camisa atravez de src e mostra a tela
    } else if (cor === "blue") 
    {
        camisaImagem.src = "midia/blue-shirt.png";
    } 
    else if (cor === "green")
     {
        camisaImagem.src = "midia/green-shirt.png";
    }
}

function updateTamanho() //update do tamanho da camiseta 
{
    var tamanhoRange = document.getElementById("tamanho-range");//pega o valor da barra
    var tamanhoValor = document.getElementById("tamanho-valor");//guarda o valor escolhido para ser mostrado
    tamanhoValor.textContent = tamanhoRange.value;//mostra o valor da variavel em um texto para o usuario que seria o tamanho escolhido da sua camiseta
}

function updatePreco() //update do preço da camiseta escolhida
{
    var quantidadeInput = document.getElementById("quantidade-input");//pega a quantidade escolhida na nossa caixa 
    var preco = document.getElementById("preco");//pega o id de preço para depois mostrar o valor final

    var quantidade= quantidadeInput.value;// transforma o valor colocado de quantidade em uma variavel para fazer a conta
    var precobase = 50;//preço base da camiseta e 50
    var preco2=precobase*quantidade;//calculo o total da compra
    if (quantidade >= 4) //com o if sera verificado se a quantidade e maior ou igual a 4 para um desconto de 10%
    {  
        var desconto = preco2*0.1;//calcula o desconto de 10% em cima do valor total da compra
       
        preco.textContent =":$" + 45*quantidade+ " desconto: $"+desconto+"(10%)";// agora na saida para mostrar ao usuario colocamos o total de desconto que ele ganhou e o valor final com desconto em cima de 50 por unidade
    } 

    else //caso nao seja maior ou = a quatro ele apenas multiplicara os 20 reais da camiseta pela quantidade e mostrara o preço final
    {
        preco.textContent = "$" +preco2;
    }
}