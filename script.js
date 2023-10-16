function validarFormulario() {
    var nomeAluno = document.getElementById("nomeAluno").value;
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    var nomeMae = document.getElementById("nomeMae").value;
    var nomePai = document.getElementById("nomePai").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var atividades = document.querySelectorAll("input[name='atividades']:checked");

    // Validar campos obrigatórios
    if (nomeAluno === "" || dia === "" || mes === "" || ano === "" || nomeMae === "" || nomePai === "" || telefone === "" || email === "") {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return false;
    }

    // Validar data de nascimento
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 2003 || ano > 2015) {
        alert("Data de nascimento inválida.");
        return false;
    }

    // Validar formato de e-mail
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("E-mail inválido.");
        return false;
    }

    // Validar DDD válido (lista fictícia para exemplo)
    var dddsValidos = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68","69","71","73","74","75","77","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"];
    var ddd = telefone.substring(0, 2);
    if (dddsValidos.indexOf(ddd) === -1) {
        alert("DDD inválido.");
        return false;
    }

    // Validar número máximo de atividades extracurriculares
    if (atividades.length > 3) {
        alert("Apenas até 3 atividades extracurriculares podem ser selecionadas.");
        return false;
    }

    // Em caso de sucesso
    alert("Cadastro realizado com sucesso!");
    return true;
}

function isValidDate(d, m, a) {
    var data = new Date(a, m - 1, d);
    return data.getDate() == d && data.getMonth() == m - 1 && data.getFullYear() == a;
}