import React from 'react'
import SettingsData from '../../components/settings/SettingsData';

function Settings() {
  return (
    <div className="settings">
      <div className="settings__row">
        <div className="settings__title">
          <span className="settings__title-text">Preferencias</span>
          <span className="settings__title-desc">Configura la página, tema oscuro/claro y automatiza el checkout</span>
        </div>
        <SettingsData/>
        <div className="settings__theme">
          <span className="settings__theme-title">Tema oscuro</span>
          <span className="settings__theme-desc">Alterna entre el tema claro y oscuro, así puedes cuidar tu vista</span>
          <div className="settings__theme__switch">
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;