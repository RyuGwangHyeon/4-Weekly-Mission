const inputEmail=document.querySelector("#email");
const inputPassword=document.querySelector("#password");
const inputCheckPassword=document.querySelector("#check-password");
const emailErrorMessage=document.querySelector(".email-error-message");
const passwordErrorMessage=document.querySelector(".password-error-message");
const checkPasswordErrorMessage=document.querySelector(".check-password-error-message");
const form=document.querySelector(".sign-form");

function correctEmail(e){
    let emailRegex=new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    
    if(e.target.value===""){
        emailErrorMessage.textContent="이메일을 입력해 주세요.";
        emailErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else if(!emailRegex.test(e.target.value)){
        emailErrorMessage.textContent="올바른 이메일 주소가 아닙니다.";
        emailErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else if(e.target.value==="test@codeit.com"){
        emailErrorMessage.textContent="이미 사용 중인 이메일입니다.";
        emailErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else{
        emailErrorMessage.textContent="";
        emailErrorMessage.classList.remove("error-text");
        e.target.classList.remove("error-box");
    }
}

function correctPassword(e){
    let passwordRegex=new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

    if(e.target.value === ""){
        passwordErrorMessage.textContent="비밀번호를 입력해 주세요.";
        passwordErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else if(!passwordRegex.test(e.target.value)){
        passwordErrorMessage.textContent="비밀번호는 영문, 숫자 조합8자 이상 입력해 주세요.";
        passwordErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else{
        passwordErrorMessage.textContent="";
        passwordErrorMessage.classList.remove("error-text");
        e.target.classList.remove("error-box");
    }
}

function correctCheckPassword(e){

    if(e.target.value !== inputPassword.value){
        checkPasswordErrorMessage.textContent="비밀번호가 일치하지 않아요.";
        checkPasswordErrorMessage.classList.add("error-text");
        e.target.classList.add("error-box");
    }else{
        checkPasswordErrorMessage.textContent="";
        checkPasswordErrorMessage.classList.remove("error-text");
        e.target.classList.remove("error-box");
    }
}

function handleSubmitButton(e){
    e.preventDefault();
    if(inputEmail.value === "test@codeit.com" && inputPassword.value === "codeit101"){
        location.href="/folder.html";
    }else if(emailErrorMessage.textContent=="" && passwordErrorMessage.textContent=="" && checkPasswordErrorMessage.textContent==""){
        location.href="/folder.html";
    }else{
        emailErrorMessage.textContent = "이메일을 확인해 주세요.";
        emailErrorMessage.classList.add("error-text");
        inputEmail.classList.add("error-box");
        passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
        passwordErrorMessage.classList.add("error-text");
        inputPassword.classList.add("error-box");
    }
}
inputCheckPassword.addEventListener('focusout',correctCheckPassword);
inputEmail.addEventListener('focusout',correctEmail);
inputPassword.addEventListener('focusout',correctPassword);
form.addEventListener('submit',handleSubmitButton);