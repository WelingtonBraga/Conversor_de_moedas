const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const input = document.getElementById('placeholder')

const dolar = 5.2
const euro = 5.9
const bitconin = 145213.86

const convertValues = () => {
    const input_reais = document.getElementById("input-real").value
    const real_value_text = document.getElementById("real-value-text")
    const currency_value_text = document.getElementById("currency-value-text")

    real_value_text.innerHTML = input_reais

    real_value_text.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input_reais)

    if (select.value === "US$ Dolar americano") {
        currency_value_text.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input_reais / dolar)
    }

    if (select.value === "€ Euro") {
        currency_value_text.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input_reais / euro)
    }
    
    if (select.value === "Bitcoin") {
        currency_value_text.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input_reais / bitconin)
    }
}

changeCurrency = () => {
    const currency_name = document.getElementById("currency-name")
    const currency_img = document.getElementById("currenty-img")

    if (select.value === 'US$ Dolar americano') {
        currency_name.innerHTML = "Dolar americano"
        currency_img.src = "./assets/dolar_americano.svg"
    }

    if (select.value === '€ Euro') {
        currency_name.innerHTML = "Euro"
        currency_img.src = "./assets/euro.svg"
    }

    if (select.value === 'Bitcoin') {
        currency_name.innerHTML = "Bitcoin"
        currency_img.src = "./assets/bit_coin.png"
    }
    
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
