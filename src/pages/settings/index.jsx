import React from "react";
import SettingsData from "../../components/settings/SettingsData";
import { useDispatch, useSelector } from "react-redux";
import { settings_color } from "../../helpers/settings";
import { setColor } from "../../redux/slices/colorSlice";
function Settings() {
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state);
  function colorHandler(color) {
    dispatch(setColor(color))
  }
  return (
    <div className="settings">
      <div className="settings__row">
        <div className="settings__title">
          <span className="settings__title-text">Preferencias</span>
          <span className="settings__title-desc">
            Configura la página, tema oscuro/claro y automatiza el checkout
          </span>
        </div>
        <SettingsData />
        <div className="settings__theme">
          <span className="settings__theme-title">Tema oscuro</span>
          <span className="settings__theme-desc">
            Alterna entre el tema claro y oscuro, así puedes cuidar tu vista
          </span>
          <div className="settings__theme__switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="settings__colors">
            {
              settings_color.map((item) => {
                return (
                  <button key={item.id} onClick={() => colorHandler(item.color)} className={`settings__color ${item.color} ${color.color === item.color ? "active" : ""}`}>{item.color}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
