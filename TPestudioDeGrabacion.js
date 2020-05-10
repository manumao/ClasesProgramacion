let ingresarnombre = prompt('please enter the name of the group')

let empezarSesion = prompt('press enter when the session has started', new Date())
let sesionTerminada = prompt('prees enter when the session has finished', new Date())
let IngresarFechaDeSesion = prompt('please enter the date of the session (month/date/year)', new Date())

let clientes = [
	
	cliente1 = {

		nombre: ingresarnombre,
		
		telefono: 1155702483, 
		
		registroDePagos: [200, 500, 150],
		
		sesionesDeGrabacion: [
			 sesion1 = {
			 	fecha: IngresarFechaDeSesion,//no se como hacer para que se muestre solamente dia/mes/año
				duracion:{
					empezo: empezarSesion,
					termino: sesionTerminada,
				} , //va a ser el calculo de la diferencia entre la hora cuando se termino la sesion y cuando se empezo --> me NaN
			

			}]

	}]

	
	 let pagoDeSesion = cliente1.registroDePagos.push(prompt('registro de pago de una sesion'))
	 pagoDeSesion = parseInt(pagoDeSesion)




	console.log(cliente1)
