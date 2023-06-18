var interval = 5000; // 设定运行次数

for (var i = 0; i < interval; i++) {
//表示要启动的应用程序的包名
var packageName = "world.letsgo.booster.android.pro";
//表示要启动的应用程序的Activity名
var activityName = "world.letsgo.booster.android.pages.guide.GuideActivity";
//等待时间

// 清除应用数据
shell("pm clear " + packageName, true);

//启动应用程序+时间
launch(packageName);
sleep(1000);

//打开快连后直接跳转到登录界面
shell('am start world.letsgo.booster.android.pro/world.letsgo.booster.android.pages.account.UserLoginActivity', true)

//登录界面+读取路径文本
text("登录快连账户").waitFor()
setText(files.read("/storage/emulated/0/MT2/1.txt"))

//登录判断
let isRetry = false;
while (true) {
    try {
        // 点击登录按钮
        click("登录");
        sleep(1000);
        // 判断账户信息页是否存在
        if (text("账户信息").exists()) {
            // 如果存在，跳出循环
            break;
        } else {
            // 如果不存在，循环处理重试登录
            while (true) {
                // 判断是否出现“重试”对话框
                if (text("重试").exists()) {
                    isRetry = true;
                    // 如果出现“重试”，点击“重试”按钮，等待一会再判断
                    click("重试");
                    sleep(2000);
                    if (text("重试").exists()) {
                        // 如果出现“重试”按钮，点击“重试”按钮
                        click("重试");
                        sleep(2000);
                    }
                } else if (text("重新登录").exists()) { // 如果出现“重新登录”对话框
                    isRetry = false;
                    // 点击“重新登录”按钮，等待一会再判断
                    click("重新登录");
                    sleep(2000);
                    if (text("重新登录").exists()) {
                        // 如果出现“重新登录”按钮，点击“重新登录”按钮
                        click("重新登录");
                        sleep(2000);
                    }
                } else { // 如果未出现“重试”或“重新登录”，退出内层循环
                    break;
                }
                // 点击登录按钮
                click("登录");
                sleep(2000);
            }
        }
    } catch (e) {
        // 捕捉异常，输出异常信息并退出循环
        toast("登录失败：" + e);
        break;
    }
}
// 判断刚才是重新登录还是重试
if (isRetry) {
    // 在这里进行重试后的操作
} else {
    // 在这里进行重新登录后的操作
}

//屏幕滑动流程
sleep(1000)
console.log("等待1秒完成，准备屏幕向下滑动")

// 屏幕向下滑动
var startX = 607;
var startY = 1793;
var endX = 590;
var endY = 2400;
console.log("开始滑动屏幕：从 (" + startX + "," + startY + ") 到 (" + endX + "," + endY + ")")
swipe(startX, startY, endX, endY, 500);

//退出账号流程
sleep(2500)
id("ly_device_info").click()
sleep(300)
while (!click("移除设备"));
sleep(300)
while (!click("退出账户"));
sleep(300)
while (!click("仍然"));

//跳转到邀请码界面+填写+领取流程
sleep(500)
shell('am start world.letsgo.booster.android.pro/world.letsgo.booster.android.pages.home.referrer.VerifyReferrerIdActivity', true)
sleep(1000)
id("btn_verify_input_text").findOne()
setText("62516324")
text("62516324").findOne()
sleep(500)
id("btn_verify_input_text").findOne().click()

//跳转注册界面
sleep(1000)
shell('am start world.letsgo.booster.android.pro/world.letsgo.booster.android.pages.account.UserLoginActivity', true)
sleep(500)
while (!click("注册新的账户"));
text("注册快连账户").waitFor()

//以当前时间日期为文本
num = ("z" + +new Date());
setText(num)
files.write("/storage/emulated/0/MT2/1.txt", num)

//一个小判断
sleep(500)
var registerBtn = text("注册").findOne(2000);
if (registerBtn) {
    do {
        registerBtn.click();
        sleep(2000);
        var dialog = text("重新输入").findOne(2000);
        if (dialog) {
            dialog.click();
            sleep(2000);
            registerBtn = text("注册").findOne(2000);
        }
    } while (!registerBtn);
} else {
    toast("没有找到注册按钮");
}

text("账户信息").waitFor()

}