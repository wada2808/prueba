/ **
 * Dependencias del módulo.
 * /

var  express  =  requiere ( 'express' ), 
	http  =  requiere ( 'http' ),
	ruta  =  requiere ( 'path' );

var  App  =  express ();

aplicación . configurar ( función ()  {
	aplicación . set ( "puerto" ,  proceso . env . PUERTO  | |  3000 );

	aplicación . uso ( express . favicon ());
	aplicación . uso ( express . logger ( 'dev' ));
	aplicación . uso ( express . bodyParser ());
	aplicación . uso ( express . methodOverride ());

	aplicación . uso ( express . estática ( camino . unirse ( __dirname ,  "público" )));
});


aplicación . configurar ( el "desarrollo" ,  la función ()  {
	aplicación . uso ( express . errorHandler ());
});



var  servidor  =  http . createServer ( aplicación ). escuchar ( aplicación . llegar ( "puerto" ),  la función ()  {
	consola . log ( "Server Express escucha en el puerto"  +  aplicación . llegar ( "puerto" ));
});