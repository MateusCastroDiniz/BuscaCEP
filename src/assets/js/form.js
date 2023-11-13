// $(document).ready(()=>{
// const form = $('#form')
// const nome = $('#input-nome')
// const email = $('#input-email')
// const cep = $('#input-cep')
// const cpf = $('#input-cpf')
// const mensagem = $('#mensagem')
// const notNull = [$('.notNull')]


// const IsEmpty = (elem) => {
//     elem.val().length < 1 ? $(`#mensagem-${elem.attr('name')}`).text(`O campo ${elem.attr('name')} não pode ficar vazio`) : $(`#mensagem-${elem.attr('name')}`).text('')

//     let condicao = elem.val().length < 1 ? true : false
//     return condicao

// }

// const validaEmail = (elem) => {
//     !elem.val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? $(`#mensagem-${elem.attr('name')}`).text(`Insira um email válido`) : $(`#mensagem-${elem.attr('name')}`).text('')

//     let condicao = elem.val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false
//     return condicao
// }

// const validaTEL = (elem) => {
//     !elem.val().match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? $(`#mensagem-${elem.attr('name')}`).text( `Insira um número de telefone válido`) : $(`#mensagem-${elem.attr('name')}`).text( '')

//     let condicao = elem.val().match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? true : false
//     return condicao
// }

// const validaCEP = (elem) => {
//     !elem.val().match(/\d{5}-\d{3}/) ? $(`#mensagem-${elem.attr('name')}`).text( `Insira um CEP válido`) : $(`#mensagem-${elem.attr('name')}`).text( '')

//     let condicao = elem.val().match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? true : false
//     if(!condicao){
//         $('#input-cep').addClass('invalid')
//     }else{
//         $('#input-cep').removeClass('invalid')
//     }
//     return condicao

// }

// const validaCPF = (elem) => {
//     !elem.val().match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/) ? $(`#mensagem-${elem.name}`).text( `Insira um CPF válido`) : $(`#mensagem-${elem.name}`).text('')

//     let condicao = elem.val().match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/) ? true : false
//     return condicao 
// }



// $('#enviarForm').on('click', (event) => {
//     event.preventDefault();
//     event.stopPropagation()

//     notNull.map(field => {
//         if(IsEmpty(field)){
//            return false 
//         }else{
//             form.submit()
//         }
//     })

// })

// const inputValidate = [$('.input-validate')]

// Array.from(inputValidate).map(field => {

//     field.on('focusout', e => {
//         e.preventDefault()
//         e.stopPropagation()

//         if (!IsEmpty(field)) {
//             if (field.attr('name') == 'email') {
//                 validaEmail(field)
//             }
//             if (field.attr('name') == 'cpf') {
//                 validaCPF(field)
//             }

//             if (field.attr('name') == 'cep') {
//                 validaCEP(field)
//             }

//             if (field.attr('name') == 'tel') {
//                 validaTEL(field)
//             }
//         }

//     })
// })



// })

