import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    typografy: {
      type: string;
    };
    colors: {
      main: string;
      secondary: string;
    };
  }
}
