//https://www.eclipse.org/paho/clients/js/








	function prender(){	
	//alert("led off");
	console.log("Led encendido");
	message = new Paho.MQTT.Message("ENCENDER");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
	function apagar(){	
	//alert("led off");
	console.log("Led apagado");
	message = new Paho.MQTT.Message("APAGAR");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

	function prender1(){	
	//alert("led off");
	console.log("Planta 2 encendida");
	message = new Paho.MQTT.Message("ENCENDER2");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	document.getElementById("led1").innerHTML="Encendido";
	//document.getElementById("sensor").innerHTML="led off";
}
	function apagar1(){	
	//alert("led off");
	console.log("Planta 2 apagada");
	message = new Paho.MQTT.Message("APAGAR2");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	document.getElementById("led1").innerHTML="Apagado";
	//document.getElementById("sensor").innerHTML="led off";

}



	function prender2(){	
	//alert("led off");
	console.log("Planta 3 encendida");
	message = new Paho.MQTT.Message("ENCENDER3");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	document.getElementById("led2").innerHTML="Encendido";
	//document.getElementById("sensor").innerHTML="led off";
}
	function apagar2(){	
	//alert("led off");
	console.log("Planta 3 apagada");
	message = new Paho.MQTT.Message("APAGAR3");
    	message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    	client.send(message);
	document.getElementById("led2").innerHTML="Apagado";
	//document.getElementById("sensor").innerHTML="led off";

}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "israel.freire@espoch.edu.ec",
    password: "KIfl19.,",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("israel.freire@espoch.edu.ec/iothc");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "israel.freire@espoch.edu.ec/iothc";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  u=message.payloadString;
	  
	  
	  //var x = document.getElementById("myText").value;
	  if (u=="ENCENDER")
	  {
	console.log("Encendido");	
	document.getElementById("led").innerHTML="Encendido";
	  }
	  else 
		  if (u=="APAGAR")
		  {
			console.log("Apagado");
			document.getElementById("led").innerHTML="Apagado";
		  }


	 
	  
  }



  
