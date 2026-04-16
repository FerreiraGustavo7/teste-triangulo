function Classtriangulo() {
  var ladoA = Number(document.getElementById("ladoA").value);
  var ladoB = Number(document.getElementById("ladoB").value);
  var ladoC = Number(document.getElementById("ladoC").value);

  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
      document.getElementById("resultado").value = "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      document.getElementById("resultado").value = "Isósceles";
    } else {
      document.getElementById("resultado").value = "Escaleno";
    }
  } else {
    document.getElementById("resultado").value = "Não é um triângulo válido";
  }
}
