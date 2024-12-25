const seldate = document.querySelector("input")
const button = document.querySelector("button")
const Calculatedate = document.querySelector(".Calculatedate")

seldate.max = new Date().toISOString().split("T")[0]


function calender() {

    let date = seldate.value
    let newdate = new Date(date)
    let d1 = (newdate.getDate())
    let m1 = (newdate.getMonth() + 1)
    let y1 = (newdate.getFullYear())

    let todaydate = new Date()
    let d2 = (todaydate.getDate())
    let m2 = (todaydate.getMonth() + 1)
    let y2 = (todaydate.getFullYear())

    let finaldate, finalmonth, finalyear
    finalyear = y2 - y1
    if(m2>=m1){
        finalmonth = m2 - m1
    }else{
        finalyear--
        finalmonth = m2 + 12-m1
    }
    if(d2>=d1){
        finaldate = d2-d1
    }else{
        finalmonth--
        finaldate = new Date(y1,m1,0).getMonth() - d1 + d2
    }
    if(finalmonth<0){
        finalmonth = 11
        finalyear--  
    }
    Calculatedate.innerHTML = `${finaldate} Day, ${finalmonth} Month , ${finalyear} Years`
}

button.addEventListener("click", calender)
