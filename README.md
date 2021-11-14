# Team-12-Gift-Portal: The Backend Scenario
Gift portal React + Spring app for Team 12

### Two Request Handlers (Controllers) being incorporated:
1) AdminController - Handles all admin requests
2) UserController - Handles all users' (other than the admin) requests

### Steps to deploy your Spring App as an Azure Web App - 
1) git clone https://github.com/unknown1924/team-12-gift-portal.git
2) Make sure that your project has mvn directory containing the maven-wrapper jar file
3) cd E:\Springboot\team-12-gift-portal\Giftshop (Go to your Maven project directory)
4)  ./mvnw clean package
5)  ./mvnw spring-boot:run (Run Spring boot application on your local machine from cmd)
6)  ./mvnw azure-webapp:deploy (Deploy Spring app to cloud)
7)  Copy the Azure App URL and paste in browser to view the results.
8)  To test a specific API:Hit [Your Azure App URL]/admin/showAllUsers in your browser
