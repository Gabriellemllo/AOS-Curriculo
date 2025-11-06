AOS-Curriculo﻿
API REST Currículo — Node.js, Express & PostgreSQL﻿
Este projeto entrega uma API REST completa para currículos, desenvolvida em Node.js, Express.js, Sequelize e PostgreSQL (usando banco Neon), com CRUD de todas as entidades, deploy automatizado na Vercel e exemplos testados via Postman.﻿

🚀 Enunciado da tarefa﻿
Crie uma API REST com o Express + PostgreSQL que contenha as seções/entidades necessárias para um App de Currículo:﻿

CRUD completo das entidades﻿

Relacionamentos implementados﻿

Já deixar cadastrados no banco os currículos de duas pessoas﻿

Entregue:﻿

Link do código (GitHub)﻿: https://github.com/Gabriellemllo/AOS-Curriculo

Link do servidor (Vercel)﻿: https://aos-curriculo.vercel.app/

Arquivo do Postman com todos os testes (usando variáveis)﻿

Link de vídeo até 2 minutos usando o Postman﻿

🏗️ Entidades e Relacionamentos﻿

Usuário: informações pessoais do currículo﻿

Formação: histórico acadêmico vinculado ao usuário﻿

Experiência: experiências de trabalho/vivência vinculadas ao usuário﻿

Habilidade: lista de skills vinculadas ao usuário﻿
(Todos os CRUDs implementados, exemplos com duas pessoas já cadastradas)﻿

📂 Como rodar localmente﻿

bash
git clone https://github.com/Gabriellemllo/AOS-Curriculo.git  
npm install  
cp .env.example .env  
# no .env, insira sua DATABASE_URL de Neon  
npm start  
Acesse: http://localhost:3000﻿
Teste todas as rotas REST descritas abaixo.﻿

🌐 Link do deploy﻿
API pública: https://aos-curriculo.vercel.app/﻿

🎯 Testando com o Postman﻿
Importar o arquivo AOS-Curriculo.postman_collection.json﻿
Todas as rotas possuem variáveis para URL base e IDs usados em exemplos.﻿
Exemplos de testes prontos para: criar, listar, atualizar e remover usuário, formação, experiência, habilidade e testar relacionamentos.﻿

📺 Demonstração em vídeo﻿
Vídeo curto mostrando uso no Postman:﻿
Link para o vídeo no YouTube﻿

📎 Como está organizada a API﻿
Rotas principais:﻿

GET /usuarios — lista todos os usuários﻿

POST /usuarios — cria usuário﻿

PUT /usuarios/:id — edita usuário﻿

DELETE /usuarios/:id — remove usuário﻿

(semelhante para as outras entidades: /formacoes, /experiencias, /habilidades)﻿

Relacionamentos:﻿
Usuário pode ter várias formações, experiências e habilidades.﻿
Exemplo de resposta detalhada nas collections do Postman.﻿

📝 Detalhes técnicos﻿

Node.js, Express.js, Sequelize ORM﻿

PostgreSQL (Neon)﻿

Deploy na Vercel com vercel.json﻿

Variáveis de ambiente para conexão segura﻿

CRUD completo e relacionamento com exemplos prontos no banco﻿

