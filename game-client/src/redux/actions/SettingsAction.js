import types from "../constants";

const onChangeSettings = (data) => ({ type: types.CHANGE_SETTINGS, data });
const onChangeSettingsResponse = (data) => ({ type: types.CHANGE_SETTINGS_RESPONSE, data });
const onChangeSettingsError = (data) => ({ type: types.CHANGE_SETTINGS_ERROR, data });

export default {
  onChangeSettings,
  onChangeSettingsResponse,
  onChangeSettingsError
}
