var userData;
var iduser;
$("#registerButton").on("click", function () {
  var userReg = {
    nombre: $("#nombreUsuarioR").val(),
    apellido: $("#apellidoUsuario").val(),
    email: $("#emailU").val(),
    password: $("#userPassR").val(),
    nacimiento: $("#nacimiento").val()
  };
        
  $.ajax({
    type: "POST",
    url: "/api/registerUser",
    data: userReg,
    success: function (req) {
      if(req.mensaje=="USUARIO"){
        console.log("USUARIO EQUIVOCADO");
        alert("Usuario ya Existe favor de hacer login con su usuario");
        url = "/login";
          $(location).attr("href", url); 

  
      };
      if(req.mensaje=="AGREGADO"){
        console.log("USUARIO REGISTRADO");
        alert("USUARIO REGISTRADO CORRECTAMENTE FAVOR DE HACER LOGIN");
        url = "/login";
          $(location).attr("href", url); 
  
  
      }
      console.log(msg.mensaje);
      
  }
  });


console.log("FUNCION BOTON");

});

