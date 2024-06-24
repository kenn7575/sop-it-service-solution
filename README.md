# sop-database-design
### welcome to the sop it service solution repo.
🙌 Let's make the Helpdesk System great again!

## Status
📆 This project is in early development - Expect constant changes.

## Dokumentation
📝 The [wiki](https://github.com/kenn7575/sop-it-service-solution/wiki) page on this repo holds the dokumentation for this project.

## Discussions
🤙 The [discussions](https://github.com/kenn7575/sop-it-service-solution/discussions) page is the perfect place to chat with others about the project and propose new ideas or features.

📣 Here you can also find [announcements](https://github.com/kenn7575/sop-it-service-solution/discussions/categories/announcements) about the projects progress.

## Issues
The [issues](https://github.com/kenn7575/sop-it-service-solution/issues) page is for anyone to repport
- 👾 Bugs (obvious errors that compromises the systems functionality).
- 😲 Concerns (other types of errors that compromises the systems efficiency or usability).

# For Developers 
👨‍💻 This project is developed in [Visual Studio Code](https://code.visualstudio.com/) using [PHP](https://www.php.net/), [MariaDB](https://mariadb.org/) and [Svelte](https://svelte.dev/)

For specific information about the technologies version, see the [package.json](https://github.com/kenn7575/sop-it-service-solution/blob/main/frontend/udl%C3%A5nssystem/package.json) for the front-end and the [composer.json](https://github.com/kenn7575/sop-it-service-solution/blob/main/backend/composer.lock) for the back-end.

### Structure
The project is divided into 2 main folders:
- [backend](https://github.com/kenn7575/sop-it-service-solution/tree/main/backend) - The back-end of the project.
- [frontend](https://github.com/kenn7575/sop-it-service-solution/tree/main/frontend) - The front-end of the project.

## Installation
### Prerequisites
- [PHP](https://www.php.net/) - The back-end is written in PHP, so you need to have PHP installed on your machine.
- [MariaDB](https://mariadb.org/) - The database is written in MariaDB, so you need to have MariaDB installed on your machine.
- [Composer](https://getcomposer.org/) - The back-end uses composer to manage dependencies, so you need to have composer installed on your machine.
- [Node.js](https://nodejs.org/en/) - The front-end uses Node.js to manage dependencies, so you need to have Node.js installed on your machine.
- [Git](https://git-scm.com/) - The project uses Git for version control, so you need to have Git installed on your machine.
- [Visual Studio Code](https://code.visualstudio.com/) - The project uses Visual Studio Code as the IDE, so you need to have Visual Studio Code installed on your machine.

### Environment variables
The project uses environment variables to store sensitive information. You need to create a .env file in the root folder of the project. The in the root folder we've included a .env.example file that you can use as a template. The .env file should look something like this:
```
ADMIN_USERNAME="" ; Database username
ADMIN_PASSWORD="" ; Database password

AUTH="" ; Auth key
FRONTEND_URL="http://localhost:5173" ; Frontend URL

LDAP_HOST= ; LDAP host - IP or domain name - format: x.x.x.x
LDAP_USERNAME="" ; LDAP username
LDAP_PASSWORD="" ; LDAP password
LDAP_PORT=389 ; LDAP port
LDAP_BASE_DN="" ; LDAP base DN
LDAP_TIMEOUT=5
LDAP_USERS="" ; LDAP users DN
LDAP_ADMINS="" ; LDAP admins DN

MAIL_MAILER="mailjet" ; Mail driver
MAIL_HOST="in-v3.mailjet.com" ; Mail host
MAIL_PORT=587 ; Mail port
MAIL_USERNAME="" ; Mail username
MAIL_PASSWORD="" ; Mail password
MAIL_ENCRYPTION="tls" ; Mail encryption
MAIL_FROM_ADDRESS="" ; Mail from address
MAIL_FROM_NAME="Udlånsystemets automatiske mail" ; Mail from name
```

### Setup
#### Clone the repository
1. Inside VS code, press "Clone git repository..." and paste the link to this repository. [repo link](https://github.com/kenn7575/sop-it-service-solution).
> You need to have Git installed on your machine for this to work.
2. Choose a location on your machine to clone the repository to.
3. Open the folder in VS code.

#### Run the back-end
1. Open a terminal in VS code in the root folder
2. run ```npm run serve``` to start the back-end server.
> You need to have Node.js installed on your machine for this to work.

#### install front-end dependencies
1. Open a terminal in VS code in the root folder.
2. run ```npm run i``` to install the front-end dependencies.
> You need to have Node.js installed on your machine for this to work.
> Watch out for errors in the terminal. If that happend try reading the error message and resolve the issue. If you can't resolve the issue, try googling the error message or ask for help.

#### Run the front-end
1. I a root folder terminal , run ```npm run dev``` to start the front-end server. Or run ```npm run host``` to expose the front-end server to the network.
2. Open the link provided in the terminal to open the front-end in your browser. Typically its gonna be hosted on http://localhost:5173.
> You need to have Node.js installed on your machine for this to work. If the front-end crashes or behaves strangely, the back-end is probably not running or the .env file has incorrect values.

## Congratulations!
🎉 You now have the project up and running on your machine (hopefully). You can now start developing on the project.

## Contributing guidelines
👍 We welcome contributions to this project. To contribute, speak with a teacher and get the necessary permissions and secret variables. Then follow the steps below.

### Fork the repository
1. Press the fork button in the top right corner of the repository page.
2. Choose your account as the destination for the fork.
3. Clone the forked repository to your machine.
> You need to have Git installed on your machine for this to work.

### Create a new branch
1. Open the repository in VS code.
2. Press the branch button in the bottom left corner of VS code.
3. Press the plus button to create a new branch.
4. Name the branch after the feature you are working on.

### Make changes
1. Make the changes you want to make.
2. Commit the changes to the branch you created.
3. Push the changes to the branch you created.

### Create a pull request
1. Go to the original repository page.
2. Press the pull request button.
3. Press the new pull request button.
4. Choose your forked repository as the source.
5. Choose the branch you created as the source branch.
6. Choose the main branch as the destination branch.
7. Press the create pull request button.
8. Name the pull request after the feature you are working on.
9. Press the create pull request button.

### Wait for approval
1. Wait for a teacher or the repo owner to approve your pull request.
2. If the pull request is not approved, make the necessary changes and push them to the branch you created.

### Merge the pull request
1. When the pull request is approved, press the merge pull request button.
2. Press the confirm merge button.
3. Press the delete branch button.

### Congratulations!
🎉 You have now contributed to the project. Your changes will be included in the next release of the project.

### Rules for contributing
#### ❌ **Danger zone** ❌
- YOU ARE NOT ALLOWED TO PUSH SENSITIVE INFORMATION TO THE REPOSITORY.
- YOU MUST NEVER EDIT GITHUB ACTIONS BECAUSE THEY CAN ACCESS SENSITIVE INFORMATION.
- YOU MUST NEVER PUBLISH THE .env FILE TO THE REPOSITORY.

#### ⚠️ **Branch security** ⚠️
- You are not allowed to push directly to the main branch.
- You are not allowed to merge your own pull requests.
- You are not allowed to approve your own pull requests.

If any of these rules are broken, the pull request will be denied. If you break rules of the danger zone, you will be permenly banned from this repo.
