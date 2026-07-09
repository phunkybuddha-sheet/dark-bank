const banco = [

{
nome:"Bernardo Montes",
id:"001",
sexo:"Masculino",
cep:"23000-000",
data:"24/09/2010",
estado:"Rio de Janeiro",
status:"Ativo"
},

{
nome:"Lorenzo Silva",
id:"002",
sexo:"Masculino",
cep:"21000-000",
data:"12/02/2010",
estado:"Rio de Janeiro",
status:"Ativo"
},

{
nome:"Marcos Souza",
id:"003",
sexo:"Masculino",
cep:"22000-000",
data:"03/08/2009",
estado:"Rio de Janeiro",
status:"Inativo"
},

{
nome:"Ana Clara",
id:"004",
sexo:"Feminino",
cep:"28000-000",
data:"18/06/2008",
estado:"Rio de Janeiro",
status:"Ativo"
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