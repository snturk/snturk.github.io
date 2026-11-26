import { BlogPostModel } from './types';
import classes from './BlogPost.module.css';

type BlogPostProps = {
    blogPost: BlogPostModel;
    featured?: boolean;
};

const formatDate = (date: string) => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const BlogPost = ({ blogPost, featured }: BlogPostProps) => {
    const { title, link, tags, image, date } = blogPost;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`glass ${classes.card} ${featured ? classes.featured : ''}`}
        >
            <div className={classes.imageWrap}>
                <img className={classes.image} src={image} alt="" loading="lazy" />
            </div>
            <div className={classes.content}>
                {formatDate(date) && <span className={classes.date}>{formatDate(date)}</span>}
                <h3 className={classes.title}>{title}</h3>
                <div className={classes.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={classes.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default BlogPost;
