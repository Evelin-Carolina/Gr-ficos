import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    const dadosLocais = localStorage.getItem('respostaRedesSociais')
    if (dadosLocais) {
        const dadosLocais = JSON.parse(dadosLocais)
        processarDados(dadosLocais)
        } else {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=reS23zaQC7gOwWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPoS6HS3jnJY9NNhhy_pNZj6prQdxDH3305Mro8vNm5_BxDLH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPvESZ9fvnAeFwqfIviacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOttwDBCyYnKQf6yIqqf8yOzNfccjP633C9VnHmUmPZvRBJY9z9JW9Md8uu6&lib=MCARABtBNBMHKiEwMeRap3j6V_G7SlGWF'
        const res = await fetch(url)
        const dados = await res.json()
        localStorage.setItem('respostaRedesSociais', JSON.stringify(dados))
        processarDados(dadosLocais)
}