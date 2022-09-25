const express = require("express");

const app = express();

const PORT = 4000;

// 라우터 연결
const indexRouter = require("./routes/index");
const chatRouter = require("./routes/chat");
const loginRouter = require("./routes/login");
const addressRouter = require("./routes/address");
const registerRouter = require("./routes/register");

app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/chat", chatRouter);
app.use("/login", loginRouter);
app.use("/address", addressRouter);
app.use("/register", registerRouter);
app.listen(`${PORT}`, () => {
  console.log(`이 서버는 ${PORT}포트에서 실행중입니다`);
});
