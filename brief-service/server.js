const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Brief-Service lancé sur http://localhost:${PORT}`);
});   
