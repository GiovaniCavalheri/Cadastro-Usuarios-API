# 📌 API - Registro de Usuários

API REST desenvolvida com **Node.js**, **Express** e **Prisma** para integração com **MongoDB**.  
Faz parte do projeto full-stack de cadastro e listagem de usuários.

---

## 🛠 Tecnologias Utilizadas
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)


## 🔄 Fluxo da Aplicação

```mermaid
graph TD
    A[Frontend React] -->|Envia dados| B[API Node.js]
    B -->|Armazena| C[(MongoDB)]
    C -->|Retorna| B
    B -->|Responde| A
```

## ⚙️ Funcionalidades

- Criar usuários
- Listar usuários
- Filtrar usuários por **nome**, **email** ou **idade**
- Atualizar usuários
- Deletar usuários

<p align="center"> <a href="https://github.com/GiovaniCavalheri"> <img src="https://img.shields.io/badge/Desenvolvido%20com%20%E2%9D%A4%EF%B8%8F%20por-Giovani%20Cavalheri-800080?style=for-the-badge&logo=github" alt="Desenvolvido por Giovani Cavalheri"> </a> </p> 
