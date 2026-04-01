# Instant Gaming Auto Giveaway & Close 🎮

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.5.0-blue.svg)](https://github.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate)

Ce script Userscript permet d'automatiser entièrement la participation aux concours (giveaways) sur Instant-Gaming.com. Il clique sur le bouton de participation, valide les réseaux sociaux pour gagner des points bonus, et **ferme l'onglet automatiquement** une fois terminé.

## ✨ Fonctionnalités

* **Participation Automatique** : Clique sur le bouton "Participer" dès le chargement de la page.
* **Bonus Sociaux** : Simule les clics sur les boutons Discord, Instagram, X (Twitter), etc., pour maximiser vos chances (+1800 pts).
* **Auto-Fermeture** : Ferme l'onglet actif dès que le message "Merci pour ta participation" apparaît.
* **Gestion de Liste** : Commandes intégrées pour ouvrir tous les liens de concours depuis une liste.
* **Affiliation automatique** : Ajoute un paramètre partenaire pour soutenir le projet.

## 🚀 Installation

1.  Installez une extension de gestion de scripts (type **Tampermonkey**, **Violentmonkey** ou **Greasemonkey**) sur votre navigateur.
2.  Cliquez sur le lien direct du script (ou créez un "Nouveau script" et collez le code) :
    * [Installer via GitHub Raw](https://raw.githubusercontent.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate/refs/heads/main/participate.user.js)
3.  Rendez-vous sur une page de concours Instant Gaming, le script s'occupe du reste !

## 🛠️ Utilisation

Le script ajoute des commandes spécifiques dans le menu de votre gestionnaire de scripts (Tampermonkey) :

* **Participate & Close** : Lance la séquence de participation et ferme l'onglet.
* **Socials** : Clique uniquement sur les bonus sociaux restants.
* **Giveaway List** : Récupère les liens des concours présents.
* **Open ALL Links** : Ouvre tous les concours détectés dans de nouveaux onglets.

## 📝 Code Source

Le script est écrit en JavaScript pur et utilise les métadonnées standard pour la compatibilité.

```javascript
// Les fonctionnalités principales incluent :
// - document.querySelector pour détecter les boutons
// - window.close() pour le nettoyage des onglets
// - setTimeout pour gérer les délais de chargement d'IG
