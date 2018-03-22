function inscription() {
  if (document.form3.pseudo.value == "" && document.form3.mdp.value == "" && document.form3.mdp_confirm.value == "" && document.form3.email.value == "" && document.form3.email_confirm.value == "") {
    alert('Remplir les champs');
  }
  else if (document.form3.pseudo.value == "") {
    alert('Remplir le champ du pseudo');
  }
  else if (document.form3.mdp.value == "") {
    alert('Remplir le champ du mot de passe');
  }
  else if (document.form3.mdp_confirm.value == "") {
    alert('Remplir le champ de confirmation du mot de passe');
  }
  else if (document.form3.email.value == "") {
    alert('Remplir le champ du mail');
  }
  else if (document.form3.email_confirm.value == "") {
    alert('Remplir le champ de confirmation du mail');
  }
  else {
    window.location = 'file:///D:/IMIE/ProjetGroupe/WebSocket/index.html';
    return false
  }
}

function connexion() {
  if (document.form2.pseudo.value == "" && document.form2.pseudo.value == "") {
    alert('Remplir les champs');
  }
  else if (document.form2.pseudo.value == "") {
    alert('Remplir le champ du pseudo');
  }
  else if (document.form2.mdp.value == "") {
    alert('Remplir le champ du mot de passe');
  }
  else {
    window.location = 'file:///D:/IMIE/ProjetGroupe/WebSocket/index.html';
    return false
  }
}

/*&& document.form2.mdp.value > 8 && document.form2.mdp.value < 20*/
