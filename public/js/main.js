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
      
      
      
        let telefone = $('#telefone').on('focusout', function () {
            let value = $(this).val()
            console.log(value.length)

              if (value.length < 11) {
                return telefone.mask('(00) 0000-0000'),telefone
              }else{
                return telefone.mask('(00) 00000-0000'),telefone
              }
        })

        let completeName = $('#completeName').on('focusout', function(){
          let name = $(this).val()
          return name
        })
        let emailContato = $('#emailContato').on('focusout', function(){
          let email = $(this).val()
          return email
        })
        let endColeta = $('#endColeta').on('focusout', function(){
          let endColeta = $(this).val()
          return endColeta
        })
        let cepColeta = $('#cepColeta').on('focusout', function(){
          let cepColeta = $(this).val()
          return cepColeta
        })
        let endEntrega = $('#endEntrega').on('focusout', function(){
          let endEntrega = $(this).val()
          return endEntrega
        })
        let cepEntrega = $('#cepEntrega').on('focusout', function(){
          let cepEntrega = $(this).val()
          return cepEntrega
        })
        

         
          
      

})


