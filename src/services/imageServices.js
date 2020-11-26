import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';

const getPermissions = async (permissionTypes) => {
  await Promise.all(permissionTypes.map(async (type) => Permission.askAsync(type)));
}

export const selectFromCameraRoll = async () => {

};

export const takePhoto = async () => {
  await getPermissions([Permission.camera])
}
