# asset-usage-version-catalog

素材カタログ・使用箇所・版管理 は、素材メタデータ、サムネイル、ターンテーブル、使用箇所、依存関係、大容量素材の版管理を1つの棚で扱う。

## 何を解決するか

素材が増えると、使用箇所、最新版、再利用候補が分かりにくい。

## 差別化

見た目、メタデータ、使用先、版を同じカードにまとめる。

## 公開先

- GitHub Release / BOOTH

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- CLI + catalog JSON の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/asset-usage-version-catalog-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AssetPipeline\created_idea_008_asset-usage-version-catalog`
- idea ZIP: `D:\AI\AssetPipeline\created_idea_008_asset-usage-version-catalog\idea_008_asset-usage-version-catalog.zip`
- PICKUP rank: 31
- Domain: AssetPipeline