$(document).ready(function () {

    const btnToastFreq = $('#btn-toast-freq')
    const toastFreq = $('#toast-freq')

    if (btnToastFreq) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastFreq)
        btnToastFreq.on('click', () => {
            toastBootstrap.show()
            toastFreq.addClass("d-flex")
        })
    }

    // function ValidaCampo(campo) {

    //     let camposValidos = true

    //     const regexNome = /\d|,/g

    //     let textoAlerta = campo.parent().find('.text-muted')


    //     if (campo.val() == "") {
    //         campo.addClass('invalido')
    //         textoAlerta.fadeIn()
    //         camposValidos = false
    //         return camposValidos
    //     } else {

    //         if (campo.attr('name') == 'nome') {
    //             if (campo.val().length < 2 || campo.val().match(regexNome)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }
    //         if (campo.attr('name') == 'email') {
    //             if (!campo.val().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }

    //         if (campo.attr('name') == 'cep') {
    //             if (!campo.val().match(/\d{5}-\d{3}/)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos

    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }
    //         if (campo.attr('name') == 'cpf') {
    //             if (!campo.val().match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }

    //         campo.removeClass('invalido')
    //         textoAlerta.hide()
    //         camposValidos = true
    //         return camposValidos
    //     }
    // }

    // function ValidaCampo(campo) {

    //     let camposValidos = true

    //     const regexNome = /\d|,/g

    //     let textoAlerta = campo.parent().find('.text-muted')


    //     if (campo.val() == "") {
    //         campo.addClass('invalido')
    //         textoAlerta.fadeIn()
    //         camposValidos = false
    //         return camposValidos
    //     } else {

    //         if (campo.attr('name') == 'nome') {
    //             if (campo.val().length < 2 || campo.val().match(regexNome)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }
    //         if (campo.attr('name') == 'email') {
    //             if (!campo.val().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }

    //         if (campo.attr('name') == 'cep') {
    //             if (!campo.val().match(/\d{5}-\d{3}/)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos

    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }
    //         if (campo.attr('name') == 'cpf') {
    //             if (!campo.val().match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)) {
    //                 campo.addClass('invalido')
    //                 textoAlerta.show()
    //                 camposValidos = false
    //                 return camposValidos
    //             } else {
    //                 campo.removeClass('invalido')
    //                 textoAlerta.hide()
    //                 camposValidos = true
    //                 return camposValidos
    //             }
    //         }

    //         campo.removeClass('invalido')
    //         textoAlerta.hide()
    //         camposValidos = true
    //         return camposValidos
    //     }
    // }


    function validarCampo(campo) {
        const regexNome = /\d|,/g;
        let camposValidos = true;
        let textoAlerta = campo.parent().find('.text-muted');

        if (campo.val() == "") {
            campo.addClass('invalido')
            textoAlerta.fadeIn()
            camposValidos = false
            return camposValidos
        } else {

            if (campo.attr('name') == 'nome') {
                if (campo.val().length < 2 || campo.val().match(regexNome)) {
                    campo.addClass('invalido')
                    textoAlerta.show()
                    camposValidos = false
                    return camposValidos
                } else {
                    campo.removeClass('invalido')
                    textoAlerta.hide()
                    camposValidos = true
                    return camposValidos
                }
            }
            if (campo.attr('name') == 'email') {
                if (!campo.val().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)) {
                    campo.addClass('invalido')
                    textoAlerta.show()
                    camposValidos = false
                    return camposValidos
                } else {
                    campo.removeClass('invalido')
                    textoAlerta.hide()
                    camposValidos = true
                    return camposValidos
                }
            }

            if (campo.attr('name') == 'cep') {
                if (!campo.val().match(/\d{5}-\d{3}/)) {
                    campo.addClass('invalido')
                    textoAlerta.show()
                    camposValidos = false
                    return camposValidos

                } else {
                    campo.removeClass('invalido')
                    textoAlerta.hide()
                    camposValidos = true
                    return camposValidos
                }
            }
            if (campo.attr('name') == 'cpf') {
                if (!campo.val().match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)) {
                    campo.addClass('invalido')
                    textoAlerta.show()
                    camposValidos = false
                    return camposValidos
                } else {
                    campo.removeClass('invalido')
                    textoAlerta.hide()
                    camposValidos = true
                    return camposValidos
                }
            }

            campo.removeClass('invalido')
            textoAlerta.hide()
            camposValidos = true
            return camposValidos
        }
    }

    $('.obrigatorio').on('blur', function (e) {
        e.preventDefault();
        validarCampo($(this));
    });

    $('#fone-input').on('keyup', function () {
        $(this).mask('(00)00000-0000');
    });

    $('#cep-input').on('keyup', function () {
        $(this).mask('00000-000');
    });

    $('#cpf-input').on('keyup', function () {
        $(this).mask('000.000.000-00');
    });

    // $('#form-cadastro').on('submit', function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     let camposValidos = true;

    //     $('.obrigatorio').each(function () {
    //         if (!validarCampo($(this))) {
    //             camposValidos = false;
    //         }
    //     });

    //     if (camposValidos) {
    //         const btnSalvardados = $('#btn-salvar-dados');
    //         const toastSalvarDados = $('#toast-salvar-dados');

    //         if (btnSalvardados) {
    //             const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSalvarDados);
    //             btnSalvardados.on('click', () => {
    //                 toastBootstrap.show();
    //                 toastSalvarDados.addClass("d-flex");
    //             });
    //         }

    //         // Envie o formulário
    //         console.log('Formulário enviado');
    //     }
    // });

    function exibirErro(campo) {
        let textoAlerta = campo.parent().find('.text-muted');
        campo.addClass('invalido');
        textoAlerta.fadeIn();
    }

    $('#btn-salvar-dados').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let camposValidos = true;

        $('.obrigatorio').each(function () {
            if (!validarCampo($(this))) {
                camposValidos = false;
                exibirErro($(this));
            }
        });

        if (camposValidos) {
            const btnSalvardados = $('#btn-salvar-dados');
            const toastSalvarDados = $('#toast-salvar-dados');

            if (btnSalvardados) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSalvarDados);
                btnSalvardados.on('click', () => {
                    toastBootstrap.show();
                    toastSalvarDados.addClass("d-flex");
                });
            }

            // Envie o formulário
            $('#form-cadastro').submit()
            console.log('Formulário enviado');
        }
    });
});