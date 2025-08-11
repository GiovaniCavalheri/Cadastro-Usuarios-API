import cors from 'cors'
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())

app.post("/users", async (request, response) => {
  await prisma.User.create({
    data: {
      email: request.body.email,
      name: request.body.name,
      age: request.body.age,
    },
  });

  response.status(201).json(request.body);
});

// -- Lista todos os usuários
app.get("/users", async (request, response) => {

  let users = []
  
  if(request.query) {
    users = await prisma.User.findMany({
      where: {
        name: request.query.name,
        email: request.query.email,
        age: request.query.age
      }
    }) 
  } else {
    users = await prisma.User.findMany()
  }

  response.status(200).json(users);
});

// -- Atualizar ou substituir um recurso
app.put("/users/:id", async (request, response) => {
  await prisma.User.update({
    where: {
      id: request.params.id,
    },
    data: {
      email: request.body.email,
      name: request.body.name,
      age: request.body.age,
    },
  });
});

// -- Deletar user
app.delete("/users/:id", async (request, response) => {
  await prisma.User.delete({
    where: {
      id: request.params.id,
    },
  });
  response.status(200).json({ message: "Usuário deletado com sucesso!" });
});

app.listen(3000);
