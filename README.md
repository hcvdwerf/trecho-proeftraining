# Trecho proeftraining

Standalone campagnepagina voor hardloopvereniging Trecho, gebaseerd op het aangeleverde flyerontwerp. Aanmelden verloopt via het bestaande Trecho-contactformulier. De bestaande Trecho-website is niet gewijzigd.

Site: https://hcvdwerf.github.io/trecho-proeftraining/

## Bijwerken

Bewerk `site/index.html` en `site/styles.css`, voer `npm run build` uit en commit de wijzigingen, inclusief `docs/`. GitHub Pages publiceert automatisch vanuit de map `docs` op de branch `main`.

Geen npm-afhankelijkheden, JavaScript, database of tracking in de website. Barlow-lettertypes zijn lokaal opgeslagen. Het originele Trecho-logo komt van de bestaande verenigingswebsite. Tijd en locatie uit de flyer: dinsdag 20:00–21:30, atletiekbaan Prinses Amaliapark. Controleer deze inhoud bij veranderingen in het trainingsaanbod.

Voor een eigen domein: bouw opnieuw met `SITE_URL=https://jouw-domein/ npm run build` en stel het domein in bij GitHub Pages.

GitHub Pages levert het HTTPS-certificaat. De Azure-specifieke header- en redirectconfiguratie is hier niet van toepassing. Canonical URL, sociale deelafbeelding, sitemap en assetpaden zijn aangepast aan het GitHub-projectpad.
