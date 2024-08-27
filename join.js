//문서가 로드되면 아이디 입력창으로 커서 이동
window.onload = function(){
    document.getElementById("uid").focus();
};
//checkbox 전체 선택
function checkAll(obj){
    let checkBoxs = document.getElementsByClassName("intr");
    for(let item of checkBoxs){
        item.checked = obj.checked;
    }
}
let msg = "";
function idCheck(){
    let uId = document.getElementById("uid");
    msg = document.getElementById("msgBox");
    if(uId.value == ""){
        msg.innerHTML = "아이디를 입력해주세요";
        uId.focus();
        return false;
    }else if(uId.value.length < 4){
        msg.innerHTML = "아이디는 4글자 이상 입력해주세요";
        uId.focus();
        return false;
    }
    return true;
}
let pass = "";
function passCheck(){
    pass = document.getElementById("upw");
    msg = document.getElementById("msgBox");
    if(pass.value == ""){
        msg.innerHTML = "비밀번호를 입력해주세요";
        pass.focus();
        return false;
    }else if(pass.value.length < 4){
        msg.innerHTML = "비밀번호는 4글자 이상 입력해주세요";
        pass.focus();
        return false;
    }
    return true;
}
function pwcCheck(){
    let pwCheck = document.getElementById("upwcheck");
    msg = document.getElementById("msgBox");
    if(pwCheck.value == ""){
        msg.innerHTML = "비밀번호 확인을 입력해주세요";
        pwCheck.focus();
        return false;
    }else if(pwCheck.value != pass.value){
        msg.innerHTML = "비밀번호가 일치하지 않습니다";
        pwCheck.focus();
        return false;
    }
    return true;
}
function nameCheck(){
    let userName = document.getElementById("uname");
    msg = document.getElementById("msgBox");
    if(userName.value == ""){
        msg.innerHTML = "이름을 입력해주세요";
        userName.focus();
        return false;
    }else if(userName.value.length < 2){
        msg.innerHTML = "이름은 2글자 이상 입력해주세요";
        userName.focus();
        return false;
    }
}
function mailCheck(){
    let mail = document.getElementById("uemail");
    msg = document.getElementById("msgBox");
    if(mail.value == ""){
        msg.innerHTML = "이메일을 입력해주세요";
        mail.focus();
        return false;
    }
}
function DoJoin(){
    //아이디 확인
    if(idCheck() == false) return false;
    //비밀번호 검사
    if(passCheck() == false) return false;
    //비밀번호 확인
    if(pwcCheck() == false) return false;
    //이름 2글자이상
    if(nameCheck() == false) return false;
    //이메일 입력확인
    if(mailCheck() == false) return false;
    if(confirm("회원가입을 진행하시겠습니까?") == false){
        return false;
    }
    return true;
}
function DoReset(){
    let msg = document.getElementById("msgBox");
    msg.innerHTML = "";
}