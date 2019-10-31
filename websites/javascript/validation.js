$(document).ready(function() {
    $('#contactForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    row: '.col-sm-6',
                    validators: {
                        notEmpty: {
                            message: 'The name is required'
                        },
                        stringLength: {
                            min: 2,
                            max: 15,
                            message: 'The name must be more than 1 and less than 16 characters long'
                        },
                        regexp: {
                            regexp: /^([a-zA-Z\s]{2,15})$/,
                            message: 'The name can only consist of alphabetical characters'
                        }
                    }
                },
                lastName: {
                    row: '.col-xs-4',
                    validators: {
                        notEmpty: {
                            message: 'The last name is required'
                        },
                        stringLength: {
                            min: 2,
                            max: 15,
                            message: 'The last name must be more than 1 and less than 16 characters long'
                        },
                        regexp: {
                            regexp: /^([a-zA-Z\s]{2,15})$/,
                            message: 'The last name can only consist of alphabetical characters'
                        }
                    }
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {
                            message: 'The phone number is required'
                        },
                        regexp: {
                            message: 'The phone number can only contain the digits, spaces, -, (, ), + and .',
                            regexp: /^[0-9\s\-()+\.]+$/
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: 'The message is required'
                        },
                        stringLength: {
                            max: 700,
                            message: 'The message must be less than 700 characters long'
                        }
                    }
                }
            }
        })
});
