var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isnumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
    window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var tot = valores.length 
        var maior = valores[0]
        var menor = valores[0]
        soma = 0
        média = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }        
        média = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${média.toFixed(2)}</strong>.</p>`
    }
}