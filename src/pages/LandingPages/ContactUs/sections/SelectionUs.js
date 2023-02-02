
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import team1 from "assets/images/FOTO_Hector.jpg";
import team2 from "assets/images/FOTO_Nico.jpeg";

export default function SelectionUs() {
    return (
        <label type="text">
        <h6>Estoy buscando a...</h6>
        <select defaultValue="Quiero dirigirme a...">
        <option value="Quiero dirigirme a...">Quiero dirigirme a...</option>
          <option value="Héctor Vera">Héctor Vera</option>
          <option value="Nicolás Íñigo">Nicolás Íñigo</option>
        </select>
        </label>
    );
  }

                         
                          