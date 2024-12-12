# Test Technique Angular

Ce projet est une mini-application réalisée en Angular, dans le cadre d'un test technique. L'application permet à un utilisateur d'incrémenter/décrémenter un compteur. Lorsque le compteur atteint 10 ou -10 la couleur de l'arrière-plan change. Enfin, il est possible de réinitialiser le compteur à zéro en entrant sa date de naissance.

## Description

Le projet permet d'incrémenter/décrémenter un compteur tout en gardant l'information visible lorsque l'utilisateur change de page et de garder l'information en local lorsque la page est rechagée. Deux branches sont disponibles. La branche `master` avec des observables et une approche asynchrone. Puis la `synchrone` pour un exemple simplifié.

## Installation

1. Clonez ce dépôt sur votre machine locale.

   ```bash
   git clone https://github.com/cberkane/ng-technical-test.git
   ```

2. Installez les dépendances du projet via npm.

   ```bash
   cd ng-technical-test
   npm install
   ```

3. Démarrez l'application localement en utilisant Angular CLI.

   ```bash
   ng serve
   ```
