import { LoginSocialFacebook, LoginSocialInstagram } from 'reactjs-social-login'
import { FacebookLoginButton, InstagramLoginButton } from 'react-social-login-buttons'


export default function FaceBookLogin({ setPage }) {
    return (
        <LoginSocialFacebook
            appId='246860718248950'
            onResolve={(res) => {
                console.log(res.data.accessToken)
                setPage('home')
            }}
            onReject={(res) => {
                console.log(res)
            }}
            scope='instagram_basic,pages_show_list,pages_read_engagement,email'
            >

            <FacebookLoginButton></FacebookLoginButton>
        </LoginSocialFacebook>
    )
}
