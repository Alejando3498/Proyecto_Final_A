let iconos = []
let selecciones = []
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 0;
let tiemporegresivo = null

// Apuntando a documento HTML
let Mostrarmovimientos = document.getElementById('movimientos');
let Mostraraciertos = document.getElementById('aciertos');
let Mostrartiempo = document.getElementById('tiempo');

        generarTablero()

        function contarTiempo(){
            tiemporegresivo = setInterval(()=>{
                timer++;    
                Mostrartiempo.innerHTML = `Tiempo: ${timer} Segundos`;
            },1000);
        }

        function cargarIconos() {
            iconos = [
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_1.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_2.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_3.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_4.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_5.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_6.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_7.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_8.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_9.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_10.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_11.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_12.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_14.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_15.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_16.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',  
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_17.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_18.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_19.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_20.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_22.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_23.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_24.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_25.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_26.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_27.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_28.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
                '<img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/lengua-de-senas-abecedario-a-z/sticker_29.png?2a741d874b77f829d7fb3f292097d12c&d=200x200" width="80%">',
            ]
        }

        function generarTablero() {
            cargarIconos()
            let len = iconos.length
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            
            for (let i = 0; i < 54; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            if(temporizador == false){
                contarTiempo();
                temporizador = true;
            }

            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones)
                selecciones = []
                movimientos++;
                Mostrarmovimientos.innerHTML = `Movimientos: ${movimientos}`;
            }
        }

        function deseleccionar(selecciones) {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    aciertos++;
                    Mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;
                    trasera1.style.background = "rgba(18, 236, 37, 0.669)"
                    trasera2.style.background = "rgba(18, 236, 37, 0.669)"
                    if(aciertos == 27)
                    {
                        clearInterval(tiemporegresivo);
                        Mostraraciertos.innerHTML = `Aciertos: ${aciertos}😎`;
                        Mostrartiempo.innerHTML = `Terminate en ${+timer} Segundos Excelente ` ;
                        Mostrarmovimientos.innerHTML = `Tuviste: ${movimientos} movimientos muy bien 😄`;
                    }
                }
            }, 800);
        }