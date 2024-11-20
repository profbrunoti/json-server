const url = 'http://localhost:3000/pessoas';

fetch(url)
	.then(response => response.json())
	.then(data => {
		// Seleciona o tbody da tabela
		const tabelaCorpo = document.getElementById('tabela-corpo');
		
		// Para cada objeto do JSON, cria uma linha na tabela
        // Creat Element é um método do objeto document que cria um novo elemento HTML
		data.forEach(obj => {
			const tr = document.createElement('tr');
			const tdId = document.createElement('td');
			const tdNome = document.createElement('td');
			const tdIdade = document.createElement('td');
			const cpf = document.createElement('td');
			
			// Preenche as células da linha com as informações desejadas
			tdId.innerText = obj.id;
			tdNome.innerText = obj.nome;
			tdIdade.innerText = obj.idade;
			cpf.innerText = obj.cpf;
			
            //Metodo que adiciona a nova linha como um elemento filho do corpo da tabela
			tr.appendChild(tdId);
			tr.appendChild(tdNome);
			tr.appendChild(tdIdade);
			tr.appendChild(cpf);
			tabelaCorpo.appendChild(tr);
		});
	})
	
