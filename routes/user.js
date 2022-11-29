// expressモジュールを使用する宣言を行います
const express = require("express");
// ルーターの管理を行うための変数を準備します。
const router = express.Router();


// クライアントからは、エンドポイント　/user でアクセスされた場合に、
// コールバックがコールされます。
router.get("/", (req, res) => {
  res.send("ユーザーリスト");
});

// クライアントからは、エンドポイント　/user/info でアクセスされた場合に、
// コールバックがコールされます。
router.get("/info", (req, res) => {
  res.send("ユーザー情報");
});

// ユーザー名などランダムの文字のエンドポイント
router.route("/:id")

  .get((req, res) => {
    res.send(`${req.params.id}のお客様を取得しました`);
  })
  .put((req, res) => {
    res.send(`${req.params.id}のお客様を更新しました`);
  })
  .delete((req, res) => {
    res.send(`${req.params.id}のお客様を削除しました`);
  });


// ルーターをどこでも使用できるようにエクスポートします。
module.exports = router;