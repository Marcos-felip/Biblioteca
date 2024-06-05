// Inicializa a biblioteca com alguns livros predefinidos
let biblioteca = [
    { titulo: 'Python Básico', autor: 'João Silva', ano: 2021, emprestado: false },
    { titulo: 'Algoritmos Avançados', autor: 'Maria Souza', ano: 2019, emprestado: false},
    { titulo:'Machine Learning', autor: '"Carlos Pereira', ano: 2020, emprestado: false, },
    { titulo: 'Data Science', autor: 'Ana Martins', ano: 2018, emprestado: false, },
    { titulo: 'Deeo Learning', autor: 'Pedro Alves', ano: 2022, emprestado: false, }
  ];
  
  // Função para adicionar um livro
  function adicionar_livro(titulo, autor, ano) {
    if (biblioteca.some(livro => livro.titulo.toLowerCase() === titulo.toLowerCase())) {
        alert('O livro já existe na biblioteca.');
        return;
    }
    
    const livro = {
        titulo,
        autor,
        ano,
        emprestado: false,
        //usuario: null
    };
    
    biblioteca.push(livro);
    listar_livros();
    alert('Livro adicionado com sucesso!');
  }
  
  // Função para buscar livro pelo título e exibir informações em um alert
  function buscar_livro(titulo) {
    const livro = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (livro) {
        alert(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}\nEmprestado: ${livro.emprestado ? 'Sim' : 'Não'}`);
    } else {
        alert('Livro não encontrado.');
    }
  }
  
  // Função para listar todos os livros
  function listar_livros() {
    const tbody = document.querySelector('#listar-livros tbody');
    tbody.innerHTML = '';
  
    biblioteca.forEach(livro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
            <td>${livro.emprestado ? 'Emprestado' : 'Disponível'}</td>
        `;
        tbody.appendChild(tr);
    });
  }
  
  // Função para emprestar um livro
  function emprestar_livro(titulo) {
    const livro = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (livro && !livro.emprestado) {
        livro.emprestado = true;
        listar_livros();
        alert('Livro emprestado com sucesso!');
    } else {
        alert('Livro não encontrado ou já emprestado.');
    }
  }
  
  
  // Função para devolver um livro
  function devolver_livro(titulo) {
    const livro = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (livro && livro.emprestado) {
        livro.emprestado = false;
        livro.usuario = null;
        listar_livros();
        alert('Livro devolvido com sucesso!');
    } else {
        alert('Livro não encontrado ou não está emprestado.');
    }
  }
  
  // Event listeners para os formulários
  document.querySelector('#adicionar-livro form').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    adicionar_livro(titulo, autor, ano);
  });
  
  document.querySelector('#buscar-livro form').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('buscar').value;
    buscar_livro(titulo);
  });
  
  // Event listener para o formulário de emprestar livro
  document.querySelector('#emprestar-livro form').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo-emprestar').value;
    emprestar_livro(titulo);
  });
  
  document.querySelector('#devolver-livro form').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo-devolver').value;
    devolver_livro(titulo);
  });
  
  // Inicializa a lista de livros na página
  listar_livros();
  