import BlogPostsIntro from "../../components/BlogPostsIntro";
import BlogPostsList from "../../components/BlogPostsList";
import scss from "./LatestBlogPosts.module.scss";

export default function LatestBlogPosts() {
  return (
    <div
      className={`uk-container uk-container-large ${scss.wrapper}`}
      id="blog"
    >
      <BlogPostsIntro />
      <BlogPostsList />
    </div>
  );
}
