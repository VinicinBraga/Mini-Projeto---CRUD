const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "Renata",
  email: "vinicin@bragamatta.com.br",
  celular: "31987654321",
  cidade: "Belo Horizonte",
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

// CRUD - Create, Read, Update and Delete:
// CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

// Events
document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
