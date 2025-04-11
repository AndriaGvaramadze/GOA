let celsius = prompt ("Enter temperature:")
if (celsius == "<10 && >=-40"){
    alert ("ტემპერატურა არის ცივი");
}else if (celsius == ">=10 && <=25"){
    alert ("ტემპერატურა არის ზომიერი");
}else if (celsius==">25 && <=40"){
    alert ("ტემპერატურა არის ცხელი");
}else{
    alert ("გთხოვთ შეიყვანოთ სწორი ტემპერატურა,მოცემული ტემპერატურის მიღება შეუძლებელია");
    
}
