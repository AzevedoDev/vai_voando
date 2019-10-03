$(document).ready(() => {

  // scroll event
  $('.nav-item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset - 0
    }, 500);
  });

  // masks
  var cepColeta = $('#cepColeta');
  cepColeta.mask('00000-000', {
    reverse: true
  });

  var cepEntrega = $('#cepEntrega');
  cepEntrega.mask('00000-000', {
    reverse: true
  });



  let telefone = $('#telefone').on('focusout', function () {
    let value = $(this).val();
    console.log(value.length);

    if (value.length < 11) {
      return telefone.mask('(00) 0000-0000'), telefone;
    } else {
      return telefone.mask('(00) 00000-0000'), telefone;
    }
  });


  $('#butao').on('click', function () {
    console.log('qualquerporra');
    var formulario = $('#formulario');
    var formData = {};
    $(formulario).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    console.log("formData: " + formData);
    $.ajax({
      type: 'POST',
      url: '/sendMail',
      dataType: 'json',
      data: formData,
      success: function (data, status, jqXHR) {
        console.log('sucesso');
      },
      error: function (jqXHR, status) {
        console.log('erro ' + jqXHR + ' - ' + status);
      }
    })
  })
});