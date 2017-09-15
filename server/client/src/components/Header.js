
class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Nav Link
          </a>
          <ul className="right">
            <li>
              <a href="#">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
