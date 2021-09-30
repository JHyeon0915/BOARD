function onClickLoginBtn() {
    this.href.location = LoginPage;
}

function onClickSigninBtn() {

}

function Login() {
    return (
        <button onClick={onClickLoginBtn()}><a href="">로그인</a></button>
        <button onClick={onClickSigninBtn()}><a href="">회원가입</a></button>
    );
}

export default Login;