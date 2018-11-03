$(document).ready(()=>{
    
    // scroll event
    $('.nav-item a[href^="#"]').on('click', function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
          targetOffset = $(id).offset().top
    
        $('html, body').animate({
          scrollTop: targetOffset - 0
        }, 500)
      })

      // masks
      var cepColeta = $('#cepColeta')
      cepColeta.mask('00000-000', {reverse : true})

      var cepEntrega = $('#cepEntrega')
      cepEntrega.mask('00000-000', {reverse : true})
      
      
      
        var telefone = $('#telefone').on('focusout', function () {
            var value = $(this).val()
            console.log(value.length)

              if (value.length < 11) {
                return telefone.mask('(00) 0000-0000')
              }else{
                return telefone.mask('(00) 00000-0000')
              }
        })
        

         
          
      

})


