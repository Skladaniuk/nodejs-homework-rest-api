const createVerifyEmail = (email,verificationToken ) => {

    const mail = {
        to:email,
        subject: ' Підтвердження реєстрації на сайті',
        html: `<a target = '_blank href = 'http://localhost:3000/api/auth/verify/${verificationToken}'> Натисніть для підтвердження </a>`
    }


    return mail

}

module.exports = createVerifyEmail