// **************** SWITCH-CASE *******************

console.log("-------------------------------------")
console.log(" ***** 4 Islem Hesap Makinasi ****** ")
console.log("-------------------------------------")
const s1 = Number(prompt("1.Sayiyi Giriniz:"))
const islem = prompt("Islemi giriniz: +,-,*, /")
const s2 = +prompt("2.Sayiyi Giriniz:")
let sonuc = 0
switch (islem) {
  case "+":
    sonuc = s1 + s2
    break
  case "-":
    sonuc = s1 - s2
    break
  case "*":
    sonuc = s1 * s2
    break
  case "/":
    sonuc = s1 / s2
    break
  default:
    alert("Yanlıs islem girisi")
    break
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`)




