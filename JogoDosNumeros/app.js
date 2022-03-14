const number = Math.floor(Math.random() * 11);
console.log(number);

let tentativas = 3;
function Chutar() {
    
    tentativas--;
    //let result = $('#resultado').val();
    let chute = $('#valor').val();

    if (chute == number) {
        $(function () {
            $("#dialogAcerto").dialog();
        });
        setTimeout(function () {
            window.location.reload();
        }, 3000);

    } else if (chute > number && tentativas > 0) {
        $(function () {
            $("#dialogErroMenor").dialog();
        });
        setTimeout(function () {
            $("#dialogErroMenor").dialog('close');
            $('#valor').val("");
        }, 3000);

    } else if (chute < number && tentativas > 0) {
        $(function () {
            $("#dialogErroMaior").dialog();
        });
        setTimeout(function () {
            $("#dialogErroMaior").dialog('close');
            $('#valor').val("");
        }, 3000);

    } else if (tentativas == 0) {
        $(function () {
            $("#dialogFinal").dialog();
            document.getElementById("number").innerHTML += "Suas vidas acabaram! O número correto era: " + number + ".";
            $('#valor').val("");
        });

        setTimeout(function () {
            window.location.reload();
            $('#valor').val("");
        }, 3000);
    }

}


