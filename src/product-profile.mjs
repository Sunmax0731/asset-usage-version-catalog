export const productProfile = {
  "repository": "asset-usage-version-catalog",
  "title": "素材カタログ・使用箇所・版管理",
  "domain": "AssetPipeline",
  "hostApp": null,
  "rank": 31,
  "ideaNo": 8,
  "overview": "素材メタデータ、サムネイル、ターンテーブル、使用箇所、依存関係、大容量素材の版管理を1つの棚で扱う。",
  "problem": "素材が増えると、使用箇所、最新版、再利用候補が分かりにくい。",
  "differentiation": "見た目、メタデータ、使用先、版を同じカードにまとめる。",
  "publish": "GitHub Release / BOOTH",
  "surface": "CLI + catalog JSON",
  "entity": "asset catalog item",
  "requiredFields": [
    "id",
    "title",
    "source",
    "assetPath",
    "version",
    "usedBy",
    "owner",
    "acceptance"
  ],
  "warningField": "thumbnail",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
