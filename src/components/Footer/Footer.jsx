function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ marginTop: "auto" }}>
      <p>
        &copy; <span id="year"></span> {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
