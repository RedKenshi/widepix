1. Dans wamp, créer la base de données avec le script sql fourni dans le dossier sql à la racine du projet.

2. Installer les modules nodes nécessaires aux deux projets : 
	widepix>npm install
	widepix/db_service>npm install

3. Lancer le server node qui expose l'API (localhost:8081)
	widepix/db_service>node .\db_service.js
	
4. Lancer le projet reactjs
	widepix>npm run dev
	
5. L'application est disponible sur le port 8080 du loclahost