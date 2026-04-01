// ==UserScript==
// @name         Instant Gaming Auto Giveaway & Close
// @description  A script that automatically click on participate buttons and closes the tab when done.
// @version      1.5.0
// @author       enzomtp & guijheel
// @match        *://www.instant-gaming.com/*
// @match        *://github.com/guijheel/*
// @run-at       document-idle
// @grant        window.close
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    "use strict";

    // Ajout automatique de l'affiliation
    if (!document.location.href.includes('igr=jaha') && document.location.href.startsWith('https://www.instant-gaming.com/')) {
        const separator = document.location.href.includes('?') ? '&' : '?';
        document.location.href = document.location.href + separator + 'igr=jaha';
        return; // Stop l'exécution ici pour laisser la page recharger avec l'URL modifiée
    }

    function openInNewTab(url) {
        window.open(url, '_blank');
    }

    function socials() {
        const socialsButtons = document.querySelectorAll("a.button.reward.reward:not(.success)");
        socialsButtons.forEach((e) => e.click());

        // Attendre un peu après les réseaux sociaux pour vérifier si on peut fermer
        setTimeout(checkAndClose, 2000);
    }

    function participate() {
        const participateBtn = document.querySelector("button.button.validate");

        if (participateBtn !== null) {
            participateBtn.click();
            // Attendre que l'animation de participation se termine avant de cliquer sur les réseaux
            setTimeout(socials, 1500);
        } else {
            // Si le bouton n'existe pas, on est peut-être déjà inscrit
            socials();
        }
    }

    // Nouvelle fonction pour fermer l'onglet
    function checkAndClose() {
        const participationConfirmed = document.querySelector(".participated");
        // On vérifie si l'élément de succès est visible
        if (participationConfirmed && participationConfirmed.style.visibility !== "hidden") {
            console.log("Participation confirmée. Fermeture de l'onglet...");
            window.close();
        }
    }

    function giveawayList() {
        const list = document.querySelectorAll("a.giveaway");
        list.forEach((e) => e.click());
    }

    function openall() {
        document.querySelectorAll('#user-content-giveaways>a').forEach(a => { openInNewTab(a.href) });
    }

    // Enregistrement des commandes menu
    GM_registerMenuCommand("Participate & Close", participate);
    GM_registerMenuCommand("Socials", socials);
    GM_registerMenuCommand("Giveaway List", giveawayList);
    GM_registerMenuCommand("Open ALL Links", openall);

    // Lancement automatique au chargement
    if (document.location.href.includes('/giveaway/')) {
        participate();
    }

})();
