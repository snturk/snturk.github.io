import Links from '../links/Links';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <header className={`glass ${classes.profile}`}>
            <img
                className={classes.avatar}
                src="https://avatars.githubusercontent.com/u/41567673?v=4"
                alt="Muratcan Şentürk"
            />
            <div className={classes.body}>
                <h1 className={classes.name}>Muratcan Şentürk</h1>
                <p className={classes.role}>Software Engineer</p>
                <p className={classes.description}>
                    Hello 🙋🏽, I’m a software engineer. This is my personal website where you can find projects and
                    latest blog post links.
                </p>
                <Links />
            </div>
        </header>
    );
};

export default Profile;
