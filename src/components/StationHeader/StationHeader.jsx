import MenuButton from "../button/menuButton.jsx"
import Accessibility from "../accessibility/accessibility.jsx";

function StationHeader(props) {
  return (
    <div className="btnNav">
        <MenuButton>
          {props.nav}
        </MenuButton>
        <div className="accs">
          <Accessibility text={props.artifact} />
        </div>
      </div>
  );
}

export default StationHeader;
