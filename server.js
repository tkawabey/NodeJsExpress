// expressモジュールを使用する宣言を行います
const express = require("express");
// expressのインスタンスを作成
const app = express();
// userルーターを使用できるように宣言します。
const userRouter = require("./routes/user");
// 静的なファイルを扱うように、命令文を記載します
// publicフォルダの下に静的なHTMLファイルがあることを示しています
//app.use(express.static("public")); <- app.set("view engine", "ejs"); を」使用するので、コメントアウト

// テンプレートエンジンを使用して、クライアントに返すHTMLテンプレート
// を使用することを宣言します
// 今回は ejs というテンプレートエンジンを使用します。
app.set("view engine", "ejs");

// リッスンを開始するポート番号
const PORT = 8000;


// ミドルウェアを作成します
// ミドルウェアとは、クライアントからのリクエストをサーバー
// で処理する前に、差し込む関数等をミドルウェアと言います。
// server.js 内で　app.use("logger"); と宣言する必要があります。
function logger(req, res, next) {
    console.log(req.originalUrl);
    // サイクルを止めず、次の命令を実行するように命令します。
    next();
}
app.use(logger);


// サーバーを指定したポートでリッスン開始します。
app.listen(PORT, () => {
    console.log("listening on 8000");
} );

// エンドポイントにアクセスがあった場合、views/index.ejs
// の情報をクライアントに表示します.
app.get("/", (req, res) => {
    // textに指定した情報を、views/index.ejs内の
    // <%= text %>に書き換えて表示します
    res.render("index", { text: "こんにちは" });
  });


//ルーティングを行います。/userで始まるものは、
// ./routes/user.jsで処理するようにします。
app.use("/user", userRouter);

