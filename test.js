

let planning = { weekKey: "",
     data:  {
    Lundi: {"Petit-déjeuner": ["test"], "Déjeuner": [], "Diner": ["test"]}, 
     Mardi: {"Petit-déjeuner": ["mardi"], "Déjeuner": [], "Diner": []}, 
     Mercredi: {"Petit-déjeuner": [], "Déjeuner": [], "Diner": []}, 
     Jeudi: {"Petit-déjeuner": [], "Déjeuner": [], "Diner": []},
      Vendredi: {"Petit-déjeuner": [], "Déjeuner": [], "Diner": []},
       Samedi: {"Petit-déjeuner": [], "Déjeuner": [], "Diner": []},
     Dimanche: {"Petit-déjeuner": [], "Déjeuner": [], "Diner": []}, 
    } 
};
Object.entries(planning.data).forEach(([key,value ])=> {
    console.log(key , value);
    
    
});