const banco = [
{
nome:"Henrique Ribeiro",
id:"1109",
sexo:"Masculino",
cep:"RJ",
data:"11/09",
estado:"Vivo",
status:"Ativo"
},

{
nome:"Ronaldo Trindade Martins",
id:"1606",
sexo:"Masculino",
cep:"RJ",
data:"16/06",
estado:"???",
status:"Desparecido"
},

{
nome:"Miquel Souza Ribeiro",
id:"2101",
sexo:"Masculino",
cep:"RJ",
data:"21/01",
estado:"Morto",
status:"Inativo"
},


{
nome:"João Gabriel Solido ",
id:"0412",
sexo:"Feminino",
cep:"MG",
data:"04/12",
estado:"Vivo",
status:"Procurado"

},
{
nome:"Caíque Maranhão de Azevedo",
id:"2001",
sexo:"Não Identificado",
cep:"RJ",
data:"20/01",
estado:"Vivo",
status:"Ativo"

},
{
nome:"Larissa Moreira ",
id:"1110",
sexo:"Feminino",
cep:"RJ",
data:"1110",
estado:"Viva",
status:"Ativa"

},
{
nome:"Caroline Roberts",
id:"1955",
sexo:"Feminino",
cep:"UK",
data:"??/??/1955",
estado:"Morta",
status:"Inativa"

},
{
nome:"Michael Jackson ",
id:"2908",
sexo:"Masculino",
cep:"IN/USA",
data:"29/08",
estado:"Vivo",
status:"Procurado"

},
{
nome:"Jessica Mulla Mendes ",
id:"1008",
sexo:"Feminino",
cep:"RJ",
data:"10/08",
estado:"Viva",
status:"Ativa"

},

{
nome:"Epstein Gomes Microsoft ",
id:"1008",
sexo:"Masculino",
cep:"BA",
data:"1008",
estado:"Vivo",
status:"Procurado"

},
{
nome:"Jair Messias Bolsonaro ",
id:"2103",
sexo:"Maculino",
cep:"SP",
data:"21/03",
estado:"Morto",
status:"Inativo"

},
{
nome:"Luíz Inácio Lula da Silva",
id:"2710",
sexo:"Feminino",
cep:"PE",
data:"27/10",
estado:"Morto",
status:"Inativo"

},
{
nome:"Isabella de Carvalho",
id:"1410",
sexo:"Feminino",
cep:"RJ",
data:"14/10",
estado:"Viva",
status:"Ativa"

},

{
nome:"Emanuelle Dutra ",
id:"1207",
sexo:"Feminino",
cep:"RJ",
data:"12/07",
estado:"Viva",
status:"Ativa"

}

];

const pesquisa = document.getElementById("pesquisa");

const sugestoes = document.getElementById("sugestoes");

const resultado = document.getElementById("resultado");

pesquisa.addEventListener("input",()=>{

let texto = pesquisa.value.toLowerCase();

sugestoes.innerHTML="";

resultado.style.display="none";

if(texto=="") return;

const encontrados = banco.filter(pessoa=>

pessoa.nome.toLowerCase().includes(texto)

);

encontrados.forEach(pessoa=>{

const div=document.createElement("div");

div.className="sugestao";

div.innerText=pessoa.nome;

div.onclick=()=>mostrarPessoa(pessoa);

sugestoes.appendChild(div);

});

});

function mostrarPessoa(pessoa){

pesquisa.value=pessoa.nome;

sugestoes.innerHTML="";

resultado.style.display="block";

resultado.innerHTML=`

<div class="info"><span>Nome:</span> ${pessoa.nome}</div>

<div class="info"><span>ID:</span> ${pessoa.id}</div>

<div class="info"><span>Sexo:</span> ${pessoa.sexo}</div>

<div class="info"><span>CEP:</span> ${pessoa.cep}</div>

<div class="info"><span>Data:</span> ${pessoa.data}</div>

<div class="info"><span>Estado:</span> ${pessoa.estado}</div>

<div class="info"><span>Status:</span> ${pessoa.status}</div>

`;

}

document.addEventListener("click",(e)=>{

if(!e.target.closest(".pesquisa")){

sugestoes.innerHTML="";

}

});
