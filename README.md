- monorepo

    建構方式可以參考：

    https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej


- react native native module

    使用 `create-react-native-module` 先產生 native module 的專案

    ```
    cd packages
    npx create-react-native-module Toast
    ```

    https://github.com/yosimasu/react-native-toast/commit/4faf55eafa22f35a0a087ae7b3b2d6e43ada6f64

- 新增 Dependencies

    https://github.com/yosimasu/react-native-toast/commit/b7452bad1063ce0242bbce2ebbfcbd26ebaa082f

    1. 將 react-native-toast 加入到 mobile 裡，讓 auto linking 可以掃到
    2. 將 react/react-native 的版本對齊，避免 monorepo 發生不可預期的錯誤(最好所有的 dependencies 都出現在最上層的 node_modules)


- 執行 cocoapod

    https://github.com/yosimasu/react-native-toast/commit/67854f1238e8852b974a5a8777d9a7ac664a60e8

    ```
    cd packages/mobile/ios; npx pod-install; cd -
    ```

- 使用 sampleMethod

    https://github.com/yosimasu/react-native-toast/commit/0ae0936f86c67f1a32e8f48503cc1bac96d435cb

- show
    - android

        https://github.com/yosimasu/react-native-toast/commit/9228f0533bc252cb9ff13c676231fd36a1accf8e

    - ios

        https://github.com/yosimasu/react-native-toast/commit/8ea83458ae81ae327a822deda80dcfbf4764c8ad




