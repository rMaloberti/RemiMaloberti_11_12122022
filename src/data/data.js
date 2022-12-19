export async function getLogements() {
  const logements = require('./logements.json');

  return logements;
}

export async function getLogement(id) {
  const logements = await getLogements();

  const logement =  logements.filter((logement) => logement.id === id)[0];

  return logement;
}
