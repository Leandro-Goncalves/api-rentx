# Cadastrao de carro

**RF**
Deve ser possivel cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padão, com disponibilidade.
O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar os carros disponiveis.
Deve ser possível listar os carros disponiveis pelo nome da categories
Deve ser possível listar os carros disponiveis pelo nome da marca
Deve ser possível listar os carros disponiveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload de arquivos

**RN**
o usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 1 hora.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto apra o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto apra o mesmo carro.
