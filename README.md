# microCMS & Static Forms & Next.js (static export)のサンプル

## 設計方法（暫定）
### src/
- `const/`
  - 定数の置き場所
- `components/`
  - DOM層
    - `doms.tsx`
    - 宣言的UIを記述する
    - データをPropsで受け取る
    - 出し分け以外のロジックはContainer層で書く
      - props => ()とすることにより、余計なロジックが入らないようにする
  - Style層
    - `styles.tsx`
      - CSSを記述する
      - styledの引数でコンポーネントを受け取る
      - CSSのネストが深くなったらコンポーネント分割を検討する
- `container/`
    - Container層
      - `container.tsx`
      - スタイルコンポーネントにデータを渡す
      - ロジックが必要な場合は、ここに記述する
- `gateways/`
  - Gateway層
    - APIを叩いたりする層
- `store/`
  - store層
    - ReduxのActionsとReducersを置く
    - 上記を`index.tsx`でまとめて、`store`とする
- `pages/`
  - Next.jsのルーティング対応
- `style/`
  - `override.css`
    - リセットCSSを補填するCSS
    - 開発では使わない！
      - スタイルは`styles.tsx`に書く
- `hooks/`
  - `hooks`系の処理をまとめておく
    - `useXXXX`の命名規則

### 環境変数
`.env.sample`の`.sample`部分を削除し、以下の情報を入力

```
X_API_KEY={microCMSのAPIキー}
MAIL_KEY={Static Formsのアクセスキー}
MY_MAIL={メールフォームのアドレス}
API_URL={APIのURL}
```