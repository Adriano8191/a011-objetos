const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const novoPokemon = {...pokemon1,
nome: 'Squirtle',
tipo: 'Agua'}
console.log(novoPokemon)

pokemon1.ataques = []
console.log(pokemon1)

pokemon1.ataques =  [{nome: 'Investida',
dano: 40,
tipo: 'Normal',
precisao: 100}]

console.log(pokemon1)

const novoPokemon1 = {...pokemon1, 
    nome: 'Squirtle',
    tipo: 'Agua'
}
console.log(novoPokemon1)
pokemon1.ataque = { Ataque: 'Folha Navalha',
    Dano: 45,
    Precisão: 100,
    Tipo:'Grama'} 
console.log(pokemon1)

novoPokemon.ataque = {Ataque: 'Jato de Agua',
Dano: 40,
Precisão: 100,
Tipo:'Agua'} 

console.log(novoPokemon)






