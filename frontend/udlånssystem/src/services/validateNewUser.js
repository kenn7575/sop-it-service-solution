export default function validate( user ) {
    // Validering af email. Skal indeholde @ og .
    if ( user.mail.indexOf( '@' ) === -1 || user.mail.indexOf( '.' ) === -1 ) {
        return "Email skal indeholde @ og .";
    }

    return null
}