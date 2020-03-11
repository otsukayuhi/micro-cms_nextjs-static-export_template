# microCMS & Next.js (static export)のサンプル

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
  - Style層
- `container/`
    - Container層
      - `container.tsx`
      - スタイルコンポーネントにデータを渡す
      - ロジックが必要な場合は、ここに記述する
- `ducks層`
  - ducks層
    - ReduxのActionsとReducersを置く
- `pages/`
  - Next.jsのルーティング対応
- `style/`
  - `override.css`
    - リセットCSSを補填するCSS
- `types/`
  - CMSで取得したデータ関連の型がメイン
- `utils`
  - 共通の関数とかを置く

### data/
- microCMSで取得したデータをjsonにして置いておく
  - 各ページのデータは基本microCMS管理するつもり

### functions/
- CIとかで事前に実行しておきたい関数とかを置いておく