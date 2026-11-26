import Profile from '../components/profile/Profile';
import BlogPostStack from '../components/blogposts/BlogPostStack';
import classes from './Home.module.css';

const Home = () => (
    <div className={classes.page}>
        <Profile />
        <main>
            <div className={classes.head}>
                <h2 className={classes.title}>Selected writing</h2>
                <small className={classes.cmd}>$ ls ./posts --sort=date</small>
            </div>
            <BlogPostStack />
        </main>
        <footer className={classes.footer}>© {new Date().getFullYear()} Muratcan Şentürk</footer>
    </div>
);

export default Home;
