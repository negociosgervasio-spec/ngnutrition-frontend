// generate-env.js
const fs = require('fs');

// Pega a variável de ambiente da Vercel, ou usa um valor padrão (útil para testes locais)
const apiUrl = process.env.API_URL || "http://localhost:3000";

// O conteúdo que será escrito no seu config.js
const content = `window.env = { API_URL: "${apiUrl}" };`;

// Cria/Sobrescreve o arquivo config.js
fs.writeFileSync('./config.js', content);

console.log('Arquivo config.js gerado com sucesso!');