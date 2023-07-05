const Footer = () => {
  return (
    <footer>
      <aside>
        <h2
          className="uppercase text-3xl text-blue-700  cursor-pointer"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <b>Chatter</b>
        </h2>
      </aside>
      <aside>
        <ul>
          <li>
            <h2>Explore</h2>
          </li>
          <li>Community</li>
          <li>Trending Blogs</li>
          <li>Chatter for Teams</li>
        </ul>
      </aside>
      <aside>
        <ul>
          <li>
            <h2>Support</h2>
          </li>
          <li>Support Docs</li>
          <li>Join Slack</li>
          <li>Contact</li>
        </ul>
      </aside>
      <aside>
        <ul>
          <li>
            <h2>Official Blog</h2>
          </li>
          <li>Official blog</li>
          <li>Engineering blog</li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;
