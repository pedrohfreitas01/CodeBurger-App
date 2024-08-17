import axios from "axios";

const apiCodeBurger = axios.create({
  baseURL: "http://localhost:3000",
});

apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("codeburger:userData");
  if (userData) {
    // Extrai o token de autenticação dos dados armazenados
    const token = JSON.parse(userData).token;

    // Adiciona o token ao HEADER no backend de autorização da requisição
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiCodeBurger;
