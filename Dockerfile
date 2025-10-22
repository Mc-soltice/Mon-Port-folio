# Étape 1 : Build avec Node.js 22.14.0
FROM node:22.14.0-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application Vite
RUN npm run build

# Étape 2 :  Exposer le port 80
EXPOSE 5173

# Lancer l'application
CMD ["npm", "run", "dev", "--", "host"]
