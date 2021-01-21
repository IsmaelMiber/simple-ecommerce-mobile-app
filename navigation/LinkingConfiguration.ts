import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {},
      },
      ProductScreen: {
        path: "products/:id",
        parse: {
          id: (id: number) => id,
        },
      },
      NotFound: "*",
    },
  },
};
