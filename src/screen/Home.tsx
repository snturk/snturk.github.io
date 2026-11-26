import Profile from '../components/profile/Profile';
import BlogPostStack from '../components/blogposts/BlogPostStack';
import classes from './Home.module.css';

const Home = () => {
    return (
        <main className={classes.page}>
            <Profile />
            <section>
                <h2 className={classes.sectionTitle}>Latest writing</h2>
                <BlogPostStack />
            </section>
            <footer className={classes.footer}>© {new Date().getFullYear()} Muratcan Şentürk</footer>
        </main>
    );
};

export default Home;
