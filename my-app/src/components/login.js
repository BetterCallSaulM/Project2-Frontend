import { GoogleLogin } from 'react-google-login';

const clientId = '723447073505-5ph6b9rvg7h14j21tl0n5cua4dvl8cpa.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current User: ', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
