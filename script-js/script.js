function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os seus dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            res.innerHTML = `Detectamos um ${gênero} com ${idade} anos.`
            if (idade >=0 && idade < 13) {
                //criança
                img.setAttribute('src', 'imagens-ghibli/6.png')
                document.body.style.background = '#87CEEB'
            } else if (idade <21) {
                //jovem
                document.body.style.background = '#00BFFF'
                img.setAttribute('src', 'imagens-ghibli/2.png')
            } else if (idade <50) {
                //Adulto
                document.body.style.background = '#4169E1'
                img.setAttribute('src', 'imagens-ghibli/man.png')
            } else {
                //Velho
                img.setAttribute('src', 'imagens-ghibli/1.png')
                document.body.style.background = '#00008B'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            res.innerHTML = `Detectamos uma ${gênero} com ${idade} anos.`
            if (idade >=0 && idade < 13) {
                //criança
                document.body.style.background = '#FFB6C1'
                img.setAttribute('src', 'imagens-ghibli/5.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'imagens-ghibli/teenager.png')
                document.body.style.background = '#F08080'
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'imagens-ghibli/sophie.png')
                document.body.style.background = '#CD5C5C'
            } else {
                //Velho
                img.setAttribute('src', 'imagens-ghibli/woman.png')
                document.body.style.background = '#DC143C'
            }
        }
        res.appendChild(img)
    }

}
