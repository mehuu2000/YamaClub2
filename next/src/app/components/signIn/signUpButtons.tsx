import { Button } from "@mui/material";

type SignUpButtonProps = {
    setIsBlank: React.Dispatch<React.SetStateAction<boolean>>;
    setAuthSwitch: React.Dispatch<React.SetStateAction<boolean>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setPassWord: React.Dispatch<React.SetStateAction<string>>;
}

export function SignUpButton ({ setIsBlank, setAuthSwitch, setEmail, setUserName, setPassWord } : SignUpButtonProps) {

    const handleClick = () => {
        setIsBlank(false);
        setAuthSwitch(true);
        setEmail("");
        setUserName("");
        setPassWord("");
        console.log("サインアップを選択中。");
    }

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            sx={{
                width: '13rem',
                height: '4rem',
                borderRadius: '10px',
                backgroundColor: '#FF9B83',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '1.2rem', 
                '&:hover': {
                    backgroundColor: '#E0816D',
                },
            }}
        >
            サインアップ
        </Button>
    )
}


type SignUpPostButton = {
    setIsBlank: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    passWord: string;
    setPassWord: React.Dispatch<React.SetStateAction<string>>;
}

export function SignUpPostButton ({ setIsBlank, email, setEmail, userName, setUserName, passWord, setPassWord } : SignUpPostButton) {

    const handleClick = () => {
        if (email && userName && passWord) {
            setIsBlank(false);
            console.log("送信");
            console.log(`メールアドレス：${email}`);
            console.log(`ユーザー名：${userName}`);
            console.log(`パスワード：${passWord}`);
            setEmail("");
            setUserName("");
            setPassWord("");
        } else {
            setIsBlank(true);
        }
    }

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            sx={{
                width: '13rem',
                height: '4rem',
                borderRadius: '10px',
                backgroundColor: '#FF9B83',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                '&:hover': {
                    backgroundColor: 'rgba(224, 129, 109, 0.2)',
                    },
                }}
            >
            確定
        </Button>
    )
}