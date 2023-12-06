// Charger les données depuis le fichier JSON
fetch('pieces-autos.json')
  .then(response => response.json())
  .then(data => {
    // Stocker les données dans le tableau pieces
    const pieces = data;

    // Référence aux objets JSON
    const article = pieces[0];

    // Ajout des éléments
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix <35 ?"$":"$$$"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";

    // Référence à la section "fiches" dans le DOM
    const sectionFiches = document.querySelector(".fiches");

    // Ajout des éléments à la section "fiches"
    sectionFiches.appendChild(imageElement);
    sectionFiches.appendChild(nomElement);
    sectionFiches.appendChild(prixElement);
    sectionFiches.appendChild(categorieElement);
  })
  .catch(error => console.error('Erreur lors du chargement des données : ', error));
