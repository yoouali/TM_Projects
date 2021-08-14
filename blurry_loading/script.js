const BlurPer = document.querySelector('.blur-per')
const BackGround = document.querySelector('.bg')

let = Loading = 0

let int = setInterval(Bluring, 30)

function Bluring() {
    Loading++

    if (Loading > 99)
    {
        clearInterval(int)
    }
    BlurPer.innerText = `${Loading}%`
    BlurPer.style.opacity = scale(Loading, 0, 100, 1, 0)
    console.log(Loading)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}