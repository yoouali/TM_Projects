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

    BackGround.style.filter = `blur(${scale(Loading, 0, 100, 30, 0)}px)`
}

//map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}