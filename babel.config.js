module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    ["module-resolver",

      {
        root: ".",
        alias: {
          "@common": "./src/common",
          "@components": "./src/components",
          "@locale": "./src/locale",
          "@routes": "./src/navigations/routes",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@action": "./src/store/actions",
          "@api": "./src/services",
          "@navigations": "./src/navigations",
          "@SVG": "./src/SVG"
        },
      },
    ]
  ],
};
