import Links from '../links/Links';
import avatar from '../../assets/avatar.jpg';
import classes from './Profile.module.css';

const Profile = () => (
    <header className={classes.hero}>
        <div className={classes.content}>
            <img className={classes.avatar} src={avatar} alt="Illustrated avatar of Muratcan Şentürk" />
            <span className={classes.tagline}>~/snturk · software engineer</span>
            <h1 className={classes.name}>
                Muratcan
                <br />
                <span>Şentürk</span>
            </h1>
            <p className={classes.bio}>
                &gt; I build software and write about architecture, Android and the craft of building things well.
            </p>
            <Links />
        </div>
    </header>
);

export default Profile;
