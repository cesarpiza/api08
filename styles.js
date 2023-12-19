import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const ITEM_WIDTH = width * 0.3;
export const GAP = width * 0.1 / 4;
export const SPACING = ITEM_WIDTH * 0.05;
export const IMAGE_WIDTH = ITEM_WIDTH;
export const IMAGE_HEIGHT = IMAGE_WIDTH + IMAGE_WIDTH / 2;
export const HEADER_HEIGHT = height * 0.16;
export const TEXTINPUT_WIDTH = width * 0.6;
export const BUTTON_COLOR = 'darkorange';